import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import '../src/styles/global.css'
import customTheme from '../src/theme'

const clickListener = (e: React.MouseEvent<HTMLElement>) => {
	if ((e.target as HTMLElement).localName === 'a') {
		fetch(
			`/api/outbound?href=${encodeURIComponent(
				(e.target as HTMLAnchorElement).href,
			)}`,
		)
	}
}

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		fetch('/api/hit')
		document.addEventListener('click', clickListener as any)
		return () => document.removeEventListener('click', clickListener as any)
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
