import React, { useState } from 'react'

import Home from './pages/Home/Home'
import './App.css'
import Sidebar from './pages/Sidebar/Sidebar'
import NotesSection from './pages/NotesSection/NotesSection'
import { fetchGroupByName } from './utils/api'

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [showHome, setShowHome] = useState(true)

  const handleGroupClick = async (group) => {
    const groupData = await fetchGroupByName(group.name)
    setSelectedGroup(groupData)
    setShowHome(false);
  };

  return (
    <div className='main-container'>
      <Sidebar onGroupClick={handleGroupClick} />
      {showHome ? <Home /> : <NotesSection groupName={selectedGroup.name} groupColor={selectedGroup.color} groupNotes={selectedGroup.notes} />}
    </div>
  )
}

export default App