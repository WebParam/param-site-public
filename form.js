const myForm1 = document.getElementById('myForm1');


myForm1.addEventListener('submit', function (e) {
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

