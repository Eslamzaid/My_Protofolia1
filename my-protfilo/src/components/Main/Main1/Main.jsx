import theMan from '../../Image/Programming-amico.png'
import './Main.css'
const Main = () =>  {
    return (
        <main>
            <article>
                <section className='FirstSec'>
                    <h2>Hello I am Eslam and <br/> I am<span> Frontend developer</span></h2>
                    <img src={theMan} id="pro-photo" alt='A programer illustration'></img>
                </section>
                <section>
                </section>
            </article>
        </main>
    )
}

export default Main