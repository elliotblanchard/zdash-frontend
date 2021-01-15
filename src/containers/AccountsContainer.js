import React from 'react'
import {connect} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'

class AccountsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccounts()
    }

    render() {
        return (
            <div>
                <Accounts accounts={this.props.accounts}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)