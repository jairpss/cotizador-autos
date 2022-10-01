import { Fragment } from 'react'
import { BRANDS, YEARS, PLANS } from '../constants/index'
import useQuoter from '../hooks/useQuoter'
import Error from '../components/Error'

const Formulario = () => {

    const { datos, handleChangeData, error, setError, quoteInsurance } = useQuoter()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError('Fill all the fields')
            return
        }
        setError('')
        quoteInsurance()
    }

  return (
    <>
        {error && <Error />}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-2 font-bold text-slate-500 font-figtree">Brand</label>
                <select
                    name="brand"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md font-figtree"
                    onChange={e => handleChangeData(e)}
                    value={datos.brand}
                >
                    <option value="">-- Select brand --</option>

                    {BRANDS.map(brand => (
                        <option
                            key={brand.id}
                            value={brand.name}
                        >
                            {brand.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-2 font-bold text-slate-500 font-figtree">Year</label>
                <select
                    name="year"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md font-figtree"
                    onChange={e => handleChangeData(e)}
                    value={datos.year}
                >
                    <option value="">-- Select year --</option>

                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-2 font-bold text-slate-500 font-figtree">Plans</label>
                <div className="flex gap-3 items-center">
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label className="font-figtree">
                                {plan.name}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={e => handleChangeData(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            
            <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold rounded-md font-figtree text-lg"
                value="Quote"
            />
        </form>
    </>
  )
}

export default Formulario