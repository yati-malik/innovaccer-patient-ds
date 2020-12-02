import React from 'react';
import {GridCell} from '@innovaccer/design-system';
import {NavLink} from 'react-router-dom';
import { Schema } from '@innovaccer/design-system/core/components/organisms/grid/Grid';


export const schema: Schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '25%',
      resizable: true,
      separator: true,
      tooltip: true,
      filters: [
        { label: 'A-G', value: 'a-g' },
        { label: 'H-R', value: 'h-r' },
        { label: 'S-Z', value: 's-z' },
      ],
      onFilterChange: (a: any, filters: any) => {
        for (const filter of filters) {
          switch (filter) {
            case 'a-g':
              if (a.name[0].toLowerCase() >= 'a' && a.name[0].toLowerCase() <= 'g') return true;
              break;
            case 'h-r':
              if (a.name[0].toLowerCase() >= 'h' && a.name[0].toLowerCase() <= 'r') return true;
              break;
            case 's-z':
              if (a.name[0].toLowerCase() >= 's' && a.name[0].toLowerCase() <= 'z') return true;
              break;
          }
        }
        return false;
      },
      cellType: 'WITH_META_LIST',
      cellRenderer: (props: any) => {
        return (
         <>
           <NavLink to={'/patientProfile/'+props.data.patient_id}>
           <GridCell
              {...props}
              schema={{...props.schema,name: 'name'}}
            >
            </GridCell>
           </NavLink>
         </>
        )}    
    },
    {
      name: 'patient_id',
      displayName: 'PatientId',
      width: '0px',
      resizable: false,
      separator: false,
      sorting: false,
      hidden: true,
      cellType: "WITH_META_LIST"
    },
    {
      name: 'contact',
      displayName: 'Contact',
      width: '25%',
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'  
    },
    {
      name: 'age',
      displayName: 'Age',
      width: '25%',
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '25%',
      resizable: true,
      comparator: (a: any, b: any) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: (a: any) => ({ 
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      onFilterChange: (a: any, filters: any) => {
        for (const filter of filters) {
          if (a.gender.toLowerCase() === filter) return true;
        }
        return false;
      },
    }
  ];


      


  