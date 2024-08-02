import React, { useState } from "react"
import styled from "styled-components"
import { createGroup } from "../utils/api"

const AddGroupModal = ({ isOpen, onClose, setGroups }) => {
    if(!isOpen) return null

    const [selectedColor, setSelectedColor] = useState(null)
    const [groupName, setGroupName] = useState('')
    const [isCreateDisabled, setIsCreateDisabled] = useState(true)
    const [error, setError] = useState('')

    const groupColors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

    const handleGroupNameChange = (event) => {
        const newGroupNameValue = event.target.value

        setGroupName(newGroupNameValue)

        if(newGroupNameValue.trim().length && selectedColor != null) {
            setIsCreateDisabled(false)
        } else {
            setIsCreateDisabled(true)
        }
    }

    const handleColorClick = (color) => {
        setSelectedColor(color)


        if(groupName.trim().length) {
            setIsCreateDisabled(false)
        } else {
            setIsCreateDisabled(true)
        }
    }

    const handleCreateGroup = async () => {
        if(isCreateDisabled) return

        try {
            const response = await createGroup(groupName, selectedColor)
            setGroups(prevItems => [...prevItems, response])
            setGroupName('')
            setSelectedColor(null)
            onClose()
        } catch (err) {
            setError('Error creating group: ' + err.message)
        }
    }

	return (
		<ModalContainer onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="header">Create New group</div>
                <div className="group-input-wrapper name-input">
                    <div className="input-label">Group Name</div>
                    <input placeholder="Enter group name" type="text" value={groupName} onChange={handleGroupNameChange} />
                </div>
                <div className="group-input-wrapper colour-input">
                    <div className="input-label">Choose colour</div>

                    <div className="group-color-items-wrapper">
                        {groupColors.map((color, index) => (
                            <div 
                                key={`group-color-item-${index}`}
                                className={`group-color-selector ${selectedColor === color ? 'selected' : ''}`} 
                                style={{ backgroundColor: color }} 
                                onClick={() => handleColorClick(color)} 
                            />
                        ))}
                    </div>
                </div>
                {error ? <div className="error-wrapper">{error}</div> : ""}
                <button onClick={handleCreateGroup} className={`group-create-button ${isCreateDisabled ? "group-create-disabled" : ""}`}>Create</button>
            </div>
        </ModalContainer>
	)
}


const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;

    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        border-radius: 6px;
        padding: 30px 50px;
        background-color: white;
        gap: 24px;
        max-width: 90%;
        max-height: 90%;

        .name-input {
            margin-bottom: 10px;
        }

        .group-input-wrapper {
            width: 100%;
            display: flex;
            align-items: center;

            .input-label {
                margin-right: 20px;
                font-size: 18px;
            }

            input {
                width: 65%;
                height: 40px;
                border-radius: 22px;
                border: 2px solid rgba(204, 204, 204, 1);
                padding: 10px;
                outline: 0;
                color: black;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.035em;
                text-align: left;
                
                &::placeholder {
                    color: rgba(151, 151, 151, 1);
                }
            }

            .group-color-items-wrapper {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;

                .group-color-selector {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;

                    &.selected {
                        border: 3px solid black;
                    }
                }
            }
        }

        div {
            color: black;
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: 0.035em;
            text-align: left;
        }

        .group-create-button {
            all: unset;
            padding: 6px 20px;
            border-radius: 11px;
            align-self: flex-end;
            background-color: rgba(0, 31, 139, 1);

            color: white;
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.035em;
            text-align: left;
            cursor: pointer;
            opacity: 0.9;

            &:active {
                opacity: 1;
            }

            &.group-create-disabled {
                cursor: not-allowed;
                background-color: gray;

                &:active {
                    opacity: 0.9;
                }
            }
        }

        .error-wrapper {
            align-self: center;
            color: red;
        }
    }

    @media (max-width: 600px) {
        .modal-content {
            padding: 20px;
            gap: 16px;
        }

        .group-input-wrapper {
            .input-label {
                margin-right: 10px;
            }

            input {
                width: 100%;
                height: 36px;
                font-size: 14px;
            }

            .group-color-items-wrapper {
                gap: 8px;

                .group-color-selector {
                    width: 25px;
                    height: 25px;
                }
            }
        }

        div {
            font-size: 20px;
            line-height: 28px;
        }

        .group-create-button {
            padding: 6px 16px;
            font-size: 16px;
        }
    }
`;


export default AddGroupModal
