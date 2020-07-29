import {
    useRef,
    useLayoutEffect,
} from 'preact/hooks'
import styled from 'styled-components'

import useSimpleDraggable, { DraggableOptions } from '../../../hooks/use-simple-draggable'

class Props {
    color: string = ''
    text: string = ''
    draggableOptions: DraggableOptions = {}
}

const Magnet = styled.div`
    font-family: AlphaFridgeMagnets, Times, serif;
    font-size: 26px;
    cursor: move;
`

export default (props: Props) => {
    const ref = useRef(null)

    const {
        bind,
        dragStyle,
        top,
        left,
        setCoords,
    } = useSimpleDraggable(props.draggableOptions)

    useLayoutEffect(
        () => {
            const rect = ref.current.getBoundingClientRect()

            // console.log(top, left, rect.width)

            // setCoords({
            //     top,
            //     left: left + Math.floor(rect.width/2),
            // })

            // console.log('Input dimensions:', rect.width, rect.height)
        },
        [ref],
    )

    const style = {
        ...dragStyle,
        color: props.color,
    }

    return (
        <Magnet
            ref={ref}
            {...bind()}
            style={style}
        >
            {props.text}
        </Magnet>
    )
}
