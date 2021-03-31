import React, { useState, useEffect } from "react";
import Message from "./child_components/message.react";
import "./style.scss";

function EnterYourDetailsTimer(props) {

    // The initial state is the number of seconds in 20 minutes (1200)
    const [seconds, setSeconds] = useState(120);

    const classes = `prompt-grey full-width ${seconds < 10 ? 'timer-low' : ''}`;

    useEffect(() => {
        const interval = setInterval(() => {

            setSeconds(seconds => {
                if (seconds > 0) {
                    return seconds - 1
                }
                clearInterval(interval);
                return seconds;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={classes} aria-live="polite" id="enter-your-details-timer">
                <Message seconds={seconds}/>
            </div>
        </>
    );
}

export default EnterYourDetailsTimer;

