import React, { useState, useEffect } from 'react';
// import { GeneralInfoForm } from './GeneralInfoForm';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Import the jwt-decode library
import { GeneralInfoForm } from './Forms';

// import jwt_decode from 'jwt-decode'; // Import the jwt-decode library

const ParentComponent = () => {
  const [marketId, setMarketId] = useState('');
  const [logo, setLogo] = useState(null);

  // Fetch the connected market's ID from the JWT token using useEffect
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (token) {
      // Decode the token to get the market ID
      const decodedToken = jwt_decode(token);
      
      // Assuming the decoded token has an 'id' property representing the market ID
      const connectedMarketId = decodedToken.id;
      console.log(connectedMarketId);
      setMarketId(connectedMarketId);
    }
  }, []);

  // Render the GeneralInfoForm once the marketId is fetched
  return (
    <div>
      <h1>Update Market Information</h1>
      {marketId && <GeneralInfoForm marketId={marketId} />} {/* Pass marketId as a prop */}
    </div>
  );
};

export default ParentComponent;

