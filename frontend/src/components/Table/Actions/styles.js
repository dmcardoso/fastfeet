import styled from 'styled-components';

export const Container = styled.td`
    width: 49px;
    position: relative;
    padding-right: 10px;
    border-radius: 0 4px 4px 0;
    text-align: center;
`;

export const ActionsList = styled.div`
    position: absolute;
    min-width: 150px;
    top: calc(100% - 5px);
    background: #fff;
    border-radius: 8px;
    padding: 15px 10px;
    box-shadow: 0px 0px 2px #00000026;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    z-index: 1;
    left: calc(
        50% -
            ${(props) =>
                props.propStyles &&
                props.propStyles.width &&
                props.propStyles.width > 0
                    ? `${props.propStyles.width / 2 + 3}px`
                    : '78px'}
    );

    &::before {
        position: absolute;
        top: -10px;
        right: calc(50% - 10px);
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid white;
        z-index: 2;
    }
    &::after {
        /* This is the shadow triangle */
        position: absolute;
        top: -12px;
        right: calc(50% - 12px);
        content: '';
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid rgba(0, 0, 0, 0.05);
        z-index: 1;
    }
`;
