import React, {
    useRef,
    useState,
    useLayoutEffect,
} from 'react'
import styled from 'styled-components'

import useSimpleDraggable, { DraggableOptions } from '../../../hooks/use-simple-draggable'

class Props {
    color: string = 'black'
    text: string = ''
    skewRange: number = 0
    draggableOptions: Partial<DraggableOptions> = {}
}

const magnetStyles = () => ({
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '30px',
    cursor: 'move',
    border: '1px solid',
    padding: '0px 8px 0px 8px',
    whiteSpace: 'nowrap',
})

const containerStyles = (
    options: {
        minHeight:number
    }
) => ({
    // background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: `${options.minHeight}px`,
})

export default (props: Partial<Props>) => {
    props = {
        ...(new Props()),
        ...props,
    }

    const ref = useRef(null)

    const {
        bind,
        dragStyle,
    } = useSimpleDraggable(props?.draggableOptions)

    const magnetStyle = {
        ...magnetStyles(),
        ...dragStyle as {},
        color: props.color,
    }

    const [
        minHeight,
        setMinHeight,
    ] = useState(0)

    useLayoutEffect(
        () => {
            const rect = ref?.current.getBoundingClientRect()

            setMinHeight(
                rect.height +
                (
                    (props?.skewRange) * 2
                )
            )
        },
        [ref],
    )

    // console.log(minHeight)
    // console.log(magnetStyle)
    // console.log(bind())

    return (
        <div style={containerStyles({minHeight})}>
            <div
                ref={ref}
                style={magnetStyle}
                // onTouchStart={onTouchStart}
                // onMouseDown={onMouseDown}
                {...bind()}
            >
                {props.text}
            </div>
        </div>
    )
}
