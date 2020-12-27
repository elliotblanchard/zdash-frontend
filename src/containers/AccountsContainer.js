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

    handleLoading = () => {
        if(this.props.accounts.loading) {
          return (
            <div>
                <Navbar variant="dark" expand="lg">
                    <Spinner animation="border" variant="light" />
                </Navbar>
            </div>
            )
        } else {
            return (
                <div>
                    {/* Why does prop have to be doubled? */}
                    <Accounts accounts={this.props.accounts.accounts}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
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