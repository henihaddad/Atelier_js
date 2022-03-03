const txt=document.querySelector("h1")
console.log(txt.innerHTML)
sizee=document.querySelector("#number")
sizee.addEventListener("input",(e)=>{
    txt.style.fontSize=sizee.value+"vw"
})
font=document.querySelector("#font")
font.addEventListener("input",()=>{
    txt.style.fontFamily=font.value
})
color=document.querySelector("#color")
color.addEventListener("input",()=>{
    txt.style.color=color.value
})
/*
function changeTaille(){
    txt.style["size"]=`document.querySelector("#taille").value`+"px"
}*/