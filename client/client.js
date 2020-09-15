console.log("Hello World");

// document means client-side js
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = "none";
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
});