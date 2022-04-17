import styled from 'styled-components';

export default function Container({children}) {
  return (
    <Wrap>{children}</Wrap>
  )
}


const Wrap = styled.div`
  max-width: 1800px;
  margin: auto;
`;