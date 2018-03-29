import React, {Fragment} from 'react';

import EncounterTable from '../EncounterTable/EncounterTable';
import './PatientTable.css';

class Patient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patientResource: this.props.patientResource,
            patientIndex: this.props.patientIndex,
            encounters: this.props.encounters,
            observations_object: this.props.observations_object,
            showEncounters: false,
            arrowClassName: "arrow-up",
        };
        this.toggleEncounters = this.toggleEncounters.bind(this);
        this.deepFind = this.deepFind.bind(this);
        this.getBoolean = this.getBoolean.bind(this);
    }

    deepFind = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

    getBoolean = (content) => {
        if (content === null) return null;
        else if (content) return "true";
        else if (!content) return "false";
        else return null;
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
        const {patientResource, patientIndex, encounters, observations_object,
            showEncounters, arrowClassName} = this.state;
        return (
            <Fragment>
                <tr onClick={this.toggleEncounters}>
                    <td><div className={arrowClassName + " arrow"}>&#9658;</div>                                      </td>
                    <td>{patientIndex}                                                                          </td>
                        <td>{this.deepFind(['name', 0, 'use'], patientResource) }       </td>
                        <td>{this.deepFind(['name', 0, 'prefix'], patientResource) }    </td>
                        <td>{this.deepFind(['name', 0, 'given'], patientResource) }     </td>
                        <td>{this.deepFind(['name', 0, 'family'], patientResource) }    </td>
                    <td>{patientResource.active}                                                                </td>
                    <td>{patientResource.gender}                                                                </td>
                    <td>{patientResource.birthDate}                                                             </td>
                    <td>{patientResource.multipleBirthBoolean}                                                  </td>
                    <td>{this.getBoolean(patientResource.deceasedBoolean) }                                     </td>
                    <td>{this.deepFind(['communication', 0, 'language', 'coding', 0, 'display'], patientResource)} </td>
                        <td>{this.deepFind(['contact', 0, 'telecom', 0, 'system'], patientResource) } </td>
                        <td>{this.deepFind(['contact', 0, 'telecom', 0, 'use'], patientResource)    } </td>
                        <td>{this.deepFind(['contact', 0, 'telecom', 0, 'value'], patientResource)  } </td>
                    <td>{this.deepFind(['maritalStatus', 'coding', 0, 'display'], patientResource)}             </td>
                    <td>{patientResource.meta.lastUpdated}                                                      </td>
                </tr>
                {showEncounters &&
                    <tr>
                        <td colspan="1"></td>
                        <td colspan="17">
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