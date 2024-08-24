document.getElementById('jokeBtn').addEventListener('click', generateJoke);

function generateJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerText = 'Memuat...';

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeElement.innerText = data.value;
        })
        .catch(error => {
            jokeElement.innerText = 'Leluconnya abis dawg 😭🐺🙏💀';
        });
}
