import github from "../Image/github.png"
import discord from "../Image/discord.png"
import linkedin from "../Image/linkedin.png"
import stack from "../Image/stack.png"
import telegram from "../Image/telegram.png"
import twitter from "../Image/twitter.png"

const footer = () => {
    
    return (
        <footer>
            <section>
            <div className='TitleOf'>
                <h1>Eslam</h1>
            </div>
            <div className='socailMedia'>
                <a target="_blank" href='https://github.com/Eslamzaid'><img src={github}></img></a>
                <a target="_blank" href='https://www.linkedin.com/in/eslamzaid/'><img src={linkedin}></img></a>
                <a target="_blank" href='https://stackoverflow.com/users/20173808/slam-zaid'><img src={stack}></img></a>
                <a target="_blank" href='https://twitter.com/SrEslamzaid'><img src={twitter}></img></a>
                <a target="_blank" href='https://discord.gg/BvAR4gGB'><img src={discord}></img></a>
                <a target="_blank" href='https://t.me/javascriptTutorials97'><img src={telegram}></img></a>
            </div>
            </section>
        </footer>
    )
}

export default footer