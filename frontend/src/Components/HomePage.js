import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {    
    const [dobs, setDobs] = useState([]);
    const [order, setOrder] = useState(0);

    useEffect(()=>{
        getDOBS()
    }, [])

    const getDOBS = async ()=>{
        let result = await fetch("http://localhost:5000/displayall", {
            method:"get"
        });
        result = await result.json();
        setDobs(result);
    }
    //console.log(dobs+typeof(dobs));

    const handleDelete = async (id)=>{
        let res = await fetch(`http://localhost:5000/dob/${id}`, {
            method:"delete",
        })
        res = await res.json();
        if(res)
        {
            getDOBS();
        }
    };

    const clickAsc = ()=>{
        setOrder(1)
    }

    const clickDsc = ()=>{
        setOrder(-1)
    }

    const ascdobs = [...dobs].sort((a, b)=>{
        const dateA = new Date(a.year, a.month - 1, a.day); // months are zero-indexed in JS Date
        const dateB = new Date(b.year, b.month - 1, b.day);
    return dateA - dateB;
    })

    const dscdobs = [...dobs].sort((a, b)=>{
        const dateA = new Date(a.year, a.month - 1, a.day); // months are zero-indexed in JS Date
        const dateB = new Date(b.year, b.month - 1, b.day);
    return dateB - dateA;
    })

  return (
    <>
    <div className="container">
        <div className="heading1">Welcome Aarjav to BDay Manager</div>
    </div>
    <br/><br/>

    <div className="table">
        <div className="row">
            <div className="row-heading">Name
            <button className='small-btn' >sort</button>
            </div>
            <div className="row-heading">D.O.B.
            <button className='small-btn' onClick={clickAsc}>asc</button>
            <button className='small-btn' onClick={clickDsc}>dsc</button>
            </div>
            <div className="row-heading">Tags</div>
            <div className="row-heading">Operation</div>
        </div>

        {order==0?
            Object.keys(dobs).map((item, index)=>
            //dobs.map((item, index)=>             
                <div key="{item}" className="row">   
                    
                    <div className="row-element l-align"><Link to={"/view/"+dobs[item]._id}><button className='table-btn b3' >+</button></Link>{dobs[item].name}</div>
                    <div className="row-element">{`${dobs[item].day}-${dobs[item].month}-${dobs[item].year}`}</div>
                    <div className="row-element">{dobs[item].tags}</div>
                    <div className="row-element">
                        <Link to={"/edit/"+dobs[item]._id} className='table-btn b1'>Edit</Link>
                        {/* <button className='table-btn b2'>Delete</button> */}
                        <button className='table-btn b2' onClick={() =>
                            handleDelete(dobs[item]._id)}>Delete</button>
                    </div>
                </div>
            )
            :order==1?
            Object.keys(ascdobs).map((item, index)=>
                //dobs.map((item, index)=>             
                    <div key="{item}" className="row">   
                        
                        <div className="row-element l-align"><Link to={"/view/"+ascdobs[item]._id}><button className='table-btn b3' >+</button></Link>{ascdobs[item].name}</div>
                        <div className="row-element">{`${ascdobs[item].day}-${ascdobs[item].month}-${ascdobs[item].year}`}</div>
                        <div className="row-element">{ascdobs[item].tags}</div>
                        <div className="row-element">
                            <Link to={"/edit/"+ascdobs[item]._id} className='table-btn b1'>Edit</Link>
                            {/* <button className='table-btn b2'>Delete</button> */}
                            <button className='table-btn b2' onClick={() =>
                                handleDelete(ascdobs[item]._id)}>Delete</button>
                        </div>
                    </div>
                ): 
                Object.keys(dscdobs).map((item, index)=>
                    //dobs.map((item, index)=>             
                        <div key="{item}" className="row">   
                            
                            <div className="row-element l-align"><Link to={"/view/"+dscdobs[item]._id}><button className='table-btn b3' >+</button></Link>{dscdobs[item].name}</div>
                            <div className="row-element">{`${dscdobs[item].day}-${dscdobs[item].month}-${dscdobs[item].year}`}</div>
                            <div className="row-element">{dscdobs[item].tags}</div>
                            <div className="row-element">
                                <Link to={"/edit/"+dscdobs[item]._id} className='table-btn b1'>Edit</Link>
                                {/* <button className='table-btn b2'>Delete</button> */}
                                <button className='table-btn b2' onClick={() =>
                                    handleDelete(dscdobs[item]._id)}>Delete</button>
                            </div>
                        </div>
                    )}
             
    </div>
    </>
  )
}
