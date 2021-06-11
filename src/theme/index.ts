import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const overrides: ThemeOverride = {
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Montserrat, sans-serif'
  },
  styles: {
    global: {
      'a:link, a:visited, a:hover, a:active': {
        textDecoration: 'none !important',
      },
      'a:after': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: '100%',
        display: 'block',
        right: 0,
        top: 0,
        background: 'var(--chakra-colors-orange-400)',
        transition: 'width .5s ease',
        zIndex: -1,
      },
      'a:hover:after': {
        width: '100%',
        left: 0,
      },
      'ul': {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: '1em',
      },
      'li:before': {
        display: 'inline-block',
        content: '"-"',
        width: '1em',
        marginLeft: '-1em',
      }
    },
  },
}

const customTheme = extendTheme(overrides as any)
export default customTheme

export type CustomTheme = typeof customTheme
