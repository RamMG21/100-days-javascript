const lenghtSlider = document.querySelector("pass-len input");
const options = document.querySelector(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-set");
const generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    upercases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLenght = lenghtSlider.value;

    options.forEach(option => {
        if(option.cheked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
            }else if (option.id === "spaces"){
                staticPassword += ` ${staticPassword}`;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0;  i < passLenght ; i++){
        let randomchar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) {
            !randomPassword.includes(randomchar) | randomchar == " " ? 
        randomPassword += randomchar : i--;
        } else {
            randomPassword += randomchar;
        }
    }
    passwordInput.value = randomPassword;
}

const updatePasswordIndicator = () => {
    passIndicator.id = lenghtSlider.value <= 8 ? 
    "weak" : lenghtSlider.value <= 16 ? "medium": "strong";
}

const updateSlider = () => {
    document.querySelector(".pass-len span").innerText = lenghtSlider.value;
    generatePassword();
    updatePasswordIndicator();
}

updateSlider();

const copyPassword = () => {
    navigator.clipboard,writeText(passwordInput.value);
    copyIcon.innerTextc = "check";
    copyIcon.style.color = "#4285f4";
        setTimeout(() =>{
            copyIcon.innerText = "copy_all"
            copyIcon.style.color = "#707070"
        }, 1500)
}

copyIcon.addEventListener("click", copyPassword);
lenghtSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword);