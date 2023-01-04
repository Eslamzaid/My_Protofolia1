import extension from './../../Image/google-extensions.jpg'
import arrow from './../../Image/right-arrow.png'
import table from './../../Image/eating.jpg'
import realEstate from './../../Image/realEstate.jpg'
import mosque from './../../Image/mosqueBig.jpg'
import './secondMain.css'
const Projects = (props) => {
    return(
        <main className='whiteBack'>
            <article>
                <h1>Projects</h1>
                    <button id='hideIt' ref={props.hereisis}></button>
                <div className='grid'>
                <section className='little-lemon div-s'>
                    <div className='outerLine'>
                        <img src={table} id="photos_one"  className='group-of-photos' alt="Little Lemon restaurant"/>
                        <div className='inside1 hellobozo'>
                            <h3>Little lemon</h3>
                            <p>I create this website for <q>Little Lemon Restaurant</q> so you can book a table, make reviews and talk  to chief if you want to edit the recipe or contribute ,order dishes all online!</p>
                            <div className='bottomPart'>
                                <button id='lastButton'>Read More!</button>
                            </div>
                        </div>
                    </div>
                </section>
                    <section className='Mosque_Project div-s'>
                        <div className='outerLine'>
                            <img src={mosque} id="photos_two" className='group-of-photos' alt="A a mosque"/>
                            <div className='inside2 hellobozo'>
                                <h3>Mosque Startup</h3>
                                <p>What is this website all about is basically an attendance system to the mosques that record the present and the absent students moreover Ranking them up and a lot more!</p>
                                <div className='bottomPart'>
                                    <button id='lastButton'>Read More!</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='realEstate_app div-s'>
                        <div className='outerLine'>
                            <img src={realEstate} id="photos_three" className='group-of-photos' alt="A realEstate app"/>
                            <div className='inside3 hellobozo'>
                                <h3>realEstate app record</h3>
                                <p>I had created with  my brother a realEstate website in which you can book a home for reasonable price and <q>Excellent Quality</q>!</p>
                                <div className='bottomPart'>
                                    <button id='lastButton'>Read More!</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Google_Extensions lessDown div-s">
                        <div className='outerLine'>
                            <img src={extension} id="photos_four" className='group-of-photos' alt="Google Extensions Pro."/>
                            <div className='inside4 hellobozo'>
                                <h3>Google extensions</h3>
                                <p>I had created a lot of extensions for instance website blocking pages, tasks record, notes, timer, and mush more!</p>
                                <div className='bottomPart'>
                                    <button id='lastButton'>Read More!</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>    
            </article>
        </main>
    )
} 

export default Projects