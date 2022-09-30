import { useState, createContext } from "react"
import { getYearDifference, calcBrand, calcPlan, formatMoney } from '../helpers'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    } 

    const quoteInsurance = () => {
        //base
        let result = 2000
        console.log("año:", data.year)
        //Get year difference
        const difference = getYearDifference(data.year)
        console.log("difference:", difference)
        //Decrease 3% each year
        result -= ((difference * 3) * result) / 100

        //Brands
        result *= calcBrand(data.brand)
        console.log("marca:", data.brand)
        console.log(result)

        //Basic 20% Full 50% more
        result *= calcPlan(data.plan)

        result = formatMoney(result)
        console.log("plan:", data.plan)
        console.log(result)
        setResult(result)
        

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