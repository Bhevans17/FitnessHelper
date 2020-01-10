<?php include "./includes/header.php"; ?>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>Login</h1>
            <form action="">
                <div class="form-group">
                    <label for="">Enter Email:</label>
                    <input class="form-control" type="text">
                </div>
                <div class="form-group">
                    <label for="">Password:</label>
                    <input class="form-control" type="text">
                    <input type="checkbox" name="Remember Me">
                </div>
                <input class="form-control btn btn-primary" name="Login" type="submit">
                <a href="#">Forgot your password?</a>
            </form>
        </div>
    </div>
</div>
<?php include "./includes/footer.php"; ?>