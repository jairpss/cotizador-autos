import useQuoter from '../hooks/useQuoter'

const Error = () => {
    const { error } = useQuoter()
  
  return (
    <div className="border text-center border-rose-500 bg-rose-50 py-1 text-rose-700 rounded-lg font-jost">
        <p>{error}</p>
    </div>
  )
}

export default Error