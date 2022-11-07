class Countdown extends HTMLElement {
    connectedCallback() {
        var userName = this.attributes.setStartCountdown.value;
        console.log("username", userName);
        this._setStartCountdown(userName)
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
            body,
            html {
                height: 100%;
                min-height: 100%;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 8px;
                background: url("https://images.unsplash.com/photo-1472148083604-64f1084980b9?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=")
                    no-repeat center center / cover;
                color: white;
            }

            .countdown-container {
                display: flex;
                width: 100%;
                max-width: 90%;
                justify-content: space-between;
            }

            .days-container,
            .hours-container,
            .minutes-container,
            .seconds-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.1);
                border: 5px solid rgba(255, 255, 255, 0.3);
                width: 50px;
                height: 50px;
                border-radius: 99px;
            }

            .days,
            .hours,
            .minutes,
            .seconds {
                font-size:12px;
                font-weight: bold;
            }

            .days-label,
            .hours-label,
            .minutes-label,
            .seconds-label {
                text-transform: uppercase;
                margin-bottom: 5px;
                font-size: 12px;
            }

            @media (max-width: 800px) {
                .countdown-container {
                    max-width: 90%;
                }

                .days-container,
                .hours-container,
                .minutes-container,
                .seconds-container {
                    font-size: 12px;
                    width: 100px;
                    height: 100px;
                }
            }
            </style>
            <section class="countdown-container">

            <div class="days-container">
                <div class="days"></div>
                <div class="days-label">days</div>
            </div>

            <div class="hours-container">
                <div class="hours"></div>
                <div class="hours-label">hours</div>
            </div>

            <div class="minutes-container">
                <div class="minutes"></div>
                <div class="minutes-label">min</div>
            </div>

            <div class="seconds-container">
                <div class="seconds"></div>
                <div class="seconds-label">sec</div>
            </div>

            </section>
        `;
    }

    _convertFormat(number, format) {
        switch (format) {
            case "seconds":
                return this._timer(number);
            case "minutes":
                return this._timer(number * 60);
            case "hours":
                return this._timer(number * 60 * 60);
            case "days":
                return this._timer(number * 60 * 60 * 24);
        }
    }

    _timer(seconds) {
        let countdown;
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            }

            this._displayTimeLeft(secondsLeft);
        }, 1000);
    }

    _displayTimeLeft(seconds) {
        const d = this.shadowRoot;
        const daysElement = d.querySelector(".days");
        const hoursElement = d.querySelector(".hours");
        const minutesElement = d.querySelector(".minutes");
        const secondsElement = d.querySelector(".seconds");

        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor(
            ((seconds % 86400) % 3600) / 60
        );
        secondsElement.textContent =
            seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }

    _setStartCountdown(days) {
        console.log("days", days);
        const countDownClock = (number = 100, format = "seconds") => {
            this._convertFormat(number, format);
        };

        /*
            start countdown
            enter number and format
            days, hours, minutes or seconds
          */
        countDownClock(days, "days");
    }

    set setStartCountdown(days) {
        console.log("days", days);
        const countDownClock = (number = 100, format = "seconds") => {
            this._convertFormat(number, format);
        };

        /*
            start countdown
            enter number and format
            days, hours, minutes or seconds
          */
        countDownClock(days, "days");
    }
}
customElements.define("wc-countdown", Countdown);
