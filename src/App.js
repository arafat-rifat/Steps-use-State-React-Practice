import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    if (step > 1) setStep((currentStep)=> currentStep - 1 );
  };

  const handleNext = function () {
    if (step < 3) setStep((currentStep)=> currentStep + 1 );
  };
   
  const handleCloseButton = function () {
   
      setIsOpen(!isOpen);
  
  }

  return (
    <>
      <button className="close" onClick={handleCloseButton}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          {/* For Steps Of Number */}
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>

            <div className={step >= 2 ? "active" : ""}>2</div>

            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* For text View Part */}
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* For Button */}

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
