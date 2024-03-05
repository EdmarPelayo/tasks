// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function RevealAnswer(): JSX.Element {
//     return <div>Reveal Answer</div>;
// }
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleRevealClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>Reveal Answer</h2>
            <Button onClick={handleRevealClick}>Reveal Answer</Button>
            {isVisible && <p>The answer is 42.</p>}
        </div>
    );
}
