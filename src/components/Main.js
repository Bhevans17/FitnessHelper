import React from "react";
import IMG from "../img/img3.svg";

class Main extends React.Component {
  render() {
    return (
      <div className='container d-flex align-items-center section-wrapper'>
        <div className='row my-5'>
          <div className='col-md-6'>
            <h1 style={{ color: "#62CD11" }}>
              Fitness<span style={{ color: "#26BEFF" }}>Helper</span>
            </h1>
            <p>
              <b>Calculate</b>{" "}
              <span className='text-secondary'>
                your bodys BMR (Basal Metabolic Rate AKA how many calories your
                burn without working out)
              </span>
              .
            </p>
            <p>
              <b>Search</b>{" "}
              <span className='text-secondary'>
                the nutrients of your favorite foods.
              </span>
            </p>
            <p>
              <b>See</b>{" "}
              <span className='text-secondary'>
                how many calories you should eat per day.
              </span>
            </p>
          </div>
          <div className='col-md-6'>
            <img
              className='img-fluid'
              style={{ height: "auto", width: "100%" }}
              src={IMG}
              alt=''
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
