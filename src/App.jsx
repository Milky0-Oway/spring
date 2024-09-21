import { Description } from './components/Description/Description';
import { Projects } from './components/Projects/Projects';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Description />
                <Projects />
            </main>
            <Footer />
        </>
    );
}

export default App;
