import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#62CD11", color: "white" }}
        className='container-fluid text-center m-0 p-0'
      >
        <div className='row py-3 d-flex align-items-center'>
          <div className='col-md-12'>
            <p className='m-0'>
              Copyright FITNESSHELPER &copy;2020 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
