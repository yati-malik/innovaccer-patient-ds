import Axios from './axiosUtils';

export const getPatientDetails = async (patientId: number) => {
    const response = await Axios.get('/patients?patient_id='+patientId);
    return response.data;
}

export const getAllPatientDetails = async () => {
    const response = await Axios.get('/patients');
    return response && response.data ? response.data : [];
}

export const uploadFileData = (data: FormData) => {
    return Axios.post('/patientsData',data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

