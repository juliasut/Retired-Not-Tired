import { ReactComponent as BackgroundLanding } from '../assets/rectangleBottom.svg';

export default function BackGroundLanding() {
  return (
    <BackgroundLanding
      color="#fafafa"
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        maxHeight: '30%',
        minHeight: '27.5%',
       
      }}
    />
  );
}
