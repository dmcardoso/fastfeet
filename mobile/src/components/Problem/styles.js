import styled from 'styled-components/native';

export const Container = styled.View.attrs({ elevation: 2 })`
    padding: 18px 10px 18px 20px;
    border-radius: 4px;
    margin-bottom: 15px;
    background: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ProblemDescription = styled.Text`
    color: #999999;
    font-size: 18px;
    flex: 1;
`;

export const ProblemDate = styled.Text`
    color: #c1c1c1;
    font-size: 12px;
    width: 65px;
    margin-left: 10px;
`;
