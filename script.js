const dogImageDiv = document.getElementById('dog')
const generateButton = document.getElementById('generate')
const breed = document.getElementById('dog_selector')
const randomDogButton = document.getElementById('randomdog')



function getPhoto(name){
    let url = `https://dog.ceo/api/breed/${name}/images/random`;
    fetch(url)
    .then(Response => Response.json())
    .then(json => {
        dogImageDiv.innerHTML = `<img src='${json.message}' height=500 width=fixed>`
    })
    
}

generateButton.onclick = () => {
    breed_name = breed.value
    getPhoto(breed_name)
    console.log(breed_name)
}