// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

let answer = document.querySelector("#answer");
let button = document.querySelector("#button");

button.addEventListener('click',()=>{
    fetch('API_ENDPOINT')
    .then(response => response.json)
    .then(data => {
        setTimeout(()=>{
            answer.append(data);
        },5000);
    });
});