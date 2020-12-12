import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import Account from '../components/Account'

class AccountsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccounts()
    }

    render() {
        return (
            <div>
                {/* Why does prop have to be doubled? */}
                <Accounts accounts={this.props.accounts.accounts}/>
                <Account />
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