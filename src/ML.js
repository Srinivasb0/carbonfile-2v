import React, { useState } from "react";
import { Box, Button  } from '@aragon/ui';

const jsonData1 = {
  "data":[[96.53629303,1.195881128,407.0305176,0.33975932,0.745303929,1.191978574,0.623761475,0.404462814,1.323605418,3.322424173,
      2.803720236,333.6352844,1378.880859,1741.066528,1091.472656,1523.585449,717.5,1177.5,0.004692383,0.422699928,0.729155719,2.713955164,3.591895342,
     3.567108154,19.0,54.0,60.0,1.115696907,1.209330082, 0.89304471, 19.0, 26.0,60.0,2.94852066,0.559443474,
    0.817534447,2.076514244, 0.908767223,0.015077704,0.000882426,0.751848042, 14.14213562,8.1049757, 0.095970303, 9.293166161,
    405.8115234, 0.997240126, 4.920476913,3.96e-06,2.44937849, 0.304784656, 6.910558701, 0.813673198, 97.75122833,
    0.931171417, 0.570615828,0.297301097,-80.264135, 43.709067]]
}
const jsonData2 = {
  "data":[[36.53629303,1.195881128,407.0305176,0.33975932,0.745303929,1.191978574,0.623761475,0.404462814,1.323605418,3.322424173,
    2.803720236,333.6352844,1378.880859,1741.066528,1091.472656,1523.585449,717.5,1177.5,0.004692383,0.422699928,0.729155719,2.713955164,3.591895342,
   3.567108154,19.0,54.0,60.0,1.115696907,1.209330082, 0.89304471, 19.0, 26.0,60.0,2.94852066,0.559443474,
  0.817534447,2.076514244, 0.908767223,0.115077704,0.000882426,0.751848042, 14.14213562,8.1049757, 0.095970303, 9.293166161,
  405.8115234, 0.997240126, 3.920476913,3.96e-06,2.44937849, 0.304784656, 6.910558701, 0.813673198, 97.75122833,
  0.931171417, 0.570615828,0.297301097,-80.264135, 43.709067]]
}
const jsonData3 = {
  "data":[[36.53629303,1.195881128,407.0305176,0.33975932,0.745303929,1.191978574,0.623761475,0.404462814,1.323605418,3.322424173,
    2.803720236,333.6352844,1378.880859,1721.066528,1091.472656,1523.585449,717.5,1177.5,0.004692383,0.422699928,0.729155719,2.713955164,3.591895342,
   3.567108154,19.0,54.0,80.0,1.115696907,1.209330082, 0.89304471, 19.0, 26.0,60.0,2.94852066,0.559443474,
  0.817534447,2.076514244, 0.908767223,0.115077704,0.000882426,0.751848042, 14.14213562,8.1049757, 0.095970303, 9.293166161,
  405.8115234, 0.997240126, 3.920476913,3.96e-06,2.44937849, 0.304784656, 6.910558701, 0.813673198, 97.75122833,
  0.931171417, 0.570615828,0.297301097,-80.264135, 43.709067]]
}

function ML() {
  const [value, setValue] = useState(0);
  const [soc, setsoc] = useState();
  function calculate_soc() {
      console.log('ML Model')
      console.log(value);
      var jsonData;
      if (value==="1"){
        jsonData = jsonData1;
      }
      else if (value==="2"){
        jsonData = jsonData2;
      }
      else if (value==="3"){
        jsonData = jsonData3;
      }
      if (value!==0){
      fetch('http://localhost:5000//predict', {  // Enter your IP address here
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type' : 'application/json'
        },
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    }).then((response) => response.json())
    .then((data) => {
       console.log(data['body']);
       setsoc(JSON.parse(data['body'])['SOC']);
       // Handle data
    })
  }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='text-center'>
  <Box>
  <select class="form-select-lg" aria-label="Default" value={value} onChange={handleChange}>
  <option selected>Select Project</option>
  <option value="1">Coffee farmers Asso</option>
  <option value="2">Ohio forest association</option>
  <option value="3">America potato farmers</option>
</select>
<br/><br/><br/>
<Button label="Calculate SOC" mode="strong" onClick={calculate_soc}/>

<br/><br/><br/>
<Button label="Calculate Carbon Credits" mode="strong" />
<br/><br/>
<h4>{soc}</h4>
</Box>

    </div>
  )
}

export default ML;
