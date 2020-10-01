        import './style.css';
        import React from 'react';

        export default props => {
            let { sender, text } = props;
            const classes = `d-inline-flex flex-column msg ${ sender === 'me' ? 'right' : '' }`;

            return (
                    <div className={classes}>
                        { sender && <strong>{ sender }</strong> }
                        { !sender && <strong>LUKE S.</strong> }
                        <p className="msgText">{ sender || (!sender && text) ? text : 'Cyber answer...' }</p>
                    </div>
            )
        }
    