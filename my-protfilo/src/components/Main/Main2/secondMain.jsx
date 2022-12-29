import extension from './../../Image/extensions.png'
import arrow from './../../Image/right-arrow.png'
import table from './../../Image/pexels-tae-fuller-1616113.jpg'
import todo from './../../Image/todo.png'
import mosque from './../../Image/daniel-olah-2lMK4dgqwFM-unsplash.jpg'
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
                        <h3>Little lemon</h3>
                        <p>I create this website for <q>Little Lemon Restaurant</q> so you can book a table ,order dishes all online!</p>
                        <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                        
                    </div>
                </section>
                    <section className='Mosque_Project div-s'>
                        <div className='outerLine'>
                            <img src={mosque} id="photos_two" alt="A a mosque"/>
                            <h3>Mosque Startup</h3>
                            <p>What is this website all about is basically an attendance system to the mosques that record the present and the absent students moreover Ranking them up and a lot more!</p>
                            <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                        </div>
                    </section>
                    <section className='todo_app div-s'>
                        <div className='outerLine'>
                            <img src={todo} id="photos_three" alt="A todo app"/>
                            <h3>Todo app record</h3>
                            <p>In this website you can add your tasks for your day and make notes, in order to boost your productivity and tasks completion </p>
                            <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                        </div>
                    </section>
                    <section className="Google_Extensions div-s">
                        <div className='outerLine'>
                            <img src={extension} id="photos_four" alt="Google Extensions Pro."/>
                            <h3>Google extensions</h3>
                            <p>I had created a lot of extensions for instance website blocking, tasks record, notes, timer, and mush more!</p>
                            <h5 className='see_more'>See more <img src={arrow} id="arrowImg" alt="of an arrow aiming right"/></h5>
                        </div>
                    </section>
                </div>    
            </article>
        </main>
    )
} 

export default Projects