import { useDispatch } from 'react-redux'

import { Transaction } from '../../../types/Transaction'
import { useAppSelector } from '../../hooks'
import { setUsersAction } from '.'

export const useTransactionReducer = () => {
	const dispatch = useDispatch()
	const { transaction } = useAppSelector((state) => state.transactionReducer)

	const setTransaction = (transaction: Transaction[]) => {
		dispatch(setUsersAction(transaction))
	}

	return {
		transaction,
		setTransaction
	}
}
