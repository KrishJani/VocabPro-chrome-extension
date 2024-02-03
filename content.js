fetch(`https://icanhazdadjoke.com/slack`)
    .then(response => response.json())
    .then(data => {
        const definition = data.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = definition;
    })
