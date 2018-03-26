import React, { Component } from 'react';
import './App.css';
import PatientTable from './Table/PatientTable/PatientTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
        <div class="App">
            <header class="App-header">
                <h1 class="App-title">Patients Information</h1>
                <p class="App-intro">
                    This application contains information of patients, related encounters and observations retrieved from "http://hapi.fhir.org/baseDstu3"
                </p>
            </header>
            <PatientTable />
        </div>
        );
    }
}

export default App;
