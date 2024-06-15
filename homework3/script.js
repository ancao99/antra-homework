const inputName = document.getElementById("personName");
const inputAge = document.getElementById("personAge");
const submit = document.getElementById("submitPerson");
const form = document.getElementById("personForm")

let id = 1;
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const  newPerson ={
        id: id++,
        name: inputName.value,
        age: inputAge.value,
    };
    people.push(newPerson);
    console.log(people);
    localStorage.setItem("person",JSON.stringify(newPerson))
});