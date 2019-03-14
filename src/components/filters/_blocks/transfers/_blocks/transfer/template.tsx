import * as React from "react";
import './styles.scss';

interface IProps {
    type: string,
    changeSorting: Function,
    stops: any
}

interface IState {
    selected: boolean
}


export default class Transer extends React.Component<IProps> {
    constructor(props: any) {
        super(props);
        this.selectSortingOnly = this.selectSortingOnly.bind(this);
        this.selectSortingNotOnly = this.selectSortingNotOnly.bind(this);
    }
    state = {
      selected: false
    };
    public render() {
        const { type } = this.props;
        return (
            <div className="transfer">
                <div className="transfer__checkbox" onClick={this.selectSortingNotOnly}>
                    {this.state.selected && <img src="ok.png" alt="ok" width={15} height={15} /> }
                </div>
                <span> {type} </span>
                <span className="transfer__only-text" onClick={this.selectSortingOnly}>ТОЛЬКО</span>
            </div>
        );
    }

    selectSortingOnly() {
        if (this.props.type.split(' ')[0] === 'Без') {
            this.props.changeSorting(this.props.type, [0]);
            return;
        }
        if (isNaN(+this.props.type.split(' ')[0])) {
            this.props.changeSorting(this.props.type, [null]);
            return;
        }
        this.props.changeSorting('only', [+this.props.type.split(' ')[0]]);
    }

    selectSortingNotOnly() {
        this.setState({
           selected: !this.state.selected
        });
        if (this.props.type.split(' ')[0] === 'Без') {
            const stops = Object.keys(this.props.stops).map((key) => {
                return this.props.stops[key];
            });
            const newSelect = this.props.stops.slice();
            newSelect.push(0);
            this.props.changeSorting(this.props.type, newSelect);
            return;
        }
        if (isNaN(+this.props.type.split(' ')[0])) {
            this.props.changeSorting(this.props.type, [null]);
            return;
        }
        this.props.changeSorting('notOnly', [...this.props.stops, +this.props.type.split(' ')[0]]);
    }
}
