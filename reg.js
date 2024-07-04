<script>
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if name or email fields are empty
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Optionally, you can perform additional validation here

        // Display success message
        const successMessage = "Your application has been successfully submitted. One of our team will contact you soon.";
        document.getElementById('sign-up-form').reset(); // Reset form fields
        event.preventDefault(); // Prevent form submission
        displaySuccessMessage(successMessage); // Call function to display success message
    }
});

// Function to display success message
function displaySuccessMessage(message) {
    // Create a new element for the message
    const successDiv = document.createElement('div');
    successDiv.classList.add('success-message');
    successDiv.textContent = message;

    // Insert the success message before the form
    const signUpSection = document.querySelector('.sign-up');
    signUpSection.insertBefore(successDiv, signUpSection.firstChild);

    // Remove the success message after 5 seconds (optional)
    setTimeout(function() {
        successDiv.remove();
    }, 5000); // Remove after 5 seconds (5000 milliseconds)
}
</script>
