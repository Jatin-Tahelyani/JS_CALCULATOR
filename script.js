let string = ""
let buttons = document.querySelectorAll(".btns")
let input = document.querySelector(".in")
let arr = Array.from(buttons)
input.disabled = true;
arr.forEach((e) => {
    
    e.addEventListener("click", (evt) => {

       

        console.log(evt.target)
        if (evt.target.innerHTML == "=") {
            input.disabled = false;
            string = eval(string)
            input.value = string;
            input.disabled = true;
        }
        else if (evt.target.innerHTML == "X") {
            input.disabled = false;
            string = string + "*"
            input.value = string
            input.disabled = true;
        } else if (evt.target.innerHTML == "Ac") {
            input.disabled = false;
            string = ""
            input.value = string
            input.disabled = true;
        } else if (evt.target.innerHTML == "Del") {
            input.disabled = false;
            string = string.substring(0, string.length - 1)
            input.value = string;
            input.disabled = true;
        } else {
            input.disabled = false;
            string = string + evt.target.innerHTML
            input.value = string
            input.disabled = true;
        }
        input.disabled = true;

    })
}) 
