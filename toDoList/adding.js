
const name=document.querySelector("#name")
const contentt=document.querySelector("#contentt")
//alert(name)
body=document.querySelector("#list")
function add(){
    if(name.value  && contentt.value){
        divi=document.createElement("div")
        item=document.createElement("h3")
        item.style.display="inline"
        item.innerHTML=name.value+" : "+contentt.value;
        divi.appendChild(item)
        name.value=""
        contentt.value=""
        poub=document.createElement("button")

        const a=document.createElement("img")
        a.src="../assets/img.svg";
        a.style.width="2em";
        poub.appendChild(a)
            //   poub.onclick=`supp()`
      poub.addEventListener("click",  (e) => {
          e.target.parentNode.previousSibling.remove();
          e.target.parentNode.remove();
      })
        divi.appendChild(poub)
       // setTimeout(()=>body.removeChild(item),2000)
        body.appendChild(divi)
    }
}
function supp(h){
   h.previousSibling.remove();
   h.remove();
}
