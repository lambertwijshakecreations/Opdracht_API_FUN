//button
const tekst = document.querySelector('#mainPlayground p');

//function
const getJoke = () =>{
    fetch('https://icanhazdadjoke.com/', { headers:{ 'Accept': 'application/json'}
}).then(data =>data.json())
.then(obj => tekst.innerHTML = obj.joke)
}

const appButton1 = document.getElementById("appBtn1").addEventListener("click", getJoke )