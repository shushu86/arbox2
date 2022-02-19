import React, { useState, useEffect } from 'react';

const CustomSelect = ({ searchParticipants, handleAddParticipant }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    
    useEffect(() => {
        const element = document.querySelector(".customSelectContainer");
        document.addEventListener("mousedown", (e) => {
            if (!element.contains(e.target)) {
                setIsOpen(false)
            }
        });
    },[])

    return (
     
            <div className="customSelectContainer">
                <div className="customSelect" onClick={() => setIsOpen(!isOpen)} >
                    <div>{isOpen ? 'To' : 'Add Client'}</div>
                    <div>+</div>
                </div>
                <div className={`customSelectList ${ isOpen && 'active' }`}>
                    {searchParticipants.map((participant) => (
                        <div key={participant.id} onClick={() => {
                                    handleAddParticipant(participant.id);
                                    setIsOpen(false);
                                }}>
                            <img className="profilePic" src={participant.image} alt={participant.image} />
                            <div>{participant.fullName}</div>
                        </div>
                    ))}
                </div>
            </div>
       
    )
}

export default CustomSelect;
