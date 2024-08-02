import React from 'react'
import styled from 'styled-components'

const AddGroupButton = ({ handleOpenModal }) => {
  return (
    <AddGroupButtonContainer onClick={handleOpenModal}>
        <span>+</span>
    </AddGroupButtonContainer>
  )
}

const AddGroupButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93px;
    height: 93px;
    border-radius: 50%;
    position: sticky;
    bottom: 40px;
    right: 30px;
    margin-left: auto;
    background: rgba(22, 0, 139, 0.9);
    cursor: pointer;

    span {
        color: white;
        font-size: 70px;
        font-weight: 500;
        line-height: 68.38px;
        letter-spacing: 0.02em;
        text-align: left;
    }

    &:active {
        background: rgba(22, 0, 139, 1);
    }
`

export default AddGroupButton