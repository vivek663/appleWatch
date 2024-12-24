import { useState } from "react";
import "./Body.css";

const Body = () => {
    const [sideView, setSideView] = useState(false); // Correctly destructure useState

    // Toggle view between front and side
    const toggleView = () => {
        setSideView(!sideView);
    };

    return (
        <div className="bodyContainer">
            <div className="imageSec">
                <img
                    src={
                        sideView
                            ? "https://previews.dropbox.com/p/thumb/ACdHSJtiZoQEnCPmeDoeKKpRBjhWrQ1P_VSqcmFqVBlLEjrUxCLEjwzF3Z3p7-rK9DRST2l_RfB-vvCvjqxX0k2ycsA-pJqLHjmrLCssvYLyJV-RqebGo3xUlVtAa1nah4-3PdesqAq9stUunjeMDce7yHi4pVC3YBEEYsDzHvruwE2fkA0sZBX0oZYtkAfrVB8fiZH55kk7-e3NAQmcC8Bjv1Ti4-ic72lOl-eEQOn7YQxmhCO_3J1XUo64bcMaRtnxo7yd5159lu1V8DdMj0lLb9UsF8XuHfQSWTIzuUprwA7olaDEaG8rOTx4zzUmGr8/p.png"
                            : "https://previews.dropbox.com/p/thumb/ACdHSJtiZoQEnCPmeDoeKKpRBjhWrQ1P_VSqcmFqVBlLEjrUxCLEjwzF3Z3p7-rK9DRST2l_RfB-vvCvjqxX0k2ycsA-pJqLHjmrLCssvYLyJV-RqebGo3xUlVtAa1nah4-3PdesqAq9stUunjeMDce7yHi4pVC3YBEEYsDzHvruwE2fkA0sZBX0oZYtkAfrVB8fiZH55kk7-e3NAQmcC8Bjv1Ti4-ic72lOl-eEQOn7YQxmhCO_3J1XUo64bcMaRtnxo7yd5159lu1V8DdMj0lLb9UsF8XuHfQSWTIzuUprwA7olaDEaG8rOTx4zzUmGr8/p.png"
                    }
                    alt={sideView ? "Side View" : "Front View"}
                    className="watchImage"
                />
            </div>
            <button className="sideViewBtn" onClick={toggleView}>
                {sideView ? "Front View" : "Side View"}
            </button>
            <h2>APPLE WATCH SERIES 10</h2>
            <h1>46mm Jet Black Aluminum Case with Black Solo Loop</h1>
            <h2>
                From <span className="price">$420</span>
            </h2>
        </div>
    );
};

export default Body;
