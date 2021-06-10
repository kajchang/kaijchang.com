import {
	Box,
	Container,
	Divider,
	Heading,
	Link,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'

const Landing: React.FC = () => (
	<Container maxW={400}>
		<Stack alignItems="center" textAlign="center" py={12} spacing={6}>
			<Stack>
				<Heading
					as="h1"
					fontWeight="extrabold"
					letterSpacing="tight"
					fontSize="2xl">
					Kai Chang
				</Heading>
				<Text>장준수 | 张俊洙</Text>
				<Text fontWeight="semibold">vassar college '25</Text>
				<Text fontWeight="semibold">
					web development @{' '}
					<Link href="https://petcodeusa.com" isExternal>
						petcode
					</Link>
				</Text>
			</Stack>
			<Divider
				borderStyle="dashed groove"
				borderColor="orange.400"
				borderTopWidth={0}
				borderBottomWidth={2}
			/>
			<Box alignSelf="stretch" position="relative">
				<Heading
					position="absolute"
					l={0}
					mt={5}
					fontWeight="extrabold"
					letterSpacing="tight"
					fontSize="xl"
					transform="rotate(90deg)">
					links
				</Heading>
				<List ml={16} textAlign="left">
					<ListItem>
						<Link href="mailto:kaijchang@gmail.com" isExternal>
							kaijchang@gmail.com
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://github.com/kajchang" isExternal>
							github
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://www.linkedin.com/in/kai-j-chang" isExternal>
							linkedin
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://twitter.com/kachangggg" isExternal>
							twitter
						</Link>
					</ListItem>
				</List>
			</Box>
		</Stack>
	</Container>
)

export default Landing
