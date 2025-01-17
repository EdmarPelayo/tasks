// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { QuestionType } from "../interfaces/question";

// export function ChangeType(): JSX.Element {
//     return <div>Change Type</div>;
// }

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeTypeClick = () => {
        setQuestionType((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <h2>Change Type</h2>
            <Button onClick={handleChangeTypeClick}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
