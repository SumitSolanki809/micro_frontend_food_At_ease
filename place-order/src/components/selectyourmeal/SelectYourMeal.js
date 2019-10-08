import React from 'react';
// import { connect } from 'react-redux'
import './SelectYourMeal.css'
import MealItemList from '../mealitemlist/MealItemList'

class SelectYourMeal extends React.Component {

    render() {
        const { foodItems } = this.props
        return (
            <div className="collapsibleContainers">
                <MealItemList
                    heading={'Select your breakfast'}
                    items={foodItems.itemsForBreakFast}
                />

                <MealItemList
                    heading={'Select your lunch'}
                    items={foodItems.itemsForLunch}
                />
            </div>
        )
    }
}

SelectYourMeal.defaultProps = {
    foodItems: {
        itemsForBreakFast: [
            {
                itemName: 'Poha',
                description: 'rice poha minsed with kanda and peanuts and served with chutney and curd.',
                costPerItem: '50'
            },
            {
                itemName: 'Bread',
                description: '4 bread slices of the fresh bread, along with butter applied on it.',
                costPerItem: '30'
            },
            {
                itemName: 'Chips',
                description: 'Fresh fried potato chips with whitesauce and ketchup.',
                costPerItem: '40'
            }
        ],
        itemsForLunch: [
            {
                itemName: 'Rice',
                description: 'white rice, freshly cooked along with papad.',
                costPerItem: '50'
            },
            {
                itemName: 'Dal',
                description: 'Dal Tadka, with proper mixture of tomato, lettuce and coriander. ',
                costPerItem: '30'
            },
            {
                itemName: 'Curry',
                description: 'Poptato curry for the day, or any other special',
                costPerItem: '40'
            }
        ]
    }
}

// export const mapStateToProps = state => ({
//     foodItems: state.meals.get('foodItems')
// })

// export default connect(mapStateToProps, null)(SelectYourMeal)
export default SelectYourMeal