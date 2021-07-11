import styled from "styled-components";

export const Container = styled.header`
    background: #29335C;
    height: 100px;
    div{
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        height: 100px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            color: #fff;
            font-weight: 700;
            font-size: 35px;
        }
        button{
            background: transparent;
            border: 2px solid orange;
            height: 50px;
            padding: 0 25px;
            border-radius: 15px;
            transition: 0.2s;

            color: orange;
            font-weight: 700;
            cursor: pointer;
            font-size: 20px;

            &:hover{
                background: orange;
                color: #29335C;
            }

        }
    }
`;