import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="description"
						content="Kai Chang · web development @ petcode"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Open+Sans:wght@400;600;700&family=Ma+Shan+Zheng&family=Yeon+Sung&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
