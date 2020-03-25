import React from "react";
import IMG from "../img/img2.svg";
const axios = require("axios");

class SearchFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }

  async componentDidMount() {
    await axios({
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "0a321bd7ddmsh8616d6f6cbaf6d1p19a915jsne1b6fc6bda80"
      },
      params: {
        ingr: "chicken"
      }
    })
      .then(response => {
        console.log(response);
        this.setState({ results: response.data.hints });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div id='search-food' className='search-food-wrapper'>
        <div className='container text-center section-wrapper'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <h1 style={{ color: "#62CD11" }} className='my-5'>
                Search Foods
              </h1>
              <form action='' className='my-5 px-5'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search Foods'
                  name='search-food'
                  id='search-food'
                  onChange={this.handleQuery}
                  value={this.state.query}
                  required
                />
                <button
                  className='btn w-100'
                  style={{ backgroundColor: "#62CD11", color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='col-md-6'>
              <img
                className='img-fluid'
                style={{ width: "100%" }}
                src={IMG}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='container my-5 text-center'>
          <div className='row'>
            {this.state.results.map((x, y) => {
              return (
                <div className='col-md-2'>
                  <div className='card m-1'>
                    <div className='card-body'>
                      <h5 className='card-title'>{x.food.label}</h5>
                      <p className='card-text'>
                        Calories: {Math.ceil(x.food.nutrients.ENERC_KCAL)}
                      </p>
                      <p className='card-text'>
                        Protein: {Math.ceil(x.food.nutrients.PROCNT)}
                      </p>
                      <p className='card-text'>
                        Fats:{Math.ceil(x.food.nutrients.FAT)}
                      </p>
                      <p className='card-text'>
                        Carbs: {Math.ceil(x.food.nutrients.CHOCDF)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFood;
