import React from 'react';

import Observation from './Observation';
import Requests from "../../Requests";
import './ObservationTable.css';

class ObservationTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            observations: this.props.observations,
        };
    }

    render() {
        const observations = this.state.observations;
        if ( observations === null ) {
            return (
                <div>Loading...</div>
            );
        } else if ( typeof(observations) == "undefined" ) {
            return (
                <div class="no-observations">No observations available</div>
            );
        }
        return (
            <table class="observation-table">
                <tr>
                    <th>  ID            </th>
                    <th>  Last Updated  </th>
                    <th>  Code          </th>
                    <th>  Performer     </th>
                    <th>  Body Site     </th>
                    <th>  Component     </th>
                    <th>  Effective Date</th>
                    <th>  Interpretation</th>
                    <th>  Category      </th>
                    <th>  Status        </th>
                </tr>
                {observations.map((observation) => {
                    return (
                        <Observation
                            observationResource = {observation.resource}
                        />
                    );
                })}
            </table>
        );
    }
}
export default ObservationTable;