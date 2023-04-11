// 1
function Add(num1) {
    return function (num2) {
        return num1 + num2
    }
}
const sum = Add(5);
const add = sum(10)
console.log(add)

// 2
function SearchArray(arr, val) {
    if (!arr.length) {
        return false
    } else if (arr[0] === val) {
        return true
    } else {
        return SearchArray(arr.slice(1), val)
    }
}

let arr = SearchArray([10, 32, 21, 12, 42], 42)
console.log(arr)

// 3
function paragraph(text) {
    const addpara = document.createElement("h1");
    addpara.textContent = text;
    document.body.appendChild(addpara);
}
paragraph("Hellow sir I'm Adil!");

// 4
function List(text) {
    let listItem = document.createElement("li");
    listItem.textContent = text;
    let ul = document.createElement("ul");
    // document.body.ul.appendChild(listItem);
}
List("Apple");
List("Orange");
List("Mango");

// 5
function changeBackgroundColor(elm, color) {
    elm.style.backgroundColor = color;
}

const div = document.createElement("div");
changeBackgroundColor(div, "red");


// 6
function setValueInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
let user = { name: "adil", age: 19 };
setValueInLocalStorage("users", user);


// 7
function getValueFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

user = getValueFromLocalStorage("users");
console.log(user);

//8 
function saveObjectToLocalStorage(obj) {
    for (const key in obj) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
    }
    const newObj = {};
    for (const key in obj) {
        newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
}

// const user1 = { name: "adil", age: 30 };
const savedUser = saveObjectToLocalStorage(user);
console.log(savedUser);


