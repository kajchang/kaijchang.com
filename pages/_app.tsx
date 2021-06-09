import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default CustomApp
