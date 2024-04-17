import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Footer } from '../components/Footer/Footer'

export const HomePage = ({ obj, setItem }) => {
    return (
        <>
            <Header />
            <Main obj={obj} setItem={setItem} />
            <Footer />
        </>
    )
}
