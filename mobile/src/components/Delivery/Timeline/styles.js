import styled from 'styled-components/native';

export const Points = styled.View`
    margin-top: 24px;
    align-items: center;
    flex-direction: row;
    padding: 0 23px;
    justify-content: space-between;
`;

export const Line = styled.View`
    height: 1px;
    flex: 1;
    background-color: #7d40e7;
`;

export const Step = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #7d40e7;
    background-color: ${(props) => (props.active ? '#7D40E7' : '#fff')};
`;

export const StepDescriptions = styled.View`
    flex: 1;
    margin-top: 5px;
    justify-content: space-between;
    flex-direction: row;
`;

export const StepDescription = styled.Text.attrs({ numberOfLines: 2 })`
    font-size: 8px;
    width: 60px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #999999;
`;
