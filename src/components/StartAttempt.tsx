// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function StartAttempt(): JSX.Element {
//     return <div>Start Attempt</div>;
// }

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const handleStartQuizClick = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleStopQuizClick = () => {
        setQuizInProgress(false);
    };

    const handleMulliganClick = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <h2>Start Attempt</h2>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={handleStartQuizClick}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuizClick} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulliganClick} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
