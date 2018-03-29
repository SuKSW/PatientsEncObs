import React from 'react';
import './App.css';
import PatientTable from './Table/PatientTable/PatientTable';
import PrettyPatientTable from './PrettyTable/PatientTable/PatientTable';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pretty: true,
        };
    }

    handleRadioButtonChange = (e) => {
        debugger;
        if (e.target.value === "pretty") {
            this.setState({
                pretty: true,
            })
        } else if (e.target.value === "raw") {
            this.setState({
                pretty: false,
            })
        }
    }

    render() {
        const pretty = this.state.pretty;
        return (
        <div className="App">
            <ul className="table-radio">
                <li>
                    <input type="radio" id="pretty"
                        value="pretty"
                        checked={pretty}
                        onChange={this.handleRadioButtonChange}
                    />
                    <label htmlFor="pretty">Pretty Table</label>
                </li>
                <li>
                    <input type="radio" id="raw"
                        value="raw"
                        checked={!pretty}
                        onChange={this.handleRadioButtonChange}
                        />
                    <label htmlFor="raw">Raw Data Table</label>
                </li>
            </ul>
            { pretty && <PrettyT /> }
            { !pretty && <RawT /> }
        </div>
        );
    }
}

const PrettyT = () => {
    return (
        <div>
            <h3>Pretty Patient Table</h3>
            <div className="pp-div">
                <PrettyPatientTable />
            </div>
        </div>
    );
}

const RawT = () => {
    return (
        <div>
            <h3>Raw Data Patient Table</h3>
            <div className="p-div">
                <PatientTable />
            </div>
        </div>
    );
}

export default App;
