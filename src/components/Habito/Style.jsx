import styled from "styled-components"

export const CreatedHabbit = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 20px;
    margin-left: 17px;
    box-sizing: border-box;
`

export const HabbitTitle =styled.h2`
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-left: 15px;
    padding-bottom: 5px;
    padding-top: 13px;
`

export const Habbit = styled.div`
    display: flex;
    justify-content: space-between;

    && svg {
        font-size: 18px;
        margin-top: 5px;
        margin-right: 10px;
    }
`
export const DeleteButton = styled.button`
    border: none;
    background-color: #ffffff;
    width: 20px;
    margin-right: 10px;
`
export const DaysButtons = styled.div`
    margin-left: 18px;
    margin-top: 8px;
`

export const DayButton = styled.button`
    border: ${(props) => props.selecionado ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
    background-color: ${(props) => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 19.98px;
    color: ${(props) => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
    margin-right: 4px;
`
