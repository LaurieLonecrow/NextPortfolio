import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../../hooks/useScroll';
import { SlideUp, NoSlide } from './SlideUpStyles'


const ScrollSlideUp = ({children}) => {
  const el = useRef();
  const [show, setShow] = useState(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  const showSlideUp = () => {
    return show ? <SlideUp>{children}</SlideUp> : <NoSlide>{children}</NoSlide>
  }
  return (
    <div ref={el}>
      {showSlideUp()}
    </div>
  );
};
export default ScrollSlideUp;