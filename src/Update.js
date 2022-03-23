import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Update() {
  const history = useHistory();
  const [rate, setRate] = React.useState(0);
  const params = useParams();
  console.log(params);

  return (
    <>
      <Box>
        
          <h3 style={{ textAlign: "center", fontFamily: "SuncheonB"}}>
            <Mini>{params.dayName}</Mini><div style={{margin: '5px 0 0 0'}}>평점 남기기</div>
          </h3>
        

        <RatingUpdate>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <Round
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                style={{ backgroundColor: idx < rate ? "#F7866E" : "#ddd" }}
              />
            );
          })}
        </RatingUpdate>

        <Goback
          onClick={() => {
            history.push(`/`);
          }} className = "Goback display-linebreak"
        >
          <p>평점</p>
          <p>남기기</p>
        </Goback>
      </Box>
    </>
  );
}

const Box = styled.div`
  background-color: white;
  max-width: 350px;
  width: 80vw;
  height: 40vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 20px;
  h3 {
    display: flex;
    text-align: center;
  }
`;

const Mini = styled.div`
  color: #fff;
  font-weight: 500;
  background: #F7B36E;
  padding: 0.4rem;
  border-radius: 5px;
  margin: 0 1rem 0 1.5rem; 
  font-family: 'SuncheonB'
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
  background-color: #F7866E;
`;

const Goback = styled.button`
  width: 50%;
  background-color: #9734B0;
  border: none;
  border-radius: 5px;
  margin: 2rem auto;
  display: block;
  padding: 0.5rem;
  color: #fff;
  font-size: smaller;
  font-weight: 600
  cursor: pointer;
  p {margin: 0 0 3px 0;
    font-family: 'SuncheonB'
  }
  
`;

export default Update;
