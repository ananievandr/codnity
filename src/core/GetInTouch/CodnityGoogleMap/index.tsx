import React, { memo, ReactElement } from 'react';
import GoogleMap from 'google-map-react';

import Point from './Point';

function CodnityGoogleMap(): ReactElement {
  const props = {
    center: [56.951273, 24.11609],
    zoom: 13,
    greatPlaceCoords: { lat: 56.951597, lng: 24.122505 },
  };

  return (
    <GoogleMap
      // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
      center={props.center}
      zoom={props.zoom}
    >
      <Point lat={props.greatPlaceCoords.lat} lng={props.greatPlaceCoords.lng} />
    </GoogleMap>
  );
}

export default memo(CodnityGoogleMap);
