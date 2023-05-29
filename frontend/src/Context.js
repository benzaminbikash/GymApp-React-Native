import {createContext, useState} from 'react'

export const FitnessItem = createContext()
export default FitnessContext = ({children}) => {
  const [complete, setComplete] = useState([])
  const [workout, setWorkout] = useState(0)
  const [kcal, setCal] = useState(0)
  const [mins, setMinus] = useState(0)

  return (
    <FitnessItem.Provider
      value={{
        complete,
        workout,
        kcal,
        mins,
        setMinus,
        setCal,
        setWorkout,
        setComplete,
      }}>
      {children}
    </FitnessItem.Provider>
  )
}
