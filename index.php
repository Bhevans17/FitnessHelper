<?php include "./includes/header.php"; ?>
<!-- Calculator Wrapper -->
<div data-aos="fade-up" data-aos-anchor-placement="top-center" class="calculator-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Macro Calculator</h1>
                <img src="./img/undraw_fitness_tracker_3033.svg" alt="">
                <div class="macro-calculator-results">
                    <h3>Calories: <span>1234</span></h3>
                    <h3>Protein: <span>123</span></h3>
                    <h3>Fats: <span>123</span></h3>
                    <h3>Carbs: <span>1234</span></h3>
                    <p>Save these results <a href="#">Create an Account</a></p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form class="macro-calculator" action="#">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="age">Age:</label>
                                <input class="form-control" id="age" name="age" type="text" placeholder="Age">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="weight">Weight:</label>
                                <input class="form-control" id="weight" name="weight" type="text" placeholder="Lbs">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="gender">Gender:</label>
                                <select class="form-control" id="gender" name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="height">Height:</label>
                                <select class="form-control" id="height" name="height">
                                    <option value="#">4ft</option>
                                    <option value="#">4ft 1in</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="activity">Activity:</label>
                                <select class="form-control" id="activity" name="activity">
                                    <option value="sendentary">Sedentary</option>
                                    <option value="light">Light</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="heavy">Heavy</option>
                                    <option value="athlete">Athlete</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="bodyfat">Bodyfat %:</label>
                                <input class="form-control" id="bodyfat" name="bodyfat" type="text" placeholder="Optional">
                            </div>
                        </div>
                    </div>

                    <button class="form-control" type="submit">Calculate</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Here To Help Section -->
<div class="container">
    <div class="row align-items-center">
        <div class="col-12">
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" class="here-to-help-wrapper">
                <h2> Here To Help</h2>
                <img src="./img/undraw_eating_together_tjhx.svg" alt="">
                <button>Sign Up</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ad eos nostrum fugit unde? Provident
                    tempore
                    impedit, optio dolorum soluta fugit dolorem aspernatur nobis eveniet quos rerum consequatur id
                    similique!
                </p>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12">
            <!-- Find Workouts Section -->
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" class="find-workouts-wrapper">
                <h2>Find Your Next Workout</h2>
                <img src="./img/undraw_working_out_6psf.svg" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ad eos nostrum fugit unde? Provident
                    tempore
                    impedit, optio dolorum soluta fugit dolorem aspernatur nobis eveniet quos rerum consequatur id
                    similique!
                </p>
            </div>
        </div>
    </div>
</div>


<?php include "./includes/footer.php"; ?>