import React, { useEffect,useState } from 'react';
import { gsap } from 'gsap';

const NumberAnimation = ({ value }) => {
  const [displayedValue, setDisplayedValue] = useState(0); 
  
  useEffect(() => {
    
    const tl = gsap.timeline();

    tl.to({ value: displayedValue }, {
      duration: 3, 
      value: value,
      onUpdate: function() {
        setDisplayedValue(Math.floor(this.targets()[0].value));
      },
      ease: "power1.inOut"});

    return () => tl.kill(); // Cleanup on unmount
  }, [value]);

  return (
    <div style={{ fontSize: '2rem',color:"white" }}>
      {displayedValue} {/* Display the animated number */}
    </div>
  );
};

export {NumberAnimation}