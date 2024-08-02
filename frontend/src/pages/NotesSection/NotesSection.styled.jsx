import styled from "styled-components"

export const NotesSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
    background-color: rgba(218, 229, 245, 1);

    .notes-header-wrapper {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 30px;
        padding: 15px 30px;
        background-color: rgba(0, 31, 139, 1);

        .back-button {
            display: none;

            @media (max-width: 900px) {
                display: block;
            }
        }

        .group-name {
            color: white;
            font-size: 24px;
            font-weight: 500;
            line-height: 28.13px;
            letter-spacing: 0.02em;
            text-align: left;
        }
    }

    .notes-item-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 40px;
        overflow-y: auto;

        .no-notes {
            color: black;
            font-size: 2rem;
            align-self: center;
        }
    }

    .notes-input-wrapper {
        width: 100%;
        height: 260px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 30px;
        background-color: rgba(0, 31, 139, 1);
        border-bottom-left-radius: 10px;

        textarea {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 9px;
            border: 1px solid black;
            outline: 0;
            font-size: 29.82px;
            font-weight: 400;
            line-height: 34.94px;
            letter-spacing: 0.02em;
            text-align: left;
            resize: none;
            padding: 12px 24px;
            color: black;

            &::placeholder {
                color: rgba(154, 154, 154, 1);
            }
        }

        .save-notes-icon-wrapper {
            position: absolute;
            bottom: 60px;
            right: 80px;
            cursor: pointer;
        }

        .disabled-save-notes {
            cursor: not-allowed;
        }

        @media (max-height: 700px) {
            height: 160px;
        }
    }


    @media (max-width: 1300px) {
        flex: 2;
    }
`