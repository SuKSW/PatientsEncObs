import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

import Patient from './Row/Patient';
import Requests from "../Requests";
import './Table.css';

const tableHeadings = [
    {
        heading: 'ID',
    },
    {
        heading: 'Last Updated',
    },
    {
        heading: 'Name',
    },
    {
        heading: 'Active',
    },
    {
        heading: 'Gender',
    },
    {
        heading: 'Date of Birth',
    },
    {
        heading: 'Multiple Birth',
    },
    {
        heading: 'Diseased',
    },
    {
        heading: 'Communication',
    },
    {
        heading: 'Contact',
    },
    {
        heading: 'Marital Status',
    },
];


class PatientTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: null,
            viewablePatients: null,
        };
    }

    componentDidMount() {
        this.requestPatients();
    }

    requestPatients = () => {
        const requests = new Requests();
        const promised_patients = requests.getPatients();
        promised_patients.then(
            data => {
                const array = data.patients;
                this.setState({
                    patients: array,
                    viewablePatients: array,
                });
            }
        )
    }

    render() {
        const {viewablePatients} = this.state;
        if (viewablePatients === null) {
            return (
                <div><CircularProgress /></div>
            );
        }
        return (
            <Table className="p-table">
                <TableHeader className="p-table-column"
                    displaySelectAll = {false}
                    adjustForCheckbox = {false}
                    >
                    {tableHeadings.map(row => {
                        return (
                            <TableHeaderColumn className="p-table-column">{ row.heading }</TableHeaderColumn>
                        );
                    })}
                </TableHeader>
                <TableBody
                    displayRowCheckbox = {false}
                    >
                    <TableRow>
                    {viewablePatients.map(row => {
                        return (
                            <Patient patient = {row.resource} />
                        );
                    })}
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}
export default PatientTable;