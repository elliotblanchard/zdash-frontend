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
                <Accounts accounts={this.props.accounts} loading={this.props.loading}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.loading,         
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)