import React from "react";
import FileUpload from "../fileUpload/fileUpload";
import { Card } from "@innovaccer/design-system";
import PatientsGrid from '../patients/patientsGrid';

function HomePage() {
  return (
    <div
      style={{
        height: "400px",
      }}
    >
      <Card className="h-100">
         <FileUpload></FileUpload>
         <PatientsGrid></PatientsGrid>
      </Card>
    </div>
  );
}

export default HomePage;
