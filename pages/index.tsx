import { GetStaticProps, NextPage } from 'next'
import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	List,
	ListItem,
	Stack,
	Text,
} from '@chakra-ui/react'

import firebaseAdmin from 'modules/firebase-admin'

import Section from 'components/section'
import SectionDivider from 'components/section-divider'
import SectionVerticalHeading from 'components/section-vertical-heading'

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
			<Stack as="section" textAlign="center" alignSelf="center">
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
					<Text fontWeight="extrabold" fontFamily="heading" mx={1}>
						|
					</Text>{' '}
					<Text as="span" fontFamily="chinese">
						张俊洙
					</Text>
				</Flex>
				<Text fontWeight="semibold">vassar college &apos;25</Text>
				<Text fontWeight="semibold">
					web development @{' '}
					<Link href="https://petcodeusa.com" isExternal>
						petcode
					</Link>
				</Text>
			</Stack>
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>links</SectionVerticalHeading>
				<List textAlign="left">
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
			</Section>
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>projects</SectionVerticalHeading>
				<List textAlign="left">
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
						— 🗳️ results of lowell&apos;s 2020 mock primary election survey
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
						— 🏫 collection of tools reverse-engineering StudentVue&apos;s SOAP
						API
					</ListItem>
				</List>
			</Section>
			{/*
			<SectionDivider />
			<Section>
				<SectionVerticalHeading>analytics</SectionVerticalHeading>
				<Text>
					this page collects anonymized data on page hits and outbound link
					clicks. see the code{' '}
					<Link
						href="https://github.com/kajchang/kaijchang.com/blob/master/pages/api/hit.ts"
						isExternal>
						here
					</Link>{' '}
					and{' '}
					<Link
						href="https://github.com/kajchang/kaijchang.com/blob/master/pages/api/outbound.ts"
						isExternal>
						here
					</Link>
					.
				</Text>
				<br />
				<Text>
					this page has <Stat>{hits}</Stat> hits since <Stat>6/14/21</Stat>, as
					of <Stat>{dayjs(revalidatedAt).fromNow()}</Stat>.
				</Text>
			</Section>*/}
		</Stack>
	</Container>
)

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
	const query = await firebaseAdmin
		.firestore()
		.collection('pages')
		.where('path', '==', '/')
		.get()
	const hits = !query.empty ? query.docs[0].data().hits : 0

	return {
		props: {
			hits,
			revalidatedAt: new Date().toISOString(),
		},
		revalidate: 5 * 60,
	}
}

export default LandingPage
