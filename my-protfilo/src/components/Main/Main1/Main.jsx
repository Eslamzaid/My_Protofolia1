import theMan from '../../Image/Programming-amico.png'
import './Main.css'
const Main = () =>  {
    return (
        <main>
            <article>
                <section className='FirstSec'>
                    <div className='hello'>
                        <h2>Hello I am Eslam and <br/> I am<span> Frontend developer</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, distinctio? Maiores, ducimus perferendis mollitia totam sint velit exercitationem maxime minus fugiat explicabo quod nihil nemo possimus iusto inventore officia.</p>
                        <h3><q>Building websites with high standers and user-friendly is all about me</q></h3>
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