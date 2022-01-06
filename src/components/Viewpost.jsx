import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Viewpost = () => {
    const navigate = useNavigate();
    // getting the username from the dashboard
    const { state } = useLocation()
    return (
        <div>
             <div className='container-fluid viewpost'>

<div className='col-md-6 col-10 bg-light py-3 ps-3'>

    <h3>View Post</h3>
    <div  class=" jumbotron">

        <div class="text-primary d-flex align-items-center py-2 " style={{ cursor: "pointer" }}>
            <img
                src="https://source.unsplash.com//40x40/?random"
                alt=''
                class="img-fluid rounded-circle" />
            <div className='ms-3' >
                <span> <strong>{state ? (state.data.author).toUpperCase() : ''}</strong> </span>
                <span className='ms-2 text-dark'> <small>{state ? (state.data.time).slice(0, 10) : ''}</small> </span>

            </div>
        </div>
        <hr class="my-2" />

        <h2 class="display-6">{state ? state.data.title : ''}</h2>

        <p>{state ? state.data.post : ''}</p>

    </div>


    <button onClick={() => navigate('/')} type="click" class="btn btn-danger">
       Back
    </button>

</div>


</div>
        </div>
    )
}

export default Viewpost
