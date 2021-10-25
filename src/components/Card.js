import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            let response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${props.id}`
            );
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    }

    // const handleDelete = async (id) => {
    //     try {
    //         setLoading(true);
    //         let response = await axios.delete(
    //             `https://jsonplaceholder.typicode.com/posts/${id}`
    //         );
    //         console.log(response.data);
    //         getData();
    //         setLoading(false);
    //     } catch (e) {
    //         setLoading(false);
    //         console.log(e.message);
    //     }
    // }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='card mt-3'>
            <div className='card-body'>
                {loading ? (
                    'Loading...'
                ) : (
                    <>
                        <h5 className='card-title'>{data.title}</h5>
                        <p className='card-text'>{data.body}</p>
                        <Link
                            to={`/detail/${data.id}`}
                            className='btn btn-sm btn-info'
                        >
                            Edit
                        </Link>
                        {/* <button
                            onClick={() => handleDelete(data.id)}
                            className='btn btn-sm btn-danger'
                        >
                            Delete
                        </button> */}
                    </>
                )}
            </div>
        </div>
    );
}

export default Card;