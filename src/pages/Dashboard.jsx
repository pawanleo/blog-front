import React, { useState, useEffect } from 'react'
import axios from '../interceptors/customAxios'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate();

    const [tokenData,setTokenData] = useState({})

    const [data, setData] = useState([])

    //  Getting all records from data base
    const getPosts = () => {

        // const URL = 'http://localhost:8080/api/'
        axios.get('/blog').then((res) => {
           
            setData(res.data.data)
        })

    }


    // ==============Delete request==============
    const [deleted,setDeleted] = useState(false)
    const deletePost = (id)=>{
        // const URL = `http://localhost:8080/api`
        axios.delete(`/blog/deletepost/${id}`).then((res)=>{
            setDeleted(!deleted)
        }).catch(err=>console.log(err))
    }

    // ==============useEffect============== 
    useEffect(() => {
        getPosts()

     // decoding the token to the real data   
    const decoded = jwt_decode(localStorage.getItem('token'));
    setTokenData({...decoded})
  
    }, [deleted])


    return (
        <div className='container-fluid my-5 py-5 bg-light'>

          
            <h4 className='text-center'> <span className='text-danger text-uppercase'> {(tokenData.username)} </span> | DASHBOARD</h4>
                

                <div className="row mt-3">

                    <div className="col-md-2 text-center">

                        <h4>Profile</h4>
                        <img
                            src="https://source.unsplash.com//80x80/?random"
                            class="img-fluid rounded-circle my-3" />

                        <h6 className='text-capitalize'>{tokenData.name}</h6>
                        <p>Author</p>

                        <button onClick={()=> navigate('/addpost',{state:{name:tokenData.username}}) } className="btn btn-sm btn-success mb-3">Add New Post</button>
                    </div>

                    <div className="col-md-9">
                <h4 className='text-center bg-info  py-2'>All Posts Data</h4>

                        <table class="table table-hover bg-white">
                            <thead>
                                <tr class="">
                                    <th scope="col" >ID</th>
                                    <th scope="col" >Title</th>
                                    <th scope="col" >Description</th>
                                    <th scope="col" >Author</th>
                                    <th scope="col" >Date</th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody class="">

                            {

                            data.map((ele,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{ele.title}</td>
                                    <td>{ele.post}</td>
                                    <td>{ele.author}</td>
                                    <td>{(new Date(ele.time).toLocaleString()).slice(0,25)}</td>

                                    {ele.author==tokenData.username ? 
                                    <td style={{width:'125px'}} className=''>
                                        <button onClick={()=> navigate('/editpost',{state:{data:ele}})} className="btn btn-sm btn-warning">Edit</button>
                                        <button onClick={()=> deletePost(ele._id) } className="btn btn-sm btn-danger ms-2 ">Delete</button>
                                    </td>
                                    : 
                                    <td  className='text-center'>
                                        <button onClick={()=> navigate('/viewpost',{state:{data:ele}})} className="btn btn-dark">View</button>
                                     </td>

                                        
                                    }
                                </tr>
                            ))
                            }


                                

                            </tbody>
                        </table>


                    </div>


                </div>
           

        </div>
    )
}

export default Dashboard
