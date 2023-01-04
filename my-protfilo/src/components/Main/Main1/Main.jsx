import theMan from '../../Image/Programming-amico.png'
import './Main.css'
const Main = (props) =>  {
    return (
        <main className='fewDown'>
            <article>
                <section className='FirstSec'>
                    <div className='hello'>
                    <button id='hideIt' ref={props.connect}></button>
                        <h2>Hello!, <br/>I am Eslam and  I am<span><br/> Frontend developer</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, distinctio? Maiores, ducimus perferendis mollitia totam sint velit exercitationem maxime minus fugiat explicabo quod nihil nemo possimus iusto inventore officia.</p>
                        <button id='buttonP'>Read more</button>
                    </div>
                    <div></div>
                    <img src={theMan} id="pro-photo" alt='A programer illustration'></img>
                </section>
                <section>
                </section>
            </article>
        </main>
    )
}

export default Main