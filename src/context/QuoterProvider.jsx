import { useState, createContext } from "react"
import { getYearDifference, calcBrand, calcPlan, formatMoney } from '../helpers'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [datos, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)

    const handleChangeData = e => {
        setData({
            ...datos,
            [e.target.name] : e.target.value
        })
    } 

    const quoteInsurance = () => {
        //base
        let result = 2000
        console.log("año:", datos.year)
        //Get year difference
        const difference = getYearDifference(datos.year)
        console.log("difference:", difference)
        //Decrease 3% each year
        result -= ((difference * 3) * result) / 100

        //Brands
        result *= calcBrand(datos.brand)
        console.log("marca:", datos.brand)
        console.log(result)

        //Basic 20% Full 50% more
        result *= calcPlan(datos.plan)

        result = formatMoney(result)
        console.log("plan:", datos.plan)
        console.log(result)
        setResult(result)
    } 

    return (
        <QuoterContext.Provider
            value={{
                datos,
                handleChangeData,
                error,
                setError,
                quoteInsurance,
                result
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