import styled from "styled-components"

export const SidebarContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-top: 50px;

    .sidebar-header-wrapper {
        .sidebar-header {
            font-size: 35px;
            font-weight: 500;
            line-height: 41.02px;
            letter-spacing: 0.02em;
            text-align: left;
        }
    }

    .group-items-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        margin-top: 30px;
        overflow-y: auto;

        .no-groups {
            color: black;
            font-size: 2rem;
        }
    }
`