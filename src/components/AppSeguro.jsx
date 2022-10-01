import Formulario from './Formulario'
import Spinner from './Spinner'
import Result from './Result'
import useQuoter from '../hooks/useQuoter'

const AppSeguro = () => {
 
  const { result, loading } = useQuoter()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-extrabold font-figtree">
                Car Insurance Quote
            </h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-sm rounded-lg p-10">
            <Formulario />

            {loading ? <Spinner /> : <Result />}
        </main>
    </>
  )
}

export default AppSeguro