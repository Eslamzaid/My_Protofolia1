import {useRef} from 'react'
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import Main from './Main/Main1/Main'
import Projects from './Main/Main2/secondMain'

const Page = () => {
    const whereis = useRef(null)
    const focusInput = () => {
        whereis.current.focus()
    }
    return (
        <>
            <Nav connect={focusInput}/>
            <Main/>
            <Projects/>
            {/* <Footer hereisis={whereis}/> */}
        </>
    )
}


export default Page