import React from 'react';

import Observation from './Observation';
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
        } else if ( typeof(observations) === "undefined" ) {
            return (
                <div class="no-observations">No observations available</div>
            );
        }
        return (
            <table class="observation-table">
                <tr>
                    <th rowspan="2">  ID            </th>
                    <th rowspan="2">  Last Updated  </th>
                    <th rowspan="2">  Code          </th>
                    <th rowspan="2">  Performer     </th>
                    <th rowspan="2">  Body Site     </th>
                    <th colspan="4">  Component      </th>
                    <th rowspan="2">  Effective Date</th>
                    <th rowspan="2">  Interpretation</th>
                    <th rowspan="2">  Category      </th>
                    <th rowspan="2">  Status        </th>
                </tr>
                <tr>
                    <th>  Component       </th>
                    <th>  Interpretation  </th>
                    <th>  Value           </th>
                    <th>  Unit            </th>
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