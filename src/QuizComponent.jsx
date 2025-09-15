import React from "react";
import styles from "./global.module.css";

export default function QuizComponent({ prompt, choices, selected, onSelect }) {
  return (
    <div>
      <h2>{prompt}</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id} onClick={() => onSelect(choice.id)}

            // className={`choice ${selected === choice.id ? "selected" : ""}`}
            className={`${styles.choice} ${selected === choice.id ? styles.selected : ""}`}


          >
            {/* <label>
              <input
                type="radio"
                name="quiz-choice"
                value={choice.id}
                checked={selected === choice.id}
                onChange={() => onSelect(choice.id)}
              />
              {choice.label}
            </label> */}

            {choice.label}

          </li>
        ))}
      </ul>
    </div>
  );
}
