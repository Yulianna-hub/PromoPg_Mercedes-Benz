'use strict';
const formsData = document.querySelectorAll('.form');
const sendbuttons = document.querySelectorAll('.send_button');


for (let form of formsData) {
    form.addEventListener('submit', (event) => {   
        let data = {};
        for (let {name, value} of form.elements) {
            if (name) {
                data[name] = value;
            }
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.status === 200 || response.status ===201 ) {
                return response.json();
            }else {
                throw new Error(response.status);
            }
        }).then(data=> {
            console.log("Data saved successfully.");
            form.reset()
        }).catch(error => {
            console.log("An error occured, status " + error.message);
        })
        event.preventDefault();
    })
}

