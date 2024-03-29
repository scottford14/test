import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import fullrender from './../../img/accumulatorassembly/full-accumulator.png';
import topview from './../../img/accumulatorassembly/topview.png'
import attachment from './../../img/accumulatorassembly/disasembled.png';
import air from './../../img/accumulatorassembly/AIR screenshot.jpg';
import screenshot from './../../img/accumulatorassembly/assembly-screenshot.jpg'


export class AccumulatorAssembly extends Component {
    render() {
        return (
            <ProjectPage
            title="Accumulator Assembly"
            images={[{image:fullrender,
            description:"Cutaway of enclosure to show cell configuration"},
            {image:topview,
            description:"Top view; cell stacks and AMS configuration"},
            {image:attachment,
            description:"Cell stacks separated using kevlar shielding"},
            {image:air,
            description:"Screenshot of assembly animation"},
            {image:screenshot,
            description:"Screenshot of assembly animation"}]}
            description="Our Accumulator consists of 138 indiviual lithium-ion pouch cells, with a total voltage of 600V.  Given the risk associated with handling this package, we required proper documentation for the assembly procedure.  I created this procedure using SolidWorks Composer, creating snapshots and a full animation for our plan for assembly.  Once this was completed and a select few members received high-voltage certifications, we were able to source the proper resources and supervision for the assembly of our battery, a major milestone in the completion of our vehicle."
            />
        )
    }
}

export default AccumulatorAssembly
