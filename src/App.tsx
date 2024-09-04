import {useState} from "react";
import "./App.css";

function App() {
  const [numbers, setNumber] = useState<number[]>([]);
  //console.log("🚀 ~ App ~ numbers:", numbers);

  function handleGenerateNumbers() {
    const array: number[] = [];

    for (let i = 1; i < 7; i++) {
      const number = Math.ceil(Math.random() * 100);
      const numberAlternative = Math.ceil(Math.random() * 10);
      const n2 = Number(
        `${
          numberAlternative <= 10 ? `0${numberAlternative}` : numberAlternative
        }`
      );

      array.push(number > 60 ? n2 : number);
    }
    setNumber(array);
  }

  return (
    <main className="main">
      <div className="col">
        <h2
          style={{
            fontSize: "35px",
            color: "#fff",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
          }}
        >
          Gerador de números para mega sena{" "}
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/fluency/48/money-bag--v1.png"
            alt="money-bag--v1"
          />
        </h2>
        <button onClick={() => handleGenerateNumbers()}>Gerar números</button>

        <br />

        <div className="display">
          <div style={{display: "flex", justifyContent: "space-around"}}>
            {numbers.map((item, index) => {
              return (
                <h4 key={index} style={{color: "#fff", fontSize: "30px"}}>
                  {item}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
