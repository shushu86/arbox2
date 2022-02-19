import React from 'react';
import ReactDOM from 'react-dom';
import { FaDumbbell } from 'react-icons/fa';
import { GiSpeedometer, GiPencil } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import { GrScheduleNew, GrUserManager } from "react-icons/gr";
import CustomSelect from '../components/CustomSelect';
import ParticipantsList from '../components/ParticipantsList';

const ClassModal = ({ 
    isOpen,
    closeModalHelper,
    participantsList, 
    searchParticipants, 
    handleAddParticipant, 
    handleRemoveParticipant, 
    handleCheckInToggle 
    }) => {
    
    return ReactDOM.createPortal(
        <>
            <div className={`overlay ${isOpen && 'active'}`} onClick={() => closeModalHelper()} />
            <div className={`modal ${isOpen && 'active'}`} >
                <div>
                    <div><GiPencil />Edit</div>
                    <div className="redIcon"><GrScheduleNew />Cancel</div>
                </div>
                <div className="workoutHeader">
                    <div className="dumbellIcon"><FaDumbbell /></div>
                    <div>Workout Of The Day</div>
                </div>
                <div>
                    <div>
                        <div><GrUserManager /></div>
                        <div className="statsHeader">Tom A</div>
                        <div className="detailsHeader">Coach</div>
                    </div>
                    <div>
                        <div><BiTimeFive /></div>
                        <div className="statsHeader">16:15</div>
                        <div className="detailsHeader">Start Time</div>
                    </div>
                    <div>
                        <div><GiSpeedometer /></div>
                        <div className="statsHeader">3/5</div>
                        <div className="detailsHeader">Participants</div>
                    </div>
                </div>
                <div>
                    <div className="infoHeader">You Should Know...</div>
                    <div>Dagan &amp; Eden which participate in the class have a debt</div>
                </div>
                <div>
                    <div>Participants</div>
                    <CustomSelect 
                        searchParticipants={searchParticipants} 
                        handleAddParticipant={handleAddParticipant}
                    />
                </div>
                <div>
                    <ParticipantsList 
                        participantsList={participantsList} 
                        handleCheckInToggle={handleCheckInToggle} 
                        handleRemoveParticipant={handleRemoveParticipant}
                    />
                </div>
            </div>
        </>, 
        document.getElementById('portal')
    )
}

export default ClassModal;
