import styled from 'styled-components';

export const List = styled.ul`
  width: 450px;
  font-size: 16px;
  padding: 20px;
  color: #000;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border: 1px solid grey;
  `;

export const Button = styled.button`
  width: 100px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: #2e7ebd 0 1px 2px;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  white-space: pre-line;
  padding: 0.7em 0;
  border: 1px solid;
  border-color: #60a3d8 #2970a9 #2970a9 #60a3d8;
  border-radius: 6px;
  outline: none;
  background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;
  :hover {
    color: rgb(255, 255, 255);
    background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
  }
`;
