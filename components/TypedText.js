import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedText() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Web Developer.", "Android Developer.", "Photographer.", "UI/UX Designer."],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
      {/* Element to display typing strings */}
      
      <h2 className="text-white font-bold text-3xl"><span ref={el} className="typed-text text-gray-400 font-bold text-3xl"></span></h2>
    </div>
  );
}