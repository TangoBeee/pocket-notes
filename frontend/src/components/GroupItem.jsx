import React from 'react'
import styled from "styled-components"
import GroupIcon from './GroupIcon'

const GroupItem = ({ name, color, onClick }) => {
  return (
    <GroupItemContainer onClick={onClick}>
        <GroupIcon name={name} color={color}/>

        <div className='group-name'>
            {name || "My Notes"}
        </div>
    </GroupItemContainer>
  )
}

const GroupItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
    border-radius: 16px;
    padding: 15px 30px;
    cursor: pointer;

    .group-name {
        color: black;
        font-size: 24px;
        font-weight: 500;
        line-height: 28.13px;
        letter-spacing: 0.02em;
        text-align: left;
    }

    &:hover {
        background-color: rgba(47, 47, 47, 0.17);
    }

    &:active {
        background-color: rgba(47, 47, 47, 0.2);
    }
`

export default GroupItem