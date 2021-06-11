import { SVGAttributes } from 'react'
import { RoughSVG } from 'roughjs/bin/svg'
import rough from 'roughjs/bundled/rough.cjs.js'

type RoughProps = {
	init: (rc: RoughSVG, svg: SVGSVGElement) => void
} & SVGAttributes<SVGSVGElement>

const Rough: React.FC<RoughProps> = ({ init, ...props }) => {
	return (
		<svg
			ref={(svg) => {
				if (!svg) return
				const rc = rough.svg(svg as unknown as SVGSVGElement)
				while (svg.lastChild) {
					svg.removeChild(svg.lastChild)
				}
				init(rc, svg)
			}}
			{...props}
		/>
	)
}

export default Rough
