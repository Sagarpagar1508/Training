import { Link, Route } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import TestStart from './TestStart';
import { BiBorderRadius } from 'react-icons/bi';
import { TbBackground } from 'react-icons/tb';

function Home() {
    return (
        <>
            <div style={Styles.main}>
                <div style={Styles.mainSub} >
                    <h1>Course 1</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link ' to='/user' style={{fontWeight: '500'}}>Course Start<GoArrowRight /></Link>
                </div>
                <div style={Styles.mainSub} >
                    <h1>Course 2</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link' to='/user'style={{fontWeight: '500'}}>Course Start<GoArrowRight /></Link>
                </div>
                <div style={Styles.mainSub} >
                    <h1>Course 3</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link' to='/user'style={{fontWeight: '500'}}>Course Start<GoArrowRight /></Link>
                </div>
                {/* <Route path='/te' element={<TestStart />} /> */}
            </div>
        </>
    )
}

const Styles = {
    main: {
        margin: '0 140px',
        display: 'flex',
        gap: '15px',
        margin: '100px',
        // backgroundColor: rgb(185, 235, 255)
        
        // boxshadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    
    mainSub: {
        padding: '20px',
        border: '2px solid black',
         boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.25)',
         borderRadius:'5px'
    }

}
export default Home