import React from "react";
import '../../css/modal-css.css';
import closeImg from '../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const CucmRpa = () =>{

    return(
        <>  
        <section className="modal-section video-modal">
            <div className="modal-box">
                <div className="modal-body">                                           
                    <div className="mt-20 overflow-hidden">                      
                      <iframe width="100%" height="397" src="https://tube.featsystems.com/videoEmbed/cisco-unified-call-manager-cucm-installation?autoplay=1" title="Cisco Router Configuration Automation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Link to="/cisco-unified-call-manager-installation" className="close-md"><img src={closeImg} /></Link>                                                                    
                </div>

            </div>
        </section> 
           
        </>      
    );
};

export default CucmRpa;