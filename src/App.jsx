import { QuoterProvider } from './context/QuoterProvider'
import AppSeguro from './components/AppSeguro'

function App() {
  

  return (
    <div >
      <QuoterProvider>
        <AppSeguro />
      </QuoterProvider>
    </div>
  )
}

export default App
