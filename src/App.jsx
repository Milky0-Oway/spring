import { Description } from './components/Description/Description';
import { Projects } from './components/Projects/Projects';
import { Header } from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <main>
                <Description />
                <Projects />
            </main>
        </>
    );
}

export default App;
