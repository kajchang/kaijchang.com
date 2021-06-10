import { Container, Heading, Link, Stack, Text } from '@chakra-ui/react'

const Landing: React.FC = () => (
	<Container maxW={1312}>
		<Stack alignItems="center" textAlign="center" py={12}>
			<Heading fontWeight="extrabold" fontSize="2xl">
				Kai Chang
			</Heading>
			<Text>준수 | 俊洙</Text>
			<Text fontWeight="semibold">vassar college '25</Text>
			<Text fontWeight="semibold">
				web development @{' '}
				<Link href="https://petcodeusa.com" isExternal>
					petcode
				</Link>
			</Text>
		</Stack>
	</Container>
)

export default Landing
