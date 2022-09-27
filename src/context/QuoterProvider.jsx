import { useSatate, createContext } from "react"

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [data, setData] = useSatate({
        brand: '',
        year: '',
        plan: ''
    })

    const hadleChangeData = e => {
        setData({
            ...data,
            [e.target.namr]: e.target.value
        })
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                hadleChangeData
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