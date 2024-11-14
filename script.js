const frm=document.querySelector('#frm');
const qrcode=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');


function generateQRCode(e){
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrDark=document.querySelector('#colourDark').value;
    const clrLight=document.querySelector('#colourLight').value;

    if(url===''){
        alert("Please Enter Your Website Link");
    }
    else{
        spinner.style.display='flex';
        setTimeout(()=>{
            spinner.style.display='none';
            qrcodeElement.innerHTML="";
            const qrcode=new QRCode('qrcode',{
                text:url,
                width:size,
                height:size,
                colourDark:clrDark,
                colourLight:clrLight,
                correctLevel:QRCode.CorrectLevel.H
            });
        },1000);
        createDownloadLink();
        
    }
}
frm.addEventListener('submit',generateQRCode);
function createDownloadLink(){
    const imgSrc=qrcodeElement.querySelector('img').src;
    btnSave.href=imgSrc;
}
btnSave.addEventListener('click',()=>{
    setTimeout(()=>{
        btnSave.download='qrcode';
    },50);
});
    