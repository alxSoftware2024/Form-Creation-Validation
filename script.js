document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const form=document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username=document.getElementById('username').value.trim();
        const email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();

    });
});
    