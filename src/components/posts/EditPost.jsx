
import React, { useState,useEffect  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/Post.css'
import axios from '../../interceptors/customAxios'


const EditPost = () => {

    const navigate = useNavigate();
    
    // for showing  msg from backend
    const [msg,setMsg] = useState('') 

    // getting the data from the dashboard when click on edit button
    const {state} = useLocation() 

    const [editData, seteditData] = useState({})
    
    useEffect(() => {
        // state data storing in editData
        seteditData(state.data)
    }, [])


    // when button click
    const updatePost = ()=>{
      
      
        axios.put('/blog/updatepost',editData).then((res)=>{

            setMsg(res.data.message)

        }).catch(err=>console.log(err))
    }


  

    return (
        <div className='container-fluid editpost'>

            <div className='col-md-6 col-10 bg-light divInputs'>
                <h3>Update Post</h3>
                <hr />

                <div class="mb-3">
                    <label class="form-label">Author:</label>
                    <input 
                    value={editData?editData.author:''}
                        name="author"
                        type="text"
                        class="form-control"
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Title:</label>
                    <input onChange={(e)=>{
                         editData.title = e.target.value
                         seteditData({...editData})
                    }}
                    value={editData?editData.title:''}
                        name="title"
                        type="text"
                        class="form-control"
                    />
                </div>

                <div class="form-group mb-3">
                    <label class="mb-2" >Description:</label>
                    <textarea value={editData?editData.post:''} 
                    onChange={(e)=>{
                        editData.post = e.target.value
                        seteditData({...editData})
                    }} name='post' class="form-control" rows="6" />
                </div>
                    <p className='my-2 text-success'>{msg}</p>
                <button onClick={updatePost} type="click" class="btn btn-primary">
                    Update
                </button>
                <button onClick={() => navigate('/dashboard')} type="click" class="btn btn-danger ms-3">
                    Cancel
                </button>

            </div>

           
        </div>
    )
}

export default EditPost
