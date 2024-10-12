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
var messages=[];
//const validatemail='/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/';

if(username.length<3)
{
    isValid=false;
    messages[0]=['You enter incorrect user'];
   
}
if (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) 
{
    isValid=false;
    messages[1]=['Email Requared'];
  
}
if(password.length<8)
{
    isValid=false;
    messages[2]=['password length  invalid'];
   
}
if(isValid){
    const displayfib=document.getElementById('form-feedback');
    displayfib.style.display='block';
    feedbackDiv.textContent="Registration successful!";
    displayfib.style.color='#28a745';
      // If all validations pass, submit the form
      form.submit();
}
if(!isValid){
    const displayfib1=document.getElementById('form-feedback');
    displayfib1.style.display='block';
    //displayfib1.style.color='#dc3545';
       // Join messages with <br> to form a single string
       const feedbackMessage = messages.join('<br>');
    
       // Assign the message to the innerHTML of feedbackDiv
       displayfib1.innerHTML = feedbackMessage;
       
       // Set the color of feedbackDiv
       displayfib1.style.color = "#dc3545";
    /*for(let i=0;i<=messages.length;i++)
    {
//console.log(messages[i]);
       feedbackDiv.innerHTML=`<br>${messages[i]}</br>`;
       
    }
    */
     
}


    });
});
    