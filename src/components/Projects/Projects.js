import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import { Link } from 'react-router'

class Projects extends Component {

  constructor() {
    super()

    this.state = {
      projects : [
        {
          title: "Skiltmaker.no",
          desc: "A homepage for a sign maker in Oslo. The web page is created in React and fetches images from Instagram to display them in a nice manner on the page.",
          link: "http://www.eddern.no"
        },
        {
          title: "File Master",
          desc: "A multipurpose file handling tool written in Java. It has features like batch renaming and zipping. It has been downloaded more than 27000 times!",
          link: "http://www.sourceforge.net/projects/cloudberryfile/"
        },
        {
          title: "ENote",
          desc: "A simple note taking application written in Python 3 with a GUI in PyGTK.",
          link: "http://www.github.com/CloudBerry/ENote"
        },
        {
          title: "Batch Watermarker",
          desc: "A Java application to add logos or watermarks to multiple pictures at once.",
          link: "http://www.sourceforge.net/projects/batchwatermarke/"
        }
      ]
    }

  }



  render() {
    let projects = this.state.projects.map((project) => {
      return (<ProjectItem title={project.title} desc={project.desc} link={project.link}/>)
    })
    return (
      <div className="content fadeIn animated">
        <div className="backtohome fadeIn animated"><Link to="/"><i className="fa fa-4x fa-chevron-left" aria-hidden="false"></i></Link></div>
        <div className="projects-title">
          My Projects
        </div>
        <div className="backtohome"><Link to="/"><i class="fa fa-chevron-left" aria-hidden="false"></i></Link></div>
        {projects}
      </div>
    );
  }
}

export default Projects
