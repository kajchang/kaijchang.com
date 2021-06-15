import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import '../src/styles/global.css'
import customTheme from '../src/theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		fetch('/api/hit')
	}, [])

	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<title>Kai Chang</title>
				<meta
					name="description"
					content="Kai Chang · web development @ petcode"
				/>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default CustomApp
