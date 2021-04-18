import React, { useState } from 'react';
import { HEREMap } from 'here-maps-react';
import ReactMapGl, {Marker} from 'react-map-gl';
import { findHospital } from '../auth/helper';
import hos from '../assets/hos1.png';
import loc from '../assets/loc.png'
const request=require('request');

const Map2=()=> {
    const [currentLat, set1]=useState(0);
      const [currentLong, set2]=useState(0);
      const [zoom,set3]=useState(10);
      const [markerCo,set4]=useState([]);
      const [cl1,setCL1]=useState(0);
      const [cl2,setCL2]=useState(0);
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
        setCL1(position.coords.latitude);
        setCL2(position.coords.longitude);
        console.log(currentLat+" "+currentLong);
        getHospitals();
      }

      const getHospitals=()=>{
         request(`https://places.ls.hereapi.com/places/v1/discover/explore?at=${currentLat}%2C${currentLong}&cat=hospital-health-care-facility&apiKey=ltV5uwSWWnCsM1AbSv92aSfNKtNZ6a-GCtIiJ-6-d_0`,function(error,response,body){
            var data=JSON.parse(body);
            if(data.length!=0&&data!=undefined){
            var name=data.results.items;
            //console.log(name);
            set4(name);
            console.log(markerCo);
            }
          });
      }
    return (
        <div>
        {getLocation()}
      <ReactMapGl mapStyle="mapbox://styles/viditrv-123/cknmhmteg3n2s17mgr5ztsfn7" latitude={currentLat} longitude={currentLong} width="100vw" height="90vh" zoom={zoom} mapboxApiAccessToken={"pk.eyJ1IjoidmlkaXRydi0xMjMiLCJhIjoiY2ttcXA5eXp4MDA2ajJ0czEzcXRkZW92NSJ9.i_0a8Q9sfIRJ02VZmaLitA"} onViewportChange={viewport=>{set1(viewport.latitude);set2(viewport.longitude);set3(viewport.zoom)}}>
      <Marker latitude={cl1} longitude={cl2}>
      <button>
                  <a href="/"><img src={loc} style={{"width":"50px","height":"50px"}}></img></a>
              </button>
      </Marker>
      {markerCo.map((value,key)=>{
          return (<div id={key}><Marker latitude={value.position[0]} longitude={value.position[1]}>
              <button>
                  <a href="/"><img src={hos} style={{"width":"50px","height":"50px"}}></img></a>
              </button>
          </Marker></div>)
      })}
      </ReactMapGl>
      </div>
    );
  }
export default Map2;