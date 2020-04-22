import React from 'react'
import DentistData from '../Dataset/DentistData'
import AssistantData from '../Dataset/AssistantData'
import PatientData from '../Dataset/PatientData'
import AppointmentData from '../Dataset/AppointmentData'
import DayList from './DayList'

export default class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            dentists: [],
            assistants: [],
            patients: [],
            appointments: [],
            displayDay: 1
        }
    }

    componentDidMount() {
        this.setState(state => {
            state.dentists = DentistData()
            state.assistants = AssistantData()
            state.patients = PatientData()
            state.appointments = AppointmentData()
            return state
        })
    }

    displayDay(event) {
        event.preventDefault()
        const date = event.target.value
        this.setState(state => {
            state.displayDay = date
            return state
        })
    }

    render() {
        const dates = [
            1,
            2,
            3,
            4,
            5,
            8,
            9,
            10,
            11,
            12,
            15,
            16,
            17,
            18,
            19,
            22,
            23,
            24,
            25,
            26
        ]
        const options = dates.map(date => {
            return (
                <option key={date} value={date}>
                    {date} april
                </option>
            )
        })

        return (
            <React.Fragment>
                <select onChange={event => this.displayDay(event)}>
                    {options}
                </select>
                <ul className='dayview'>
                    <DayList date={this.state.displayDay} state={this.state} />
                </ul>
            </React.Fragment>
        )
    }
}
