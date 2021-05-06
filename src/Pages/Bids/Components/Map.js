import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MAP_MARKER } from '../../../config';

const Map = ({ x, y }) => {
  const mapRef = useRef();

  useEffect(() => {
    mapscript();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mapscript = () => {
    const { kakao } = window;

    const map = new kakao.maps.Map(mapRef.current, {
      center: new kakao.maps.LatLng(y, x),
      level: 1,
    });

    const markerPosition = new kakao.maps.LatLng(y, x);

    const markerImage = new kakao.maps.MarkerImage(
      `${MAP_MARKER}`,
      new kakao.maps.Size(65, 65),
      { offset: new kakao.maps.Point(27, 69) }
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
      yAnchor: 1,
    });
    marker.setMap(map);
  };

  return <MapWrap ref={mapRef}></MapWrap>;
};

export default React.memo(Map);

const MapWrap = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 50vh;
`;
