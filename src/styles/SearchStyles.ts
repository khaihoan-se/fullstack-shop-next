import styled from "styled-components";

export const SearchStyle = styled.div`
    color: #333;
    max-width: 600px;
    min-width: 100px;
    max-height: 34px;
    position: relative;
    border: none;
    outline: none;
    background: #f7f7f7;
    border-radius: 20px;
    padding: 0 14px;
    margin-right: 45px;
    line-height: 34px;
    transition: all .2s;
`

export const SearchMain = styled.div`
    input {
        font-size: 14px;
        color: #333;
        width: calc(100% - 30px);
        background: #f7f7f7;
    }
`