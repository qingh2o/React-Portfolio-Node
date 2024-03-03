import React from "react";
import ProjectCard from '../components/ProjectCard';
import projectGallery from '../utils/projectGallery.json';

function Project() {
    return (
        <main>
             <div className="container py-3 py-md-5">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Recent works</h3>
                            <h2 className="display-5 mb-4 mb-md-5 text-center">Here are some projects I've worked on recently.</h2>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="row">
                    {projectGallery.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            url={project.url}
                            github={project.github}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
export default Project;