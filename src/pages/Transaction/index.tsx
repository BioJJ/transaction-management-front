import React, { useMemo, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import formatCurrency from '../../utils/formatCurrency'
import listOfMonths from '../../utils/months'

import { useTransaction } from './hooks/useTransaction'
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import {
	ButtonFile,
	ButtonFileCancel,
	Container,
	Content,
	FileUploadButton,
	FileUploadContainer,
	Label,
	SelectedFileName,
	UploadInput
} from './style'

export interface SelectedFile {
	name: string
	size: number
	type: string
}

const List: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<number>(
		new Date().getMonth() + 1
	)
	const [yearSelected, setYearSelected] = useState<number>(
		new Date().getFullYear()
	)

	const [selectedFile, setSelectedFile] = useState<SelectedFile | null | File>(
		null
	)

	const [file, setFile] = useState<File | undefined | null>()

	const { transactionFiltered, uploadFile } = useTransaction()
	const { setNotification } = useGlobalReducer()

	const pageData = {
		title: 'Transaction',
		lineColor: '#4E41F0'
	}

	const years = useMemo(() => {
		const uniqueYears: number[] = []

		transactionFiltered.forEach((item) => {
			const date = new Date(item.data)
			const year = date.getFullYear()

			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year)
			}
		})

		return uniqueYears.map((year) => {
			return {
				value: year,
				label: year
			}
		})
	}, [transactionFiltered])

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return {
				value: index + 1,
				label: month
			}
		})
	}, [])

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setFile(file)
			const fileDetails: SelectedFile = {
				name: file.name,
				size: file.size,
				type: file.type
			}
			setSelectedFile(fileDetails)
		}
	}

	const handleUploadButtonClick = async () => {
		if (selectedFile) {
			await uploadFile(file as File)
			setFile(null)
			setSelectedFile(null)
		} else {
			setNotification('Por favor, selecione um arquivo.', 'error')
		}
	}

	const handleUploadButtonClear = () => {
		setFile(null)
		setSelectedFile(null)
	}

	const handleMonthSelected = (month: string) => {
		try {
			const parseMonth = Number(month)
			setMonthSelected(parseMonth)
		} catch {
			throw new Error('invalid month value. Is accept 0 - 24.')
		}
	}

	const handleYearSelected = (year: string) => {
		try {
			const parseYear = Number(year)
			setYearSelected(parseYear)
		} catch {
			throw new Error('invalid year value. Is accept integer numbers.')
		}
	}

	return (
		<Layout>
			<Container>
				<ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
					<SelectInput
						options={months}
						onChange={(e) => handleMonthSelected(e.target.value)}
						defaultValue={monthSelected}
					/>
					<SelectInput
						options={years}
						onChange={(e) => handleYearSelected(e.target.value)}
						defaultValue={yearSelected}
					/>
				</ContentHeader>

				<FileUploadContainer>
					{!selectedFile && (
						<>
							<Label htmlFor="fileInput">Escolher Arquivo</Label>
							<UploadInput
								type="file"
								id="fileInput"
								onChange={handleFileChange}
								accept=".txt"
							/>
						</>
					)}
					{selectedFile && (
						<>
							<SelectedFileName>
								Arquivo selecionado: {selectedFile.name}
							</SelectedFileName>

							<FileUploadButton>
								<ButtonFile onClick={handleUploadButtonClick}>
									Enviar Arquivo
								</ButtonFile>

								<ButtonFileCancel onClick={handleUploadButtonClear}>
									Cancelar
								</ButtonFileCancel>
							</FileUploadButton>
						</>
					)}
				</FileUploadContainer>

				<Content>
					{transactionFiltered.map((item) => (
						<HistoryFinanceCard
							key={item.id}
							tagColor={'#4E41F0'}
							title={item.description}
							subtitle={item.seller}
							amount={formatCurrency(Number(item.value))}
						/>
					))}
				</Content>
			</Container>
		</Layout>
	)
}

export default List
