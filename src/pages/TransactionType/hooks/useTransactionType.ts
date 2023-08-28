import { useEffect, useState } from 'react'

import { URL_TRANSACTION_TYPE } from '../../../constants/urls'
import { MethodsEnum } from '../../../enums/methods.enum'
import { useRequests } from '../../../hooks/auth'
import { TransactionType } from '../../../types/TransactionType'
import { useTransactionTypeReducer } from '../../../store/reducers/transactionTypeReducer/useTransactionTypeReducer'

export const useTransactionType = () => {
	const { transactionType, setTransactionType } = useTransactionTypeReducer()
	const [transactionTypeFiltered, setTransactionTypeFiltered] = useState<
		TransactionType[]
	>([])
	const { request } = useRequests()

	useEffect(() => {
		setTransactionTypeFiltered([...transactionType])
	}, [transactionType])

	useEffect(() => {
		request<TransactionType[]>(
			URL_TRANSACTION_TYPE,
			MethodsEnum.GET,
			setTransactionType
		)
	}, [])

	return {
		transactionTypeFiltered
	}
}
