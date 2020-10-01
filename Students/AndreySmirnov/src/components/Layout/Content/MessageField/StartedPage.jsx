import React from "react";

const StartedPage = (props) => {
    return(
        <div className='content__startedPage'>
            <div>
                <p>Привет, <strong>{props.currentUser}!</strong></p>
                <p>Для начала общения выбери чат из колонки слева.</p>
            </div>


        </div>

    )
}

export default StartedPage