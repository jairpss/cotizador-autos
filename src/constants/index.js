export const BRANDS = [
    {id: 1, name: 'Porsche'},
    {id: 2, name: 'Audi'},
    {id: 3, name: 'Volkswagen'},
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