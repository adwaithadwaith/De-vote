function getPositionIndex(positions, positionName) {
    let indexNumber = 0
    // Iterate through the positions object keys
    for (const [index, position] of Object.entries(positions)) {
      // Check if the current position name matches the desired positionName
      console.log(index)
      // console.log(position)
      if (positionName === index) {
        // Return the index of the position
        return indexNumber;
      }
      indexNumber++
    }
    // If positionName is not found, return -1
    return -1;
  }
 export default getPositionIndex