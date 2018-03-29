import React from 'react';

import './NestedTables.css';

class NestedTables extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            object: this.props.object,
        }
        this.getBoolean = this.getBoolean.bind(this);
    }

    getBoolean = (content) => {
        if (content === null) return null;
        else if (content) return "true";
        else if (!content) return "false";
        else return null;
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
                        if (Array.isArray(element)) {
                            return(
                                <tr class="nested-table-cell">
                                   {<NestedTables object={element} />}
                                </tr>
                            );
                        } else if (Object.keys(element).length > 0) {
                            return(
                                <td class="nested-table-cell">
                                   {<NestedTables object={element} />}
                                </td>
                            );
                        } else {
                            return element;
                        }
                    })
                 );
            } else return null;
         } else {
            if ((typeof object)==="string" || (typeof object)==="number") return object;
            if ((typeof object)==="boolean") return this.getBoolean(object);
             if ((typeof object)==="undefined" || (Object.keys(object).length < 1)) return null;
             return (
                 <table class="nested-table">
                      <tr>
                         { (Object.keys(object).length > 0) &&
                             Object.keys(object).map(key => {
                                 return (<th class="nested-table-cell">{key}</th>);
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