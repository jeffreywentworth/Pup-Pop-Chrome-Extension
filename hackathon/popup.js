const button = document.getElementById('pop-up');
button.addEventListener('click', fetchData);

const container = document.getElementById('container');
const appendDog = document.createElement('img');
// having this inside of the fetch data made process slower - notes for next time
container.appendChild(appendDog);

// reassigns the dog photo
function fetchData() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const randomDog = data.message;
      appendDog.setAttribute('src', randomDog);
    });
}
