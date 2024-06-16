import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

export default function StarRating({ noOfStars = 5 }) {
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

function handleClick(getCurrentIndex) {
  setRating(getCurrentIndex)
}

function handleMouseEnter(getCurrentIndex) {
  setHover(getCurrentIndex)
}

function handleMouseLeave() {
  setHover(rating)
}

  return (
    <div className="star-rating">
      { [...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index} 
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}


// Spreading the Array:

// javascript
// Copy code
// [...Array(noOfStars)]
// The spread operator [...] is used to create a new array instance with the same elements as the original array. This step essentially transforms the array from an array-like object with undefined values into a real array where you can iterate over the elements.
// If noOfStars is 5, this step converts Array(5) (an array with 5 undefined elements) into [undefined, undefined, undefined, undefined, undefined].
// Mapping Over the Array:

// javascript
// Copy code
// .map((_, index) => {
// The map function is called on the array. map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
// The callback function (_, index) => { is passed to map. This function takes two parameters:
// _ (underscore): The first parameter represents the current element being processed in the array. An underscore is often used as a variable name when the value is not needed. In this case, the elements are all undefined, so they are not used.
// index: The second parameter represents the index of the current element being processed in the array. This will be a number from 0 to noOfStars - 1.