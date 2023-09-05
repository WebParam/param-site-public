// Assuming you have an HTML form with the id 'myForm'
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://eo9jatrnyl5bx9g.m.pipedream.net', {
        method: 'POST',
        body: formData,
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Change this to response.text() if your API returns plain text
    })
    .then(function(data) {
        console.log('Response from the API:', data);
        
        // Check if the API response indicates success (you may need to adjust this based on your API response structure)
        if (data.success) {
            // Redirect to the success page
            window.location.href = '/success.html'; // Replace 'success.html' with your actual success page URL
        } else {
            // Handle other cases or display an error message
            console.error('API response indicates failure');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
