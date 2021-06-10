import {
	Box,
	Container,
	Divider,
	DividerProps,
	Heading,
	HeadingProps,
	Link,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'

const SectionDivider: React.FC<DividerProps> = (props) => (
	<Divider
		borderStyle="dashed groove"
		borderColor="orange.400"
		borderTopWidth={0}
		borderBottomWidth={2}
		{...props}
	/>
)

const SectionVerticalHeading: React.FC<HeadingProps> = (props) => (
	<Heading
		position="absolute"
		l={0}
		mt={5}
		fontWeight="extrabold"
		letterSpacing="tight"
		fontSize="xl"
		transform="rotate(90deg)"
		{...props}></Heading>
)

const Landing: React.FC = () => (
	<Container maxW={400}>
		<Stack textAlign="center" py={12} spacing={6}>
			<Stack alignSelf="center">
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
			<SectionDivider />
			<Box position="relative">
				<SectionVerticalHeading>links</SectionVerticalHeading>
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
			<SectionDivider />
			<Box position="relative">
				<SectionVerticalHeading>more</SectionVerticalHeading>
				<List ml={16} textAlign="left">
					<ListItem>
						<Link href="https://run.kaijchang.com" isExternal>
							run.kaijchang.com
						</Link>{' '}
						— 👟 auto-generated running map
					</ListItem>
					<ListItem>
						<Link href="https://firebrand.kaijchang.com" isExternal>
							firebrand.kaijchang.com
						</Link>{' '}
						— 🇺🇸 toy site calculating ELO for U.S. politicians
					</ListItem>
					<ListItem>
						<Link href="https://vote.lowellhs.org" isExternal>
							vote.lowellhs.org
						</Link>{' '}
						— 🗳️ results of lowell's 2020 mock primary election survey
					</ListItem>
					<ListItem>
						<Link href="https://studentsreview.me" isExternal>
							studentsreview.me [closed]
						</Link>{' '}
						— 🧑‍🏫 archive for lowell teachers and courses. peak 1.5k+ WAU
					</ListItem>
					<ListItem>
						<Link href="https://github.com/StudentVue" isExternal>
							StudentVue
						</Link>{' '}
						— 🏫 collection of tools reverse-engineering StudentVue's SOAP API
					</ListItem>
				</List>
			</Box>
		</Stack>
	</Container>
)

export default Landing
