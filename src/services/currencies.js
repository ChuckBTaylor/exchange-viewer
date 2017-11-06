export function fetchCurrencies(code){
  return (
    fetch(`https://api.fixer.io/latest?base=${code}`)
    .then(res => res.json())
  )
}
