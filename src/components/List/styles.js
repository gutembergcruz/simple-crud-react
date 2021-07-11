import styled from "styled-components";

export const Container = styled.section`

 table{
     width: 100%;
     max-width: 800px;
     margin: 0 auto;

     margin-top: 25px;

     border: 1px solid #eee;
 }
 thead{
     background: #eee;

     td{
         height: min-content;
         padding: 10px;
     }
 }
 tbody{
    td{
        height: min-content;
        padding: 10px;

        button{
            background: transparent;
            border: none;
            transition: filter 0.2s;
            cursor: pointer;

            &:hover{
                filter: brightness(0.8);
            }
        }
    }
 }
`;