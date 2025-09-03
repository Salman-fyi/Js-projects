const bodyel=document.querySelector("body");
bodyel.addEventListener("mousemove",(event)=>{
    const spanel=document.createElement("span");
    spanel.style.left=event.offsetX+"px";
    spanel.style.top=event.offsetY+"px";
    bodyel.appendChild(spanel);
    setTimeout(()=>{
        spanel.remove();
    },3000);
    const randomno=Math.random()*100;
    spanel.style.height=randomno+"px";
    spanel.style.width=randomno+"px";    
});
