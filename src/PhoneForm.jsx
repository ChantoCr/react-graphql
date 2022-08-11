import React, { useState } from "react"
import { useMutation } from "@apollo/client";
import { EDIT_NUMBER } from './persons/graphql-mutation'

export const PhoneForm= () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [ changeNumber ]= useMutation(EDIT_NUMBER)

    const handleSubmit = e => {
        e.preventDefault()

        changeNumber({ variables: {name, phone}})

        setName('')
        setPhone('')
    }

    return (
        <div>
            <h2>Editar Telefono</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nombre" value={name} onChange={ evt => setName(evt.target.value)} /> <br />
                <input placeholder="Telefono" value={phone} onChange={ evt => setPhone(evt.target.value)} /> <br />
                <button>Cambiar Telefono</button>
            </form>
        </div>
    )

}