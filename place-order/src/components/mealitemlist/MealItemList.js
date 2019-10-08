import React, { Fragment } from 'react'
// import { connect } from 'react-redux'
import MealItem from '../mealitem/MealItem'
import './MealItemList.css'
// import { prepareOrder } from '../../util/component-utils'
// import { setFinalOrder, setProceedToPlaceOrder } from '../../actions/setSelectedItemsActions'
// import { generateOrderId } from '../../util/component-utils'
// import { setOrderId } from '../../actions/setSelectedItemsActions'

class MealItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sign: '+'
        }
    }

    componentDidMount() {
        this.meal.style.display = 'none'
    }

    toggleFoodList = () => {
        const { sign } = this.state
        if (sign === '+') {
            this.meal.style.display = 'block'
            this.setState({
                sign: '-'
            })
        } else {
            this.meal.style.display = 'none'
            this.setState({
                sign: '+'
            })
        }
    }

    updateOrderSummary = () => {
        // const { 
        //     dispatchSetFinalOrder, 
        //     dispatchSetProceedToPlaceOrder,
        //     dispatchSetOrderId, 
        //     orderTotal, 
        //     orderSummary
        // } = this.props
        // dispatchSetFinalOrder(prepareOrder(orderSummary, orderTotal))
        // dispatchSetOrderId(generateOrderId())
        // dispatchSetProceedToPlaceOrder(true)
        console.log('hello')
    }

    render() {
        const { heading, items } = this.props
        const { sign } = this.state
        return (
            <Fragment>
                <div className='menuContainer' onClick={this.toggleFoodList}>
                    <div className="heading">{heading}</div>
                    <div className="icon">{sign}</div>
                </div>
                <div className="foodList" ref={el => { this.meal = el }}>
                    <ul>
                        {
                            items.map((item, i) =>
                                <MealItem
                                    key={i} 
                                    itemName={item.itemName}
                                    description={item.description}
                                    costPerItem={item.costPerItem}
                                />
                            )
                        }
                    </ul>
                    <div className="composeMeal">
                        <button onClick={this.updateOrderSummary}>Compose Meal</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// export const mapStateToProps = state => ({
//     orderSummary: state.order.get('orderSummary'),
//     orderTotal: state.order.get('orderTotal')
// })

// export const mapDispatchToProps  = dispatch => ({
//     dispatchSetFinalOrder: data => dispatch(setFinalOrder(data)),
//     dispatchSetProceedToPlaceOrder: data => dispatch(setProceedToPlaceOrder(data)),
//     dispatchSetOrderId: data => dispatch(setOrderId(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MealItemList)
export default MealItemList