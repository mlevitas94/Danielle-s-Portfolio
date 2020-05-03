import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div className='page'>
            <div className='contactCont'>
                <div className='split'>
                    <div className='contentSide'>
                        <div className='content'>
                            <h1>Contact Me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                            <ul>
                                <li>Email : Email@mail.com</li>
                                <li>Linkedin : www.linkedin.com/myprofile</li>
                                <li>Instagram : www.instagram.com/myprofile</li>
                                <li>Twitter : www.twitter.com/myprofile</li>
                            </ul>
                            <form>
                                <div>
                                    <label>Name</label>
                                    <input />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input />
                                </div>
                                <label>Message</label>
                                <textarea></textarea>
                            </form>

                        </div>
                    </div>
                    <div className='imageSide'>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact