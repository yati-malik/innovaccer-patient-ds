import React, { useEffect, useState } from "react";
import { getPatientDetails } from "../../api/patientApi";
import PatientDetails from "./patientDetails";
import {Patient} from './common/types';

const PatientProfile = (props: any) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  useEffect(() => {
    const id = props.match.params.patientId;
    getPatientDetails(id).then((response) => {
      setPatient(response[0]);
    });
  }, []);

  return <PatientDetails patient={patient}></PatientDetails>;
};

export default PatientProfile;
