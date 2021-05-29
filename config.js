module.exports = {
  clientId: '593798c6-39ad-4ff6-813a-7cc4fd0e74d4', // Make sure to set your environment up correctly when starting/building
  scope: 'user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile',
  iss: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/DSTU2/',
  redirectUri: 'http://localhost:3000/',
};
