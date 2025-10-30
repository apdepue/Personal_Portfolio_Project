import React, { useState, useEffect } from 'react'; 
function EffectDemo() { 
const [count, setCount] = useState(0); 
useEffect(() => { 
document.title = `Count: ${count}`; 
return () => { document.title = 'React App'; }; // Cleanup 
}, [count]); // Dependency array: Run on count change 
return ( 
<div> 
<h1>{count}</h1> 
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrease</button>
</div> 
); 
} 
export default EffectDemo; 