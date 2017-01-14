import React, { Component } from 'react'
var data = require('../.././cabins/nico.json');

class CabinInfo extends Component {



  render() {
    let lang = "no"

    let beds = {no: "Sengeplasser:", en: "Beds:"}


    return (
      <div>
        <div className="infopoints">
          {data.area} <br/>
          {beds[lang]} {data.beds} <br/>
          {data.terrain[lang]} <br/>
          {data.height} <br/>
          {data.position} <br/>
          {data.map}
        </div>
      </div>
    );
  }
}

export default CabinInfo
