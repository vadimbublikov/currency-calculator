import React from 'react'
import './header.css'
import CurrencySelect from "../currency-select";
import { Link } from 'react-router-dom'

const Header = (props) => {
    const {onChangeBase, dataBase} = props

    return (
        <div className="header">
            <Link classname='logo' to={"/"}>Калькулятор</Link>
            <Link classname='logo' to={"/currencies"}>Курсы валют</Link>
            <div className="header-right">
                <CurrencySelect
                    onChange={onChangeBase}
                    data={dataBase}
                    text={'Базовая валюта: '}
                    defaultSelected={'RUB'}
                    labelFormatter={(currency) => {return currency.name}}
                />
            </div>
        </div>
    )
}

export default Header

