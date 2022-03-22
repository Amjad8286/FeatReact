import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const SwitchConfigurationRPA = () =>{

    return(
        <>  
        <section className="modal-section video-modal">
            <div className="modal-box">
                <div className="modal-body">                                           
                    <div className="mt-20 overflow-hidden">                      
                      <iframe width="100%" height="397" src="https://tube.featsystems.com/videoEmbed/cisco-switch-configuration-migration?autoplay=1" title="Cisco Router Configuration Automation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Link to="/cisco-switch-configuration-migration-automation" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>
            </div>
        </section> 
           
        </>      
    );
};

export default SwitchConfigurationRPA;