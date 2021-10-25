import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Form(props) {
    const [formData, setFormData] = useState({
        title: props.title,
        body: props.body
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            setLoading(true);
            let response = await axios.post(
                `https://jsonplaceholder.typicode.com/posts`,
                {
                    title: formData.title,
                    body: formData.body,
                    userId: 1,
                },
                {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            );
            console.log(response.data);
            setFormData({
                title: '',
                body: '',
            });
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    }

    return (
        <div className='card mt-3 mb-4'>
            <div className='card-header'>Form</div>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-2'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            className='form-control'
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor='body'>Body</label>
                        <input
                            type='text'
                            name='body'
                            id='body'
                            value={formData.body}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    body: e.target.value,
                                })
                            }
                            className='form-control'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Submit'
                        className='btn btn-primary mt-3'
                        disabled={loading}
                    />
                </form>
            </div>
        </div>
    );
}

export default Form;
