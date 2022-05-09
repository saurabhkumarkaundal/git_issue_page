import { useEffect, useState } from 'react';
import './App.css';
import {Table} from 'react-bootstrap';
import AdjustIcon from '@mui/icons-material/Adjust';

function App() {
  const[data,setData]=useState([]);
  const [listItems, setListItems] = useState(10);

  useEffect(()=>{
    const callingData=async()=>{
      const resp=await fetch("https://api.github.com/repos/facebook/react/issues")
      const data2=await resp.json()
      setData(data2);
    }
    callingData();
  },[]);  

  

  console.log(data);
  return (
    <div className="App">
      <div className="head">
        <p
          style={{
            display: "inline",
            fontSize: "20px",
            color: "#246af7",
            paddingLeft: "100px",
            paddingTop: "100px",
          }}
        >
          facebook/react
        </p>
        <button
          style={{
            borderRadius: "50px",
            height: "20px",
            display: "inline",
            fontSize: "10px",
            paddingLeft: "14px",
          }}
        >
          Public
        </button>
        <p
          style={{ display: "inline", fontSize: "12px", paddingLeft: "900px" }}
        >
          Notification
        </p>
        <p
          style={{
            display: "inline",
            align: "left",
            fontSize: "12px",
            paddingLeft: "10px",
          }}
        >
          Star
        </p>
        <p
          style={{
            display: "inline",
            align: "left",
            fontSize: "12px",
            paddingLeft: "10px",
          }}
        >
          Fork
        </p>
        <div className='secondTop'>
          <p>Code</p>
          <p>Issues</p>
          <p>Pull Requests</p>
          <p>Actions</p>
          <p>Projects</p>
          <p>Wiki</p>
          <p>Security</p>
          <p>Insights</p>
        </div>
      </div>
      <div className="box">
        <Table className="table table-bordered">
          <tbody>
            <td>
              <div className='item_box'>
              <p className='item1'>open</p>
              <p className='item2'>
                <select value="United State" className="country">
                  <option value="United Kingdom">Author</option>
                </select>
              </p>
              <p className='item3'>
                <select value="United State" className="country">
                  <option value="United Kingdom">Label</option>
                </select>
              </p>
              <p className='item4'>
                <select value="United State" className="country">
                  <option value="United Kingdom">Project</option>
                </select>
              </p>
              <p className='item5'>
                <select value="United State" className="country">
                  <option value="United Kingdom">Milestones</option>
                </select>
              </p>
              <p className='item6'>
                <select value="United State" className="country">
                  <option value="United Kingdom">Sort</option>
                </select>
              </p>
              </div>
            </td>
          </tbody>
        </Table>
        <Table className="table table-hover table-bordered">
          <tbody>
            {data.slice(0,listItems).map(items => {
              return (
                <tr>
                  <td><AdjustIcon/></td>
                  <td onClick={()=> window.open(items.html_url, "_blank")}>{items.title}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <button onClick={() => setListItems(listItems + 10)}>Show more...</button>
      </div>
    </div>
  );
}

export default App;
