import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleCheckboxChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {editMode ? (
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={userName}
                                onChange={handleNameChange}
                            />
                        </label>
                        <label>
                            Student:
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={handleCheckboxChange}
                            />
                        </label>
                    </form>
                ) : (
                    <div>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </div>
                )}
            </div>
            <div className="form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="editSwitch"
                    checked={editMode}
                    onChange={handleSwitchChange}
                />
                <label className="form-check-label" htmlFor="editSwitch">
                    Edit Mode
                </label>
            </div>
        </div>
    );
}
