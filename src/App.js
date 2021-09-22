import React from 'react';
import {GlobalStyles} from "./GlobalStyle";

//components
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            Start here.
            <GlobalStyles/>
        </div>
    );
}

export default App;
