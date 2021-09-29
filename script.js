 async function getQuote(){
    const proxyUrl = "https://salty-oasis-39543.herokuapp.com/"
    const api ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    try{
        const response= await fetch(proxyUrl+api)
        const data = await response.json()
        console.log(data)
    }
    catch(error){
    getQuote()
    console.log('no quote',error)}
}

getQuote()