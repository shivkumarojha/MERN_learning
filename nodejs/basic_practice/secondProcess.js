fetch("http://localhost:3000/handleSum", {
    method: 'GET'
}).then((result) => {
    result.json().then((resultBody) =>{
        console.log(resultBody)
    })
})