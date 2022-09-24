export const BRANDS = [
    {id: 1, name: 'Audi'},
    {id: 2, name: 'Chevrolet'},
    {id: 3, name: 'Toyota'}
]

const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from(
    new Array(15),
    (value, index) => YEARMAX - index
)

export const PLANS = [
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Full'}
]