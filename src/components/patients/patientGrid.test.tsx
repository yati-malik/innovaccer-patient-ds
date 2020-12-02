import React from "react";
import configMockStore from 'redux-mock-store';
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import PatientGrid from './patientsGrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mockStore = configMockStore();

describe("<PatientGrid />", () => {
    const store = mockStore({ fileUploaded: true });
    it("renders file upload", () => {
        const patientGrid = render(
            <Provider store={store}>
                <Router>
                    <PatientGrid />
                </Router>
            </Provider>);
        expect(patientGrid).toMatchSnapshot();
    });
});