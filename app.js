const button = document.querySelector('button');
const h3 = document.querySelector('h3');
button.addEventListener('click', function () {
    
    const randColor = colorGen()
    document.body.style.backgroundColor = randColor;
    h3.textContent = randColor;
})

const colorGen = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}