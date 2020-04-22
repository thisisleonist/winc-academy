import React from 'react'
import DentistData from '../Dataset/DentistData'
import AssistantData from '../Dataset/AssistantData'
import PatientData from '../Dataset/PatientData'
import AppointmentData from '../Dataset/AppointmentData'
import DayView from './DayView'

export default class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            dentists: [],
            assistants: [],
            patients: [],
            appointments: [],
            displayDay: 1,
            toggleView: 'afspraken'
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

    toggleView(event) {
        event.preventDefault()
        const value = event.target.value
        this.setState(state => {
            if (value === 'kalender') {
                state.toggleView = 'afspraken'
            } else {
                state.toggleView = 'kalender'
            }
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

        if (this.state.toggleView === 'afspraken') {
            const options = dates.map(date => {
                let event = new Date()
                event.setDate(date)

                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/
                //    Reference/Global_Objects/Date/toLocaleDateString

                return (
                    <option key={date} value={date}>
                        {event.toLocaleDateString('nl', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </option>
                )
            })

            return (
                <React.Fragment>
                    <select onChange={event => this.displayDay(event)}>
                        {options}
                    </select>
                    <button
                        value='afspraken'
                        onClick={event => this.toggleView(event)}
                    >
                        Kalender
                    </button>
                    <ul className='dayview'>
                        <DayView
                            date={this.state.displayDay}
                            state={this.state}
                        />
                    </ul>
                </React.Fragment>
            )
        } else {
            const cells = dates.map(date => {
                return (
                    <div key={date}>
                        {date}
                        <ul className='dayview'>
                            <DayView date={date} state={this.state} />
                        </ul>
                    </div>
                )
            })
            return (
                <React.Fragment>
                    <button
                        value='kalender'
                        onClick={event => this.toggleView(event)}
                    >
                        Afspraken vandaag
                    </button>
                    <div className='calendarview'>
                        <div className='header'>
                            <div>Maandag</div>
                            <div>Dinsdag</div>
                            <div>Woensdag</div>
                            <div>Donderdag</div>
                            <div>Vrijdag</div>
                        </div>
                        <div className='table'>{cells}</div>
                    </div>
                </React.Fragment>
            )
        }
    }
}
