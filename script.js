document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const form=document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username=document.getElementById('username').value.trim();
        const email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();
var isValid=true;
var messages=[''];
const validatemail='/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/';

if(username.length<3)
{
    isValid=false;
    messages[0]=['You enter incorrect user'];
}
if(!email.match(validatemail))
{
    isValid=false;
    messages[1]=['Email Requared'];
}
if(password.length<8)
{
    isValid=false;
    messages[2]=['password length  invalid'];
}
if(isValid==true){
    const displayfib=document.getElementById('form-feedback');
    displayfib.style.display='block';
    displayfib.style.color='28a745';
    feedbackDiv.innerHTML="Registration successful!";
    
      // If all validations pass, submit the form
      //form.submit();
}
if(isValid==false){
    const displayfib1=document.getElementById('form-feedback');
    displayfib1.style.display='block';
    displayfib1.style.color='dc3545';
    feedbackDiv.innerHTML="Registration unsuccessful!";
    
      // If all validations pass, submit the form
      //form.submit();
}
form.submit();

    });
});
    