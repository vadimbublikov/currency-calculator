import React, {Component} from 'react';
import './currencies-list.css';

export default class CurrenciesList extends Component {

    onClick = (event) => {
        const {onChangeFavoritesItem} = this.props
        onChangeFavoritesItem(event.target.key)
    }

    createItems(data, onSelect) {
        const {onChangeFavoritesItem} = this.props
        return data.map(currency => {
            const {code, isFavorite, name, rate, bannerUri} = currency

            return (
                <li key={code} className="currencies-list list-group-item" onClick={() => onChangeFavoritesItem(code)}>
                    <table>
                        <tr>
                            <td width={30}>{(isFavorite) ? <i className="fa fa-star" /> : <i className="fa fa-star-o" />}</td>
                            <td width={80}><img src={bannerUri} height={50} width={75} alt={'banner'}/></td>
                            <td width={60}>{code}</td>
                            <td width={200}>{name}</td>
                            <td width={30}>{rate}</td>
                        </tr>
                    </table>
                </li>
            )
        })
    }

    render() {
        const {renderData} = this.props

        const items = this.createItems(renderData)

        return (
            <ul className="currencies-list list-group">
                {items}
            </ul>
        )
    }
}
