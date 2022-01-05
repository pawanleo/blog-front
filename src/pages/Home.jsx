import React, { useState , useEffect} from 'react'
import axios from '../interceptors/customAxios'
import '../css/Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [data,setData] = useState([])

    const getPosts = ()=>{

        // const URL = 'http://localhost:8080/api'
        axios.get('/blog').then((res)=>{
           
            setData(res.data.data)
        })
       
    }

 useEffect(() => {
    getPosts()
 }, [])


    return (
        <div className="home container-fluid my-5  py-5">
            
            
        <div className="container">
            <h3 className='text-dark' >All Blog Posts</h3>
            <div className="row">


       
                {
                    data.map((ele)=>(
                        <div style={{'backgroundColor':'white','width':'38rem'}} class=" jumbotron col-md-5 m-3 border border-1 border-warning">

                        <div class="text-primary d-flex align-items-center py-2 " style={{ cursor: "pointer" }}>
                            <img
                                src="https://source.unsplash.com//40x40/?random"
                                class="img-fluid rounded-circle" />
                            <div className='ms-3' >
                                <span> <strong>{(ele.author).toUpperCase()}</strong> </span>
                                <span className='ms-2 text-dark'> <small>{(new Date(ele.time).toLocaleString()).slice(0,25)}</small> </span>
                               
                            </div>
                        </div>
                        <hr class="my-2" />
    
                        <h2 class="display-6">{ele.title}</h2>
                    
                        <p>{ele.post}</p>
                        <p class="lead">
                            <a onClick={()=> navigate('/viewpost',{state:{data:ele}})} class="btn btn-outline-dark btn-sm" >View More</a>
                        </p>
                    </div>
                    ))
                }

               </div>
               
              
              
               
            </div>

        </div>
    )
}

export default Home
