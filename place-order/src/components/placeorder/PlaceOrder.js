import React from 'react'
import './PlaceOrder.css'
// import { connect } from 'react-redux'
// import { updateWalletBalance } from '../../actions/walletBalanceActions'
// import { setProceedToPlaceOrder, setPlaceTheOrder } from '../../actions/setSelectedItemsActions'

class PlaceOrder extends React.Component {

    componentDidUpdate() {
        const { proceedToPlaceOrder } = this.props
        if (proceedToPlaceOrder === true) {
            this.orderModal.style.display = 'block'
        }
    }

    closeModal = () => {
        // const { dispatchSetProceedToPlaceOrder, dispatchSetPlaceTheOrder } = this.props
        // dispatchSetProceedToPlaceOrder(false)
        // this.orderModal.style.display = 'none'
        // dispatchSetPlaceTheOrder(false)
        // window.location.reload()
        console.log('hello')
    }

    updateWallet = () => {
        // const { dispatchUpdateWalletBalance, dispatchSetPlaceTheOrder, walletBalance, orderTotal } = this.props
        // dispatchSetPlaceTheOrder(true)
        // dispatchUpdateWalletBalance(walletBalance - orderTotal)
        console.log('hello')
    }

    render() {
        const { finalOrder, orderId, placeTheOrder } = this.props
        return (
            <div className="placeOrderModalContainer" ref={el => { this.orderModal = el }}>
                {
                    placeTheOrder === true ? (
                        <div className="modalContent">
                            <span className="close" onClick={this.closeModal}>&times;</span>
                            <h1>Order Successfully placed!!</h1>
                            <p>Please note down the order-id <strong>{orderId}</strong> for collecting your meal at the counter</p>
                        </div>
                    ) : 
                    (
                        <div className="modalContent">
                            <span className="close" onClick={this.closeModal}>&times;</span>
                            <h1>Order Summary:</h1>
                            <p>{finalOrder}</p>
                            <div className="buttonsContainer">
                                <button onClick={this.updateWallet}>Proceed and make payment</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

// export const mapStateToProps = state => ({
//     proceedToPlaceOrder: state.order.get('proceedToPlaceOrder'),
//     finalOrder: state.order.get('finalOrder'),
//     orderTotal: state.order.get('orderTotal'),
//     walletBalance: state.wallet.get('walletBalance'),
//     orderId: state.order.get('orderId'),
//     placeTheOrder: state.order.get('placeTheOrder')
// })

// export const mapDispatchToProps = dispatch => ({
//     dispatchUpdateWalletBalance: data => dispatch(updateWalletBalance(data)),
//     dispatchSetProceedToPlaceOrder: data => dispatch(setProceedToPlaceOrder(data)),
//     dispatchSetPlaceTheOrder: data => dispatch(setPlaceTheOrder(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
export default PlaceOrder