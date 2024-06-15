import { Link, Route } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import TestStart from './TestStart';
import { BiBorderRadius } from 'react-icons/bi';
import { TbBackground } from 'react-icons/tb';

function Home() {
    return (
        <>
        
                <div className='' style={Styles.main}>
                    <div style={{ padding: '20px', border: '2px solid black', boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.25)', borderRadius: '5px', height: 'auto' }}  >
                        <h2>Indroduction to Fund Accounting</h2>
                        <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                        <Link className='Link ' to='/user' style={{ fontWeight: '500' }}>Course Start<GoArrowRight /></Link>
                    </div>
                    <div style={{ padding: '25px', border: '2px solid black', boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}  >
                        <h2>Fund accounting Principles and Concept</h2>
                        <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                        <Link className='Link' to='/user' style={{ fontWeight: '500' }}>Course Start<GoArrowRight /></Link>
                    </div>
                    <div style={{ padding: '25px', border: '2px solid black', boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}  >
                        <h2>Finacial Statement in fund Accounting</h2>
                        <p>Provides a brief overview of the course content, goals, objectives, and often policies.</p>
                        <Link className='Link' to='/user' style={{ fontWeight: '500' }}>Course Start<GoArrowRight /></Link>
                    </div>
                    {/* <Route path='/te' element={<TestStart />} /> */}
                </div>
            
        </>
    )
}

const Styles = {
    main: {
        margin: '70px 60px',
        display: 'flex',
        alignItem: 'inlinerow',
        gap: '15px',
        // backgroundColor: rgb(185, 235, 255)

        // boxshadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },


}
export default Home