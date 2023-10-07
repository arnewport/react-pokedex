import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = () => {
    const [rate, setRate] = useState(0);
    return (
        <Container className="pb-2">
            {[1, 2, 3, 4, 5].map((givenRating) => {
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating <= rate ? "gold" : "rgb(192, 192, 192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};
 
export default Rate;
