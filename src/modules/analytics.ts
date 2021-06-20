export const hit = () => fetch('/api/hit')

export const outbound = (href: string) =>
	fetch(`/api/outbound?href=${encodeURIComponent(href)}`)
