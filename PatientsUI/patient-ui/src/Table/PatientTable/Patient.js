import React, {Fragment} from 'react';

import EncounterTable from '../EncounterTable/EncounterTable';
import NestedTables from '../NestedTables/NestedTables';
import './PatientTable.css';

class Patient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patientResource: this.props.patientResource,
            encounters: this.props.encounters,
            observations_object: this.props.observations_object,
            showEncounters: false,
            arrowClassName: "arrow-up",
        };
        this.toggleEncounters = this.toggleEncounters.bind(this);
        this.getBoolean = this.getBoolean.bind(this);
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

    getBoolean = (content) => {
        if (content === null) return null;
        else if (content) return "true";
        else if (!content) return "false";
        else return null;
    }

    render() {
        const {patientResource, encounters, observations_object,
            showEncounters, arrowClassName} = this.state;
        return (
            <Fragment>
                <tr onClick={this.toggleEncounters}>
                    <td><div class={arrowClassName}>&#9658;</div></td>
                    <td>{patientResource.id}</td>
                    <td>{patientResource.meta.lastUpdated}</td>
                    <td>{<NestedTables object={ patientResource.name} />}</td>
                    <td>{patientResource.active}</td>
                    <td>{patientResource.gender}</td>
                    <td>{patientResource.birthDate}</td>
                    <td>{this.getBoolean(patientResource.multipleBirthBoolean)}</td>
                    <td>{this.getBoolean(patientResource.deceasedBoolean)}</td>
                    <td>{<NestedTables object={ patientResource.communication} />}</td>
                    <td>{<NestedTables object={ patientResource.contact} />}</td>
                    <td>{<NestedTables object={ patientResource.maritalStatus} />}</td>
                </tr>
                {showEncounters &&
                    <tr>
                        <td colspan="1"></td>
                        <td colspan="11">
                            <EncounterTable
                                encounters = { encounters }
                                observations_object = { observations_object }
                            />
                        </td>
                    </tr>
                }
            </Fragment>
        );
    }
}

export default Patient;