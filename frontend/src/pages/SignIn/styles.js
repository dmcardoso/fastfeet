import styled from 'styled-components';

export const Container = styled.div`
    width: 360px;
    max-width: calc(100% - 20px);
    height: 425px;
    max-height: calc(100% - 20px);
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    padding: 60px 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    img {
        max-width: 100%;
    }

    form {
        width: 100%;
        margin-top: 40px;

        > div {
            & + div {
                margin-top: 15px;
            }
        }
    }
`;
