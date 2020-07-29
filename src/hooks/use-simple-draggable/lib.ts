export const getBoundCoordinate = (
    val: number,
    {
        minVal,
        maxVal,
    } : {
        minVal: number,
        maxVal: number,
    },
) => {
    const isMinVal = typeof minVal === 'number'
    const isMaxVal = typeof maxVal === 'number'
    
    const coord = Math.round(val)

    if (isMinVal && isMaxVal) {
        return Math.max(minVal, Math.min(maxVal, coord))
    }

    if (isMinVal) {
        return Math.max(minVal, coord)
    }

    if (isMaxVal) {
        return Math.min(maxVal, coord)
    }
    return coord
}

export default {}
