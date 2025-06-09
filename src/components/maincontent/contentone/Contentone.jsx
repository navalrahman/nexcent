import React, { useState, useEffect } from 'react'

import './Contentone.css'

import axios from 'axios'

import mainimage from "../../../images/mainimage.png"

const Contentone = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            // const response = await axios.get('http://localhost:9000/api/mainthumbnail')
            const response = await axios.get('https://nexcent-backend-4vbo.onrender.com/api/mainthumbnail')
            // console.log('fetchdata', response);
            setData(response.data.data)

        } catch (error) {
            console.error("Error fetching logos:", error);
        }
    }

    return (
        <div className='contentone-container'>
            {
                data.map((ele) => {
                    return (
                        <>
                            <div className='content-container-one'>
                                <div className='content-container-one-heading-one'>
                                    <div>
                                        <h1>{ele.title}</h1>
                                        <h1 className='heading-color'>{ele.year}</h1>
                                    </div>
                                    <p>{ele.para}</p>
                                    <div>
                                        <button className='content-one-heading'>Register</button>
                                    </div>
                                </div>
                            </div>
                            <div className='content-container-two'>
                                <img src={ele.url} alt="" className='mainimage' />
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Contentone
