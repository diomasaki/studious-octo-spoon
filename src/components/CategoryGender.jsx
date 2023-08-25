import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Info2 = styled.div`
  position: absolute;
  top: 0;
  right: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: 2px solid black;
    padding: 10px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryGender = ({ item }) => {
  return (
    <Container>
      <Link to={`/${item.lnk}`}>
      <Image src={item.img} />
      {item.title === "MEN" 
      ? 
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      : 
      <Info2>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
        </Info2>
      }
      </Link>
    </Container>
  );
};

export default CategoryGender;
