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
//dom vars
const section = document.querySelector('section')
const button = document.querySelector('button')


const getRandomCharacter = () => {
    // get a random character and put it on the throne every second
    const interval = setInterval(() => {
        //remove previous image and text
        const currentImage = document.querySelector('img')
        const currentName = document.querySelector('h2')
        section.removeChild(currentImage)
        section.removeChild(currentName)
        //choose a character randomly
        const character = Math.floor(Math.random() * characters.length)
        //creating the image and text
        const img = document.createElement('img')
        img.src = characters[character].image
        const name = document.createElement('h2')
        name.innerText = characters[character].name

        //inserting them into the dom
        section.appendChild(img)
        section.appendChild(name)
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        const winner = document.querySelector('img')
        winner.classList.add('winner')
    }, 3000)
}

button.onclick = getRandomCharacter


