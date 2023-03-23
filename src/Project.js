import React from 'react';
import { useState } from 'react';
import { TextInput, Field,Table, TableHeader, TableRow, TableCell, Button } from '@aragon/ui';
function Project() {
  const [value, setValue] = useState('')
  return (
    <>
    <Table 
   header={
    <TableRow>
      <TableHeader title="Enter Project Details" />
    </TableRow>
  }
  >
    
<br/> 
<TableRow>
      <TableCell>
  <Field label="Project Owner Name:" >
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
     </Field>    
     </TableCell>
     <TableCell>
    <Field label="Project Name:">
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
    </Field>
    </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
  <Field label="Project Title:" >
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
     </Field>    
     </TableCell>
     <TableCell>
    <Field label="Project developer:">
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
    </Field>
    </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
  <Field label="Project Start Date:" >
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
     </Field>    
     </TableCell>
     <TableCell>
    <Field label="Project Description:">
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
    </Field>
    </TableCell>
    </TableRow>
    </Table>
    <Table
   header={
    <TableRow>
      <TableHeader title="Enter Field Location Details" />
    </TableRow>
  }
  >
    <TableRow>
      <TableCell>
        <Field label="Latitude X:">
        <TextInput
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
        />
    </Field>
      </TableCell>
      
      <TableCell>

      <Field label="Latitude Y:">
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
    </Field>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Field label="Longitude X:">
        <TextInput
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
        />
    </Field>
      </TableCell>
      
      <TableCell>

      <Field label="Longitude Y:">
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
    </Field>
      </TableCell>
    </TableRow>

    </Table>
<br/>
    <Button label="Sumbit" mode="positive" wide/>
    </>
  )
}

export default Project;
