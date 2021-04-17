import React, { useState } from 'react';
    import GoogleMap from 'google-map-react';
    const axios = require('axios');
    

    const Map1=()=>{
      const [currentLat, set1]=useState(0);
      const [currentLong, set2]=useState(0);
      const getLocation=()=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
      function showPosition(position) {
        set1(position.coords.latitude);
        set2(position.coords.longitude);
        console.log(currentLat+" "+currentLong);
      }
  
      const mapStyles = {
        width: '50%',
        height: '50%'
      }
  
      const markerStyle = {
        height: '50px',
        width: '50px',
        marginTop: '-50px'
      }
  
      const imgStyle = {
        height: '100%'
      }
  
  
      const Marker = ({ title }) => (
        <div style={markerStyle}>
          <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
          <h3>{title}</h3>
        </div>
      );

      


        return (
          <div >
          {getLocation ()}
          {/* {getHospitals()} */}
            <GoogleMap
              style={mapStyles}
              bootstrapURLKeys={{ key: 'AIzaSyBXWaxWl61TOs_dh_Z8DIQ8Q6kDSJtpVAM' }}
              center={{ lat: currentLat, lng: currentLong  }}
              zoom={14}
            >
              <Marker
              title={'Current Location'}
              lat={currentLat}
              lng={currentLong}
            >
              </Marker>
            </GoogleMap>
          </div>
        )
    }
      
    export default Map1;