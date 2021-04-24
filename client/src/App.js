import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios'
function App() {

  const[pid,setpid] = useState('')
  const[visit,setvisit] = useState('')
  const[ind1,setind1] = useState('')
  const[ind2,setind2] = useState('')
  const[ind3,setind3] = useState('')
  const[ind4,setind4] = useState('')
  const[ind5,setind5] = useState('')
  const[ind6,setind6] = useState('')
  const[ind7,setind7] = useState('')
  const[ind8,setind8] = useState('')
  const[ind9,setind9] = useState('')
  const[ind10,setind10] = useState('')
  const[Findid,setFindid] = useState('')
  const[patientList,setpatientList] = useState([])

  useEffect(()=>{
    Axios.get("https://localhost:3001/api/get").then((response)=>{
      setpatientList(response.data)
    })
  })

  useEffect(()=>{
    Axios.get("https://localhost:3001/api/find").then((response)=>{
      pid:pid,
      setpatientList(response.data)
    })
  })

  const submitPatient = () => {
    Axios.post("https://localhost:3001/api/insert",
    {
      pid:pid,
      visit:visit,
      ind1:ind1,
      ind2:ind2,
      ind3:ind3,
      ind4:ind4,
      ind5:ind5,
      ind6:ind6,
      ind7:ind7,
      ind8:ind8,
      ind9:ind9,
      ind10:ind10
    }).then(()=>{
      alert("successful insert")
    });
  };

  return <div className="App">
    <h1>Patient Visits</h1>
    <div className="form">
    <label>Patient Id</label>
    <input type="text" name="Patient id" onChange={(e)=>{
      setpid(e.target.value)
    }}/>
    <label>Visitation Date</label>
    <input type="date" name="Visit" onChange={(e)=>{
      setvisit(e.target.value)
    }}/>
    <label>Indicator 1</label>
    <input type="number" name="Indicator 1" onChange={(e)=>{
      setind1(e.target.value)
    }}/>
    <label>Indicator 2</label>
    <input type="number" name="Indicator 2" onChange={(e)=>{
      setind2(e.target.value)
    }}/>
    <label>Indicator 3</label>
    <input type="number" name="Indicator 3" onChange={(e)=>{
      setind3(e.target.value)
    }}/>
    <label>Indicator 4</label>
    <input type="number" name="Indicator 4" onChange={(e)=>{
      setind4(e.target.value)
    }}/>
    <label>Indicator 5</label>
    <input type="number" name="Indicator 5" onChange={(e)=>{
      setind5(e.target.value)
    }}/>
    <label>Indicator 6</label>
    <input type="number" name="Indicator 6" onChange={(e)=>{
      setind6(e.target.value)
    }}/>
    <label>Indicator 7</label>
    <input type="number" name="Indicator 7" onChange={(e)=>{
      setind7(e.target.value)
    }}/>
    <label>Indicator 8</label>
    <input type="number" name="Indicator 8" onChange={(e)=>{
      setind8(e.target.value)
    }}/>
    <label>Indicator 9</label>
    <input type="number" name="Indicator 9" onChange={(e)=>{
      setind9(e.target.value)
    }}/>
    <label>Indicator 10</label>
    <input type="number" name="Indicator 10" onChange={(e)=>{
      setind10(e.target.value)
    }}/>
    <button onClick = {submitPatient}>Add patient</button>
    <br></br>
    <label>Patient id:</label>
    <input type="text" name="Findid" onChange={(e)=>{
      setFindid(e.target.value)
    }}/>
    <button onClick = {FindPatient}>Find patient</button>
    {patientList.map((val)=>{
      return <table>
        <tr>
          <th>Patient ID</th>
          <th>Visit date</th>
          <th>Indicator 1</th>
          <th>Indicator 2</th>
          <th>Indicator 3</th>
          <th>Indicator 4</th>
          <th>Indicator 5</th>
          <th>Indicator 6</th>
          <th>Indicator 7</th>
          <th>Indicator 8</th>
          <th>Indicator 9</th>
          <th>Indicator 10</th>
        </tr>
        <tr>
          <td>{val.pid}</td>
          <td>{val.visit}</td>
          <td>{val.ind1}</td>
          <td>{val.ind2}</td>
          <td>{val.ind3}</td>
          <td>{val.ind4}</td>
          <td>{val.ind5}</td>
          <td>{val.ind6}</td>
          <td>{val.ind7}</td>
          <td>{val.ind8}</td>
          <td>{val.ind9}</td>
          <td>{val.ind10}</td>
        </tr>
      </table>
    })}
    </div>
</div>
}

export default App;
