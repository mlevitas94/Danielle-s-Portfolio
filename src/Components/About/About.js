import React from 'react'
import './About.scss'
import PhotoBy from '../../assets/Components/PhotoBy/PhotoBy'
import NavDesk from '../Nav/NavDesk'
import NavMobile from '../Nav/NavMobile'

const About = () => {
    return (
        <div className='page'>
            <div className='aboutCont'>
                <NavMobile/>
                <div className='contPage'>
                    <div className='middleCard'>
                        <NavDesk />
                        <div className='imgSide'>
                            <h1>About Me</h1>
                            <div className='image'></div>
                        </div>
                        <div className='contentSide'>
                            <div className='blur'></div>
                            <div className='content'>
                                <p>
                                    Hi! My name is Danielle, and I am a sucker for words: Big words, short words, simple words, and even those long spelling bee words that no one ever knows. Words, grammar, and writing — that’s my thing.
                                <br />
                                    <br />

                                I like to think of myself as a millennial copywriter and editor in a sea of other millennial copywriters and editors searching for their niche. I've written about historic downtown NYC, basketball, pop culture, and topics in between; I'm just trying to find what I connect with.
                                <br />
                                    <br />

                                Also, here are some fun facts: I dance on a competitive team, I work three jobs (the hustle is real), I have a fake tooth, and my dream is to find a career that allows all of my passions to coincide in harmony. Also, you will usually find me sipping on bubble tea or eating one of my 15 snacks of the day — it’s a lifestyle choice.</p>
                            </div>
                            <PhotoBy />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default About