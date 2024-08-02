import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex: 3;
    background-color: rgba(218, 229, 245, 1);

    .hero-img-wrapper {
        width: 626px;
        pointer-events: none;
    }

    .hero-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .hero-header {
            font-size: 50px;
            font-weight: 700;
            line-height: 58.59px;
            letter-spacing: 0.02em;
            text-align: center;
        }

        .hero-desc {
            color: rgba(41, 41, 41, 1);
            font-size: 22px;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: 0.02em;
            text-align: center;
        }
    }

    footer {
        display: flex;
        gap: 10px;
        align-items: center;
        position: absolute;
        bottom: 30px;

        img {
            pointer-events: none;
        }

        p {
            font-size: 22px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 0.02em;
            text-align: left;
        }
    }

    @media (max-width: 1300px) {
        flex: 2;
    }
`