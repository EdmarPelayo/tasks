// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function CycleHoliday(): JSX.Element {
//     return <div>Cycle Holiday</div>;
// }

import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Dragon Boat Festival", emoji: "🎏" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Diwali", emoji: "🪔" },
    { name: "Christmas", emoji: "🎄" },
    { name: "Easter", emoji: "🐰" }
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const advanceByAlphabet = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    };

    const advanceByYear = () => {
        setCurrentHolidayIndex((prevIndex) => {
            if (prevIndex === holidays.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <div>
            <h2>Holiday: {holidays[currentHolidayIndex].emoji}</h2>
            <Button onClick={advanceByAlphabet} data-testid="alphabet-button">
                Advance by Alphabet
            </Button>
            <Button onClick={advanceByYear} data-testid="year-button">
                Advance by Year
            </Button>
        </div>
    );
}
