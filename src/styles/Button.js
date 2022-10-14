import styled from "styled-components"

export const Button =styled.button`
 padding:1.4rem 2.4rem;
 text-decoration:none ;
 max-width:auto;
 color: rgb(255 255 255);
 border:none;
 cursor: pointer;
 background-color: ${({theme})=> theme.colors.btn};
`