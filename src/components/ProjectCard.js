export function ProjectCard({ project }) {
  return (
    <div tabIndex={0} className='project-card col-lg-4 col-md-6'>
      <div className='project-card__content'>
        <div className='project-card__header'>
          <h3>{project.name}</h3>
          <div className='project-card__technologies'>
            {project.technologies.map((technology, index) => (
              <img key={index} src={technology} alt='Technology' />
            ))}
          </div>
        </div>
        <img src={project.image} alt='Project preview' className='img-fluid' />
        <div className='project-card__footer'>
          <a href={project.urlApp} target='__blanck' rel='noopener noreferrer'>
            <i className='bi bi-link-45deg'></i>
          </a>
          <a href={project.urlRepository} target='__blanck' rel='noopener noreferrer'>
            <i className='bi bi-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
