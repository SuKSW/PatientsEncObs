import React, {Fragment} from 'react';

import EncounterTable from '../EncounterTable/EncounterTable';
import NestedTables from '../NestedTables/NestedTables';
import './PatientTable.css';

class Patient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patientResource: this.props.patientResource,
            patientIndex: this.props.patientIndex,
            showEncounters: false,
            arrowClassName: "arrow-up",
        };
        this.toggleEncounters = this.toggleEncounters.bind(this);
    }

    toggleEncounters = () => {
        var turn = "arrow-down";
        if(this.state.showEncounters) {
            turn = "arrow-up";
        }
        this.setState({
            showEncounters : !this.state.showEncounters,
            arrowClassName: turn
        });
    }

    render() {
        const {patientResource, patientIndex, showEncounters, arrowClassName} = this.state;
        return [
            <tr onClick={this.toggleEncounters}>
                <td><div class={arrowClassName}>&#9658;</div></td>
                <td>{patientResource.id}</td>
                <td>{patientResource.meta.lastUpdated}</td>
                <td>
                    {<NestedTables object={ patientResource.name} />}
                </td>
            </tr>,
            <tr>
            <td colspan="12">
            {showEncounters &&
                <EncounterTable />
            }
            </td>
            </tr>
           ];
    }
}

export default Patient;