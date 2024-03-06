// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// /**
//  * Here is a helper function you *must* use to "roll" your die.
//  * The function uses the builtin `random` function of the `Math`
//  * module (which returns a random decimal between 0 up until 1) in order
//  * to produce a random integer between 1 and 6 (inclusive).
//  */
// export function d6(): number {
//     return 1 + Math.floor(Math.random() * 6);
// }

// export function TwoDice(): JSX.Element {
//     return <div>Two Dice</div>;
// }

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(4);

    const rollLeftDie = () => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
    };

    const rollRightDie = () => {
        const newRightDie = d6();
        setRightDie(newRightDie);
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <Button onClick={rollLeftDie}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{rightDie}</span>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
