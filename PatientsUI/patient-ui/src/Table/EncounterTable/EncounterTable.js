import React from 'react';

import Encounter from './Encounter';
import './EncounterTable.css';

class EncounterTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            encounters: this.props.encounters,
            observations_object: this.props.observations_object,
        };
    }

    render() {
        const { encounters, observations_object } = this.state;
        if ( encounters === null ) {
            return (
                <div>Loading...</div>
            );
        } else if ( typeof(encounters) === "undefined" ) {
            return (
                <div class="no-encounters">No encounters available</div>
            );
        }
        return (
            <table class="encounter-table">
                <tr>
                    <th>                </th>
                    <th>  ID            </th>
                    <th>  Type          </th>
                    <th>  Last Updated  </th>
                    <th>  Reason        </th>
                    <th>  Diagnosis    </th>
                    <th>  Participant   </th>
                    <th>  Status        </th>
                    <th>  Period        </th>
                </tr>
                {encounters.map((encounter) => {
                    let observationsArray = observations_object[encounter.resource.id];
                    return (
                        <Encounter
                            encounterResource = {encounter.resource}
                            observations = {observationsArray}
                        />
                    );
                })}
            </table>
        );
    }
}
export default EncounterTable;