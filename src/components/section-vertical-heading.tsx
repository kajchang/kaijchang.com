import { Heading, HeadingProps } from '@chakra-ui/react'

const SectionVerticalHeading: React.FC<HeadingProps> = (props) => (
	<Heading
		position="absolute"
		left={2}
		fontWeight="extrabold"
		letterSpacing="tight"
		fontSize="xl"
		transform="rotate(90deg) translate(0, -100%)"
		transformOrigin="top left"
		{...props}
	/>
)

export default SectionVerticalHeading
