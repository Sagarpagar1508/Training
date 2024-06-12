import { Link, Route } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import TestStart from './TestStart';

function Home() {
    return (
        <>
            <div style={Styles.main}>
                <div style={Styles.mainSub} >
                    <h1>Course 1</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link' to='/user'>Course Start<GoArrowRight /></Link>
                </div>
                <div style={Styles.mainSub} >
                    <h1>Course 2</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link' to='/user'>Course Start<GoArrowRight /></Link>
                </div>
                <div style={Styles.mainSub} >
                    <h1>Course 3</h1>
                    <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                    <Link className='Link' to='/user'>Course Start<GoArrowRight /></Link>
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
        gap: '10px',
        // margin: '100px',
    },
    mainSub: {
        padding: '20px',
        border: '2px solid black'
    }

}
export default Home