import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const overrides: ThemeOverride = {
  styles: {
    global: props => ({
      'a': {
        position: 'relative',
        textDecoration: 'underline !important',
        textDecorationColor: 'var(--chakra-colors-orange-400) !important',
        textDecorationThickness: `${props.theme.space[0.5]} !important`,
        textUnderlineOffset: `${props.theme.space[0.5]}`,
      },
      'a:after': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: `calc(100% + ${props.theme.space[0.5]})`,
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
    })
  }
}

const customTheme = extendTheme(overrides as any)
export default customTheme

export type CustomTheme = typeof customTheme
