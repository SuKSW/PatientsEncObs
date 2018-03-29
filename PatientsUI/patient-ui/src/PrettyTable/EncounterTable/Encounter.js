import React, {Fragment} from 'react';

import ObservationTable from '../ObservationTable/ObservationTable';
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
        this.deepFind = this.deepFind.bind(this);
    }

    deepFind = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

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
                <td>{this.deepFind(['type', 0, 'text'], encounterResource)}</td>
                <td>{encounterResource.meta.lastUpdated}</td>
                <td>{this.deepFind(['reason', 0, 'text'], encounterResource)} </td>
                <td>{this.deepFind(['diagnosis', 0, 'condition', 'reference'], encounterResource)} </td>
                <td>{this.deepFind(['participant', 0, 'individual', 'reference'], encounterResource)} </td>
                <td>{encounterResource.status}</td>
                <td>{this.deepFind(['period', 'start'], encounterResource)} </td>
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