import styled from "@emotion/styled";

export const FilterByName = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 40px;
align-items: end;
font-size: 20px;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

input{
    display: flex;
    margin-left: auto;
    width: 60%;

    font-size: 20px;
    
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
}
`