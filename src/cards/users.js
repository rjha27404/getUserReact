import React, { useState } from 'react';
import './users.css';
const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([false]);
    const getUsers = async () => {
        try {
            const data = await fetch('https://reqres.in/api/users?page=1');
            const realData = await data.json();
            setUsers(realData.data);
            // console.log(users.data);
            setLoading(true);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <a className="navbar-brand text-primary" href="#">ReactUser</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <form className="d-flex">
                        <button className="btn btn-outline-success left" id="btn" onClick={getUsers}>Get Users</button>
                    </form>
                </div>
            </nav>
            <br></br>
            <span>{loading ? (getUsers) : (<div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>)}</span>
            <div className="row center">
                {
                    users.map((curElem) => {
                        return (
                            <div className="col-md-4 center">
                                <div className="card border-primary bg-white m-5">
                                    <img src={curElem.avatar} class="card-img-top bg-trasparent" alt="avatar" />
                                    <div className="card-body center">
                                        <h1 className="card-title text-danger center">{curElem.first_name} {curElem.last_name}</h1>
                                        <h4 className="card-text text-primary center">{curElem.email}</h4>
                                        <h1 class="btn text-info center">Id: {curElem.id}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    );
};

export default UseEffectAPI
