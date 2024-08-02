import React from 'react'
import styled from 'styled-components'

const NoteItem = ({note, date, time}) => {
  return (
    <NoteItemContainer>
        <div className='notes-content-wrapper'>
            <div className='notes-value'>{note}</div>

            <div className='notes-timestamp'>{date} <div className='timestamp-divider' /> {time}</div>
        </div>
    </NoteItemContainer>
  )
}

const NoteItemContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    padding: 28px 24px;

    .notes-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .notes-value {
            color: black;
            font-size: 18px;
            font-weight: 400;
            line-height: 28.83px;
            letter-spacing: 0.035em;
            text-align: left;
            color: black;
        }
        
        .notes-timestamp {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: flex-end;
            gap: 16px;
            font-size: 18px;
            font-weight: 500;
            line-height: 17.58px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(53, 53, 53, 1);

            .timestamp-divider {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: black;
            }
        }
    }
`

export default NoteItem