import { SVGAttributes, useMemo } from 'react'
import uid from 'util/uid'

import Rough from 'components/rough'

const SectionDivider: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
	const seed = useMemo(() => uid(), [])

	return (
		<Rough
			height={20}
			width="100%"
			init={(rc, svg, clear) => {
				let lastWidth = 0
				const draw = () => {
					const bounds = svg.getBoundingClientRect()
					if (lastWidth === bounds.width) return
					lastWidth = bounds.width
					clear()
					let node = rc.line(0, 10, bounds.width, 10, {
						stroke: 'var(--chakra-colors-pink-citrus)',
						roughness: 2.5,
						bowing: 1.5,
						seed,
					})
					svg.appendChild(node)
				}
				window.addEventListener('resize', draw)
				draw()
			}}
			{...props}
		/>
	)
}

export default SectionDivider
