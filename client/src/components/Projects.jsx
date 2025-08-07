import { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]); // State to store projects

  // Fetch data when component loads
  useEffect(() => {
    fetch('http://localhost:5000/api/projects') // Backend URL
      .then((res) => res.json())
      .then((data) => setProjects(data)) // Store the data
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  // Display projects
  return (
    <div>
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>No Projects... yet.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;


