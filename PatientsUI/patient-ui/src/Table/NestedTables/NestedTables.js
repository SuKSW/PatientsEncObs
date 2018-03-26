import React from 'react';

import './NestedTables.css';

class NestedTables extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            object: this.props.object,
        }
    }

    render() {
        const object = this.state.object;
         if (object === null) {
            return null;
         }
         if(Array.isArray(object)) {
            if (object.length > 0) {
                return (
                    object.map(element => {
                        if (Array.isArray(element) || (Object.keys(element).length > 0)) {
                            return(
                                <td class="nested-table-cell">
                                   {<NestedTables object={element} />}
                                </td>
                            );
                        } else {
                            return (<td class="nested-table-cell">{element}</td>);
                        }
                    })
                 );
            } else return null;
         } else {
            if ((typeof object)==="string" || (typeof object)==="number" ||
                 (typeof object)==="boolean") return (<td class="nested-table-cell">{object}</td>);
             if (!(Object.keys(object).length > 0)) return null;
             return (
                 <table class="nested-table">
                      <tr>
                         { (Object.keys(object).length > 0) &&
                             Object.keys(object).map(key => {
                                 return (<td class="nested-table-cell">{key}</td>);
                             })
                         }
                      </tr>
                     <tr>
                     { (Object.keys(object).length > 0) &&
                         Object.keys(object).map(key => {
                             return (
                                <td class="nested-table-cell" >
                                    {<NestedTables object={object[key]} />}
                                </td>
                             );
                         })
                     }
                     </tr>
                 </table>
              );
         }
    }
}

export default NestedTables;