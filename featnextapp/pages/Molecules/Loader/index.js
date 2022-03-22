import React, {Component } from 'react'
import LoaderImage  from '../../../../src/images/loadingimg.gif'
import '../Loader/index.css'

export class Loader extends Component{

    constructor(){
        super();
        
    }

    render(){
        let displayLoader=this.props.isShow;
        return(
            (this.props.isShow && <div  className={'loader-item ' +displayLoader} >
        <div className="loader-section">
            <img src={LoaderImage} className="loader-icon" alt="loader"/>
        </div>
    </div>)

        )
    }
}

export default Loader