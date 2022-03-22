import React, { useState } from "react";
import '../../../css/modal-css.css';
import closeImg from '../../../images/close-img.svg';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const PopUpModal = ({IsShow,Message}) =>{

    // const [style,setStyle] = useState({});
    const handleClick =() =>{
        var element= document.getElementById("popupModal");
        element.setAttribute("style", "display:none");
    };
   
    // setStyle({
    //     style : "modal-section closeModal"
    // })
    // const handleClose = () => {
    //     setStyle({
    //         style : "modal-section closeModal"
    //     })
    // };

    if(IsShow){
        return(
            <>  
            <section className={"modal-section"} id={"popupModal"} style={{ display: IsShow ? 'block': 'none'}} >
                <div className="modal-box">
                    <div className="modal-body">                                           
                        <div className="mt-20 overflow-hidden">                      
                         <p>{Message}</p>
                        </div>
                        <div onClick={handleClick}><img src={closeImg} /></div>                                                                    
                    </div>
                </div>
            </section> 
               
            </>      
        );
    }
    return(
        <></>
    )
    
};

export default  PopUpModal

// import React, {Component } from 'react'
// import '../Popup/index.css'
// export class PopUpmessage extends Component{
   
//     constructor(){
//         super();
//     }

//     render(){
//         console.log(this.props,'popups props')
//         if(this.props.type=='success'){
//             return(
            
//                 <div className={'success-box msg-box active '+this.props.IsShowMessagePopup ? 'active' : ''}><i className="sprite msg-icon success-icon"></i><label id="sucessMsg">{this.props.PopUpmessage}</label></div>
    
//             )
//         }
//         else if(this.props.type=='error'){
//             return(
            
//                  <div className={'alert-box msg-box '+this.props.IsShowMessagePopup ? 'active' : ''}><i className="sprite msg-icon alert-icon"></i><label id="errorMsg"></label>{this.props.PopUpmessage}<a href="#" id="clickHere"></a></div> 
    
//             )
//         }else{
//             return '';
//         }
        
//     }

// }

// export default PopUpmessage;