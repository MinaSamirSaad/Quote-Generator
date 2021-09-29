const quoteContainer= document.getElementById('quote-contaioner');
const quoteText= document.getElementById('quote');
const authorText= document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');
const loader = document.getElementById('loader');

const showloadingSpinner=()=>{
    loader.hidden=false;
    quoteContainer.hidden=true;
}

const removeLoadingSpinner=()=>{
    if(!loader.hidden){
        quoteContainer.hidden=false;
        loader.hidden=true
    }
}
async function getQuote(){
    showloadingSpinner();
    const proxyUrl = "https://salty-oasis-39543.herokuapp.com/"
    const api ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    try{
        const response= await fetch(proxyUrl+api);
        const data = await response.json();
        // is Author is blank,add "UnKnown"
        authorText.innerText=data.quoteAuthor?data.quoteAuthor:"UnKnown";
        // Reduce font size for long quotes
        data.quoteText.length>120?quoteText.classList.add("long-quote"):quoteText.classList.remove("long-quote");
        quoteText.innerText=data.quoteText

        removeLoadingSpinner();
    }
    catch(error){
    getQuote()
    }
}
// tweet Quote
const tweetQuote =()=>{
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl,'_blank')
}
// Event listeners
newQuoteBtn.addEventListener('click',getQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuote()