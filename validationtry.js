const forms=document.getElementById('form')
const nameinp=document.getElementById('name')
const mobilenumberinp=document.getElementById('mobilenumber')
const emailinp=document.getElementById('email')
const subjectsinp=document.getElementById('subject')
const messageinp=document.getElementById('message')

forms.addEventListener('submit',a=>{
    a.preventDefault()
    validateForm()
})
function validateForm(){
    const name=nameinp.value.trim()
    const mobilenumber=mobilenumberinp.value.trim()
    const email=emailinp.value.trim()
    const subject=subjectsinp.value.trim()
    const message=messageinp.value.trim()
    if(name ===""){
        setError(nameinp,'name is required','name-error')
    }
    if(mobilenumber ===""){
        setError(mobilenumberinp,'mobilenumber is requried','number-error')
    }else if(mobilenumber.length<10){
        setError(mobilenumberinp,'please enter 10 digit','number-error',)
    }
    if(email ===""){
        setError(emailinp,'email is requried','email-error')
    }
    if(subject ===""){
        setError(emailinp,'please enter subject','subject-error')
    }
    if(messaage ===""){
        setError(messageinp,'message is requried','message-error')
    }
}

function setError(input, errors, errorid) {
    const errorElement = document.getElementById(errorid);
    errorElement.innerHTML = errors;
  }
// <! ---------------------------------submition---------------------------------------->

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var formElement = e.target;
    if (formElement.checkValidity()) {
        var formData = new FormData(formElement);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbzDMFIp8PWpJimVUC-ECECyYetiTXD8G9wWpaKh09XcngxLoaDa2zgt62JH-smKTDE4/exec");
        xhr.onload = function () {
            if("form" !="")
            if (xhr.status === 200) {
                alert("Form submitted successfully");
                window.location.reload();
            } else {
                alert("Something went wrong");
            }
        };
        xhr.onerror = function () {
            alert("Something went wrong");
        };
        xhr.send(formData);
    }
});

