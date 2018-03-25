import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Requests from "../Requests";
import './Table.css';

const tableHeadings = [
    { heading: 'ID', className: '' },
    { heading: 'Last Updated',},
    { heading: 'Name',},
    { heading: 'Active',},
    { heading: 'Gender',},
    { heading: 'Date of Birth',},
    { heading: 'Multiple Birth',},
    { heading: 'Diseased',},
    { heading: 'Communication',},
    { heading: 'Contact',},
    { heading: 'Marital Status',},
];

class EncounterTable extends React.Component {

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
                <TableHead className="">
                    <TableRow>
                    {tableHeadings.map(row => {
                        return (
                            <TableCell className="p-table-cell-7">{ row.heading }</TableCell>
                        );
                    })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    {viewablePatients.map(row => {
                        return (<div> </div>
                        );
                    })}
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}
export default EncounterTable;