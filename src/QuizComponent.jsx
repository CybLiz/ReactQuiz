import React from "react";

export default function QuizComponent({ prompt, choices, selected, onSelect }) {
  return (
    <div>
      <h2>{prompt}</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            <label>
              <input
                type="radio"
                name="quiz-choice"
                value={choice.id}
                checked={selected === choice.id}
                onChange={() => onSelect(choice.id)}
              />
              {choice.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
