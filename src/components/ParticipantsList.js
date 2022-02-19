import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc';

const ParticipantsList = ({ participantsList, handleCheckInToggle, handleRemoveParticipant }) => {
    return (
        <div className="participantsList">
            {participantsList.map((participant) => (
                <div key={participant.id}>
                    <div>
                        <img className="profilePic" src={participant.image} alt={participant.fullName} />
                        <div>{participant.fullName}</div>
                    </div>
                    <div 
                        className={ `checkIn ${participant.isCheckedIn ? 'active' : ''}` } 
                        onClick={() => handleCheckInToggle(participant.id)}>
                            {participant.isCheckedIn ? 'Checked' : 'Check In'}
                    </div>
                    <div className="iconsContainer">
                        <div className="waIcon"><FaWhatsapp/></div>
                        <div className="trashIcon" onClick={() => handleRemoveParticipant(participant.id)}><VscTrash /></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ParticipantsList;
