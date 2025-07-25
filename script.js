
const quotecontainer=document.querySelector(".Quote");
const  author=document.querySelector("#author");
const btn=document.querySelector(".btn");
const tweetbtn=document.querySelector(".btn1");
console.log(btn);

const api="https://api.api-ninjas.com/v1/quotes";

btn.addEventListener("click",async ()=>{
    try{
        let promise= await fetch(api,{headers:{'X-Api-Key':'wovxc/QjP86E7Xi2Fe7tMg==Vzi5TJ1orbEjxJFm'}});
        let data= await promise.json();
        // console.log(data);
        quotecontainer.innerHTML=" &quot; "+data[0].quote +" &quot; ";
        author.innerHTML="-- "+data[0].author;

    }catch(err){
        console.log("Error fetching quote:", err);
        quotecontainer.style.color="red";
        quotecontainer.innerHTML="Error fetching quote. Please try again later.";
        author.innerHTML="";
    }

})

tweetbtn.addEventListener("click",()=>{
    console.log("Button clicked");
    const link=`https://twitter.com/intent/tweet?text=${quotecontainer.textContent} ${author.textContent}`;
    window.open(link, "TweetWindow,width=550,height=250,left=100,top=100");

})
