import React from 'react'
import Dentists from './dentists.json'

export default class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            dentists: [],
            assistants: [],
            patients: [],
            appointments: []
        }
        this.createDayView = this.createDayView.bind(this)
    }

    componentDidMount() {
        const dataset = ['dentists', 'assistants', 'patients', 'appointments']
        this.setState(state => {
            let newState = state
            dataset.forEach(set => {
                this.getData('GET', `${set}.json`).then(data => {
                    newState[set] = data
                })
            })
            return newState
        })
    }

    async getData(method, api, body) {
        try {
            let result = await fetch(api, {
                method: method,
                body: JSON.stringify(body)
            })
            return await result.json()
        } catch (error) {
            console.log(error)
        }
    }

    createDayView = day => {
        console.log(this.state)

        // const appointments = this.state.appointments
        // const appointmentList = appointments.filter(appointment => {
        //     return appointment.day === day
        // })
        return 'Hello World'
        // for (i = 0; i < 30; i++) {
        //     appointments.push(`<li class="appointment">
        //     <div class="time">${getRandomTime()}</div>
        //     <div class="patient">Patiënt: ${getRandomName()}</div>
        //     <div class="dentist">Tandarts: ${getRandomName()}</div>
        //     <div class="assistant">Assistent: ${getRandomName()}</div>
        //     </li>`)
        // }
    }

    render() {
        return <ul>{this.createDayView(2)}</ul>
    }
}
