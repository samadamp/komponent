import React, { useState } from "react";
import "./ProgressBar.scss";

type ProgressBarProps = {
    progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const [completedSteps, setCompletedSteps] = useState<number>(0);

    const handleCheckboxChange = (isChecked: boolean) => {
        console.log("isChecked", isChecked);
        
        if (isChecked) {
            setCompletedSteps((prevCompletedSteps) => prevCompletedSteps + 1);
        } else {
            setCompletedSteps((prevCompletedSteps) => prevCompletedSteps - 1);
        }
    };

    const progressPercentage = (completedSteps / progress) * 100;

    return (
        <div className="check-box-bar">
            <h1>Progress Bar with Checkboxes</h1>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <div className="checkboxes">
                {[...Array(progress).keys()].map((step) => (
                    <div key={step} className="checkbox">
                            <input
                                className="checkbox-input"
                                type="checkbox"
                                onChange={(e) => handleCheckboxChange(e.target.checked)}
                                />
                    <label>Step {step + 1}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
