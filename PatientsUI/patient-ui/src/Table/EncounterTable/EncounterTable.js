import React from 'react';

import Requests from "../../Requests";

class EncounterTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: null,
            viewablePatients: null,
        };
    }

    componentDidMount() {
        this.requestPatients();
    }

    requestPatients = () => {
        const requests = new Requests();
        const promised_patients = requests.getPatients();
        promised_patients.then(
            data => {
                const array = data.patients;
                this.setState({
                    patients: array,
                    viewablePatients: array,
                });
            }
        )
    }

    render() {
        const {viewablePatients} = this.state;
        if (viewablePatients === null) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <table >
                <tr >
                    <td>hello</td>
                    <td >hello</td>
                    <td >hello</td>
                    <td >hello</td>
                    <td >hello</td>
                </tr>
                <tr>
                {viewablePatients.map(row => {
                    return (<td> hello</td>
                    );
                })}
                </tr>
            </table>
        );
    }
}
export default EncounterTable;