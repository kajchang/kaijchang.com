import {
	Box,
	Container,
	Heading,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'

import SectionDivider from '../src/components/section-divider'
import SectionVerticalHeading from '../src/components/section-vertical-heading'
import RoughUnderlinedLink from '../src/components/rough-underlined-link'

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
					<RoughUnderlinedLink href="https://petcodeusa.com" isExternal>
						petcode
					</RoughUnderlinedLink>
				</Text>
			</Stack>
			<SectionDivider />
			<Box position="relative">
				<SectionVerticalHeading>links</SectionVerticalHeading>
				<List ml={16} textAlign="left">
					<ListItem>
						<RoughUnderlinedLink href="mailto:kaijchang@gmail.com" isExternal>
							kaijchang@gmail.com
						</RoughUnderlinedLink>
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink href="https://github.com/kajchang" isExternal>
							github
						</RoughUnderlinedLink>
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink
							href="https://www.linkedin.com/in/kai-j-chang"
							isExternal>
							linkedin
						</RoughUnderlinedLink>
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink
							href="https://twitter.com/kachangggg"
							isExternal>
							twitter
						</RoughUnderlinedLink>
					</ListItem>
				</List>
			</Box>
			<SectionDivider />
			<Box position="relative">
				<SectionVerticalHeading>more</SectionVerticalHeading>
				<List ml={16} textAlign="left">
					<ListItem>
						<RoughUnderlinedLink href="https://run.kaijchang.com" isExternal>
							run.kaijchang.com
						</RoughUnderlinedLink>{' '}
						— 👟 auto-generated running map
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink
							href="https://firebrand.kaijchang.com"
							isExternal>
							firebrand.kaijchang.com
						</RoughUnderlinedLink>{' '}
						— 🇺🇸 toy site calculating ELO for U.S. politicians
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink href="https://vote.lowellhs.org" isExternal>
							vote.lowellhs.org
						</RoughUnderlinedLink>{' '}
						— 🗳️ results of lowell's 2020 mock primary election survey
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink href="https://studentsreview.me" isExternal>
							studentsreview.me [closed]
						</RoughUnderlinedLink>{' '}
						— 🧑‍🏫 archive for lowell teachers and courses. peak 1.5k+ WAU
					</ListItem>
					<ListItem>
						<RoughUnderlinedLink
							href="https://github.com/StudentVue"
							isExternal>
							StudentVue
						</RoughUnderlinedLink>{' '}
						— 🏫 collection of tools reverse-engineering StudentVue's SOAP API
					</ListItem>
				</List>
			</Box>
		</Stack>
	</Container>
)

export default Landing
