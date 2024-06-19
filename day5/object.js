// must know Object
// static
const person = {
    name: "a",
    age: 2,
    address: {
      number: 1234,
      street: "qwer",
    },
    website: "website.com",
  };
  //adding new property
  person.email = "email@gmail.com";
  console.log(person);
  
  //update the exitst property
  person.age = 12;
  person.address.street = "asd";
  
  //remove a property
  delete person.email;
  
  // entries: return an array of [key,value]
  console.log(Object.entries(person));
  
  //keys: return an array of keys
  console.log(Object.keys(person));
  //values: return an array of values
  console.log(Object.values(person));
  