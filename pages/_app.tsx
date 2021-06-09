import type { AppProps } from 'next/app'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default CustomApp
