// function getJoke(){
//     let data;
//     fetch('https://official-joke-api.appspot.com/random_joke')
// .then(Response => Response.json())
// .then(data => {
//     let joke = data;
//     let setup = document.querySelector("#setup");
//     let punchline = document.querySelector("#punchline");

//     setup.innerHTML = joke.setup;
//     punchline.innerHTML = joke.punchline;

//     console.log()
// })
// .catch(error => console.log('Error:', error));
// }

if (typeof(Storage) !== "undefined") {
    console.log("OK");
} else {
    console.log("NOT OK");
}
