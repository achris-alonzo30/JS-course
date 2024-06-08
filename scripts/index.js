// MATH Object

// z = Math.round(3.4); // Output -> 3
// z = Math.floor(2.99); Output -> 2 (will always rounds down)
// z = Math.ceil(2.2); // Output -> 3 (will always rounds up)
// z = Math.tunc(1.25); // Output -> 1 (eliminates decimals)
// z = Math.pow(3, 2); // 3**2 => 9  Raise to the power 
// z = Math.sqrt(81); // Output -> 9 

/* -------------------------------------------------------------------------- */
/*                              For trigonometry                              */
/* -------------------------------------------------------------------------- */
// z = Math.log(9) // get the logarithmic function
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)

// z = Math.abs(-1) // Output => 1 (will always output absolute value)
// z = Math.sign(0) // Output => 0 
// z = Math.sign(1) // Output => -1
// z = Math.sign(-1) // Output => 1

// let max = Math.max(1, 2, 3) // Output => 3 (get the maximum value of a set of numbers)
// let max = Math.min(1, 2, 3) // Output => 1 (get the minimum value of a set of numbers)

// console.log(z)

function generateRandomNumber() {
    /**
     * Math.random() -> will generate random number between 0-1
     * We use Math.floor -> to always round down
     * We want to get a random number between 1-1000 not including 0 
     * - that's why we added + 1
     */

    return Math.floor(Math.random() * 100) + 1; 
}


const randomNumberCount = document.querySelector(".random-number__count");
const generateRandomNumberBtn = document.querySelector(".random-number__button--generator");

generateRandomNumberBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let randomNumber = generateRandomNumber();
    console.log(randomNumber)
    randomNumberCount.textContent = randomNumber;
})

