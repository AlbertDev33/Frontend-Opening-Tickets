import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 80vh;
  /* background-color: red; */
`;

export const MenuTicket = styled.section`
  /* color: #969cb3;
  color: #363f5f; */
  display: grid;
  color: #fff;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 35px 1fr;
  grid-template-areas:
    'Identifier Subject Message Accountable Status Condition'
    'Body . . . . .';

  width: 80vw;
  /* max-width: 1120px; */
  background-color: #121214;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 60px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const BodyData = styled.div`
  grid-area: Body;
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 30px;
  /* background-color: red; */

  span {
    display: flex;
    justify-content: baseline;
    width: 90%;
  }
`;

export const Identifier = styled.span`
  grid-area: Identifier;
  width: 100%;
`;

export const Subject = styled.span`
  grid-area: Subject;
  width: 100%;
`;

export const Message = styled.span`
  grid-area: Message;
  width: 100%;
`;

export const Accountable = styled.span`
  grid-area: Accountable;
  width: 100%;
`;

export const Status = styled.span`
  grid-area: Status;
  width: 100%;
`;

export const Condition = styled.span`
  grid-area: condition;
  width: 100%;
`;
