import styled from "styled-components";
import { tint } from "polished";

const Wrap = styled.div`
  min-height: 80px;
  padding: 0 1rem;
  text-align: center;
  margin: 1rem 0;

  >h2{
    margin: 0;
    font-size: 2.5rem;
  }

  >div{
    position: relative;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }
`;

const Input = styled.input`
    padding: 12px 1rem;
    font-size: 1.1rem;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
    background-color: white;
    box-shadow: 0 1px 3px hsl(0deg 0% 0% / 20%);
    display: inline;
    width: 100%;
    max-width: 700px;
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
  font-size: 1.1rem;
`

const Result = styled.div`
  background-color: var(--clr-light-gray);
  position: absolute;
  width: 100%;
  max-width: 700px;
  right: 0;
  left: 0;
  margin: auto;
  /* min-height: 200px; */
  z-index: 2;
  top: 2.9rem;

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