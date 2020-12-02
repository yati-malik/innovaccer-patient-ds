import {
  filterData,
  sortData,
  translateData,
  paginateData,
} from "./utility";

import { schema } from "./schema";
import { SortType} from '@innovaccer/design-system/core/components/organisms/grid/Grid';


const mockData = [
  {
    patient_id: 1,
    name: "YATI",
    age: 20,
    gender: "Male",
    contact: "YATI@GMAIL",
    city: "NOIDA",
    state: "UP",
    country: "INDIA"
  },
  {
    patient_id: 2,
    name: "RAHUL",
    age: 20,
    gender: "Male",
    contact: "RAHUL@GMAIL",
    city: "NOIDA",
    state: "UP",
    country: "INDIA"
  },
  {
    patient_id: 3,
    name: "NITU",
    age: 20,
    gender: "Female",
    contact: "NITU@GMAIL",
    city: "NOIDA",
    state: "UP",
    country: "INDIA"
  },
  {
    patient_id: 4,
    name: "RENU",
    age: 20,
    gender: "MALE",
    contact: "RENU@GMAIL",
    city: "NOIDA",
    state: "UP",
    country: "INDIA"
  },
];

describe("Testing Grid Operations", () => {
  test("Filter Data", () => {
    const filterList = {
      name: ["h-r"],
      gender: ["male"],
    };
    const expectedOutput = [
      {
        patient_id: 2,
        name: "RAHUL",
        age: 20,
        gender: "Male",
        contact: "RAHUL@GMAIL",
        city: "NOIDA",
        state: "UP",
        country: "INDIA",
      },
      {
        patient_id: 4,
        name: "RENU",
        age: 20,
        gender: "MALE",
        contact: "RENU@GMAIL",
        city: "NOIDA",
        state: "UP",
        country: "INDIA",
      },
    ];
    const currentOutput = filterData(schema, mockData, filterList);
    expect(currentOutput).toEqual(expectedOutput);
  });

  // test("Sorting data", () => {
  //   const type: SortType = "asc";
  //   const sortingList = [
  //     { name: "gender", type },
  //     { name: "name", type },
  //   ];
  //   const expectedOutput = [
  //     {
  //       patient_id: 3,
  //       name: { title: "NITU" },
  //       age: 20,
  //       gender: "Female",
  //       contact: "NITU@GMAIL",
  //       city: "NOIDA",
  //       state: "UP",
  //       country: "INDIA",
  //     },
  //     {
  //       patient_id: 2,
  //       name: { title: "RAHUL" },
  //       age: 20,
  //       gender: "Male",
  //       contact: "RAHUL@GMAIL",
  //       city: "NOIDA",
  //       state: "UP",
  //       country: "INDIA",
  //     },
  //     {
  //       patient_id: 4,
  //       name: { title: "RENU" },
  //       age: 20,
  //       gender: "MALE",
  //       contact: "RENU@GMAIL",
  //       city: "NOIDA",
  //       state: "UP",
  //       country: "INDIA",
  //     },
  //     {
  //       patient_id: 1,
  //       name: { title: "YATI" },
  //       age: 20,
  //       gender: "Male",
  //       contact: "YATI@GMAIL",
  //       city: "NOIDA",
  //       state: "UP",
  //       country: "INDIA",
  //     },
  //   ];
  //   const currentOutput = sortData(schema, mockData, sortingList);
  //   expect(currentOutput).toEqual(expectedOutput);
  // });
});
