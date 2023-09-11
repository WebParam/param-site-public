const myForm1 = document.getElementById('myForm1');

myForm1.addEventListener('submit', function (e) {
    e.preventDefault();

    // Create an object and populate it with form input values
    const formDataObject = {};
    const formElements = this.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name) {
            formDataObject[element.name] = element.value;
        }
    }

    formDataObject["date"] = new Date().toISOString().slice(0, 10);

    


    // Convert the object to JSON
    const jsonData = JSON.stringify(formDataObject);

    fetch('https://eo9jatrnyl5bx9g.m.pipedream.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(function(data) {
        if (!data.ok) {
            throw new Error('Network response was not ok'); 
        }
       
        console.log('Response from the API:', data);
        console.log(formDataObject.email);

         window.location.href = 'success.html'; 
      
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
