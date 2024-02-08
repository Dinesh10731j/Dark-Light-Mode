const CheckBox = document.querySelector("#Checkbox");
const Main = document.querySelector("#main");
const Slider = document.querySelector("#slider")

CheckBox.addEventListener("change",(e)=>{
console.log(e)


    if(CheckBox.checked){
        Main.style.background="white";
        Slider.innerHTML=`
        <i class="fa-solid fa-sun"></i>`

    }else{
        Main.style.background="black";

        Slider.innerHTML= `<i class="fa-solid fa-moon"></i>`
    }
})