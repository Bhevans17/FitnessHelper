import React from "react";
import IMG from "../img/img2.svg";

class SearchFood extends React.Component {
  render() {
    return (
      <div className='container text-center'>
        <h1 style={{ color: "#62CD11" }} className='my-5'>
          Search Foods
        </h1>
        <img
          className='img-fluid'
          style={{ height: "50%", width: "50%" }}
          src={IMG}
          alt=''
        />
        <form action=''>
          <input type='text' placeholder='Search Foods' />
          <button>Submit</button>
        </form>
        <div className='row my-5'>
          <div className='col-md-4'>
            <h2>FoodName</h2>
            <p>Food Description</p>
          </div>
          <div className='col-md-4'>
            <h2>FoodName</h2>
            <p>Food Description</p>
          </div>
          <div className='col-md-4'>
            <h2>FoodName</h2>
            <p>Food Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFood;
