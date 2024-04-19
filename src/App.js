import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
let styles = {
  margin: 'auto',
  width: '500px'
};

function App() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img
            src="https://images.unsplash.com/photo-1542189412744-bfabf27522ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1662052597579-20874a2de167?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Singapore" />
          <p className="legend">Singapore</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1508504509543-5ca56440e013?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1576557686977-eda3a3bb1ea2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='India' />
          <p className="legend">India</p>
        </div>
      </Carousel>
    </div>
  );
}
export default App;
