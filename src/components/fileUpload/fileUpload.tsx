import React, { useRef } from "react";
import { Card } from "@innovaccer/design-system";
import { uploadFileData } from "../../api/patientApi";
import { ToastContainer, toast } from "react-toastify";
import {useDispatch} from 'react-redux';
import {toggleUploaded} from './fileUploadSlice';

function FileUploader() {
  const fileInput: any = useRef(null);
  const dispatch = useDispatch();
  const handleFileUpload = () => {
    let file = fileInput.current.files[0];
    if(!file){
      toast.error("Please select a file!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return false;
    }
    if (file?.size > 50000) {
      toast.error("File size can not be greater than 50 MB", {
        position: toast.POSITION.TOP_LEFT,
      });
      return false;
    }
    debugger;
    let data = new FormData();
    data.append("patientFile", file, "patient_data.csv");
    
    uploadFileData(data)
      .then((res) => {
        console.log(res.data.status);
        dispatch(toggleUploaded());
        toast.success("File uploaded successfully!", {
            position: toast.POSITION.TOP_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("File upload failed!", {
            position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Card>
        <div className="upload-container">
          <input type="File" ref={fileInput} />
          <input type="button" onClick={handleFileUpload} value="Upload" />
        </div>
      </Card>
    </>
  );
}

export default FileUploader;
