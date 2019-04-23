//images
const jon = {
    name: 'Jon',
    image: './images/jon.jpeg'
}
const cersei = {
    name: 'Cersei',
    image: './images/cersei.jpeg'
}
const daenerys = {
    name: 'Daenerys',
    image: './images/daenerys.jpeg'
}
const sansa = {
    name: 'Sansa',
    image: './images/sansa.jpeg'
}
const tyrion = {
    name: 'Tyrion',
    image: './images/tyrion.jpeg'
}
const characters = [jon, cersei, daenerys, sansa, tyrion]

// nodos

const button = document.querySelector('button')
const image = document.querySelector('img')
const name = document.querySelector('h2')

const chooseCharacter = () => {

    const interval = setInterval(() => {
        const character = Math.floor(Math.random() * characters.length)
        image.src = characters[character].image
        name.innerText = characters[character].name
    }, 500)

    setTimeout(() => {
        clearInterval(interval)
        image.classList.add('winner')
    }, 3000)
}

button.onclick = chooseCharacter
