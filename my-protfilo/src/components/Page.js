import {useRef} from 'react'
import Contact from './contact/Contact'
import Nav from "./Nav/Nav"
import Main from './Main/Main1/Main'
import Footer from "./Footer/Footer"
import Projects from './Main/Main2/secondMain'

const Page = () => {
    const whereis = useRef(null)
    const focusInput = () => {
        whereis.current.focus()
    }
    const theHome = useRef(null)
    const theHomeFun = () => {
        theHome.current.focus()
    }

    const theContact = useRef(null)
    const theContactFun = () => {
        theContact.current.focus()
    }
    const onCLickHandler = () => {
        alert('hi')
    }
    return (
        <>
            <Nav connect={focusInput} connectHome={theHomeFun} overThere={theContactFun} />
            <Main connect={theHome}/>
            <Projects hereisis={whereis}/>
            <Contact over={theContact} />
        </>
    )
}


export default Page