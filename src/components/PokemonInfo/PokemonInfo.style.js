import styled from 'styled-components';

const Stats = styled.div`
  text-transform: capitalize;
  p{
    margin: 5px 0;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Bar = styled.div`
  width: 255px;
  height: 15px;
  background-color: black;
  position: relative;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    width: ${props => props.width ? ` ${props.width}%` : '0px'};
    height: 15px;
  }
`;

const Info = styled.div`
    max-width: 500px;
    max-height: 680px;
    overflow-y: scroll;
    margin: 3rem auto 0 auto;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    >div{
      border-left: 4px solid white;
      padding-left: 10px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
`;

const InfoText = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    text-transform: capitalize;

    h3{
      margin: 0;
    }
`

const InfoDesc = styled.div`
  margin: 10px 0;
  h3{
      margin: 0;
  }
`

const InfoTypes = styled.div`
  margin-bottom: 2rem;
`

export {Bar, Info, InfoDesc, InfoText, InfoTypes, Stat, Stats, }