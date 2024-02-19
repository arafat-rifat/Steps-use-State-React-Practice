const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];




function App() {
  return (
   <div className="steps">
   
   {/* For Steps Of Number */}
  <div className="numbers">
    <div className="active">1</div>
    <div>2</div>
    <div>3</div>
  </div>

  {/* For text View Part */}
  <p className="message">Hello</p>


  {/* For Button */}
   
   <div className="buttons">
     <button style={{backgroundColor:'#7950f2', color:'#fff'}}>Previous</button>
     <button style={{backgroundColor:'#7950f2', color:'#fff'}}>Next</button>
   </div>

   </div>
  );
}

export default App;
