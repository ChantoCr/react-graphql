import React, { useState } from "react"
import { useMutation } from "@apollo/client";
import { ALL_PERSONS } from "./persons/graphql-queries";
import { CREATE_PERSON } from './persons/graphql-mutation'

export const PersonForm= ({notifyError}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')

    const [ createPerson ] = useMutation (CREATE_PERSON, {
        refretchQueries: [{query: ALL_PERSONS}],
        onError: (error) => {
            notifyError(error.graphQLErrors[0].message)
        }
    })

    const handleSubmit = e => {
        e.preventDefault()

        createPerson({ variables: {name, phone, street, city}})

        setName('')
        setPhone('')
        setStreet('')
        setCity('')
    }

    return (
        <div>
            <h2>Crear una Persona</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nombre" value={name} onChange={ evt => setName(evt.target.value)} /> <br />
                <input placeholder="Telefono" value={phone} onChange={ evt => setPhone(evt.target.value)} /> <br />
                <input placeholder="Calle" value={street} onChange={ evt => setStreet(evt.target.value)} /><br />
                <input placeholder="Ciudad" value={city} onChange={ evt => setCity(evt.target.value)} /><br />
                <button>Agregar Persona</button>
            </form>
        </div>
    )

}