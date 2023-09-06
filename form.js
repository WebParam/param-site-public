// Assuming you have an HTML form with the id 'myForm'
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://eo9jatrnyl5bx9g.m.pipedream.net', {
        method: 'POST',
        body: formData,
    })
    .then(function(data) {
        debugger;
        if (!data.ok) {
            throw new Error('Network response was not ok'); 
            // return response.json(); 
        }
       
        console.log('Response from the API:', data);
        window.location.href = 'success.html'; 
      
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
