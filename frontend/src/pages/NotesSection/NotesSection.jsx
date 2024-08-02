import React, { useEffect, useRef, useState } from 'react'
import { NotesSectionContainer } from './NotesSection.styled'
import GroupIcon from '../../components/GroupIcon'
import SendIconInctive from '../../assets/send-arrow-icon-inactive.svg'
import SendIconActive from '../../assets/send-arrow-icon-active.svg'
import NoteItem from '../../components/NoteItem'
import BackIcon from '../../assets/back-icon.svg'
import { sortNotesByDateTime } from '../../utils/sortNoteItems'
import { addNoteInGroup } from '../../utils/api'

const NotesSection = ({ groupName, groupColor, groupNotes, setSelectedGroup }) => {
  const [notes, setNotes] = useState(groupNotes)
  const [newNote, setNewNote] = useState('')
  const [error, setError] = useState(null)
  const [isSendDisabled, setIsSendDisabled] = useState(true)

  const noteContainer = useRef()

  const scrollToBottom = () => {
    noteContainer.current?.lastElementChild?.scrollIntoView()
  }

  useEffect(() => {
    const notes = sortNotesByDateTime(groupNotes)
    setNotes(notes)
  }, [groupNotes])

  useEffect(() => {
    scrollToBottom()
  }, [notes])

  const handleOnNotesChange = (event) => {
    const newNoteValue = event.target.value

    setNewNote(newNoteValue)

    if(newNoteValue.trim().length) {
      setIsSendDisabled(false)
    } else {
      setIsSendDisabled(true)
    }
  }

  const handleOnNotesSave = async () => {
    if(isSendDisabled) {
      return
    }

    try {
      const response = await addNoteInGroup(groupName, newNote)
      setNotes(response.notes)
      setNewNote("")
      setError("")
    } catch(error) {
      setError(error.message)
    }
  }

  const handleBack = () => {
    setSelectedGroup(null)
  }

  return (
    <NotesSectionContainer>
      <div className='notes-header-wrapper'>
        <img onClick={handleBack} className='back-button' src={BackIcon} alt="Back Button" />
        <GroupIcon name={groupName} color={groupColor} />
        <div className='group-name'>
            {groupName}
        </div>
      </div>

      <div ref={noteContainer} className='notes-item-wrapper'>
        {notes.map((item, index) => (
          <NoteItem key={`note-item-${index}`} note={item.note} date={item.date} time={item.time} />
        ))}
        {
          !notes.length ? <div className='no-notes'>No Notes</div> : ""
        }
      </div>

      <div className='notes-input-wrapper'>
        <textarea value={newNote} onChange={handleOnNotesChange} name="notes" id="notes" cols="30" rows="10" placeholder='Enter your text here...........' />
        <div onClick={handleOnNotesSave} className={`save-notes-icon-wrapper ${isSendDisabled ? 'disabled-save-notes' : ''}`}>
          <img src={isSendDisabled ? SendIconInctive : SendIconActive} alt="Send Button Icon" />
        </div>
      </div>
    </NotesSectionContainer>
  )
}

export default NotesSection