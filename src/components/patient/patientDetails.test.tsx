import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PatientDetails from "./patientDetails";

describe("<PatientDetails />", () => {
  it("renders patient details", () => {
    const patient = {
      patient_id: 1,
      name: "YATI",
      age: 20,
      gender: "Male",
      contact: "YATI@GMAIL",
      city: "NOIDA",
      state: "UP",
      country: "INDIA",
    };
    const patientDetails = render(<PatientDetails patient={patient} />);
    expect(patientDetails).toMatchSnapshot();
  });
});
