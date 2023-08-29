import { RouteObject } from 'react-router-dom'

import List from './'

export enum TransactionRoutesEnum {
	LIST = '/list/transaction',
	TRANSACTION_LIST = '/transaction',
	TRANSACTION_INSERT = '/transaction/parse-create',
	TRANSACTION_EDIT = '/transaction/:transactionId'
}

export const listTransaction: RouteObject[] = [
	{
		path: TransactionRoutesEnum.LIST,
		element: <List />
	}
]
