import React from "react";
import styled from 'styled-components';


export default function CharacterCard(props) {
  const Card = styled.div`
  width: 30%;
  border-radius: 8px;
  border: solid black 1px;
  padding: 1rem;
  background-color: lightcoral;
  margin: 3%;
  box-shadow: 10px 10px 8px #888888;`;
   



  return (
    <Card>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.gender}</p>
    </Card>
  );
}
