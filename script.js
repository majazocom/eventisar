//Manuella viset
// document.getElementById('1').addEventListener('click', function (event) {
//     //do stuff here
//     console.log(event.target.id);
// });
// document.getElementById('2').addEventListener('click', function () {

//     console.log('2');
// });
// document.getElementById('3').addEventListener('click', function () {

//     console.log('3');
// });
// document.getElementById('4').addEventListener('click', function () {

//     console.log('4');
// });
// document.getElementById('5').addEventListener('click', function () {

//     console.log('5');
// });


//kom åt listan -> gjorde den till en array -> loopar över den
// [document.querySelector('.list')].forEach(item => {

//     //för varje item i listan lägger vi på en eventlyssnare
//     item.addEventListener('click', event => {
//         console.log(event.target.id);
//     })


// })





//komma åt alla element som har en särskild klass
//loopa över elementen
document.querySelectorAll('.li').forEach(item => {
//för att sedan sätta på en eventlyssnare
    item.addEventListener('click', event => {

        console.log(event.target.id);

    })

}
)

