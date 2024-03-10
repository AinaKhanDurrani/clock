const numberHours = document.querySelector(".number-hours");

const numberElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDeg = hours * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
    const minutesDeg = minutes * 6; // 6 degrees per minute
    const secondsDeg = seconds * 6; // 6 degrees per second

    const hoursHand = document.querySelector(".hand.hours i");
    const minutesHand = document.querySelector(".hand.minuts i");
    const secondsHand = document.querySelector(".hand.seconds i");

    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

    const numberSpans = document.querySelectorAll(".number-hours span");
    numberSpans.forEach(span => {
        span.style.color = "#0ef";
        span.querySelector("p").style.textShadow = "none";

        const p = span.querySelector("p");
        const index = parseInt(p.innerText);

        if (index % 5 === 0) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.style.cssText = `width: 8px; height: 8px; background-color: #0ef; position: absolute; border-radius: 50%; transform: translate(-50%, -50%); top: 50%; left: 50%;`;
            span.appendChild(dot);
        } else {
            const dots = span.querySelectorAll(".dot");
            dots.forEach(dot => dot.remove());
        }
    });

    const hands = document.querySelectorAll(".hand i");
    hands.forEach(hand => {
        hand.style.background = "#0ef";
        hand.style.boxShadow = "0 0 5px #0ef";
    });
}

updateClock(); // Update clock immediately
setInterval(updateClock, 1000); // Update every second
