while(confirm("vous voulez jouer ? ")){
    a=Math.floor(Math.random()*10)
    //alert("le nombre est : "+a)
    let inn="sdfjk"
    nb=3
    won=0
    while(nb-- && inn){
        t=nb+1
        inn=prompt("You still have "+t+" tentatives !\n Guess the number : ")
        b=Number(inn)
        if(a==b){
            alert("yess you wonn !")
            won=1
            break;

        }
    }
    if(!won){
        alert("Next time maybe ! The answer is "+a)
    }



    //console.log(inn)
}
