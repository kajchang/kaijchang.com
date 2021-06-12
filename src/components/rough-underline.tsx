import { SVGAttributes, useMemo } from 'react'
import uid from '../util/uid'

import Rough from './rough'

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
			height={2}
			init={(rc, svg) => {
				const bounds = svg.getBoundingClientRect()
				let node = rc.line(0, 1, bounds.width, 1, {
					stroke: 'var(--chakra-colors-orange-400)',
					seed,
				})
				svg.appendChild(node)
			}}
			{...props}
		/>
	)
}

export default RoughUnderline
