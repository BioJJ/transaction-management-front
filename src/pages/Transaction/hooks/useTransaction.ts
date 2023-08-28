import { useEffect, useState } from 'react'

import { URL_TRANSACTION } from '../../../constants/urls'
import { MethodsEnum } from '../../../enums/methods.enum'
import { useRequests } from '../../../hooks/auth'
import { Transaction } from '../../../types/Transaction'
import { useTransactionReducer } from '../../../store/reducers/transactionReducer/useTransactionReducer'

export const useTransaction = () => {
	const { transaction, setTransaction } = useTransactionReducer()
	const [transactionFiltered, setTransactionFiltered] = useState<Transaction[]>(
		[]
	)
	const { request } = useRequests()

	useEffect(() => {
		setTransactionFiltered([...transaction])
	}, [transaction])

	useEffect(() => {
		request<Transaction[]>(URL_TRANSACTION, MethodsEnum.GET, setTransaction)
	}, [])

	return {
		transactionFiltered
	}
}
