import { useMemo } from 'react'
import { useGesture } from 'react-use-gesture'
import { getBoundCoordinate } from './lib'

export class DraggableOptions {
    boundTop: object = {} // object shape should be { minVal: Number, maxVal: Number }
    boundLeft: object  = {} // object shape should be { minVal: Number, maxVal: Number }
    initTop: number = 0
    initLeft: number = 0
    onDragStart = () => {}
    onDragEnd = () => {}
}

const useSimpleDraggable = (
    params: Partial<DraggableOptions>,
) => {
    const options = {
        ...(new DraggableOptions()),
        ...params,
    }

    options.initLeft = 0

    const {
        boundTop,
        boundLeft,
        initTop,
        initLeft,
        onDragStart,
        onDragEnd,
    } = options

    const [{ top, left }, setCoords] = useState({ top: initTop, left: initLeft })

    const bind = useGesture({
        onMouseDown: () => console.log('mouse down'),
        onDragStart: () => console.log('starting drag'),
        onDragEnd: () => console.log('ending drag'),
        onDrag: ({ offset: [x, y] }) => {
            setCoords({
                top: getBoundCoordinate(y + initTop, boundTop),
                left: getBoundCoordinate(x + initLeft, boundLeft),
            })
        },
    })

    const dragStyle = useMemo(
        () => ({
            transform: `translate3d(${left}px, ${top}px, 0)`,
        }),
        [top, left],
    )

    return {
        bind,
        dragStyle,
        top,
        left,
        setCoords,
    }
}

export default useSimpleDraggable
