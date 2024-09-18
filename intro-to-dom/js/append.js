const placesList = document.getElementById("places-list");
const li  = document.createElement("li");
li.innerText = "pahartoli bon";
placesList.appendChild(li);

const mainContainer = document.getElementById("main-container");
console.log(mainContainer);
// mainContaine.createElement("")

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my food list";
section.appendChild(h1);
mainContainer.appendChild(section);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "biriyani 2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "biriyani 3";
ul.appendChild(li3);

section.appendChild(ul);

//set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Sando Genji</li>
</ul>
`
