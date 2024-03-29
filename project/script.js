const wrapper = document.querySelector(".wrapper")
const qrInput = wrapper.querySelector(".form input")
const generateBtn = wrapper.querySelector(".form button")
const qrImg = wrapper.querySelector(".qr-code img")


generateBtn.addEventListener('click', () => {

    let qrValue = qrInput.value
   
    if(!qrValue) return // prevents the code from returning any value incase the input field is empty
    generateBtn.innerText = 'Generating QR Code...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x150&data=${qrValue}` 
    qrImg.addEventListener("load", () => {
    wrapper.classList.add("active")
    generateBtn.innerText ='Generate QR Code'
})
    
})

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})
