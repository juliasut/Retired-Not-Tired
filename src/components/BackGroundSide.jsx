import { ReactComponent as BackgroundSide } from '../assets/rectangleSide.svg';

export default function BackGroundSide() {
  return (
    <BackgroundSide
      className="svg-path"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '55px',
        transform: 'scale(1.05)',
      }}
    />
  );
}
