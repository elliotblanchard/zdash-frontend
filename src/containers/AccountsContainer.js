import React from 'react'
import {connect} from 'react-redux'

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'

class AccountsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccounts()
    }

    render() {
        return (
            <div>
                {/* Why does prop have to be doubled? */}
                <Accounts accounts={this.props.accounts.accounts}/>
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