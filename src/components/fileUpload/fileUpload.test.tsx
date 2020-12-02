import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FileUpload from './fileUpload';
import configMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configMockStore();

describe("<FileUpload />", () => {
  const store = mockStore({ fileUploaded: true });
  it("renders file upload", () => {
    const fileUpload = render(
    <Provider store={store}>
      <FileUpload />
    </Provider>);
    expect(fileUpload).toMatchSnapshot();
  });
});
