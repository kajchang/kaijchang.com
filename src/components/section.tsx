import { Box, BoxProps } from '@chakra-ui/react'

const Section: React.FC<BoxProps> = (props) => (
	<Box as="section" position="relative" pl={16} {...props} />
)

export default Section
