import { SVGAttributes } from 'react'
import rough from 'roughjs/bundled/rough.cjs.js'

import Rough from './rough'

const SectionDivider: React.FC<SVGAttributes<SVGSVGElement>> = (props) => (
	<Rough
		height={20}
		width="100%"
		init={(rc, svg, clear) => {
			let lastWidth = 0
			const seed = rough.newSeed()
			const draw = () => {
				const bounds = svg.getBoundingClientRect()
				if (lastWidth === bounds.width) return
				lastWidth = bounds.width
				clear()
				let node = rc.line(0, 10, bounds.width, 10, {
					stroke: 'var(--chakra-colors-orange-400)',
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

export default SectionDivider
