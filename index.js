const generalBtn=document.getElementById("general");
const businessBtn=document.getElementById("business");
const sportsBtn=document.getElementById("sports");
const entertainmentBtn=document.getElementById("entertainment");
const technologyBtn=document.getElementById("technology");
const searchBtn=document.getElementById("searchBtn");

const newsQuery=document.getElementById("newsQuery")
const newsType=document.getElementById("newsType");
const newsdetails=document.getElementById("newsdetails");

 var newsDataArr=[];


//API

const API_KEY="d1665d7a7ecf46c985db942f3b6f0a6a";
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q=";


generalBtn.addEventListener("click",function()
{
    fetchGeneralNews();

});


businessBtn.addEventListener("click",function()
{
    fetchBusinessNews();

});


sportsBtn.addEventListener("click",function()
{
    fetchSportsews();

});

entertainmentBtn.addEventListener("click",function()
{
    fetchEntertainmentNews();

});


technologyBtn.addEventListener("click",function()
{
    fetchTechnologyNews();

});


searchBtn.addEventListener("click",function()
{
    fetchQueryNews();

});

const fetchGeneralNews=async()=>{
    const response=await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson=await response.status.json();
        newsDataArr=myJson;

    }
    else
    {
         console.log(response.status, response.statusText);
    }
    displayNews();
}


const fetchBusinessNews=async()=>{
    const response=await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson=await response.status.json();
        newsDataArr=myJson;

    }
    else
    {
        console.log(response.status, response.statusText);
         
    }
    displayNews();
}


const fetchSportsews=async()=>{
    const response=await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson=await response.status.json();
        newsDataArr=myJson;

    }
    else
    {
        console.log(response.status, response.statusText);
         
    }
    displayNews();
}


const fetchEntertainmentNews=async()=>{
    const response=await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson=await response.status.json();
        console.log(myJson);
        newsDataArr=myJson;

    }
    else
    {
        console.log(response.status, response.statusText);
         
    }
    displayNews();
}


const fetchTechnologyNews=async()=>{
    const response=await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson=await response.status.json();
        newsDataArr=myJson;

    }
    else
    {
        console.log(response.status, response.statusText);
         
    }
    displayNews();
}


const fetchQueryNews=async()=>{
    const response=await fetch(SEARCH_NEWS+newsQuery.value+"&apiKey="+API_KEY);
    newsDataArr=[];
    if(response.status >=200 && response.status<300)
    {
        const myJson  =await response.status.json();
        newsDataArr=myJson;
    }
    else
    {
        console.log(response.status, response.statusText);  
    }
    displayNews();
}



