import react,{ useState, useEffect } from "react";


const QuantumImage = () => {
const [position, setPosition] = useState({x: 0, y: 0})
useEffect(( ) => { 
   const interval =  setInterval( () => {
        setPosition({x: (Math.random() * screen.width), y: (Math.random() * screen.height)})

    }, 2000
    )

}, [] ); // if empty, will only call on mount, (just once)
// useEffect can return a function, that will be called on unmount , or before the next dependency /re-mount
// render is when a varoable or prop change -> local state, or new values from props
// mount is putting element in dom

return (
 <img src="/quantumImage.jpg" width="200" style={{position: "absolute", left: position.x, top: position.y}} />
);

}

export default QuantumImage;