const wheatherForm = document.querySelector("form");
const search = document.querySelector('input');
console.log('wheatherForm - ', wheatherForm)
wheatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/wheather?address=' + location).then((response) => {
        response.json().then(data => {
            console.log('fetch data - ', data);
            
        })
    })
})