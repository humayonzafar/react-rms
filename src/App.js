import React from 'react';
import {GlobalStyles} from "./GlobalStyle";

//components
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
    return (
        <div className="App">
            <Header/>
            <Home />
            <GlobalStyles/>
        </div>
    );
}

export default App;
