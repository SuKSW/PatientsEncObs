import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import EncounterTable from '../EncounterTable';
import '../Table.css';

class Patient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEncounters: false,
            patient: this.props.patient,
        };
    }

    handleToggle = () => this.setState({showEncounters: !this.state.showEncounters});

    render() {
        const {patient, showEncounters} = this.state;
        console.log(patient);
        return (
            <TableRow>
                <TableRowColumn>{patient.id}</TableRowColumn>
                <TableRowColumn>{patient.id}</TableRowColumn>
                <TableRowColumn>{patient.name.given}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton
                      label="Toggle Encounters"
                      onClick={this.handleToggle}
                    />
                </TableRowColumn>
            </TableRow>

        );
    }
}

export default Patient;