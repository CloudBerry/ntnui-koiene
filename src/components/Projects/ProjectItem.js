import React, { Component } from 'react'


class ProjectItem extends Component {



  render() {
    return (
      <div className="projectitem">
        <h2><a href={this.props.link}> {this.props.title}</a></h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default ProjectItem
