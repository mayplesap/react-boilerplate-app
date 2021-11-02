import styled from 'styled-components';

const Button = styled.button`
  border: none;
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  background: white;

  &:active {
    background: #41addd;
    color: fff;
  }

  &:hover {
    background: #41addd;
    color: white;
  }
`;

export default Button;
