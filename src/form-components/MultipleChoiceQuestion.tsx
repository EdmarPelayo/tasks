import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setSelectedChoice(selectedOption);
        setIsCorrect(selectedOption === expectedAnswer);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? (
                <span role="img" aria-label="correct">
                    ✔️
                </span>
            ) : (
                <span role="img" aria-label="incorrect">
                    ❌
                </span>
            )}
        </div>
    );
}
