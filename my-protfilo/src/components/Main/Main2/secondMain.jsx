import extension from './../../Image/google-extensions.jpg'
import arrow from './../../Image/right-arrow.png'
import table from './../../Image/eating.jpg'
import realEstate from './../../Image/realEstate.jpg'
import mosque from './../../Image/mosqueBig.jpg'
import './secondMain.css'
const Projects = () => {
    return(
        <main>
            <article>
                <h1>Projects</h1>
                <div className='grid'>
                <section className='little-lemon div-s'>
                    <div className='outerLine'>
                        <img src={table} id="photos_one" alt="Little Lemon restaurant"/>
                        <div className='inside1'>
                            <h3>Little lemon</h3>
                            <p>I create this website for <q>Little Lemon Restaurant</q> so you can book a table, make reviews and talk directly to chief if you want to edit the recipe or take it,order dishes all online!</p>
                            <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                        </div>
                        
                    </div>
                </section>
                    <section className='Mosque_Project div-s'>
                        <div className='outerLine'>
                            <img src={mosque} id="photos_two" alt="A a mosque"/>
                            <div className='inside2'>
                                <h3>Mosque Startup</h3>
                                <p>What is this website all about is basically an attendance system to the mosques that record the present and the absent students moreover Ranking them up and a lot more!</p>
                                <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                            </div>
                        </div>
                    </section>
                    <section className='realEstate_app div-s'>
                        <div className='outerLine'>
                            <img src={realEstate} id="photos_three" alt="A realEstate app"/>
                            <div className='inside3'>
                                <h3>realEstate app record</h3>
                                <p>I had created with the help of my brother a realEstate website in which you can book a home for reasonable price and <q>Excellent Quality</q>!</p>
                                <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                            </div>
                        </div>
                    </section>
                    <section className="Google_Extensions div-s">
                        <div className='outerLine'>
                            <img src={extension} id="photos_four" alt="Google Extensions Pro."/>
                            <div className='inside4'>
                                <h3>Google extensions</h3>
                                <p>I had created a lot of extensions for instance website blocking pages, tasks record, notes, timer, and mush more!</p>
                                <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                            </div>
                        </div>
                    </section>
                </div>    
            </article>
        </main>
    )
} 

export default Projects