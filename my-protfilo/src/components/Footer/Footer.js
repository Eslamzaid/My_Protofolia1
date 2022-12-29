import github from "../Image/github.png"
import discord from "../Image/discord.png"
import linkedin from "../Image/linkedin.png"
import stack from "../Image/stack.png"
import telegram from "../Image/telegram.png"
import twitter from "../Image/twitter.png"

const Footer = (props) => {
    
    return (
        <footer>
            <section>
            <div className='TitleOf'>
                <h1>Eslam</h1>
            </div>
            <div className='socailMedia'>
                <a ref={props.hereisis} target="_blank" rel="noreferrer" href='https://github.com/Eslamzaid'><img src={github} alt="A github "></img></a>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/eslamzaid/'><img src={linkedin} alt="A linkedin "></img></a>
                <a target="_blank" rel="noreferrer" href='https://stackoverflow.com/users/20173808/slam-zaid'><img src={stack} alt="A stackoverflow "></img></a>
                <a target="_blank" rel="noreferrer" href='https://twitter.com/SrEslamzaid'><img src={twitter} alt="A twitter "></img></a>
                <a target="_blank" rel="noreferrer" href='https://discord.gg/BvAR4gGB'><img src={discord} alt="A discord "></img></a>
                <a target="_blank" rel="noreferrer" href='https://t.me/javascriptTutorials97'><img src={telegram} alt="A telegram " /></a>
            </div>
            </section>
        </footer>
    )
}

export default Footer