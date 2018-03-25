import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import '../Table.css';

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
                                <TableCell className="p-table-cell"
                                     children={ <NestedTables object={element} />}
                                />
                            );
                        } else {
                            return (<TableCell className="p-table-cell">{element}</TableCell>);
                        }
                    })
                 );
            } else return null;
         } else {
            if ((typeof object)==="string" || (typeof object)==="number" ||
                 (typeof object)==="boolean") return (<TableCell className="p-table-cell">{object}</TableCell>);
             if (!(Object.keys(object).length > 0)) return null;
             return (
                 <Table>
                     <TableHead className="p-table-head">
                          <TableRow>
                             { (Object.keys(object).length > 0) &&
                                 Object.keys(object).map(key => {
                                     return (<TableCell className="p-table-cell">{key}</TableCell>);
                                 })
                             }
                          </TableRow>
                     </TableHead>
                     <TableBody>
                         <TableRow>
                         { (Object.keys(object).length > 0) &&
                             Object.keys(object).map(key => {
                                 return (
                                    <TableCell className="p-table-cell"
                                        children={<NestedTables object={object[key]} />}
                                    />
                                 );
                             })
                         }
                         </TableRow>
                     </TableBody>
                 </Table>
              );
         }
    }
}

export default NestedTables;