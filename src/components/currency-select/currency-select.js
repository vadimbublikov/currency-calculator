import React, {Component} from 'react'

export default class CurrencySelect extends Component {
    state = {
        selectedCurrency: this.props.defaultSelected
    }

    onChangeOption = (event) => {
        this.setState({
            selectedCurrency: event.target.value
        })
        const {onChange} = this.props
        onChange(event.target.value)
    }

    selectOptions(renderData, labelFormatter) {
        const {selectedCurrency} = this.state

        return renderData.map( currency => {
                if (currency.code === selectedCurrency) {
                    return <option selected value={currency.code}>{labelFormatter(currency)}</option>
                }
                return <option value={currency.code}>{labelFormatter(currency)}</option>
            }
        )
    }

    render() {
        const {text, data, defaultSelected, labelFormatter} = this.props
        let emptyOption = null
        if (!defaultSelected) {
            emptyOption = <option disabled selected value>   </option>
        }

        return (
            <div>
                <table>
                    <tr>
                        <td>{text}</td>
                        <td>
                            <select onChange={this.onChangeOption}>
                                {this.selectOptions(data, labelFormatter)}
                                {emptyOption}
                            </select>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}