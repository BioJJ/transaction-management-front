import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import TransactionType from '../pages/TransactionType'
import Transaction from '../pages/Transaction'

export enum DashboardRoutesEnum {
	FIRST_SCREEN = '/dashboard'
}

const AppRoutes: React.FC = () => (
	<Layout>
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/list/transaction-type" element={<TransactionType />} />
			<Route path="/list/transaction" element={<Transaction />} />
		</Routes>
	</Layout>
)

export default AppRoutes
