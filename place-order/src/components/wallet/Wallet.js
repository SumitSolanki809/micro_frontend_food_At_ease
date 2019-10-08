import React from 'react'
// import { connect } from 'react-redux'
import './Wallet.css'

class Wallet extends React.Component {
    render() {
        const { walletBalance } = this.props
        return (
            <div className="walletContainer">
                <p>{walletBalance}</p>
                <img
                    alt="wallet icon" 
                    src="https://cdn0.iconfinder.com/data/icons/shopping-and-ecommerce-1/38/Shopping_icons_1_Converted-09-512.png" 
                />
            </div>
        )
    }
}

Wallet.defaultProps = {
    walletBalance: 500,
}

// const mapStateToProps = state => ({
//     walletBalance: state.wallet.get('walletBalance')
// })

// export default connect(mapStateToProps, null)(Wallet)
export default Wallet