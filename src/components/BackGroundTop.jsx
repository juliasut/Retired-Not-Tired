import { ReactComponent as BackgroundTop } from '../assets/rectangleTop.svg';

export default function BackGroundTop() {
  return (
    <BackgroundTop
      color="#988fad"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 'auto',
        maxHeight: '287px',
        zIndex: -10,
      }}
    />
  );
}
