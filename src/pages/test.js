import Image from 'next/image';
import { useState, useRef } from 'react';
import useTriggerOnScroll from '../hooks/useScroll';
import { projects } from '../constants/constants';


const Test = () => {
    const el = useRef();
    const [show, setShow] = useState(false);
    function handleClick(el){
      setShow(!show);
    };
    console.log(show)
    return (
        <div onClick={handleClick} ref={el} style={{height:'500px'}}> 
        {projects.map((each) => (
            <>
            {show ? <Image style={{translateX:'-50px'}}key={each.id} src={each.image} height={200} width={200} alt="pic"/>:null}
            </>
        ))} 
        </div>
  );
};

export default Test;