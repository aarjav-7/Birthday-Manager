import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import "react-datepicker/dist/react-datepicker.css";

export default function AddBday() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [mobile, setMobile] = useState("");
    const [mail, setMail] = useState("");
    const [insta, setInsta] = useState("");
    let [tags, setTags] = useState("");
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null); 
    console.log("The date is "+value);

    const handleAdd = async ()=>{
        let arr = date.split("-");
        let year = arr[0];
        let month = arr[1];
        let day = arr[2];
        //console.log(year, month, day);
        console.log(tags);

        tags = tags.split(' ');
        console.log(name, day, month, year, mobile, mail, tags);

        let result = await fetch("http://localhost:5000/add", {
            method:"post",
            body: JSON.stringify({name, day, month, year, mobile, mail, insta, tags}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
        navigate("/");
    }
    
  return (
    <>
    <div className='input-box'>
        <label>Enter Name:</label>
        <input type='text' className='input' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Select Date:</label>
        <input type='date' className='input' placeholder='Enter date' value={date} onChange={(e)=>setDate(e.target.value)}></input>
    </div>


    {/* <div className='input-box'>
        <label>Select Date:</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div> */}

    {/* <div className='input-box'>
        <label>Select Date:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
    </div> */}

    


    <div className='input-box'>
        <label>Enter Mobile Number</label>
        <input type='number' className='input' placeholder='Enter mobile number' value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Enter Email Id</label>
        <input type='email' className='input' placeholder='Enter email id' value={mail} onChange={(e)=>setMail(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Enter Instagram Id</label>
        <input type='text' className='input' placeholder='Enter instagram id' value={insta} onChange={(e)=>setInsta(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Specify tags:</label>
        <input type='text' className='input' placeholder='Enter tags' value={tags} onChange={(e)=>setTags(e.target.value)}></input>
    </div>

    <div className='btn-group'>
        <div className='btn-box'>
            <Link to={"/"}><button className='btn-1'>Back</button></Link>
        </div>
        <div className='btn-box'>
        <button className='btn-1' disabled={!name} onClick={handleAdd}>Add to database</button>
        </div>
    </div>
    </>
  )
}
