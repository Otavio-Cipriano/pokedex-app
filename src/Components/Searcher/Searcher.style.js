import styled from "styled-components";
import { tint } from "polished";

const Wrap = styled.div`
  /* background-color: #029b7f; */
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  >h2{
    margin: 0;
    font-size: 2.1rem;
    color: white;
  }

  >div{
    position: relative;
  }
`;

const Input = styled.input`
    padding: 10px 1rem;
    font-size: 1rem;
    min-width: 300px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
    background-color: white;
    box-shadow: 0 1px 3px hsl(0deg 0% 0% / 20%);
`;

const Button = styled.button`
  padding: 11px 1rem;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  color: gray;
  background-color: white;
  border-right: 1px solid gray;
  cursor: pointer;
  box-shadow: 0 1px 3px hsl(0deg 0% 0% / 20%);
`

const Result = styled.div`
  background-color: var(--clr-light-gray);
  position: absolute;
  width: 100%;
  /* left: 0; */
  right: 0;
  margin: auto;
  /* min-height: 200px; */
  z-index: 2;


  a{
    display: ${props => props.searched};
    /* background-color: ${props => props.color ? tint(0.3, props.color) : ''}; */
    gap: 1rem;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 1rem;

    :hover{
      background-color: ${props => props.color ? tint(0.3, props.color) : ''};
    }
  }

  img{
    width: 100%;
    max-width: 100px;
  }

  p{
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem;
    text-align: center;
  }
`

export {Button, Input, Result, Wrap}