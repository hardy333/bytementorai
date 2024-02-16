"use client";
import "./quiz.css";

const QuizQuestion = ({
  questions,
  selectedAnsw,
  currQ,
  setSelectedAnsw,
  questionCompleted,
}) => {
  const handleClick = (index) => {
    setSelectedAnsw(index);
  };

  let isCorrect = false;
  if (selectedAnsw) {
    isCorrect = questions[currQ].options[selectedAnsw].isCorrect;
  }

  console.log({ isCorrect });

  return (
    <>
      <div className="mt-5">
        <span>Question {currQ + 1}</span>
        <h3 className="mb-3 mt-1">{questions[currQ].question}</h3>
        <div className="list-group">
          <div
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="form-check">
              <input
                onClick={() => handleClick(0)}
                className={`form-check-input ${
                  questionCompleted && selectedAnsw === 0
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label stretched-link"
                htmlFor="flexRadioDefault1"
              >
                {questions[currQ].options[0].text}
              </label>
            </div>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="form-check">
              <input
                onClick={() => handleClick(1)}
                className={`form-check-input ${
                  questionCompleted && selectedAnsw === 1
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label
                className="form-check-label stretched-link"
                htmlFor="flexRadioDefault2"
              >
                {questions[currQ]?.options[1]?.text}
              </label>
            </div>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="form-check">
              <input
                onClick={() => handleClick(2)}
                className={`form-check-input ${
                  questionCompleted && selectedAnsw === 2
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label
                className="form-check-label stretched-link"
                htmlFor="flexRadioDefault3"
              >
                {questions[currQ]?.options[2]?.text}
              </label>
            </div>
          </div>
          <div className="list-group-item list-group-item-action">
            <div className="form-check">
              <input
                onClick={() => handleClick(3)}
                className={`form-check-input ${
                  questionCompleted && selectedAnsw === 3
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label
                className="form-check-label stretched-link"
                htmlFor="flexRadioDefault4"
              >
                {questions[currQ]?.options[3]?.text}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;
