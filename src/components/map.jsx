import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 5.94995,
      lng: 116.09275,
    },
    zoom: 18,
  };
  return (
    <StyledMapContainer>
      <StyledMapWrapper>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </StyledMapWrapper>
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled.div`
  width: 100%;
  .cvEkkq {
    width: 20%;
  }
`;
const StyledMapWrapper = styled.div`
  width: 100%;
  height: 50vh;
`;
