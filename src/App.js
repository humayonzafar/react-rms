import React from 'react';
import {GlobalStyles} from "./GlobalStyle";

//components
import Header from "./components/Header";
import Home from "./components/Header/Home";
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
