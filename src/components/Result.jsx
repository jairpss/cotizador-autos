import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from "../constants"

const Result = () => {

    const { result, datos } = useQuoter()
    const { brand, plan, year } = datos

    const [nameBrand] = BRANDS.filter(b => b.id === Number(brand))
    const [namePlan] = PLANS.filter(p => p.id === Number(plan))

    console.log("BRAND: " + brand)

    if(result === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow rounded-lg">
        <h2 className="text-gray-600 font-bold text-2xl font-figtree">
            Resume
        </h2>

        <p className="my-2">
            <span className="font-figtree font-semibold text-lg text-gray-700">Brand: </span>
            {brand}
        </p>

        <p className="my-2">
            <span className="font-figtree font-semibold text-lg text-gray-700">Plan: </span>
            {namePlan.name}
        </p>

        <p className="my-2">
            <span className="font-figtree font-semibold text-lg text-gray-700">Car year: </span>
            {year}
        </p>

        <p className="my-2 text-2xl">
            <span className="font-figtree font-semibold text-gray-700">Total: </span>
            {result}
        </p>
    </div>
  )
}

export default Result