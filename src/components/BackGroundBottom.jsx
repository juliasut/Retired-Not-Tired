import { ReactComponent as BackgroundBottom } from '../assets/rectangleBottom.svg';

export default function BackGroundBottom() {
  return (
    <BackgroundBottom
      color="#988fad"
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 'auto',
        maxHeight: '146px',
        zIndex: -10,
      }}
    />
  );
}
