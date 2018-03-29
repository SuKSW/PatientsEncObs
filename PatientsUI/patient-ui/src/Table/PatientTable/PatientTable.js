import React from 'react';

import Patient from './Patient';
import Requests from "../../Requests";
import './PatientTable.css';

class PatientTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: null,
            encounters_object: null,
            observations_object: null,
        };
    }

    componentDidMount() {
        this.requestPatients();
        this.requestEncounters();
        this.requestObservations();
    }

    requestPatients = () => {
        const requests = new Requests();
        const promised_patients = requests.getPatients();
        promised_patients.then(
            data => {
                const array = data.patients;
                this.setState({
                    patients: array,
                });
            }
        )
    }

    requestEncounters = () => {
        const requests = new Requests();
        const promised_encounters = requests.getEncounters();
        promised_encounters.then(
            encounters_object => {
                this.setState({
                    encounters_object: encounters_object,
                });
            }
        )
    }

    requestObservations = () => {
        const requests = new Requests();
        const promised_observations = requests.getObservations();
        promised_observations.then(
            observations_object => {
                this.setState({
                    observations_object: observations_object,
                });
            }
        )
    }

    render() {
        const { patients, encounters_object, observations_object } = this.state;
        if ( patients === null || encounters_object === null || observations_object === null ) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <table class="p-table">
                <tr>
                    <th>                </th>
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
                {patients.map((patient) => {
                    let encountersArray = encounters_object[patient.resource.id];
                    return (
                        <Patient
                            patientResource = {patient.resource}
                            encounters = {encountersArray}
                            observations_object = {observations_object}
                        />
                    );
                })}
            </table>
        );
    }
}
export default PatientTable;