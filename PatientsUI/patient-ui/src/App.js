import React, { Component } from 'react';
import './App.css';
import PatientTable from './Table/PatientTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Patients Information</h1>
                <p className="App-intro">
                    This application contains information of patients, related encounters and observations retrieved from "http://hapi.fhir.org/baseDstu3"
                </p>
            </header>
            <PatientTable />
        </div>
        );
    }
}

export default App;
