import WordMagnet from '../word-magnet'

const win = window
const doc = document
const docElem = doc.documentElement
const body = doc.getElementsByTagName('body')[0]

const x = win.innerWidth || docElem.clientWidth || body.clientWidth
const y = win.innerHeight || docElem.clientHeight || body.clientHeight

const randomInt = (min, max) => {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

const times = x => f => {
    if (x > 0) {
        f()
        times(x - 1)(f)
    }
}

const words = [
    'down the whole',
    'is',
    'coming',
    'soon',
    ',',
    'very soon',
]

const skewRange = 5

const wordsWithSkews = words.map(
    (word) => ({
        text: word,
        skew: randomInt(-skewRange, skewRange),
    }),
)

const flexStyles = () => ({
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
})

const FridgeCanvas = () => {
    return (
        <div style={flexStyles()}>
            <div style={{
                display: 'flex',
                flex: '0 0 auto',
                flexWrap: 'wrap',
                width: '100%',
            }}>
                {
                    wordsWithSkews.map(
                        (
                            {
                                text,
                                skew,
                            },
                            index,
                        ) => (
                            <WordMagnet
                                key={index}
                                text={text}
                                skewRange={skewRange}
                                draggableOptions={{
                                    initTop: skew,
                                }}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default FridgeCanvas
