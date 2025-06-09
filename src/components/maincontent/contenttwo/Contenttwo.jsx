import React, { useEffect, useState } from 'react'

import './Contenttwo.css'

// importing logos
// import one from '../../../images/one.png'
// import two from '../../../images/two.png'
// import three from '../../../images/three.png'
// import four from '../../../images/four.png'
// import five from '../../../images/five.png'
// import six from '../../../images/six.png'
// import seven from '../../../images/seven.png'

// import iconOne from '../../../images/icons/one.png'
// import iconeTwo from '../../../images/icons/two.png'
// import iconThree from '../../../images/icons/three.png'

// import secondimage from '../../../images/secondmainimage.png'


// import iOne from '../../../images/iconstwo/one.png'
// import iTwo from '../../../images/iconstwo/two.png'
// import iThree from '../../../images/iconstwo/three.png'
// import iFour from '../../../images/iconstwo/four.png'

// import thirdImage from '../../../images/thirdmainimage.png'

// import fourthImage from '../../../images/fourthmainimage.png'

// import right from '../../../images/right-arrow.png'

import imageOne from '../../../images/images/one.png'
import imageTwo from '../../../images/images/two.png'
import imageThree from '../../../images/images/three.png'

import axios from 'axios';

const Contenttwo = () => {

    // const images = [one, two, three, four, five, six, seven]
    // const imagesOf = [one, two, three, four, five, six]


    const [logos, setLogos] = useState([]);
    const [icons, setIcons] = useState([]);
    const [association, setAssociation] = useState([]);
    const [secondThumbnail, setSecondThumbnail] = useState([]);
    const [thirdThumbnail, setThirdThumbnail] = useState([]);
    const [fourthThumbnail, setFourthThumbnail] = useState([]);
    const [imagesanddetails, setImagesAndDetails] = useState([])
    const [logosAndDetails, setLogosAndDetails] = useState([])


    useEffect(() => {
        fetchLogos();
        fetchRightIcon();
        fetchAssociationDetails();
        fetchSecondThumbnailDetails();
        fetchThirdThumbnailDetails();
        fetchFourthThumbnailDetails();
        fetchImagesAndDetails();
        fetchLogosAndDetails();
    }, []);


    const fetchLogos = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/logos');
            // console.log(response.data);

            setLogos(response.data.data);
        } catch (error) {
            console.error("Error fetching logos:", error);
        }
    };

    const fetchRightIcon = async () => {
        try {
            const result = await axios.get('http://localhost:9000/api/right')
            setIcons(result.data.data)
            // console.log(result.data.data);

        } catch (error) {
            console.error("Error fetching logos:", error);
        }
    }

    const fetchAssociationDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/association')
            // console.log(response.data.data);
            setAssociation(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);

        }
    }

    const fetchSecondThumbnailDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/secondthumbnail')
            // console.log(response.data.data);
            setSecondThumbnail(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);
        }
    }

    const fetchThirdThumbnailDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/thirdthumbnail')
            console.log(response.data.data);
            setThirdThumbnail(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);
        }
    }

    const fetchFourthThumbnailDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/fourththumbnail')
            console.log(response.data.data);
            setFourthThumbnail(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);
        }
    }

    const fetchImagesAndDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/images')
            console.log(response.data.data);
            setImagesAndDetails(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);
        }
    }



    const fetchLogosAndDetails = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/getlogosimage')
            console.log(response.data.data);
            setLogosAndDetails(response.data.data)
        } catch (error) {
            console.log("Error fetching details:", error);
        }
    }

    const rightIcon = icons.find(ele => ele.icon === 'right')?.url;
    // console.log('rightIconUrl', rightIcon);

    const associationIcon = icons.filter(ele => ele.icon === 'association').map(ele => ele.url)
    // console.log('ssssss',associationIcon);

    // const secondThumbnail = icons.find(ele => ele.icon === 'secondthumbnail')?.url;

    const logoThumbnail = icons.filter(ele => ele.icon === 'logo').map(ele => ele.url)
    // console.log("logoThumbnail", logoThumbnail);

    // const thirdThumbnail = icons.find(ele => ele.icon === 'thirdthumbnail')?.url

    // const fourthThumbnail = icons.find(ele => ele.icon === 'fourththumbnail')?.url
    // console.log("fourthThumbnail", fourthThumbnail);

    const images = icons.filter(ele => ele.icon === 'image').map(ele => ele.url)

    return (
        <div className='content-two-container'>
            <div className='content-two-container-one'>
                <h2>Our Clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='content-two-container-two'>
                {
                    logos.map((ele) => {
                        return (
                            <div key={ele._id}>
                                <img src={ele.url} alt="img" />
                            </div>
                        )
                    })
                }
            </div>

            <div className='content-two-container-three'>
                <h2>Manage your entire community</h2>
                <h2>In a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <div className='content-two-container-four'>
                {
                    association.map((ele, index) => (
                        <div className='content-two-container-four-sub-one' key={index}>
                            <img src={ele.url} alt="" />
                            <h2 className='h2-tag'>{ele.title}</h2>
                            <p className='p-tag'>{ele.content}</p>
                        </div>
                    ))
                }
            </div>


            <div className='content-two-container-five'>
                {
                    secondThumbnail.map((ele) => {
                        return (
                            <>
                                <div className='content-two-container-five-sub-one'>
                                    <img src={ele.url} alt="second image" />
                                </div>
                                <div className='content-two-container-five-sub-two'>
                                    <h1>{ele.title}</h1>
                                    <p>{ele.content}</p>
                                    <button>Learn More</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className='content-two-container-six'>
                <div className='content-two-container-six-sub-one'>
                    <div>
                        <h1>Helping a local</h1>
                        <h1 style={{ color: '#43A046' }}>Business reinvent itself</h1>
                        <p>We reached here with our hardwork and dedication</p>
                    </div>
                </div>
                <div className='content-two-container-six-sub-two'>
                    {
                        logosAndDetails.map((item, index) => (
                            <div className='content-two-container-six-sub-two-item' key={index}>
                                <img src={item.url} alt={`thumbnail-${index}`} />
                                <div>
                                    <h1>{item.count}</h1>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='content-two-container-seven'>
                {
                    thirdThumbnail.map((ele) => {
                        return (
                            <>
                                <div className='content-two-container-seven-sub-one' >
                                    <img src={ele.url} alt="sadasdas" />
                                </div>
                                <div className='content-two-container-seven-sub-two'>
                                    <h1>{ele.title}</h1>
                                    <p>{ele.content}</p>
                                    <div className='content-two-container-seven-sub-two-button'>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className='content-two-container-eight'>

                {
                    fourthThumbnail.map((ele) => {
                        return (
                            <>
                                <div className='content-two-container-eight-sub-one'>
                                    <img src={ele.url} alt="dasfafas" />
                                </div>

                                <div className='content-two-container-eight-sub-two'>
                                    <p>{ele.content}</p>
                                    <h3>{ele.name}</h3>
                                    <p>{ele.contenttwo}</p>
                                    <div className='content-two-container-eight-sub-two-img'>
                                        {
                                            logos.slice(0, -1).map((ele) => {
                                                return (
                                                    <div key={ele.url}>
                                                        <img src={ele.url} alt="" />
                                                    </div>
                                                )
                                            })
                                        }
                                        <h4>meet all customers <img src={rightIcon} alt="" height='15px' /></h4>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                {/* <div className='content-two-container-eight-sub-one'>
                    <img src={fourthThumbnail} alt="dasfafas" />
                </div>

                <div className='content-two-container-eight-sub-two'>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h3>Tim Smith</h3>
                    <p>British Dragon Boat Racing Association</p>
                    <div className='content-two-container-eight-sub-two-img'>
                        {
                            logos.slice(0, -1).map((ele) => {
                                return (
                                    <div key={ele.url}>
                                        <img src={ele.url} alt="" />
                                    </div>
                                )
                            })
                        }
                        <h4>meet all customers <img src={rightIcon} alt="" height='15px' /></h4>
                    </div>
                </div> */}
            </div>

            <div className='content-two-container-nine'>
                <div className='content-two-container-nine-sub-one'>
                    <h2>Caring is the new Marketing</h2>
                    <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>

                <div className='content-two-container-nine-sub-two'>

                    {
                        imagesanddetails.map((ele) => {
                            return (
                                <>
                                    <div className='content-two-container-nine-sub-two-one'>
                                        <div className='content-two-container-nine-sub-two-one-container'>
                                            <div className='content-two-container-nine-sub-two-one-container-one'>
                                                <img src={ele.url} alt="" />
                                            </div>
                                            <div className='content-two-container-nine-sub-two-one-container-two'>
                                                <div>
                                                    <p>{ele.content}</p>
                                                    <p className='read-more'>Read more <img src={rightIcon} height='15px' alt="" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    {/* <div className='content-two-container-nine-sub-two-one'>
                        <div className='content-two-container-nine-sub-two-one-container'>
                            <div className='content-two-container-nine-sub-two-one-container-one'>
                                <img src={images[0]} alt="" />
                            </div>
                            <div className='content-two-container-nine-sub-two-one-container-two'>
                                <div>
                                    <p>Creating stramlined safeguarding process with oneRen</p>
                                    <p className='read-more'>Read more <img src={rightIcon} height='15px' alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='content-two-container-nine-sub-two-one'>
                        <div className='content-two-container-nine-sub-two-one-container'>
                            <div className='content-two-container-nine-sub-two-one-container-one'>
                                <img src={images[1]} alt="" />
                            </div>
                            <div className='content-two-container-nine-sub-two-one-container-two'>
                                <div>
                                    <p className='overlay-text'>What are your safeguarding responsibilities and how can you manage them?</p>
                                    <p className='read-more'>Read more <img src={rightIcon} height='15px' alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='content-two-container-nine-sub-two-one'>
                        <div className='content-two-container-nine-sub-two-one-container'>
                            <div className='content-two-container-nine-sub-two-one-container-one'>
                                <img src={images[2]} alt="" />
                            </div>
                            <div className='content-two-container-nine-sub-two-one-container-two'>
                                <div>
                                    <p>Revamping the Membership Model with Triathlon Australia  </p>
                                    <p className='read-more'>Read more <img src={rightIcon} height='15px' alt="" /></p>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='content-two-container-ten'>
                <h1>Pellentesque suscipit</h1>
            </div>
        </div>
    )
}

export default Contenttwo