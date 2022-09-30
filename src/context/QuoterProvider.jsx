import { useState, createContext } from "react"
import { getYearDifference } from '../helpers'

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
        //base
        let result = 2000

        //Get year difference
        const difference = getYearDifference(data.year)

        //Decrease 3% each year
        result -= ((difference * 3) * result) / 100



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