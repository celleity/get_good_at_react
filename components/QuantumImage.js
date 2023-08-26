import react,{ useState, useEffect } from "react";


const QuantumImage = () => {
const [position, setPosition] = useState({x: 0, y: 0})
useEffect(( ) => { 
    setInterval( () => {
        setPosition({x: (Math.random() * screen.width), y: (Math.random() * screen.height)})

    }, 2000
    )

}, []); // if empty, will only call on mount, 

return (
 <img src="/quantumImage.jpg" width="200" style={{position: "absolute", left: position.x, top: position.y}} />
);

}

export default QuantumImage;