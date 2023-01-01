import './footer.css'
import github from "./../Image/github.png"
import discord from "./../Image/discord.png"
import linkedin from "./../Image/linkedin.png"
import stack from "./../Image/stack-overflow.png"
import telegram from "./../Image/telegramwhiteB.png"
import twitter from "./../Image/twitter.png"

const Footer = (props) => {
    return (
        <footer>
            <section>
                <div></div>
                    <div>

                    <div className='socailMedia black'>
                        <a ref={props.hereisis} target="_blank" rel="noreferrer" href='https://github.com/Eslamzaid'><img src={github} alt="A github "></img></a>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/eslamzaid/'><img src={linkedin} alt="A linkedin "></img></a>
                        <a target="_blank" rel="noreferrer" href='https://stackoverflow.com/users/20173808/slam-zaid'><img src={stack} alt="A stackoverflow "></img></a>
                        <a target="_blank" rel="noreferrer" href='https://twitter.com/SrEslamzaid'><img src={twitter} alt="A twitter "></img></a>
                        <a target="_blank" rel="noreferrer" href='https://discord.gg/BvAR4gGB'><img src={discord} alt="A discord "></img></a>
                        <a target="_blank" rel="noreferrer" href='https://t.me/javascriptTutorials97'><img src={telegram} alt="A telegram " /></a>
                    </div>
                    <div className='TitleOf black'>
                        <h5>Terms of use - Privacy policy </h5>
                        <h6>@EslamZ 2023</h6>
                    </div>
                </div>
                <div></div>
            </section>
        </footer>
    )
}

export default Footer