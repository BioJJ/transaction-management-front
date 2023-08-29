import { useEffect, useState } from 'react'

import {
	URL_TRANSACTION,
	URL_TRANSACTION_CREATE
} from '../../../constants/urls'
import { MethodsEnum } from '../../../enums/methods.enum'
import { useRequests } from '../../../hooks/auth'
import { Transaction } from '../../../types/Transaction'
import { useTransactionReducer } from '../../../store/reducers/transactionReducer/useTransactionReducer'
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer'
import { connectionAPIUploadFile } from '../../../functions/connections/connectionsAPI'
import { ERROR_FILE_UPLOAD } from '../../../constants/errorStatus'

export const useTransaction = () => {
	const { transaction, setTransaction } = useTransactionReducer()
	const [transactionFiltered, setTransactionFiltered] = useState<Transaction[]>(
		[]
	)
	const [loading, setLoading] = useState(false)
	const { setNotification } = useGlobalReducer()
	const { request } = useRequests()

	useEffect(() => {
		setTransactionFiltered([...transaction])
	}, [transaction])

	useEffect(() => {
		request<Transaction[]>(URL_TRANSACTION, MethodsEnum.GET, setTransaction)
	}, [])

	const uploadFile = async (body: File): Promise<void> => {
		setLoading(true)

		await connectionAPIUploadFile<Transaction[]>(URL_TRANSACTION_CREATE, body)
			.then((result) => {
				setTransaction([...result])

				setNotification('Upload Realizado com sucesso!', 'success')

				request<Transaction[]>(URL_TRANSACTION, MethodsEnum.GET, setTransaction)
			})
			.catch(() => {
				setNotification(ERROR_FILE_UPLOAD, 'error')
				return undefined
			})

		setLoading(false)
	}

	return {
		loading,
		uploadFile,
		transactionFiltered
	}
}
