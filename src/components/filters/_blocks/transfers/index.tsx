import * as React from "react";
import Transer from './_blocks/transfer'
import './styles.scss';


export default class Transfers extends React.Component {
    public render() {
        const types = [ 'Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки' ];
        return (
            <div>
                {
                    types.map(type => <Transer type={type} />)
                }
            </div>
        );
    }
}
