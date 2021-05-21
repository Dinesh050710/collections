import React from "react";
import order from './map.png'
import delivery from './dboy.jpg'

const Order = () => {
  return <div>
    <header className="block row center">
    <h4> A-Z COLLECTIONS </h4>
    </header>
    <div>

<div className="block2">
<center>
  Order Placed Successfully
  </center>
</div>
</div>
<div className="block3">
  <center>
    2:30 PM | Order ID:865904532
  </center>
</div>

<div>
  <center>
    <img className="map" src={order} alt="user" height="300" width="300"></img>
  </center>
</div>

<div>
<center>
<header className="block1">
 Estimated Time in 25 mins
</header>
</center> 
</div>

<div>
  <center>
    <img className="delivery" src={delivery} alt="user" height="70" width="70"></img>
    <b>Zuber</b> is on the way to deliver your order    
  </center>
</div>

<div className="col-1">
<center><button onclick={''} className="call">
<b>call</b>
  </button>
</center>
</div>
</div>;
};

export default Order;