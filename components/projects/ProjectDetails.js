import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{id}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum fugiat quas mollitia libero explicabo omnis qui repudiandae blanditiis quia, quaerat et commodi cum numquam repellendus quam aut reprehenderit odit atque.</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div> author</div>
                <div>date</div>
            </div>
        </div>

    </div>
  )
}

export default ProjectDetails
