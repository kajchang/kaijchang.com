import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from 'theme'

import { hit, outbound } from 'modules/analytics'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter()

	useEffect(() => {
		const clickListener = (e: React.MouseEvent<HTMLElement>) => {
			if ((e.target as HTMLElement).localName === 'a') {
				outbound((e.target as HTMLAnchorElement).href)
			}
		}

		if (router.isReady && !router.query.dont_track) {
			hit()
			document.addEventListener('click', clickListener as any)
			return () => document.removeEventListener('click', clickListener as any)
		}
	}, [router.isReady])

	return (
		<ChakraProvider theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default CustomApp
