var get = document.getElementById('clicked-element-ID')

get.addEventListener('click', function() {
    fetch('/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Oh no! Not another error:', error));
});
