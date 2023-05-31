import styled from "styled-components";

export const Container = styled.div`
    background-color:  #E5E5E5;
    height: 100vh;
    width: 100%;
`
// Styles do container de criar um novo hábito

export const HabbitContainer =  styled.form`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    margin-top: 20px;
`

export const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    width: 300px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 19.98px;
    font-weight: 400;
    margin-top: 18px;
    margin-left: 18px;
`

export const DaysButtons = styled.div`
    margin-left: 18px;
    margin-top: 8px;
`

export const DayButton = styled.button`
    border: 1px solid #D4D4D4;
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 19.98px;
    color: #DBDBDB;
    margin-right: 4px;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 29px;
    margin-left: 148px;

    && button {
        font-size: 15.98px;
        font-family: 'Lexend Deca', sans-serif;
        border: none;
    }
`

export const Cancel = styled.button`
    background-color: #FFFFFF;
    color: #52B6FF;
    text-align: center;
    margin-right: 5px;
` 

export const Save = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    width: 84px;
    height: 35px;
    border-radius: 4.64px;
    margin-left: 5px;
`
// Styles do container geral dos hábitos

export const HabitosContainer = styled.div`
    box-sizing: border-box;
    background-color: #E5E5E5;
    padding-bottom: 80px;
`
export const CreateHabbit = styled.div`
    box-sizing: border-box;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

    &&  h1 {
        font-size: 22.98px;
        font-weight: 400;
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
    }

    &&  svg {
        font-size: 35px;
        color: #52B6FF;
    }
`
export const Text = styled.div`
    width: 338px;
    margin-top: 28px;
    padding-left: 17px;
    font-size: 17.98px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    font-family: 'Lexend Deca', sans-serif;
`

// Styles do hábito já criado

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