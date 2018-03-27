import React, { Component } from 'react';
import './App.css';
import PatientTable from './Table/PatientTable/PatientTable';
import PrettyPatientTable from './PrettyTable/PatientTable/PatientTable';

class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
        <div class="App">
            <header class="App-header">
                <h1 class="App-title">Patients Information</h1>
                <p class="App-intro">
                    This application contains information of patients, related encounters and observations retrieved from "http://hapi.fhir.org/baseDstu3"
                </p>
            </header>
            <h2>Pretty Patient Table</h2>
            <PrettyPatientTable />
            <h2>Raw Data Patient Table</h2>
            <PatientTable />
        </div>
        );
    }
}

export default App;
