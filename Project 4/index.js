console.log("This is index.js")

const name = document.getElementById('name')
const email = document.getElementById('enterEmail')
const phone = document.getElementById('call')
let validUser = false


name.addEventListener('blur', () => {
    console.log("name is blurred")
    //Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    let str = name.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log(" Your name is valid")
        name.classList.remove("is-invalid")
   
    }
    else {
        console.log('Your name is not valid')
        name.classList.add('is-invalid')
      
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred")
    //Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log(" Your email is valid")
        email.classList.remove("is-invalid")
  
    }
    else {
        console.log('Your email is not valid')
        email.classList.add('is-invalid')
     
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred")
    //Validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value
    console.log(regex, str)
    if (regex.test(str)) {
        console.log(" Your phone is valid")
        phone.classList.remove("is-invalid")
       
    }
    else {
        console.log('Your phone is not valid')
        phone.classList.add('is-invalid')
        
    }
})

let submit = document.getElementById("submit");
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
  let success = document.getElementById('success')
  success.classList.add('show')
})