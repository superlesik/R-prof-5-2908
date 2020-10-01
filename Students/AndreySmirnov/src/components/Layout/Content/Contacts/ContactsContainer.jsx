import React from "react";
import {connect} from "react-redux";
import Contacts from "./Contacts.jsx";
import {addChat, toggleContactList} from "../../../../store/actions/contactsActions";


class ContactsContainer extends React.Component {
    render() {
        return (
            <Contacts contacts={this.props.contacts} toggleContactList={this.props.toggleContactList} addChat={this.props.addChat}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsReducer.contacts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleContactList: () => {
            dispatch(toggleContactList())
        },
        addChat: (id, contactName) => {
            dispatch(addChat(id, contactName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)