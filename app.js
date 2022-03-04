const apiKey = `4a3989515cc5cde78682f098b7eaee7b`

const weatherLoad = () => {
    const inputValue = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
}

const innerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayData = (data) => {
    innerText('city', data.name);
    innerText('temp', data.main.temp);
    innerText('condition', data.weather[0].main);

    // weather icon 
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const icon = document.getElementById('icon');
    icon.setAttribute('src', url)

    console.log(data)
}