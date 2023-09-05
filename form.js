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
        return response.json(); 
    })
    .then(function(data) {
        console.log('Response from the API:', data);
        
       
        if (data.success) {
            window.location.href = '/success.html'; 
        } else {
            
            console.error('API response indicates failure');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
