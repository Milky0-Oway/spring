import { Description } from '../../components/Description/Description';
import { ProjectsList } from '../../components/ProjectsList/ProjectsList';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Projects = () => {
    return (
        <>
            <Header />
            <main>
                <Description />
                <ProjectsList />
            </main>
            <Footer />
        </>
    );
};
