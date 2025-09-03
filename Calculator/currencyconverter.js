const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector("form .fromdropdown select");
const toCurr=document.querySelector("form .todropdown select");
const exchange_result=document.querySelector("form .exchange-result");
const reversebtn=document.querySelector("form i")


for (let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    }
    
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    });
};


function updateExchangeRate(){
    let amount=document.querySelector("form .amount input");
    let amountValue=amount.value;
    if (amountValue<1 || amountValue==""){
        amount.value=1;
        amountValue=1;
    }

    const URL= `https://api.frankfurter.app/latest?amount=${amountValue}&from=${fromCurr.value}&to=${toCurr.value}`;
    
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>{
        let rate=data.rates[toCurr.value];
        let finalAmount = (amountValue * rate).toFixed(2);
        exchange_result.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    })
    .catch((error) => {
        exchange_result.innerText = "Failed to fetch exchange rate.";
        console.error("Error fetching data:", error);
    });

};
function updateFlag(element){
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    
});

reversebtn.addEventListener("click",()=>{
    temprev_tovalue=toCurr.value;
    toCurr.value=fromCurr.value;
    fromCurr.value=temprev_tovalue;
    updateFlag(fromCurr);
    updateFlag(toCurr);

})
