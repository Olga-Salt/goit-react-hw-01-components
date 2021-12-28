import styled from 'styled-components';
import { theme } from '../../Theme.styled';

export const TransactionTable = styled.table`
  height: 320px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  box-shadow: ${theme.colors.boxShadow};
  overflow: hidden;
  color: ${theme.colors.tableText};
  font-size: 14px;
`;

export const TransactionHead = styled.thead`
  background-color: ${theme.colors.thBGC};
  color: ${theme.colors.white};
  height: 38px;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Row = styled.tr`
  height: 28px;
  text-transform: capitalize;

  :nth-child(2n + 2) {
    background-color: ${theme.colors.rowBGC};
  }
`;

export const Type = styled.td`
  text-align: start;
  padding-left: 30px;
`;

export const Currency = styled(Type)``;
