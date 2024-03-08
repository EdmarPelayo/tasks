import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");
    const [boxStyle, setBoxStyle] = useState({
        backgroundColor: "",
        color: "black"
    });

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan"
    ];

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setBoxStyle({
            backgroundColor: color,
            color: "white"
        });
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <label
                        key={index}
                        style={{
                            backgroundColor: color
                        }}
                    >
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                            style={{ display: "inline" }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    ...boxStyle,
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
