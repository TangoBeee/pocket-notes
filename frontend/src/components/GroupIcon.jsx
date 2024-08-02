import React from 'react'
import styled from "styled-components"
import { generateGroupIcon } from '../utils/nameToGroupIcon'

const GroupIcon = ({ name, color }) => {
  return (
    <GroupIconContainer color={color}>
        <div className='group-icon'>
            {generateGroupIcon(name || "My Notes")}
        </div>
    </GroupIconContainer>
  )
}

const GroupIconContainer = styled.div`
    background-color: ${({ color }) => color || 'rgba(0, 71, 255, 1)'};
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    .group-icon {
        color: white;
        font-size: 24px;
        font-weight: 500;
        line-height: 23.45px;
        letter-spacing: 0.02em;
        text-align: left;
    }
`

export default GroupIcon