import styled from 'styled-components';
import { theme } from '../../Theme.styled';

export const FriendListWrap = styled.div`
  width: 300px;
  height: 420px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendListItems = styled.li`
  display: flex;
  align-items: center;
  box-shadow: ${theme.colors.boxShadow};
  height: 76px;
  padding-left: 10px;
  border-radius: 5px;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  background-color: ${theme.colors.bGCAvatar};
  box-shadow: ${theme.colors.boxShadow};
  margin: 0 10px;
`;

export const IsOnline = styled.span`
  background-color: ${({ status, theme }) =>
    status ? theme.colors.statusGreen : theme.colors.statusRed};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
