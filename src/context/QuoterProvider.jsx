import { useState, createContext } from "react"

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const quoteInsurance = () => {
        console.log('cotizando...')
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoteInsurance
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext