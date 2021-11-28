import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #616A94;
    border-radius: 25px;
    padding: 10px 50px;
    text-decoration: none;
    color: #616A94;

    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    &:hover {
        color: white;
        background-color: #616A94;
    }
`;

export default Button