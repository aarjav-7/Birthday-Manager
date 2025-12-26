import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewProfile() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [mobile, setMobile] = useState("");
    const [mail, setMail] = useState("");
    const [insta, setInsta] = useState("");
    let [tags, setTags] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getDetails();
    }, [])

    const getDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/dob/${params.id}`)
        result  = await result.json();
        console.log(result);
        setName(result.name);
        setDate(result.date);
        setMobile(result.mobile);
        setMail(result.mail);
        setInsta(result.insta);
        setTags(result.tags);
    }

  return (
    <>
    <div className='input-box'>
        <label>Name</label>
        <input type='text' className='input' placeholder='No name' value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Date</label>
        <input type='date' className='input' placeholder='No date' value={date} onChange={(e)=>setDate(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Mobile Number</label>
        <input type='number' className='input' placeholder='No mobile number' value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Email Id</label>
        <input type='email' className='input' placeholder='No email id' value={mail} onChange={(e)=>setMail(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Instagram Id</label>
        <input type='text' className='input' placeholder='No instagram id' value={insta} onChange={(e)=>setInsta(e.target.value)}></input>
    </div>

    <div className='input-box'>
        <label>Tags</label>
        <input type='text' className='input' placeholder='No tags' value={tags} onChange={(e)=>setTags(e.target.value)}></input>
    </div>

    <div className='btn-group'>
        <div className='btn-box'>
            <Link to={"/edit/"+params.id}><button className='btn-1'>Edit</button></Link>
        </div>
        <div className='btn-box'>
            <Link to={"/"}><button className='btn-1'>Back</button></Link>
        </div>
    </div>
    </>
  )
}
