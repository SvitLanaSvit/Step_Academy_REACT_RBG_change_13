import React, { useState } from "react";

function Rgb() {
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);

    const handleRedChange = (amount) => {
        setRed((prev)=> prev + amount);
    };

    const handleGreenChange = (amount) => {
        setGreen((prev)=> prev + amount);
    };

    const handleBlueChange = (amount)=> {
        setBlue((prev)=> prev + amount);
    };

    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div style={{backgroundColor,height: "100vh",display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",}}>
        <div style={{ marginBottom: "2rem" }}>
            <div style={{display: "flex",alignItems: "center",marginBottom: "0.5rem"}}>
                <label htmlFor="red" style={{ marginRight: "1rem" }}>Red:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={() => handleRedChange(-1)}>-1</button>
                    <div id="red" style={{ width: "2rem", textAlign: "center" }}>
                        {red}
                    </div>
                    <button onClick={() => handleRedChange(1)}>+1</button>
                </div>
            </div>
            <div style={{display: "flex",alignItems: "center",marginBottom: "0.5rem"}}>
                <label htmlFor="green" style={{ marginRight: "1rem" }}>Green:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                        <button onClick={() => handleGreenChange(-1)}>-1</button>
                        <div id="green" style={{ width: "2rem", textAlign: "center" }}>
                            {green}
                        </div>
                        <button onClick={() => handleGreenChange(1)}>+1</button>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="blue" style={{ marginRight: "1rem" }}>Blue:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={() => handleBlueChange(-1)}>-1</button>
                    <div id="blue" style={{ width: "2rem", textAlign: "center" }}>
                        {blue}
                    </div>
                    <button onClick={() => handleBlueChange(1)}>+1</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Rgb;
