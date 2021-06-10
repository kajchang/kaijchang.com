import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '../src/theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default CustomApp
