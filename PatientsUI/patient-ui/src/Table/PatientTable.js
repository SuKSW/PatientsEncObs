import React from 'react';

import { CircularProgress } from 'material-ui/Progress';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Patient from './Row/Patient';
import Requests from "../Requests";
import './Table.css';

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
        const {viewablePatients, showEncountersOf} = this.state;
        if (viewablePatients === null) {
            return (
                <div><CircularProgress /></div>
            );
        }
        return (
            <Table className="p-table">
                <TableHead>
                    <TableRow>
                        <TableCell className="p-table-cell-7">  ID            </TableCell>
                        <TableCell className="p-table-cell-7">  Last Updated  </TableCell>
                        <TableCell className="p-table-cell-7">  Name          </TableCell>
                        <TableCell className="p-table-cell-7">  Active        </TableCell>
                        <TableCell className="p-table-cell-7">  Gender        </TableCell>
                        <TableCell className="p-table-cell-7">  Date of Birth </TableCell>
                        <TableCell className="p-table-cell-7">  Multiple Birth</TableCell>
                        <TableCell className="p-table-cell-7">  Diseased      </TableCell>
                        <TableCell className="p-table-cell-7">  Communication </TableCell>
                        <TableCell className="p-table-cell-7">  Contact       </TableCell>
                        <TableCell className="p-table-cell-7">  Marital Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {viewablePatients.map((row,index) => {
                        return (
                            <Patient
                                patientResource = {row.resource}
                                patientIndex = {index}
                            />
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}
export default PatientTable;