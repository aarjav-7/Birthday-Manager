import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditBday() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [mobile, setMobile] = useState("");
    const [mail, setMail] = useState("");
    const [insta, setInsta] = useState("");
    let [tags, setTags] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getDobDetails();
    }, [])

    const getDobDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/dob/${params.id}`)
        result  = await result.json();
        console.log("result:::", result);
        //console.log("date:::", result.date);
        setName(result.name);
        let d = result.day;
        let m = result.month;
        let y = result.year;
        let date_by_concat = `${y}-${m}-${d}`
        setDate(date_by_concat);
        console.log("date:::", date_by_concat);
        setMobile(result.mobile);
        setMail(result.mail);
        setInsta(result.insta);
        setTags(result.tags);
    }

    const handleEdit = async ()=>{
        // let arr = date.split("-");
        // let year = arr[0];
        // let month = arr[1];
        // let day = arr[2];
        //tags = tags.split(' ');

        let result = await fetch(`http://localhost:5000/dob/${params.id}`, {
            method: "Put",
            body : JSON.stringify({name, date, tags}),
            headers:{
                'Content-type':"application/json"
            }
        });
        result = await result.json();
        navigate('/');
    }
    
  return (
    <>
    <div className='input-box'>
        <label>Enter Name:</label>
        <input type='text' className='input' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Select Date:</label>
        <input type='date' className='input' placeholder='Enter date' defaultValue={date} onChange={(e)=>setDate(e.target.value)}></input>
        {/* <input type='date' className='input' placeholder='Enter date' value={date} onChange={(e)=>setDate(e.target.value)}></input> */}
    </div>

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
            <button className='btn-1' onClick={handleEdit}>Update in database</button>
        </div>
    </div>
    </>
  )
}
