import React from 'react'

import type { Router as RemixRouter } from '@remix-run/router'
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider
} from 'react-router-dom'
import { useNotification } from './hooks/useNotification'

import { loginRoutes } from './pages/Signin/routes'
import { dashboardRoutes } from './pages/Dashboard/routes'
import { listRoutes } from './pages/List/routes'

import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/theme'

import GlobalStyles from './styles/styles'
import { verifyLoggedIn } from './functions/connections/auth'

const routes: RouteObject[] = [...loginRoutes]
const routesLoggedIn: RouteObject[] = [...dashboardRoutes, ...listRoutes].map(
	(route) => ({
		...route,
		loader: verifyLoggedIn
	})
)

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])

const App: React.FC = () => {
	const { theme } = useTheme()
	const { contextHolder } = useNotification()

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{contextHolder}
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
