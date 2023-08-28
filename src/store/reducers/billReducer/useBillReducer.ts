import { useDispatch } from 'react-redux'

import { BillType } from '../../../types/BillType'
import { useAppSelector } from '../../hooks'
import { setUsersAction } from '.'

export const useBillReducer = () => {
	const dispatch = useDispatch()
	const { bills } = useAppSelector((state) => state.billReducer)

	const setBills = (bills: BillType[]) => {
		dispatch(setUsersAction(bills))
	}

	return {
		bills,
		setBills
	}
}
