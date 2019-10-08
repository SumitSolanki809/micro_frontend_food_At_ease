import React from 'react'
import SelectYourMeal from '../components/selectyourmeal/SelectYourMeal'
import Header from '../components/header/Header'
import PlaceOrder from '../components/placeorder/PlaceOrder'
// import { fetchFoodItems } from '../actions/foodItemsActions'
// import { fetchWalletBalance } from '../actions/walletBalanceActions'
// import { connect } from 'react-redux'

class OrderPage extends React.Component {

    // componentDidMount() {
    //     const { dispatchFetchFoodItems, dispatchFetchWalletBalance } = this.props
    //     dispatchFetchFoodItems()
    //     dispatchFetchWalletBalance()
    // }

    render() {
        // const { proceedToPlaceOrder } = this.props
        return (
            <div>
                <Header />
                <SelectYourMeal />
                <PlaceOrder proceedToPlaceOrder={false} />
            </div>
        )
    }
}

// export const mapStateToProps = state => ({
//     proceedToPlaceOrder: state.order.get('proceedToPlaceOrder')
// })

// export const mapDispatchToProps = dispatch => ({
//     dispatchFetchFoodItems: () => dispatch(fetchFoodItems()),
//     dispatchFetchWalletBalance: () => dispatch(fetchWalletBalance())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
export default OrderPage