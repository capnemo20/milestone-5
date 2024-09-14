const liCollection = document.getElementsByTagName("li");
console.log(liCollection);

for (li of liCollection){
    console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (h1 of allHeadings){
    console.log(h1.innerText);
}