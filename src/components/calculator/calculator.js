import React, {Component} from 'react'

import './calculator.css'
import CurrencySelect from "../currency-select";

export default class Calculator extends Component {

    state = {
        currencyCode: null,
        currencyCount: null
    }

    onChangeDeal = (newDeal) => {
        this.setState({
            currencyCode: newDeal
        })
    }

    onChangeCount = (newCountEvent) => {
        this.setState({
            currencyCount: newCountEvent.target.value
        })
        console.log('currencyCount = ' + newCountEvent.target.value)
    }

    render() {
        const {renderData} = this.props
        const {currencyCode, currencyCount} = this.state

        const price = (currencyCode && currencyCount) ? currencyCount * renderData.find(e => e.code===currencyCode).rate : ''

        return (
            <div className='calculator'>
                <CurrencySelect
                    onChange={this.onChangeDeal}
                    data={renderData}
                    text={'Выберите валюту сделки: '}
                    labelFormatter={(currency) => {return `${currency.name} (${currency.rate})`}}
                />

                <div>
                    <p/>
                    <p/>
                    <text>Введите количество валюты по сделке: </text>
                    <input onChange={this.onChangeCount} type="number" min="0.00"  step="1" />
                </div>
                <p/>

                <h4>{`Стоимость в базовой валюте: ${price}`}</h4>

            </div>
        );
    }
}