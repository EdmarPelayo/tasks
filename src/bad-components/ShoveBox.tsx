import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxButtonProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({
    position,
    setPosition
}: ShoveBoxButtonProps): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

interface MoveableBoxProps {
    position: number;
}

function MoveableBox({ position }: MoveableBoxProps): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [boxPosition, setBoxPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {boxPosition}</span>
            <div>
                <ShoveBoxButton
                    position={boxPosition}
                    setPosition={setBoxPosition}
                />
                <MoveableBox position={boxPosition} />
            </div>
        </div>
    );
}
