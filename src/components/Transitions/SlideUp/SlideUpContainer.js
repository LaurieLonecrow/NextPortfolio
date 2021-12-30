import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../../hooks/useScroll';
import { SlideUp, NoSlide } from './SlideUpStyles'


const ScrollSlideUp = ({children}) => {
  const el = useRef();
  const [show, setShow] = useState(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });

  return (
    <div ref={el}>
      {show ? <SlideUp>{children}</SlideUp> : <NoSlide>{children}</NoSlide>}
    </div>
  );
};

export default ScrollSlideUp;