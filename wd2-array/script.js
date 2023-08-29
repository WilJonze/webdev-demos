


// What is an array?

// Why do we need arrays?


// Todo list: 
//      Display a simple list of 3 items in the array
//      First button Adds an item
//      Next button deletes an item
//      Then change the array methods to add/delete items in a different way. Instead of push and pop use shift and unshift. 

const todoList = ['go to the store', 'go home', 'eat dinner']; // <== Array

const todoListElement = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim(); //<== grabs the text value inside the Input and cleans it up
    if (todoText !== "") {          //asks is the string empty?
        todoList.push(todoText);    // adds the input value to the array
        renderTodoList();
        todoInput.value = "";       // deletes the input
    }
});

deleteButton.addEventListener("click", () => {
    if (todoList.length > 0) { // <== checks the length of the array is it greater than 0?
        todoList.pop();     // <== remove from array
        renderTodoList();
    }
});

changeButton.addEventListener("click", () => {
    const changedList = todoList.map(() => "play video games"); // <== maping over each item in the array and creating a new array
    // callback function 
    todoList.splice(0, todoList.length, ...changedList); // <== removing all elements from array starting at index 0, the adding the changedList array
    renderTodoList(); // start, delete count, new items
    console.log(todoList)
});

// More on Splice : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

function renderTodoList() {
    todoListElement.textContent = "";
    todoList.forEach((todo) => {  //<= go through each item and do something
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo;
        li.appendChild(span);
        todoListElement.appendChild(li);
    });
}

renderTodoList();

// Example at work: 
//      Receive at array of objects. Because the API isn't as good we dump all the API's data into our own database and call from our database. 
//      Each object in the array has a Name, Address, Rating, and Availability
//      We filter out the providers that do not have an Availability within 30days
//      We then reorganize the providers in order of best Quality

let providerData = [ // <== Array
	{
		"name": "Janna Lynch",
		"address": "Ap #402-6657 Eu St.",
		"rating": "1",
		"is_Available": "Yes"
	},
	{               // <== Object
		"name": "Calista Carr",
		"address": "5663 Imperdiet Street",  // <== Key : Value Pair
		"rating": "5",
		"is_Available": "No"
	},
	{
		"name": "Chandler Sweeney",
		"address": "Ap #669-8331 Dictum Av.",
		"rating": "2",
		"is_Available": "Yes"
	},
	{
		"name": "Ryder York",
		"address": "697-8800 Elit. Ave",
		"rating": "4",
		"is_Available": "Yes"
	},
	{
		"name": "Mia Bonner",
		"address": "111-5397 Orci, St.",
		"rating": "1",
		"is_Available": "Yes"
	}
];

// Filter data by availability
function filterAvailability(data) {                             
    return data.filter(item => item.is_Available === "Yes"); 
}
// Above We are iterating through the array(data), 
// and in each object(item)
//  we look at the is_Available Key to see if its Value is equal to true

// Sort array objects by rating in descending order
function sortByRating(data) {
    return data.sort((a, b) => b.rating - a.rating); //sort is taking two comparison parameters
}
// Above We are Comparing each Rating with each other to reorganize the objects being displayed. 
// If b.Rating is greater that a.Rating the result is positive and indicates that b should come before a
// To Note: sort() sorts in ascending order by default.


document.getElementById("showFilteredButton").addEventListener("click", function () {
    
    console.log(providerData)
    
    const filteredData = filterAvailability(providerData);
    console.log(filteredData)
    
    const sortedData = sortByRating(filteredData);
    console.log(sortedData)
    
    const outputDiv = document.getElementById("output");

    // Loop through each item in the newly sorted array to add formatting and styling.
    sortedData.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = "Name:";
        const nameSpan = document.createElement("span");
        nameSpan.textContent = item.name;
        itemDiv.appendChild(nameParagraph);
        itemDiv.appendChild(nameSpan);

        const addressParagraph = document.createElement("p");
        addressParagraph.textContent = "Address:";
        const addressSpan = document.createElement("span");
        addressSpan.textContent = item.address;
        itemDiv.appendChild(addressParagraph);
        itemDiv.appendChild(addressSpan);

        const ratingParagraph = document.createElement("p");
        ratingParagraph.textContent = "Rating:";
        const ratingSpan = document.createElement("span");
        ratingSpan.textContent = item.rating;
        itemDiv.appendChild(ratingParagraph);
        itemDiv.appendChild(ratingSpan);

        outputDiv.appendChild(itemDiv);
    });
});