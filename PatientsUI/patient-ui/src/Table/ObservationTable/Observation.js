import React, {Fragment} from 'react';

import NestedTables from '../NestedTables/NestedTables';
import './ObservationTable.css';

class Observation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            observationResource: this.props.observationResource,
        };
    }

    render() {
        const observationResource = this.state.observationResource;
        return (
            <tr>
                <td>{observationResource.id}                                   </td>
                <td>{observationResource.meta.lastUpdated}                     </td>
                <td>{<NestedTables object={ observationResource.code} />}      </td>
                <td>{<NestedTables object={ observationResource.performer} />} </td>
                <td>{<NestedTables object={ observationResource.bodySite} />}  </td>
                <td>{<NestedTables object={ observationResource.component} />} </td>
                <td>{observationResource.effectiveDateTime }                   </td>
                <td>{<NestedTables object={ observationResource.interpretation} />}</td>
                <td>{<NestedTables object={ observationResource.category} />}  </td>
                <td>{<NestedTables object={ observationResource.basedOn} />}   </td>
                <td>{observationResource.status}                               </td>
            </tr>
         );
    }
}

export default Observation;