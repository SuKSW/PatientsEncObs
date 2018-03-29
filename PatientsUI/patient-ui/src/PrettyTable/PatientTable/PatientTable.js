import React from 'react';

import Patient from './Patient';
import Requests from "../../Requests";
import './PatientTable.css';

class PrettyPatientTable extends React.Component {

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
            <div>
            <table className="pp-table">
                <tbody>
                <tr>
                    <th rowSpan="2">                </th>
                    <th rowSpan="2">  Index         </th>
                    <th colSpan="4">  Name          </th>
                    <th rowSpan="2">  Active        </th>
                    <th rowSpan="2">  Gender        </th>
                    <th rowSpan="2">  Date of Birth </th>
                    <th rowSpan="2">  Multiple Birth</th>
                    <th rowSpan="2">  Diseased      </th>
                    <th rowSpan="2">  Communication </th>
                    <th colSpan="3">  Contact       </th>
                    <th rowSpan="2">  Marital Status</th>
                    <th rowSpan="2">  Last Updated  </th>
                </tr>
                <tr>
                    <th>  Use          </th>
                    <th>  Prefix       </th>
                    <th>  First Name   </th>
                    <th>  Family Name  </th>
                    <th>  System        </th>
                    <th>  Use           </th>
                    <th>  Value         </th>
                </tr>
                {patients.map((patient, index) => {
                    let encountersArray = encounters_object[patient.resource.id];
                    return (
                        <Patient
                            patientResource = {patient.resource}
                            patientIndex = {index}
                            encounters = {encountersArray}
                            observations_object = {observations_object}
                        />
                    );
                })}
                </tbody>
            </table>
            </div>
        );
    }
}
export default PrettyPatientTable;