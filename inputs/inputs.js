get.addEventListener('click', function() {
    fetch('/')
    .then(response => response.json())
    .then(data => console.log(data))
});
