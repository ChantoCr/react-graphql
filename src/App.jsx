import React, { useState } from 'react'
import './App.css'
import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { usePersons } from './persons/custom-hooks'
import { Notify } from './Notify'
import { PhoneForm } from './PhoneForm'


function App() {

  const {data, error, loading} = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)
  //const {data, error, loading} = useQuery(ALL_PERSONS)
  //const {data, error, loading} = useQuery(ALL_PERSONS, {pollInterval: 2000})

  if (error) return <span style='color: red'>{error}</span>
  const  notifyError = message =>
  setErrorMessage(message)
  setTimeout(() => setErrorMessage(null), 5000);

  // useEffect(() => {
  //   fetch('http://localhost:4000', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ query: `
  //       query {
  //         allPersons {
  //           name
  //           phone
  //         }
  //       }
  //     `})
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res.data)
  //   })
  // })


  return (
    <div className="App">
      <Notify errorMessage={errorMessage} />
      {loading 
        ? <p>Loading...</p>
  
        : <Persons persons={data?.allPersons} />
        
        /*(
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1><p>GraphQL + React </p>
            <Persons persons={data.allPersons} />
               {
                data && data.allPersons.map(person => person.name).join(', ')
              } 
            </h1>
          </>
          
          
        )*/
      }
      <PersonForm notifyError={notifyError}/>
      <PhoneForm />
    </div>
  )
  
}


export default App
