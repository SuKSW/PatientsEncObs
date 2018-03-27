import axios from 'axios';


class Requests {

    getPatients = () => {
        return axios.get('http://localhost:9000/patients')
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getEncounters = () => {
        return axios.get('http://localhost:9000/encounters')
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getObservations = () => {
        return axios.get('http://localhost:9000/observations')
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default Requests;