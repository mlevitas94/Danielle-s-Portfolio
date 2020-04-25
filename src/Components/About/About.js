import React from 'react'
import './About.scss'
import Portrait from './assets/portrait.jpg'

const About = () => {
    return (
        <div className='page'>
            <div className='aboutCont'>
                <div className='middleCard'>
                    <div className='imgSide'>
                        <img src={Portrait} alt='portrait'/>
                    </div>
                    <div className='contentSide'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis. Faucibus nisl tincidunt eget nullam. Quisque id diam vel quam. Leo a diam sollicitudin tempor id eu nisl. Aenean et tortor at risus. Eu facilisis sed odio morbi quis commodo odio aenean sed. Sem integer vitae justo eget magna fermentum iaculis. Tincidunt arcu non sodales neque sodales ut etiam. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Volutpat consequat mauris nunc congue nisi vitae. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Adipiscing commodo elit at imperdiet dui accumsan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About