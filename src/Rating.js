import React, {useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Rating () {

const history = useHistory();
const day_count = Array.from({length: 7}, (v,i) => i);
const week_day = {0: "일", 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토"}
const day_text = Object.values(week_day)

const day_rates = day_text.map((d, idx) => {
    return {
      day: d, 
      rate: Math.floor((Math.random() * 5) + 1)
    }
  })

const 

return (
    <Wrap>
      <h1 style={{ textAlign: "center" }}>내 일주일은?</h1>
      {day_rates.map((x, i) => {
        return (
            <Container key = {i}>
                <p>
                    {day_text[i]}
                </p>
                  {Array.from({ length: 5 }, (item, idx) => {
                    return (
                      <Circle style={{backgroundColor: idx < x.rate ? "orange" : "#ddd"}}/>
                    );
                  })}
                      <Triangle onClick = {() => {
                        history.push(`/rating/${day_text[i]}요일`)
                      }}/>
            </Container>  
        )
      })}
            
    </Wrap>
)    
};

const Wrap = styled.div`
max-width: 450px;
width: 30vw;
height: 80vh;
margin: 40px auto;
padding: 20px 0;
border: 1px solid #ddd;
border-radius: 5px;
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0;
width: 100%;
p {margin: 0 0.6em 0 0;} //네스팅 이렇게 쓰는거 아닌가..왜 안돼??????????????
`; 

const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 30px;
margin: 5px;
`

const Triangle = styled.div`
border-color: purple;
width: 0;
height: 0;
border-top: 1rem solid transparent;
border-bottom: 1rem solid transparent;
border-left: 1.6rem solid purple;
color: purple;
cursor: pointer;
`

export default Rating;