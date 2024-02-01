let userName = document.querySelector('.hire-section form input:first-child')
let email = document.querySelector('.hire-section form input:last-child')
let emailMessage = document.querySelector('.hire-section form textarea')
let emailButton = document.querySelector('.hire-section form button')
let form = document.querySelector('.hire-section form')
let body = "name : " + userName.value + "<br/>" + "email : " + email.value + "<br/>" + "message : " + emailMessage.value

form.onsubmit = function(e){
     e.preventDefault()
     if(userName.value && email.value && emailMessage.value != ''){
          emailjs.send("service_a0actmd","template_rym4fd8",{
               from_name: "My portfolio",
               emial_id: email.value,
               user_name: userName.value,
               message: emailMessage.value,
          }).then(function(res){
               alert('success' + res.status)
               window.location.reload()
          });
     } if (email.value == '') {
          email.style.border = '1px dotted #eb6958'
     }else {
          email.style.border = 'none'
     }
     if (emailMessage.value == '') {
          emailMessage.style.border = '1px dotted #eb6958'
     } else {
          emailMessage.style.border = 'none'
     } if (userName.value == '') {
          userName.style.border = '1px dotted #eb6958'
     } else {
          userName.style.border = 'none'
     }
}