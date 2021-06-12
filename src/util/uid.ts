const generateUID = () => {
  let counter = 0
  return () => {
    return counter++
  }
}

export default generateUID()
