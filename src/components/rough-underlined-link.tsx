import { Link, LinkProps } from '@chakra-ui/react'

import RoughUnderline from 'components/rough-underline'

const RoughUnderlinedLink: React.FC<LinkProps> = ({ children, ...props }) => (
	<Link position="relative" {...props}>
		{children}
		<RoughUnderline />
	</Link>
)

export default RoughUnderlinedLink
