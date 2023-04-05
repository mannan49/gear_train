import React, { useState } from "react";
import "../App.css";
import { generateGearTrains } from "../Logic/Code";
import Layout from "./Layout";
function GearTrains() {
  const [ratio, setRatio] = useState("");
  const [nmin, setNmin] = useState("");
  const [nmax, setNmax] = useState("");
  const [eps, setEps] = useState("");
  const [reverted, setReverted] = useState(false)
  const [result, setResult] = useState({});

  const handleChange = (e) =>{
    if(e.target.value === "reverted"){
      console.log("reverted");
      setReverted(true)
    }else{
      console.log("MANAN NASIR");
      setReverted(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const gearTrains = generateGearTrains(parseFloat(ratio), parseInt(nmin), parseInt(nmax), parseFloat(eps), reverted);
    setResult(gearTrains);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="gear-train-form">
        <label>
          Select Category:
          <br />
          <select onChange={(e)=> handleChange(e)}>
            <option value="compound">Compound Gear Trains</option>
            <option value="reverted">Reverted Gear Trains</option>
          </select>
        </label>
        <label>
          Ratio:
          <input type="number" value={ratio} onChange={(e) => setRatio(e.target.value)} />
        </label>
        <label>
          Nmin:
          <input type="number" value={nmin} onChange={(e) => setNmin(e.target.value)} />
        </label>
        <label>
          Nmax:
          <input type="number" value={nmax} onChange={(e) => setNmax(e.target.value)} />
        </label>
        <label>
          Tolerance:
          <input type="number" value={eps} onChange={(e) => setEps(e.target.value)} />
        </label>
        <button type="submit" >Submit</button>
      </form>
      <div>
        <h2 className="text-3xl font-bold">Results:</h2>
        <h1 className="text-3xl font-bold text-center mb-3">{reverted ? "For Reverted Gair Trains" : "For Compound Gair Trains"}</h1>
        {result.N2 && (
          <table className="gear-train-table">
            <thead>
              <tr>
                <th>N2</th>
                <th>N3</th>
                <th>Ratio 1</th>
                <th>N4</th>
                <th>N5</th>
                <th>Ratio 2</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              {result.N2.map((_, i) => (
                <tr key={i}>
                  <td>{result.N2[i]}</td>
                  <td>{result.N3[i]}</td>
                  <td>{result.ratio1[i]}</td>
                  <td>{result.N4[i]}</td>
                  <td>{result.N5[i]}</td>
                  <td>{result.ratio2[i]}</td>
                  <td>{result.error[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

export default GearTrains;
