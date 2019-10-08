import React from 'react'
import './MealItem.css'
// import { connect } from 'react-redux'
// import { setSelectedItems, setOrderTotal } from '../../actions/setSelectedItemsActions'

class MealItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        // const { count } = this.state
        // const { dispatchSetSelectedItems, dispatchSetOrderTotal, itemName, costPerItem } = this.props
        // this.setState({
        //     count: count + 1
        // })
        // dispatchSetSelectedItems(itemName)
        // dispatchSetOrderTotal(costPerItem)
        console.log('hello')
    }

    decreaseCount = () => {
        // const { count } = this.state
        // const { dispatchSetSelectedItems, dispatchSetOrderTotal, itemName, costPerItem } = this.props
        // if (count === 0) {
        //     this.setState({
        //         count: 0
        //     })
        //     dispatchSetOrderTotal(0)
        // } else {
        //     this.setState({
        //         count: count - 1
        //     })
        //     dispatchSetOrderTotal(-costPerItem)
        //     dispatchSetSelectedItems(`${itemName}-`)
        // }
        console.log('hello')
    }

    render() {
        const { itemName, description, costPerItem } = this.props
        const { count } = this.state
        return (
            <li className="itemContainer">
                <div className="itemInfo">
                    <div className="nameContainer"><h3>{itemName}</h3></div>
                    <div className="descriptionContainer"><p>{description}</p></div>
                    <div className="costContainer">Cost:&nbsp;<h3>{costPerItem}</h3></div>
                </div>
                <div className="counterContainer">
                    <div>
                        {count}&nbsp;&nbsp;&nbsp;
                        <span onClick={this.increaseCount}>+</span><span>|</span><span onClick={this.decreaseCount}>-</span>
                    </div>
                </div>
            </li>
        )
    }
}

// export const mapDispatchToProps = dispatch => ({
//     dispatchSetSelectedItems: data => dispatch(setSelectedItems(data)),
//     dispatchSetOrderTotal: data => dispatch(setOrderTotal(data))
// })

// export default connect(null, mapDispatchToProps)(MealItem)
export default MealItem