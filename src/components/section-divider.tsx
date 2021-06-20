import { Divider, DividerProps } from '@chakra-ui/react'

const SectionDivider: React.FC<DividerProps> = (props) => {
	return <Divider borderColor="pink-citrus" borderBottomWidth={4} {...props} />
}

export default SectionDivider
