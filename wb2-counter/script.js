console.log("Hello!");

let counterValue = document.getElementById('count');
const counterIncrement = document.getElementById('increment');
const counterDecrement = document.getElementById('decrement');
const counterReset = document.getElementById('reset');
const walkingEmoji = document.getElementById('walkingEmoji');


class Counter {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    increment() {
        this.value++;
    }

    decrement() {
        if (this.value > 0) {
        this.value--;
        }
    }

    getValue() {
        return this.value;
    }

    reset() {
        this.value = 0;
    }

    walk(isIncrease) {
            const crabContainer = document.getElementById('crabtainer');
            const walkingCrab = document.createElement('div');
            
            walkingCrab.className = 'emoji';
            
            walkingCrab.textContent = '🦀';
            
            crabContainer.appendChild(walkingCrab);
        
            walkingCrab.style.animation = isIncrease ? 'walkAnimation 2s linear forwards' : 'walkAnimationReverse 1s linear forwards';
            
            walkingCrab.addEventListener('animationend', () => {
              walkingCrab.remove();
            });
        }

}

const myCounter = new Counter();

const updateCounterDisplay = () => {
    counterValue.textContent = `crab count: ${myCounter.getValue()}`;
};

const handleCrabAnimation = (isIncrease) => {
    myCounter.walk(isIncrease);
};

counterIncrement.addEventListener('click', () => {
    myCounter.increment();
    updateCounterDisplay();
    handleCrabAnimation(true);
});

counterDecrement.addEventListener('click', () => {
    myCounter.decrement();
    updateCounterDisplay();
    if (myCounter.getValue() > 0) {
        handleCrabAnimation(false);
    }
});

counterReset.addEventListener('click', () => {
    myCounter.reset();
    updateCounterDisplay();
});





let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Sort the array of objects based on the 'year' property in ascending order
books.sort(function(a, b) {
    return a.year - b.year;
});

console.log(books);