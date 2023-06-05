import styled from "styled-components";

export const Container = styled.div`
    background-color:  #E5E5E5;
    height: 100%;
    width: 100%;
`
export const TodayContainer = styled.div`
    box-sizing: border-box;
    padding-top: 130px;
    padding-bottom: 100px;
    height: 100vh;
`

export const ProgressHabbit = styled.div`
    margin-left: 18px;
    font-family: 'Lexend Deca', sans-serif;

    && p {
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
    }
`

export const TodayRecords = styled.div`
    margin-left: 18px;
    margin-top: 30px;
`

export const HabbitRecords = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: #ffffff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    && svg {
        font-size: 69px;
        height: 69px;
        color: #8FC549;
        border: 1px solid #EBEBEB;
        border-radius: 5px;
        margin-right: 13px;
    }
`

export const Texts = styled.div`
    margin-left: 15px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #666666;

    && h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 8px;
    }
`

export const Sequence = styled.span`
    color: #8FC549;
`

export const Record =  styled.span`
    color: #8FC549;
`