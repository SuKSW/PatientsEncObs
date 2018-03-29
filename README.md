# PatientsEncObs
A server and a client program which interact to display data that exists in FHIR format. The FHIR reources patient, encounters and observations are presented in the UI as nested tables.  

## Instructions  
git clone https://github.com/SuKSW/PatientsEncObs.git  
  

### To start the server  
cd PatientsEncObs\PatientDataViewer  
mvn install  
mvn clean spring-boot:run -Dserver.port=9000  

### To start the client  
(open another Command Prompt Terminal while inside the cloned directory - PatientsEncObs)  
cd PatientsUI\patient-ui  
npm install  
npm start

## Requirements
Maven
JDK 1.8  
Node.js  

## Technologies used
Spring Framework  
ReactJs  
