export default class CurrencyRateApiClient {

    getData = async (baseCurrency, currenciesData) => {
        return await this.loadRates(baseCurrency, currenciesData)
    }

    loadRates = async (baseCurrency, data) =>  {
        for (let i = 0; i < data.length; i++) {
           await this.getRate(data[i].code).then(res => this.onRateLoad(baseCurrency, res, data[i]))
        }

        return data
    }

    onRateLoad = (baseCurrency, res, currency) => {
        const rate = res.rates[baseCurrency]
        currency.rate = (rate) ? rate : 1
    }

    getRate = async (code) => {
        const res = (await fetch(`https://api.exchangeratesapi.io/latest?base=${code}`));

        if (!res.ok) {
            throw new Error(`Could not fetch https://api.exchangeratesapi.io/latest?base=${code}` +
                `, received ${res.status}`)
        }

        return await res.json()
    }

}