import { useState } from "react";
import { sendRating } from "../services/sendRating";
import { getRating } from "../services/getRating";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = (props) => {
    const { id, rating } = props;
    const [rate, setRate] = useState(0);
    const [average, setAverage] = useState(rating);

    const updateRating = async (givenRating) => {
          setRate(givenRating);
          await sendRating(id, givenRating);
          const updatedRating = await getRating(id);
          setAverage(updatedRating);
      };

    return (
        <> 
            <Container className="pb-2">
                {[1, 2, 3, 4, 5].map((givenRating) => {
                    return (
                        <label key={givenRating}>
                            <Radio
                                type="radio"
                                value={givenRating}
                                onClick={() => {
                                    updateRating(givenRating);                  
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
            <Container>
            <span>{average} &nbsp;</span>
                <FaStar 
                    color={"gold"}
                />
            </Container>
        </>
    );
};
 
export default Rate;
