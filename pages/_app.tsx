import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import '../src/styles/global.css'
import customTheme from '../src/theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<title>Kai Chang</title>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default CustomApp
