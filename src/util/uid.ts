const generateUID = () => {
	let counter = 1
	return () => {
		return counter++
	}
}

export default generateUID()
