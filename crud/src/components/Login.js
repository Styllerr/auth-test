import React from 'react';

function Login() {
    return (
        <div class="modal-wrapper">
            <div class="modal">
                <h1 class="modal__header">Log In</h1>
                <form method="post" class="modal__form form">
                    <lable class="form__lable">User name<input type="text" name="userName" /></lable>
                    <lable class="form__lable">Enter password<input type="password" name="password" /></lable>
                    <div class="form__button-group">
                        <p class="form__reg-link"><a href="./registration">Registration</a></p>
                        <button type="submit" class="form__button">Log In</button>
                        <button type="reset" class="form__button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
