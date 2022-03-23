import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

function Update() {
  const history = useHistory();
  const [rate, setRate] = React.useState(0);
  const params = useParams();
  console.log(params);

  return (
    <>
      <Box>
        
          <h3 style={{ textAlign: "center" }}>
            <Mini>{params.dayName}</Mini>평점 남기기</h3>
        

        <RatingUpdate>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <Round
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                style={{ backgroundColor: idx < rate ? "orange" : "#ddd" }}
              />
            );
          })}
        </RatingUpdate>

        <Goback
          onClick={() => {
            history.push(`/`);
          }}
        >
          평점 남기기
        </Goback>
      </Box>
    </>
  );
}

const Box = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 5px;
  h3 {
    display: flex;
  }
`;

const Mini = styled.div`
  color: #fff;
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
  margin: 0 0.6rem 0 0; 
`;

const RatingUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;

const Round = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: orange;
`;

const Goback = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: #fff;
  font-size: medium;
  cursor: pointer;
`;

export default Update;
