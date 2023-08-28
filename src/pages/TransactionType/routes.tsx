import { RouteObject } from 'react-router-dom'

import List from './'

export enum TransactionRoutesEnum {
	LIST = '/list/transaction-type',
	TRANSACTION_INSERT = '/transaction-type/parse-create',
	TRANSACTION_EDIT = '/transaction-type/:transactionId'
}

export const listTransactionType: RouteObject[] = [
	{
		path: TransactionRoutesEnum.LIST,
		element: <List />
	}
]
