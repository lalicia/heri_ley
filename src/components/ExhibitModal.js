import React from "react";



function ExhibitModal({setModal, image}) {

    return (
        <div className="modalbg">
        <div className="modal-container">
            <div className="modal-xbtn">
                <button onClick={() => setModal(false)}> x <i>close</i> </button>
            </div>
        
            <img className="modal-img" src={image} alt="large version of exhibit" />
          
        </div>
    </div>
    )
}

export default ExhibitModal;