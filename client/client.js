console.log("Hello World");

// document means client-side js
const form = document.querySelector('form');

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

    console.log(mew);
});