import { SVGAttributes, useMemo } from 'react'
import uid from 'util/uid'

import Rough from 'components/rough/rough'

const RoughUnderline: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
	const seed = useMemo(() => uid(), [])

	return (
		<Rough
			style={{
				position: 'absolute',
				width: '100%',
				left: 0,
				bottom: 1.5,
				zIndex: -1,
			}}
			height={3}
			init={(rc, svg) => {
				const bounds = svg.getBoundingClientRect()
				let node = rc.line(0, 1.5, bounds.width, 1.5, {
					stroke: 'var(--chakra-colors-pink-citrus)',
					seed,
				})
				svg.appendChild(node)
			}}
			{...props}
		/>
	)
}

export default RoughUnderline
