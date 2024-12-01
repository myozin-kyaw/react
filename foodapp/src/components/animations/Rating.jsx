// import React, { useEffect, useState } from "react";

// const Rating = ({ rating, maxRating = 5, animate = false }) => {
//   const [animatedRating, setAnimatedRating] = useState(animate ? 0 : rating);

//   useEffect(() => {
//     if (!animate) {
//       // If animation is disabled, set the rating immediately
//       setAnimatedRating(rating);
//       return;
//     }

//     let currentRating = 0;

//     // Simulate gradual star filling when animation is enabled
//     const interval = setInterval(() => {
//       if (currentRating < rating) {
//         currentRating += 0.1; // Increment animation in small steps
//         setAnimatedRating(Math.min(currentRating, rating));
//       } else {
//         clearInterval(interval); // Stop animation when done
//       }
//     }, 50); // Adjust speed of animation (50ms per step)

//     return () => clearInterval(interval);
//   }, [rating, animate]);

//   // Calculate stars
//   const fullStars = Math.floor(animatedRating);
//   const fractionalPart = animatedRating % 1;
//   const emptyStars = maxRating - fullStars - (fractionalPart > 0 ? 1 : 0);

//   return (
//     <div className="flex items-center">
//       {/* Full stars */}
//       {Array.from({ length: fullStars }).map((_, index) => (
//         <svg
//           key={`full-${index}`}
//           className="w-6 h-6 text-yellow-400"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//         </svg>
//       ))}

//       {/* Partial star */}
//       {fractionalPart > 0 && (
//         <div className="relative w-6 h-6">
//           {/* Full background star (gray) */}
//           <svg
//             className="absolute top-0 left-0 text-gray-300"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//           </svg>
//           {/* Foreground star (yellow) clipped to fractional width */}
//           <svg
//             className="absolute top-0 left-0 text-yellow-400"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             style={{ clipPath: `inset(0 ${100 - fractionalPart * 100}% 0 0)` }}
//           >
//             <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//           </svg>
//         </div>
//       )}

//       {/* Empty stars */}
//       {Array.from({ length: emptyStars }).map((_, index) => (
//         <svg
//           key={`empty-${index}`}
//           className="w-6 h-6 text-gray-300"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//         </svg>
//       ))}

//       {/* Display rating */}
//       <span className="ml-2 text-gray-700 text-lg font-medium">
//         {animatedRating.toFixed(1)}/{maxRating}
//       </span>
//     </div>
//   );
// };

// export default Rating;

import React, { useEffect, useState } from "react";

const Rating = ({ rating, maxRating = 5, animate = false }) => {
  const [animatedRating, setAnimatedRating] = useState(animate ? 0 : rating);

  useEffect(() => {
    if (!animate) {
      setAnimatedRating(rating);
      return;
    }

    let currentRating = 0;
    const interval = setInterval(() => {
      if (currentRating < rating) {
        currentRating += 0.1;
        setAnimatedRating(Math.min(currentRating, rating));
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [rating, animate]);

  const fullStars = Math.floor(animatedRating);
  const fractionalPart = animatedRating % 1;
  const emptyStars = maxRating - fullStars - (fractionalPart > 0 ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-5 h-5 text-yellow-400 me-1 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}

      {/* Partial Star */}
      {fractionalPart > 0 && (
        <div className="relative w-5 h-5 flex-shrink-0">
          {/* Gray Background Star */}
          <svg
            className="absolute top-0 left-0 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* Clipped Yellow Star */}
          <svg
            className="absolute top-0 left-0 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            style={{ clipPath: `inset(0 ${100 - fractionalPart * 100}% 0 0)` }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      )}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-5 h-5 text-gray-300 me-1 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}

      {/* Display rating */}
      <span className="ml-2 text-gray-700 ms-2 text-sm font-bold">
        {/* {animatedRating.toFixed(1)}/{maxRating} */}
        {animatedRating.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
