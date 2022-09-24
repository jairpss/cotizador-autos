import { BRANDS, YEARS } from '../constants/index'

const Formulario = () => {
  return (
    <>

        <form>
            <div className="my-5">
                <label className="block mb-2 font-semibold text-slate-500">Brand</label>
                <select
                    name="brand"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md"
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
                <label className="block mb-2 font-semibold text-slate-500">Brand</label>
                <select
                    name="brand"
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md"
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

        </form>
    </>
  )
}

export default Formulario