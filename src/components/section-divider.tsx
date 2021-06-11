import { SVGAttributes } from 'react'
import Rough from './rough'

const SectionDivider: React.FC<SVGAttributes<SVGSVGElement>> = (props) => (
	<Rough
		height={20}
		width="100%"
		init={(rc, svg) => {
			const bounds = svg.getBoundingClientRect()
			let node = rc.line(0, 10, bounds.width, 10, {
				stroke: 'var(--chakra-colors-orange-400)',
				roughness: 2.5,
				bowing: 1.5,
			})
			svg.appendChild(node)
		}}
		{...props}
	/>
)

export default SectionDivider
