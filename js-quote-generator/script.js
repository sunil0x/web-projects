const btn = document.getElementById('new-button');

let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The best way to get started is to quit talking and begin doing."`,
        person: "Walt Disney"
    },

    {
        quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
        person: "Winston Churchill"
    },

    {
        quote: `"Do something today that your future self will thank you for."`,
        person: "Unknown"
    },

    {
        quote: `"Dream big and dare to fail."`,
        person: "Norman Vaughan"
    },

    {
        quote: `"Push yourself, because no one else is going to do it for you."`,
        person: "Unknown"
    }
];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});