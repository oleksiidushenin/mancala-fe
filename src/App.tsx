import React from 'react';
import './App.css';
import Mancala from "./components/Mancala";
import ErrorProvider from "./store/ErrorProvider";

function App() {
    return (
        <ErrorProvider>
            <Mancala/>
        </ErrorProvider>

    );
}

export default App;
