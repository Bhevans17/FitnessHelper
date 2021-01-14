import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      activityLevel: null,
      gender: 0,
      age: null,
      weight: null,
      bodyFat: null,
    };

    this.calculateWeight = this.calculateWeight.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
  }

  handleHeight(e) {
    this.setState({ height: parseInt(e.target.value) }, () => {
      console.log(typeof this.state.height);
    });
  }

  handleAge(e) {
    this.setState({ age: e.target.value }, () => console.log(this.state.age));
  }

  handleWeight(e) {
    this.setState({ weight: e.target.value }, () =>
      console.log(this.state.weight)
    );
  }

  handleGender(e) {
    this.setState({ gender: e.target.value }, () => {
      console.log(this.state.gender);
    });
  }

  calculateWeight() {
    this.setState((state) => {
      let val = Object.values(state);

      val.map((x) => {
        if (x === null) {
          console.log("please fill out all fields");
        }
      });
    });
  }

  render() {
    return (
      <Form>
        <div className='container-fluid'>
          <div className='row py-5'>
            <div className='col-12 col-md-4 py-2 border'>
              <FormGroup>
                <Label for='height'>Height</Label>
                <Input
                  type='select'
                  name='height'
                  id='height'
                  value={this.state.height}
                  onChange={this.handleHeight}
                >
                  <option value='139.7'>4ft 7in</option>
                  <option value='142.24'>4ft 8in</option>
                  <option value='144.78'>4ft 9in</option>
                  <option value='147.32'>4ft 10in</option>
                  <option value='149.86'>4ft 11in</option>
                  <option value='152.4'>5ft 0in</option>
                  <option value='154.94'>5ft 1in</option>
                  <option value='157.48'>5ft 2in</option>
                  <option value='160.02'>5ft 3in</option>
                  <option value='162.56'>5ft 4in</option>
                  <option value='165.1'>5ft 5in</option>
                  <option value='167.64'>5ft 6in</option>
                  <option value='170.18'>5ft 7in</option>
                  <option value='172.72'>5ft 8in</option>
                  <option value='175.26'>5ft 9in</option>
                  <option value='177.8'>5ft 10in</option>
                  <option value='180.34'>5ft 11in</option>
                  <option value='182.88'>6ft 0in</option>
                  <option value='185.42'>6ft 1in</option>
                  <option value='187.96'>6ft 2in</option>
                  <option value='190.5'>6ft 3in</option>
                  <option value='193.04'>6ft 4in</option>
                  <option value='195.58'>6ft 5in</option>
                  <option value='198.12'>6ft 6in</option>
                  <option value='200.66'>6ft 7in</option>
                  <option value='203.2'>6ft 8in</option>
                  <option value='205.74'>6ft 9in</option>
                  <option value='208.28'>6ft 10in</option>
                  <option value='210.82'>6ft 11in</option>
                  <option value='213.36'>7ft 0in</option>
                </Input>
              </FormGroup>
            </div>{" "}
            {/*
            <div className='col-12 col-md-4 py-2 border'>
              <FormGroup>
                <Label for='activity-level'>Activity Level</Label>
                <Input type='select' name='activity-level' id='activity-level'>
                  <option>Sedentary</option>
                  <option>Light</option>
                  <option>Moderate</option>
                  <option>Heavy</option>
                  <option>Athlete</option>
                </Input>
              </FormGroup>
            </div> */}
            <div className='col-12 col-md-4 py-2 border'>
              <FormGroup>
                <Label for='age'>Age</Label>
                <Input
                  value={this.state.age}
                  onChange={this.handleAge}
                  type='text'
                  name='age'
                  id='age'
                  maxLength='2'
                />
              </FormGroup>
            </div>
            <div className='col-12 col-md-4 py-2 border'>
              <FormGroup>
                <Label for='weight'>Weight</Label>
                <Input
                  value={this.state.weight}
                  onChange={this.handleWeight}
                  type='weight'
                  name='weight'
                  id='weight'
                  placeholder='lbs'
                  maxLength='3'
                />
              </FormGroup>
            </div>
            <div className='col-12 col-md-4 d-flex justify-content-center py-2 border'>
              <FormGroup tag='fieldset'>
                <legend>Gender</legend>
                <FormGroup check>
                  <Label check>
                    <Input type='radio' name='male' /> Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type='radio' name='female' /> Female
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className='col-12 col-md-4 py-2 border'>
              <FormGroup>
                <Label className='text-secondary'>
                  (Based on Revised Harris-Benedict Equation)
                </Label>
                <Button
                  style={{ backgroundColor: "#62CD11" }}
                  className='btn btn-block'
                  onClick={this.calculateWeight}
                >
                  Calculate
                </Button>
              </FormGroup>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default Calculator;
