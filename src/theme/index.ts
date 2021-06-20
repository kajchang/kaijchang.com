import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const linkTransition = '.5s ease'

const overrides: ThemeOverride = {
	fonts: {
		body: 'Open Sans, sans-serif',
		heading: 'Montserrat, sans-serif',
		chinese: 'Ma Shan Zheng, cursive',
		korean: 'Yeon Sung, cursive',
	},
	styles: {
		global: {
			body: {
				backgroundColor: 'gray.800',
				color: 'orange.600',
			},
			'a:link, a:visited, a:hover, a:active': {
				position: 'relative',
				fontWeight: 'bold',
				textDecoration: 'underline !important',
				textDecorationThickness: '2px !important',
				textUnderlineOffset: '2px',
				zIndex: 1,
			},
			'a:after': {
				content: '""',
				position: 'absolute',
				width: 0,
				height: '100%',
				display: 'block',
				right: 0,
				top: 0,
				background: 'var(--chakra-colors-gray-300)',
				transition: `width ${linkTransition}`,
				zIndex: -1,
			},
			'a:hover:after': {
				width: '100%',
				left: 0,
			},
			ul: {
				listStyle: 'none',
				marginLeft: 0,
				paddingLeft: '1em',
			},
			'li:before': {
				display: 'inline-block',
				content: '"-"',
				width: '1em',
				marginLeft: '-1em',
			},
		},
	},
}

const customTheme = extendTheme(overrides as any)
export default customTheme

export type CustomTheme = typeof customTheme
