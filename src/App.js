const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];




function App() {
  
  let step = 1;

 const handlePrevious = function(){
  step = step + 1;
 }

 const handleNext = function(){
 step = step - 1;
 }


  return (
   <div className="steps">
   
   {/* For Steps Of Number */}
  <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>
      1
      </div>

      <div className={`${step >= 2 ? "active" : ""}`}>
      2
      </div>

       <div className={`${step >= 3 ? "active" : ""}`}>
      3
       </div>
  </div>

  {/* For text View Part */}
  <p className="message">Step {step}: {messages[step - 1]}</p>


  {/* For Button */}
   
   <div className="buttons">
     <button style={{backgroundColor:'#7950f2', color:'#fff'}}  onClick={handlePrevious}>Previous</button>

     
     <button style={{backgroundColor:'#7950f2', color:'#fff'}}
      onClick={handleNext}
      >
        Next
        </button>
   </div>

   </div>
  );
}

export default App;
