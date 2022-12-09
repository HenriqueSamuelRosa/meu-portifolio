import React from 'react'
import data from '../../data/projects';

function ListProjects() {
  return (
    <div className='list-projects'>
      {data.map(({module__name, module__description, module__id, projects})=> (
        <div className='modules'>
          <div className='module-description'>
            <h1>{module__name}</h1>
            <p>{module__description}</p>
          </div>
          <section className='projects'>
            {projects.map(({project__description, project__name, project__url, project__image}) => (
              <div>
                <h2>{project__name}</h2>
                <p>{project__description}</p>
                <div className='image-of-project'>
                  <img src="src/images/trybewarts/trybeWarts.png" alt="trybewarts"/>
                </div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  )
}

export default ListProjects;