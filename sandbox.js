// get a reference to the 'ul'

const ul = document.querySelector('.people');

const peoeple = ['fuad', 'niyi', 'dipo', 'huswah', 'muhaj'];

let html = ``;

peoeple.forEach(function(person){
    // create html template
    html += `<li style="color: purple"> ${person} </li>`;
});

console.log(html);
ul.innerHTML = html;