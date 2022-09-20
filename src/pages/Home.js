import React from 'react';
import pic from './sams.png';
const Home = () => {
return (
	<div>
	<h1 style={{ padding: "10px 20px", textAlign: "center", color: "green"}}>Sam's Club</h1>
	<center><img src={pic} alt="sams" style={{display: "block",marginleft: "auto",marginright:"auto",width:"30%"}}></img></center>
	</div>
);
};

export default Home;
