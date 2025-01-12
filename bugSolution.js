// bug.js
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUrl = 'https://example.com/image.jpg'; // Potentially unreliable URL

  return (
    <Image
      source={{ uri: imageUrl }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyComponent;


// bugSolution.js
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUrl = 'https://example.com/image.jpg'; // Potentially unreliable URL
  const placeholderImage = require('./placeholder.jpg'); // Local placeholder image

  return (
    <Image
      source={{ uri: imageUrl }}
      style={{ width: 200, height: 200 }}
      onError={(error) => console.error('Image loading error:', error)}
      defaultSource={placeholderImage}
    />
  );
};

export default MyComponent;