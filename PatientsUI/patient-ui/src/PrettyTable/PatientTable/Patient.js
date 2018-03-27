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
        this.deepFind = this.deepFind.bind(this);
    }

    deepFind = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

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
        const {patientResource, encounters, observations_object,
            showEncounters, arrowClassName} = this.state;
        return (
            <Fragment>
                <tr onClick={this.toggleEncounters}>
                    <td><div class={arrowClassName}>&#9658;</div></td>
                    <td>{patientResource.id}</td>
                    <td>{patientResource.meta.lastUpdated}</td>
                    <td>{this.deepFind(['name', 0, 'use'], patientResource) + " : " +
                        this.deepFind(['name', 0, 'prefix'], patientResource) + " " +
                        this.deepFind(['name', 0, 'given'], patientResource) + " " +
                        this.deepFind(['name', 0, 'family'], patientResource) + " "
                        }
                    </td>
                    <td>{patientResource.active}</td>
                    <td>{patientResource.gender}</td>
                    <td>{patientResource.birthDate}</td>
                    <td>{patientResource.multipleBirthBoolean}</td>
                    <td>{patientResource.deceasedBoolean}</td>
                    <td>{this.deepFind(['communication', 'language', 0, 'coding', 'display'], patientResource)}  </td>
                    <td>{
                        this.deepFind(['contact', 0, 'telecom', 0, 'system'], patientResource) + " : "+
                        this.deepFind(['contact', 0, 'telecom', 0, 'use'], patientResource) + " : "+
                        this.deepFind(['contact', 0, 'telecom', 0, 'value'], patientResource)
                        }
                    </td>
                    <td>{this.deepFind(['maritalStatus', 'coding', 0, 'display'], patientResource)}</td>
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