/*
function Person(firstName, lastName, theDate){
    this.firstName = firstName;
    this.lastName = lastName
   
     
}
 
const person1 = new Person('Keemchard', 'Tamio');

console.log(person1.firstName);
console.log(person1.lastName);



//ES6

class Student{
    constructor(first,last,date){
        this.first = first;
        this.last = last;
        this.date = new Date(date);
    }
    getBirthYear(){
        return this.date.getFullYear();
    }
    getFullName(){
        return  this.first + " " + this.last;
    }
}

const student1 = new Student('Khasper','Ruiz', '04-10-2000');
console.log(student1.getFullName());

console.log('----------------------------------');

const items = document.querySelectorAll('.item');
console.log(items);
 
for(let i = 0; i < items.length; i++){
    // console.log(items.item);
}
items.forEach(function(item){
    console.log(item);
});
 
console.log('----------------------------------');

const ul = document.querySelector('.items');
*/
// ul.remove();
//remove method

/*ul.lastElementChild.remove();
ul.firstElementChild.innerHTML='<h2>Hello<h2>';
ul.children[1].innerText = 'Yes';

const btn = document.querySelector('.btn');
 
btn.style.background = 'red';
btn.style.color = 'white';
 
btn.addEventListener('click', () => {
    
});
*/

let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('.users');
let btn = document.querySelector('.btn');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    if(nameValue == "" || emailValue == ""){
        msg.classList.add("error");
        msg.textContent = "Please Fill Up first";
         setTimeout(()  => msg.remove(), 3000);
    }else{
        msg.textContent = "Sumitted! Thank You";
        nameInput.value = '';
        emailInput.value = ''
        
    }
}

// myForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(nameInput.value);
// });