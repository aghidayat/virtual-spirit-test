import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {

    let {id} = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            let response = await axios.patch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    };

    const deleteData = async () => {
        try {
            setLoading(true);
            let response = await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            console.log(response);
            // setData(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <Link to='/' className='mb-3'>
                {' '}
                {'< Back'}
            </Link>

            <div className="card">
                <div className='card-body'>
                    {loading ? (
                        'Loading...'
                    ) : (
                        <>
                            <h5 className='card-title'>{data.title}</h5>
                            <p className='card-text'>{data.body}</p>
                            <Link
                                to={`/detail/${data.id}`}
                                className='btn btn-sm btn-info mr-2'
                            >
                                Edit
                            </Link>
                            <button onClick={deleteData} className="btn btn-sm btn-danger ml-2">Delete</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Detail