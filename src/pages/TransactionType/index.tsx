import React, { useState } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import { useTransactionType } from './hooks/useTransactionType'
import Layout from '../../components/Layout'

import { Container, Content } from './style'

const TransactionType: React.FC = () => {
	const [natureSelected, setNatureSelected] = useState<number>(
		new Date().getMonth() + 1
	)

	const { transactionTypeFiltered } = useTransactionType()

	const pageData = {
		title: 'Transaction Types',
		lineColor: '#E44C4E'
	}

	const natures = [
		{
			value: 'all',
			label: 'all'
		},
		{
			value: 'Entrada',
			label: 'Entrada'
		},
		{
			value: 'Saída',
			label: 'Saída'
		}
	]

	const handleNatureSelected = (nature: string) => {
		try {
			const parseMonth = Number(nature)
			setNatureSelected(parseMonth)
		} catch {
			throw new Error('invalid nature value. Is accept 0 - 24.')
		}
	}

	return (
		<Layout>
			<Container>
				<ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
					<SelectInput
						options={natures}
						onChange={(e) => handleNatureSelected(e.target.value)}
						defaultValue={natureSelected}
					/>
				</ContentHeader>

				<Content>
					{transactionTypeFiltered.map((item) => (
						<HistoryFinanceCard
							key={item.id}
							tagColor={item.signal === '+' ? '#4E41F0' : '#f70202'}
							title={item.description}
							subtitle={item.signal}
							amount={item.nature}
						/>
					))}
				</Content>
			</Container>
		</Layout>
	)
}

export default TransactionType
