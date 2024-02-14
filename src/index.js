import './style.css'

const load = () => {
    const title = document.createElement('h1');
    title.innerText = `Weather`;
    title.style.color = `red`;

    return title
}

document.body.appendChild(load());