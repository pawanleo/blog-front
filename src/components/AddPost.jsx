import React,{ useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../interceptors/customAxios';
import "../css/Posts.css";

const AddPost = () => {

    const navigate = useNavigate();
    // getting the username from the dashboard
    const {state} = useLocation() 
    
     // for showing  msg from backend
     const [msg,setMsg] = useState('') 

    const [input,setInput] = useState({
        author:state.name,
        title:'',
        post:''
    })
    
    const handleInput = (e)=>{
        setInput({
            ...input, [e.target.name]:e.target.value
        })
    }

    // when button click
    const addPost = ()=>{
       
        axios.post('http://localhost:9001/api/blog/addpost',input).then((res)=>{
            
            setMsg(res.data.message)

        }).catch(err=>console.log(err))
    }
  
    return (
        <div className='container-fluid addpost'>

            <div className=''>
                <h3>Add Post</h3>
                <hr />

                <div class="mb-3">
                    <label class="form-label">Author:</label>
                    <input 
                    value={state?state.name:''}
                        name="author"
                        type="text"
                        class="form-control"
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Title:</label>
                    <input onChange={handleInput}
                        name="title"
                        type="text"
                        class="form-control"
                    />
                </div>

                <div class="form-group mb-3">
                    <label class="mb-2" >Description:</label>
                    <textarea onChange={handleInput} name='post' class="form-control" rows="6" />
                </div>
                <p className='my-2 text-success'>{msg}</p>
                <button onClick={addPost} type="click" class="btn btn-primary">
                    Add
                </button>
                <button onClick={() => navigate('/')} type="click" class="btn btn-danger ms-3">
                    Cancel
                </button>

            </div>

           
        </div>
    )
}

export default AddPost
