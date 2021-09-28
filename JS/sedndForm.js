'use strict';

// const form = document.querySelector('.form-test-drive');
// const modalForm = document.querySelector('.modal__form');

// form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    let data = {};
//    for (let {name, value} of form.elements) {
//        if (name) {
//            data[name] = value;
//        }
//    }
//    fetch('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//        body: JSON.stringify(data),
//    }).then((response) => {
//        if (response.status === 200 || response.status ===201 ) {
//             return response.json();
//        }else {
//            throw new Error(response.status);
//        }
//    }).then(data=> {
//        console.log("Data saved successfully.");
//        form.reset()
//    }).catch(error => {
//        console.log("An error occured, status" + error.message);
//    })

// })

const formsData = document.querySelectorAll('.form');

formsData.forEach((form) => {
    console.log(form);
    form.addEventListener('submit', (event) => {   
        let data = {};
        for (let {name, value} of form.elements) {
            if (name) {
                data[name] = value;
                console.log(data[name]);
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
            console.log("An error occured, status" + error.message);
        })
        event.preventDefault();
     })
})

