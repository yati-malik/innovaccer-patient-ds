import {getAllPatientDetails} from '../../../api/patientApi';
import { Data } from '@innovaccer/design-system/core/components/organisms/grid/Grid';

const data: any  = async() => {
    const response: Data = await getAllPatientDetails();
    return response;
}

export default data;