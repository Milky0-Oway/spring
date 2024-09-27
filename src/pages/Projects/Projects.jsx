import { Description } from '../../components/Description/Description';
import { ProjectsContainer } from '../../components/ProjectsContainer/ProjectsContainer';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Projects = () => {
    return (
        <>
            <Header />
            <main>
                <Description />
                <ProjectsContainer />
            </main>
            <Footer />
        </>
    );
};
