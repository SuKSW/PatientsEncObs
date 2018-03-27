import React, {Fragment} from 'react';

import ObservationTable from '../ObservationTable/ObservationTable';
import NestedTables from '../NestedTables/NestedTables';
import './EncounterTable.css';

class Encounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            encounterResource: this.props.encounterResource,
            observations: this.props.observations,
            showObservations: false,
            arrowClassName: "arrow-up",
        };
        this.toggleObservations = this.toggleObservations.bind(this);
    }

    toggleObservations = () => {
        var turn = "arrow-down";
        if(this.state.showObservations) {
            turn = "arrow-up";
        }
        this.setState({
            showObservations : !this.state.showObservations,
            arrowClassName: turn
        });
    }

    render() {
        const {encounterResource, observations, showObservations, arrowClassName} = this.state;
        return (
            <Fragment>
            <tr onClick={this.toggleObservations} class="encounter-table">
                <td><div class={arrowClassName}>&#9658;</div></td>
                <td>{encounterResource.id}</td>
                <td>{<NestedTables object={ encounterResource.type} />}</td>
                <td>{encounterResource.meta.lastUpdated}</td>
                <td>{<NestedTables object={ encounterResource.reason} />}</td>
                <td>{<NestedTables object={ encounterResource.diagnosis} />}</td>
                <td>{<NestedTables object={ encounterResource.participant} />}</td>
                <td>{encounterResource.status}</td>
                <td>{<NestedTables object={ encounterResource.period} />}</td>
            </tr>
            {showObservations &&
                <tr>
                    <td colspan="1"></td>
                    <td colspan="8">
                        <ObservationTable observations = { observations }   />
                    </td>
                </tr>
            }
            </Fragment>
           );
    }
}

export default Encounter;