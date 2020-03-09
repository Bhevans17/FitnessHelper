import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import IMG from "../img/img1.svg";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMR: "",
      caloricIntake: "",
      activityLevel: "",
      gender: "",
      weightInPounds: "",
      heightInInches: "",
      ageInYears: ""
    };
  }
  /* Handle Gender Value */
  handleGenderChange = e => {
    this.setState({ gender: e.target.value });
  };

  /* Handle Activity Value */
  handleActivityChange = e => {
    this.setState({ activityLevel: e.target.value });
  };

  /* Handle Weight In Pounds */
  handleWipChange = e => {
    this.setState({ weightInPounds: e.target.value });
  };

  /* Handle Height In Inches */
  handleHiiChange = e => {
    this.setState({ heightInInches: e.target.value });
  };

  /* Handle Age In Years */
  handleAiyChange = e => {
    this.setState({ ageInYears: e.target.value });
  };

  /* Calculate BMR based on gender */
  calculateBmr = e => {
    e.preventDefault();
    if (this.state.gender === "male") {
      let calculation =
        6.3 * this.state.weightInPounds +
        12.9 * this.state.heightInInches -
        6.8 * this.state.ageInYears +
        66;

      this.setState({ BMR: calculation });
      this.calculateCaloricIntake();
    }

    if (this.state.gender === "female") {
      let calculation =
        3.3 * this.state.weightInPounds +
        4.7 * this.state.heightInInches -
        4.7 * this.state.ageInYears +
        655;

      this.setState({ BMR: calculation });
      this.calculateCaloricIntake();
    }
  };

  calculateCaloricIntake = e => {
    if (this.state.activityLevel === "sedentary") {
      let calculation = this.state.BMR * 1.2;
      this.setState({ caloriceIntake: calculation });
    }

    if (this.state.activityLevel === "light") {
      let calculation = this.state.BMR * 1.375;
      this.setState({ caloriceIntake: calculation });
    }

    if (this.state.activityLevel === "moderate") {
      let calculation = this.state.BMR * 1.55;
      this.setState({ caloriceIntake: calculation });
    }

    if (this.state.activityLevel === "active") {
      let calculation = this.state.BMR * 1.725;
      this.setState({ caloriceIntake: calculation });
    }

    if (this.state.activityLevel === "veryactive") {
      let calculation = this.state.BMR * 1.9;
      this.setState({ caloriceIntake: calculation });
    }
  };

  render() {
    return (
      <div className='container text-center'>
        <h1 className='my-5' style={{ color: "#62CD11" }}>
          Fitness Calculator
        </h1>
        <img
          className='img-fluid'
          style={{ height: "50%", width: "50%" }}
          src={IMG}
          alt=''
        />
        <div className='row my-5 w-50 mx-auto'>
          <div className='col-md-6'>
            <h2>BMR: {this.state.BMR}</h2>
          </div>
          <div className='col-md-6'>
            <h2>Calories: {this.state.caloriceIntake}</h2>
          </div>
        </div>

        <Form className='w-50 mx-auto my-5' action='#'>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <Input
                  type='select'
                  name='gender'
                  id='gender'
                  onChange={this.handleGenderChange}
                  required
                >
                  <option value='Inputgender'>Select Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Input>
              </FormGroup>
            </div>
            <div className='col-md-6'>
              <FormGroup>
                <Input
                  type='select'
                  name='activitylevel'
                  id='activitylevel'
                  onChange={this.handleActivityChange}
                  required
                >
                  <option value='Select Activity Level'>
                    Select Activity Level
                  </option>
                  <option value='sedentary'>Sendentary</option>
                  <option value='light'>Light</option>
                  <option value='moderate'>Moderate</option>
                  <option value='active'>Active</option>
                  <option value='veryactive'>Very Active</option>
                </Input>
              </FormGroup>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <input
                  className='form-control'
                  id='weight-in-pounds'
                  type='text'
                  placeholder='Weight in lbs'
                  required
                  value={this.state.weightInPounds}
                  onChange={this.handleWipChange}
                />
              </FormGroup>
            </div>
            <div className='col-md-6'>
              <FormGroup>
                <input
                  className='form-control'
                  id='height-in-inches'
                  type='text'
                  placeholder='Height in inches'
                  required
                  value={this.state.heightInInches}
                  onChange={this.handleHiiChange}
                />
              </FormGroup>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <FormGroup>
                <input
                  className='form-control'
                  id='age-in-years'
                  type='text'
                  placeholder='Age in years'
                  required
                  value={this.state.ageInYears}
                  onChange={this.handleAiyChange}
                />
              </FormGroup>
            </div>
          </div>
          <Button
            style={{ backgroundColor: "#62CD11" }}
            onClick={this.calculateBmr}
            block
          >
            Calculate
          </Button>
        </Form>
      </div>
    );
  }
}

export default Calculator;
