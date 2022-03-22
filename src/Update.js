import React, {useState} from "react";
import styled from "styled-components";
import { useHistory} from "react-router-dom";


function Update () {

    const history = useHistory();
    const [rate, setRate] = React.useState(0);

    return (
        <>
          <Box>
            <h3 style={{ textAlign: "center" }}>
              무슨요일 평점 남기기
            </h3>
    
            <RatingUpdate>
              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <Round key={idx} onClick={() => {setRate(idx+1)}} style={{backgroundColor: idx < rate ? "orange" : "#ddd"}}/>
                );
              })}
            </RatingUpdate>
    
            <Goback onClick={() => {history.push(`/`)}}>
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
`;

const RatingUpdate = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0;
width: 100%;
`

const Round = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
background-color: orange;
`

const Goback = styled.button`
width: 100%;
background-color: purple;
border: none;
border-radius: 5px;
padding: 1rem;
color: #fff;
cursor: pointer;
`    

export default Update;