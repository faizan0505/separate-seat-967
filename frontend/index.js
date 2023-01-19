let account = document.querySelector("#account")
let ss = 1;
account.addEventListener("click",()=>{
    // alert("Imwork")
    if(ss==1){
        ss=0;
        document.querySelector("#acc").style.display = "block"
    }else{
        ss=1;
        document.querySelector("#acc").style.display = "none"
    }
})