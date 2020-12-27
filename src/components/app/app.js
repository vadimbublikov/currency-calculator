import React, {Component} from 'react'
import CurrenciesList from "../currencies-list";
import CurrencyRateApiClient from "../../services/currency-rate-api-client";
import currencies from "../../services/currency-rate-api-client/currencies";
import Header from "../header";
import Calculator from "../calculator";
import { BrowserRouter as Router, Route} from "react-router-dom"

export default class App extends Component {
    apiClient = new CurrencyRateApiClient()

    state = {
        baseCurrency: 'RUB',
        data: currencies
    }

    componentDidMount() {
        this.updateData()
    }

    updateData = () => {
        const {baseCurrency, data} = this.state
        this.apiClient.getData(baseCurrency, data).then(this.onDataLoaded)
    }

    onDataLoaded = (loadedData) => {
        const newData = loadedData.map(d => d)
        this.setState({
            data: newData
        })
    }

    onChangeBase = (newBase) => {
        this.setState({
            baseCurrency: newBase
        }, this.updateData)

    }

    onChangeFavoritesItem = (currencyCode) => {
        const {data} = this.state
        const idx = data.findIndex(c => c.code === currencyCode)
        const newCurrency = this.copyCurrency(data[idx])
        newCurrency.isFavorite = !newCurrency.isFavorite

        const newData = [
            ...data.slice(0, idx), newCurrency,...data.slice(idx+1)
        ]

        this.setState({
            data: newData
        })

    }

    copyCurrency(from) {
        return {
            isFavorite: from.isFavorite,
            code: from.code,
            name: from.name,
            bannerUri: from.bannerUri,
            rate: from.rate
        }
    }

    render() {
        const {data} = this.state
        const dataWithFavorites = data.filter(c => c.isFavorite)
        const dataWithoutFavorites = data.filter(c => !c.isFavorite)

        const renderData = [
            ...dataWithFavorites.sort((a, b) => a.code.localeCompare(b.code)),
            ...dataWithoutFavorites.sort((a, b) => a.code.localeCompare(b.code))
        ]

        return (
            <div>
                <Router>
                    <div>
                        <Header onChangeBase={this.onChangeBase} dataBase={renderData}/>
                        <Route
                            path={"/"}
                            exact={true}
                            render={() => <Calculator renderData={renderData}/>}
                        />
                        <Route
                            path={"/currencies"}
                            render={() => <CurrenciesList renderData={renderData} onChangeFavoritesItem={this.onChangeFavoritesItem}/>}
                        />
                    </div>
                </Router>
            </div>
        )
    }
}
