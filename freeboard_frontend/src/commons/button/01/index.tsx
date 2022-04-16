import styled from "@emotion/styled";

const Button = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    color: white;
    font-weight: 600;
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    background-color: ${(props) => (props.isActive ? "#6888B2" : "")};
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
