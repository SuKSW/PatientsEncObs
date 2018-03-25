import React from 'react';
import Button from 'material-ui/Button';
import { TableCell, TableRow } from 'material-ui/Table';

import EncounterTable from '../EncounterTable';
import NestedTables from './nestedTables';
import '../Table.css';

class Patient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patientResource: this.props.patientResource,
            patientIndex: this.props.patientIndex,
            showEncounters: false,
            showEncountersButton: <Button onClick={this.showEncounters}>"Show encounters"</Button>,
        };
    }

    showEncounters = () => {
        this.setState({
            showEncounters : true,
            showEncountersButton : <Button onClick={this.hideEncounters}>"Hide encounters"</Button>
        });
    }

    hideEncounters = () => {
        this.setState({
            showEncounters : false,
            showEncountersButton : <Button onClick={this.showEncounters}>"Show encounters"</Button>
        });
    }

    render() {
        const {patientResource, showEncounters, showEncountersButton, patientIndex} = this.state;
        return [
            <TableRow key={patientIndex}>
                <TableCell>{patientResource.id}</TableCell>
                <TableCell>{patientResource.meta.lastUpdated}</TableCell>
                <TableCell
                    colSpan={11}
                    children={<NestedTables object={ patientResource.name} />}
                />
                {showEncountersButton}
            </TableRow>,
            <TableRow>
                {showEncounters &&
                    <TableCell
                        colSpan={11}
                        children={<EncounterTable />}
                    />
                }
            </TableRow>
        ];
    }
}

export default Patient;