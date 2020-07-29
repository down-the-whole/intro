// import { useRoute, useRouteNode } from 'react-router5'

// import Nav from './components/nav'
import FridgeCanvas from './components/magnetic-poetry/fridge-canvas'
// import Calendar from './google-calendar/index.js'

const calendar_configuration = {
    api_key: '<token>',
    calendars: [
        {
            name: 'Down the Whole',
            url: 'ii9475959e5gdhj3q0v2gpfkb0@group.calendar.google.com',
        },
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20,
}

// const calendar = () => (
//     <Calendar
//         events={[]}
//         config={calendar_configuration}
//     />
// )

export default () => {
    // const { router } = useRoute()
    // const { route } = useRouteNode('')

    // console.log(route)

    return (
        <FridgeCanvas/>
    )
}
