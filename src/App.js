import React, { useState,useEffect } from 'react';
import ClassModal from './components/ClassModal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [participantsList, setParticipantsList] = useState([
    {id: 1, fullName: 'Dagan Lev', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/227613918.jpg'},
    {id: 2, fullName: 'Eden Elian', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/2918216.jpg'},
    {id: 3, fullName: 'Yoni Yatziv', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/1928827558.jpg'}
  ]);

  const [searchParticipants, setSearchParticipants] = useState([
    {id: 4, fullName: 'Tomi Tomi', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/1057918009.jpg'},
    {id: 5, fullName: 'Tomer Cohen', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/14502382.jpg'},
    {id: 6, fullName: 'Tom Levi', isCheckedIn: false, image: 'https://cutewallpaper.org/24/portrait-png/111191856.jpg'}
  ]);

  const handleCheckInToggle = (id) => {
    const elementIndex = participantsList.findIndex((participant) => participant.id === id);
    
    let newArr = [...participantsList];

    newArr[elementIndex] = {...newArr[elementIndex], isCheckedIn: !newArr[elementIndex].isCheckedIn}

    setParticipantsList(newArr);
  }

  const handleAddParticipant = (id) => {
    setParticipantsList((prev) => [...prev, searchParticipants.find((participant) => participant.id === id)]);

    setSearchParticipants(prev => {
      return prev.filter((item) => item.id !== id);
    })
  }

  const handleRemoveParticipant = (id) => {
    setSearchParticipants((prev) => [...prev, participantsList.find((participant) => participant.id === id)]);
    
    setParticipantsList(prev => {
      return prev.filter((item) => item.id !== id);
    })
  }

  const closeModalHelper = () => {
    setIsOpen(false)
  }


  useEffect(() => {
    const overlay = document.querySelector('.overlay');
    if(overlay) {
      document.addEventListener("mousedown", (e) => {
        const element = document.querySelector(".modal.active");
          if (element && !element.contains(e.target)) {
              setIsOpen(false)
          }
      });
    }
  },[])

  return (
    <div className="App" onClick={() => setIsOpen(true)}>
      <ClassModal 
        isOpen={isOpen}
        closeModalHelper={closeModalHelper}
        participantsList={participantsList} 
        searchParticipants={searchParticipants} 
        handleAddParticipant={handleAddParticipant} 
        handleRemoveParticipant={handleRemoveParticipant} 
        handleCheckInToggle={handleCheckInToggle}
      /> 
    </div>
  );
}

export default App;
