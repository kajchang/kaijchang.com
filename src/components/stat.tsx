import { Text, TextProps } from '@chakra-ui/react'

const Stat: React.FC<TextProps> = (props) => (
	<Text as="b" px={1} backgroundColor="orange.600" color="white" {...props} />
)

export default Stat
