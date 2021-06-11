import { Heading, HeadingProps } from '@chakra-ui/react'

const SectionVerticalHeading: React.FC<HeadingProps> = (props) => (
	<Heading
		position="absolute"
		l={0}
		mt={5}
		fontWeight="extrabold"
		letterSpacing="tight"
		fontSize="xl"
		transform="rotate(90deg)"
		{...props}
	/>
)

export default SectionVerticalHeading
