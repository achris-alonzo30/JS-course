const countLabel = document.querySelector(".count__label");
const resetBtn = document.querySelector(".count__button--reset");
const userFeedback = document.querySelector(".count__userFeedback");
const incrementBtn = document.querySelector(".count__button--increment");
const decrementBtn = document.querySelector(".count__button--decrement");

let count = 0;

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    count = 0;
    countLabel.textContent = count;
});

incrementBtn.addEventListener("click", (event) => {
    event.preventDefault();

    count++;
    countLabel.textContent = count;
})

decrementBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (Number(countLabel.textContent) == 0) {
        userFeedback.classList.add("count__userFeedback--error");
        userFeedback.textContent = "You can't do that 😜"

        setTimeout(() => {
            userFeedback.classList.remove("count__userFeedback--error");
            userFeedback.textContent = "☝️Start Clicking The Buttons☝️"
        }, 1000);

    } else {
        count--;
        countLabel.textContent = count;
    }
})




