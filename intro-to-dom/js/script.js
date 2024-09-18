const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);

for (li of liCollection){
    // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (h1 of allHeadings){
    // console.log(h1.innerText);
}

const places = document.getElementsByClassName("important-places");
for (const place of places){
    // console.log(place.innerText);
}

const someLi = document.querySelectorAll(".fruits-container li")
for (const li of someLi){
    console.log(li.innerText);
}
// console.log(someLi);