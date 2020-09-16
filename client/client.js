console.log("Hello World");

// document means client-side js
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews');
const API_URL = "http://localhost:5000/mews";

loadingElement.style.display = "none";

listAllMews();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    console.log("form was submitted");

    const mew = {
        name,
        content
    }

    form.style.display = 'none';
    console.log(mew);
    loadingElement.style.display = '';

    fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(mew),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(createdMew => {
            console.log(createdMew);
            form.reset();
            form.style.display = '';
            loadingElement.style.display = 'none'
        });
});

function listAllMews() {
    fetch(API_URL)
        .then(response => response.json())
        .then(mews => {
            console.log(mews)
            mews.forEach(mew => {
                const div = document.createElement('div');

                const header = document.createElement('h3');
                header.textContent = mew.name;

                const contents = document.createElement('p');
                contents.textContent = mew.content;

                const date = document.createElement('small');
                date.textContent = new Date(mew.created);

                div.appendChild(header);
                div.appendChild(contents);
                div.appendChild(date);

                mewsElement.appendChild(div);
            });
        });
}