import styled from '@emotion/styled';

export const List = styled.ul`
  margin-left: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: yellow;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 50px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
`;
