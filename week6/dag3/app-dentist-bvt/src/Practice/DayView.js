import React from 'react'

const DayView = props => {
    const {state, date} = props
    const {dentists, assistants, patients, appointments} = state

    return appointments
        .filter(row => {
            return row.date === parseInt(date)
        })
        .sort((a, b) => {
            if (a.time < b.time) {
                return -1
            } else if (a.time > b.time) {
                return 1
            }
            return 0
        })
        .map(item => {
            return (
                <li className='appointment' key={item.id}>
                    <div className='time'>{item.time}:00 uur</div>
                    <div className='patient'>
                        Patient:{getPatient(patients, item.patient, true)}
                    </div>
                    <div className='dentist'>
                        Dentist:{getDentist(dentists, item.dentist, true)}
                    </div>
                    <div className='assistant'>
                        Assistant:
                        {getAssistant(assistants, item.assistant, true)}
                    </div>
                </li>
            )
        })
}

const getPatient = (patients, id, dataToReturn) => {
    if (id === null) {
        return ' No'
    }
    const patient = patients.find(row => {
        return row.id === id
    })
    if (dataToReturn) {
        return ` ${patient.first_name} ${patient.last_name}`
    }
    return patient
}

const getDentist = (dentists, id, dataToReturn) => {
    if (id === null) {
        return ' No'
    }
    const dentist = dentists.find(row => {
        return row.id === id
    })
    if (dataToReturn) {
        return ` ${dentist.first_name} ${dentist.last_name}`
    }
    return dentist
}

const getAssistant = (assistants, id, dataToReturn) => {
    if (id === null) {
        return ' No'
    }
    const assistant = assistants.find(row => {
        return row.id === id
    })
    if (dataToReturn) {
        return ` ${assistant.first_name} ${assistant.last_name}`
    }
    return assistant
}

export default DayView
