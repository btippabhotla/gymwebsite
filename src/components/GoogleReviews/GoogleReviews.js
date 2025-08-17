// import React from "react";
// import GoogleReviews from "react-google-reviews";

// const GoogleReviewsComponent = () => (
//   <div className="google-reviews">
//     <h2>What Our Clients Say</h2>
//     <GoogleReviews
//       placeId="YOUR_GOOGLE_PLACE_ID"
//       apiKey="YOUR_GOOGLE_API_KEY"
//       reviewsLength={5}
//       reviewsSort="newest"
//       language="en"
//     />
//   </div>
// );

// export default GoogleReviewsComponent;

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function Reviews() {
  const featurableId = "hayleabrown94"; // Replace with your actual ID
  return <ReactGoogleReviews layout="carousel" featurableId={featurableId} />;
}
export default Reviews;
