import React from 'react';

import Patient from './Patient';
import Requests from "../../Requests";
import './PatientTable.css';

class PatientTable extends React.Component {

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
        const {viewablePatients, showEncountersOf} = this.state;
        if (viewablePatients === null) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <table class="patient-table">
                <tr>
                    <th></th>
                    <th>  ID            </th>
                    <th>  Last Updated  </th>
                    <th>  Name          </th>
                    <th>  Active        </th>
                    <th>  Gender        </th>
                    <th>  Date of Birth </th>
                    <th>  Multiple Birth</th>
                    <th>  Diseased      </th>
                    <th>  Communication </th>
                    <th>  Contact       </th>
                    <th>  Marital Status</th>
                </tr>
                {viewablePatients.map((row,index) => {
                    return (
                        <Patient
                            patientResource = {row.resource}
                            patientIndex = {index}
                        />
                    );
                })}
            </table>
        );
    }
}
export default PatientTable;