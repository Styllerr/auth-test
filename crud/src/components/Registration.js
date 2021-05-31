import React from 'react';

function Registration() {
    return (
        <div>
            <div class="modal-wrapper">
                <div class="modal">
                    <h1 class="modal__header">Sign Up</h1>
                    <form action="#" method="post" class="modal__form form">
                        <lable class="form__lable">User name<input type="text" name="userName" /></lable>
                        <lable class="form__lable">E-mail<input type="email" name="email" /></lable>
                        <lable class="form__lable">Enter password<input type="password" name="password" /></lable>
                        <lable class="form__lable">Re-enter password<input type="password" name="rePassword" /></lable>
                        <div class="form__button-group">
                            <button type="submit" class="form__button">Sign Up</button>
                            <button type="reset" class="form__button">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
