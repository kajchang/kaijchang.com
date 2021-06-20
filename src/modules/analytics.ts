const beaconOrFetch = (url: string) => {
	if (typeof navigator.sendBeacon !== 'undefined') {
		navigator.sendBeacon(url)
	} else {
		fetch(url)
	}
}

export const hit = () => beaconOrFetch('/api/hit')

export const outbound = (href: string) =>
	beaconOrFetch(`/api/outbound?href=${encodeURIComponent(href)}`)
