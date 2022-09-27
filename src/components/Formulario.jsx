import { Fragment } from 'react'
import { BRANDS, YEARS, PLANS } from '../constants/index'
import useQuoter from '../hooks/useQuoter'

const Formulario = () => {

  return (
    <>

        <form>
            <div className="my-5">
                <label className="block mb-2 font-semibold text-slate-500 font-jost">Brand</label>
                <select
                    name="brand"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md font-jost"
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
                <label className="block mb-2 font-semibold text-slate-500 font-jost">Year</label>
                <select
                    name="brand"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md font-jost"
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
                <label className="block mb-2 font-semibold text-slate-500 font-jost">Plans</label>
                <div className="flex gap-3 items-center">
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label className="font-jost">
                                {plan.name}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            
            <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-semibold rounded-md font-jost text-lg"
                value="Quote"
            />
        </form>
    </>
  )
}

export default Formulario