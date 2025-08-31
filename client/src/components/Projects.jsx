import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <PageWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          My Projects
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          A selection of my recent work and experiments.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="mt-12 text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="mt-16 space-y-12">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                {project.image && (
                  <div className="md:w-1/2 relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out transform group-hover:translate-y-[-50%]"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="md:w-1/2 p-8 text-left">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Links */}
                  <div className="flex space-x-4">
                    {project.viewLink && (
                      <a
                        href={project.viewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        View Project
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      >
                        <FaGithub className="mr-2" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
