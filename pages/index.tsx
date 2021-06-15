import { GetStaticProps, NextPage } from 'next'
import {
	Container,
	Flex,
	Heading,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'

import firebaseAdmin from 'modules/firebase-admin'

import Section from 'components/section'
import SectionDivider from 'components/section-divider'
import SectionVerticalHeading from 'components/section-vertical-heading'
import RoughUnderlinedLink from 'components/rough-underlined-link'
import Stat from 'components/stat'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type LandingPageProps = {
	hits: number
	revalidatedAt: string
}

const LandingPage: NextPage<LandingPageProps> = ({ hits, revalidatedAt }) => (
	<Container maxW={400}>
		<Stack py={12} spacing={6}>
			<Stack textAlign="center" as="section" alignSelf="center">
				<Heading
					as="h1"
					fontWeight="extrabold"
					letterSpacing="tight"
					fontSize="2xl">
					Kai Chang
				</Heading>
				<Flex direction="row" alignSelf="center" fontSize="lg">
					<Text as="span" fontFamily="korean">
						장준수
					</Text>{' '}
					|{' '}
					<Text as="span" fontFamily="chinese">
						张俊洙
					</Text>
				</Flex>
				<Text fontWeight="semibold">vassar college '25</Text>
				<Text fontWeight="semibold">
					web development @{' '}
					<RoughUnderlinedLink href="https://petcodeusa.com" isExternal>
						petcode
					</RoughUnderlinedLink>
				</Text>
			</Stack>
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>links</SectionVerticalHeading>
				<List textAlign="left">
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
			</Section>
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>projects</SectionVerticalHeading>
				<List textAlign="left">
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
			</Section>
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>analytics</SectionVerticalHeading>
				<Text>
					this page collects anonymized data on page hits and outbound link
					clicks. see the code{' '}
					<RoughUnderlinedLink
						href="https://github.com/kajchang/kaijchang.com/blob/master/pages/api/hit.ts"
						isExternal>
						here
					</RoughUnderlinedLink>{' '}
					and{' '}
					<RoughUnderlinedLink
						href="https://github.com/kajchang/kaijchang.com/blob/master/pages/api/outbound.ts"
						isExternal>
						here
					</RoughUnderlinedLink>
					.
				</Text>
				<br />
				<Text>
					this page has <Stat>{hits}</Stat> hits since <Stat>6/14/21</Stat>, as
					of <Stat>{dayjs(revalidatedAt).fromNow()}</Stat>.
				</Text>
			</Section>
		</Stack>
	</Container>
)

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
	const query = await firebaseAdmin
		.firestore()
		.collection('pages')
		.where('path', '==', '/')
		.get()
	const hits = query.docs[0] ? query.docs[0].data().hits : 0

	return {
		props: {
			hits,
			revalidatedAt: new Date().toISOString(),
		},
		revalidate: 5 * 60,
	}
}

export default LandingPage
