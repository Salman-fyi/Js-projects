const qrimageEl=document.querySelector(".qr-image");
const generateBtn=document.querySelector(".button");
const wrapperEl=document.querySelector(".wrapper");
const qrcodeEl=document.querySelector(".qr-code img");
const qrinputEl=document.querySelector(".qr-form input");



generateBtn.addEventListener("click",()=>{
    updateQrcode();
});

function updateQrcode(){
    const qrinput=qrinputEl.value;
    if(!qrinput){
        alert("Empty input...");
    }
    generateBtn.innerText="Generating QR code...";
    qrcodeEl.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput}`;
    qrcodeEl.addEventListener("load",()=>{
        qrcodeEl.style.cursor="pointer";
        generateBtn.innerText="Generate QR code";
        qrimageEl.classList.add("active");
        wrapperEl.style.height="auto";
        downloadQR();
    });

};
function downloadQR(){
    qrcodeEl.addEventListener("click",()=>{
        const link=document.createElement("a");
        link.href=qrcodeEl.src;
        link.download="qrcode.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}
qrinputEl.addEventListener("keyup",()=>{
    if (!qrinputEl.value){
        qrimageEl.classList.remove("active");
        wrapperEl.style.height="165px";
    }
});
