async function fetchData() {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()
    console.log(data)
}

fetchData()