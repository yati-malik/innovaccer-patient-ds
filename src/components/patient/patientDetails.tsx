import React from 'react';
import {Patient} from './common/types';
import { Card, Row, Column, Input, Label } from "@innovaccer/design-system";

const PatientDetails = ({patient}: {patient: Patient | null}) => {
    return(
        <Card>
        <Row className="mt-5">
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>Name</Label>
            <Input name="input" value={patient?.name} readonly />
          </Column>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>Age</Label>
            <Input name="input" value={patient?.age.toString()} readonly />
          </Column>
        </Row>
        <Row>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>Gender</Label>
            <Input name="input" value={patient?.gender} readonly />
          </Column>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>Contact</Label>
            <Input name="input" value={patient?.contact} readonly />
          </Column>
        </Row>
        <Row>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5" >
            <Label withInput>City</Label>
            <Input name="input" value={patient?.city} readonly />
          </Column>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>State</Label>
            <Input name="input" value={patient?.state} readonly />
          </Column>
        </Row>
        <Row>
          <Column sizeXL="5" sizeL="5" sizeM="5" className="ml-5 mb-5">
            <Label withInput>Country</Label>
            <Input name="input" value={patient?.country} readonly />
          </Column>
        </Row>
      </Card>
    );
}

export default PatientDetails;