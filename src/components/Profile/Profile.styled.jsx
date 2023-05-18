import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 340px;
  margin-left: auto;
  margin-right: auto;
  padding: 70px 50px;
  background-color: darkgrey;
`;

export const Description = styled.div`
  width: 200px;
  height: 220px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  background-color: white;
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  text-align: center;
  color: darkgrey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  color: darkgrey;
`;

export const Stats = styled.ul`
  width: 200px;
  background-color: gainsboro;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: flex;
  gap: 40px;
`;

export const Label = styled.span`
  width: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  width: 40px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;
