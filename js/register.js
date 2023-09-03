const pswBtn = document.querySelector(".filed input[type='password']"),
    togleBtn = document.querySelector(".filed i");

togleBtn.onclick = () => {
    if(pswBtn.type == "password"){
        pswBtn.type = "text";
        togleBtn.classList.add("active");
    }else{
        pswBtn.type = "password";
        togleBtn.classList.remove("active");
    }
}