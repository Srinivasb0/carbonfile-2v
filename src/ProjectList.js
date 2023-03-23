import React from 'react';

const arr=[
  {
   "Project ID": "1",
   "Project Owner": "Coffee farmers Asso",
   "Offset project Type": "Organic farming",
   "Project Title": "Starbucks clean coffee",
   "Project developer": "Starbucks",
   "Project Start date": "04/01/2023",
   "Project description": "No fertilization",
   "SOC": 2.87,
   "Carbon credits": 3
  },
  {
  "Project ID": "2",
   "Project Owner": "Ohio forest association",
   "Offset project Type": "Tree plantation",
   "Project Title": "Microsoft plantation campaign",
   "Project developer": "Microsoft",
   "Project Start date": "02/07/2022",
   "Project description": "Eucaliptus plantation",
   "SOC": 3.03,
   "Carbon credits": 3
  },
  {
    "Project ID": "3",
   "Project Owner": "America potato farmers",
   "Offset project Type": "No till farming",
   "Project Title": "Lays for soil",
   "Project developer": "Pepsi",
   "Project Start date": "01/05/2022",
   "Project description": "Growing potatoes without tilling soil",
   "SOC": 1.31,
   "Carbon credits": 1
  }
 ]

function ProjectList() {
  return (
    <>
    <table class="table table-light table-striped text-center">
  <thead>
    <tr>
      <th scope="col">Project Name</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Developer</th>
      <th scope="col">Start Date</th>
      <th scope="col">SOC</th>
      <th scope="col">Carbon credits</th>
    </tr>
  </thead>
  <tbody>
  {arr.map(ar => (   
     <tr>
      <th scope="row">{ar['Offset project Type']}</th>
      <td>{ar['Project Owner']}</td>
      <td>{ar['Project developer']}</td>
      <td>{ar['Project Start date']}</td>
      <td>{ar['SOC']}</td>
      <td>{ar['Carbon credits']}</td>
    </tr>
  ))
  }
  </tbody>
</table>
      
    </>
  )
}

export default ProjectList;
