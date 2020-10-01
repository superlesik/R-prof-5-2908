import './style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class Profile extends Component { 

    render() {
        const { name, gender, age, interests } = this.props.profileDate;
        return (
            <div className='profile-wrapper'>
                <div className='profile-content'>
                    <div className='profile-content-item'>Имя: { name }</div>
                    <div className='profile-content-item'>Пол: { gender }</div>
                    <div className='profile-content-item'>Возраст: { age }</div>
                    <div className='profile-content-item'>Увлечения: { interests.join(', ') }</div>
                </div>
                <div className='profile-link'>
                    <Link className='profile-link-item' to="/">Назад</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profileDate: profileReducer.profileDate
});
 
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);