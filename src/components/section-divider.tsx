import { Divider, DividerProps } from '@chakra-ui/react'

const SectionDivider: React.FC<DividerProps> = (props) => {
	return (
		<Divider
			borderColor="orange.600"
			opacity={1}
			borderBottomWidth={4}
			{...props}
		/>
	)
}

export default SectionDivider
