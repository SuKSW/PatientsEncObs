import React from 'react';

import './ObservationTable.css';

class Observation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            observationResource: this.props.observationResource,
        };
        this.deepFind = this.deepFind.bind(this);
    }

    deepFind = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

    render() {
        const observationResource = this.state.observationResource;
        return (
            <tr>
                <td>{observationResource.id}                                                                </td>
                <td>{observationResource.meta.lastUpdated}                                                  </td>
                <td>{this.deepFind(['code', 'text'], observationResource)}                        </td>
                <td>{this.deepFind(['performer', 0, 'reference'], observationResource)}                     </td>
                <td>{this.deepFind(['bodySite', 'coding', 0, 'display'], observationResource) }             </td>
                    <td>{this.deepFind(['component', 0,'code', 'coding', 0, 'display'], observationResource)}</td>
                    <td>{this.deepFind(['component',0,'interpretation', 'text'], observationResource)      }</td>
                    <td>{this.deepFind(['component',0,'valueQuantity', 'value'], observationResource)      }</td>
                    <td>{this.deepFind(['component',0,'valueQuantity', 'unit'], observationResource)       }</td>
                <td>{observationResource.effectiveDateTime }                                                </td>
                <td>{this.deepFind(['interpretation', 'text'], observationResource)}                        </td>
                <td>{this.deepFind(['category', 0,'coding', 0, 'display'], observationResource) }           </td>
                <td>{observationResource.status}                                                            </td>

            </tr>
         );
    }
}

export default Observation;