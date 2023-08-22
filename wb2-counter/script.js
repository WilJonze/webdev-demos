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

counterIncrement.addEventListener('click', () => {
    myCounter.increment();
    counterValue.textContent = `crab count: ${myCounter.getValue()}`;
    myCounter.walk(true);
});

counterDecrement.addEventListener('click', () => {
    myCounter.decrement();
    counterValue.textContent = `crab count: ${myCounter.getValue()}`;
    if(myCounter.getValue() > 0) {
        myCounter.walk(false)
    };
});

counterReset.addEventListener('click', () => {
    myCounter.reset();
    counterValue.textContent = `crab count: ${myCounter.getValue()}`;
})