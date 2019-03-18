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
      selected: this.placeSelect(this.props)
    };

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            selected: this.placeSelect(nextProps)
        })
    }
    public render() {
        const { type } = this.props;
        return (
            <div className="transfer">
                <div className="transfer__checkbox" onClick={this.selectSortingNotOnly} ref="checkbox">
                    {this.state.selected && <img src="ok.png" alt="ok" width={15} height={15} /> }
                </div>
                <span> {type} </span>
                <span className="transfer__only-text" onClick={this.selectSortingOnly}>ТОЛЬКО</span>
            </div>
        );
    }

    placeSelect(props: any) {
        if (props.type === 'Все') {
            if (props.stops.find((elem: any) => elem === null) === null) {
                return true;
            }
        }
        else if (props.type.split(' ')[0] === 'Без') {
                if (props.stops.find((elem: number) => elem === 0) === 0) {
                    return true;
                }
        } else if (props.type.split(' ')[0] === '1') {
            if (props.stops.find((elem: number) => elem === 1)) {
                return true;
            }
        } else if (props.type.split(' ')[0] === '2') {
            if (props.stops.find((elem: number) => elem === 2)) {
                return true;
            }
        } else if (props.type.split(' ')[0] === '3') {
            if (props.stops.find((elem: number) => elem === 3)) {
                return true;
            }
        } else return false;
    }

    selectSortingOnly() {
        if (this.state.selected) {
            if (this.props.type.split(' ')[0] === 'Без') {
                this.props.changeSorting([0]);
                return;
            }
            if (isNaN(+this.props.type.split(' ')[0])) {
                this.props.changeSorting([null]);
                return;
            }
        }
        if (this.props.type.split(' ')[0] === 'Без') {
            this.props.changeSorting([0]);
            return;
        }
        if (isNaN(+this.props.type.split(' ')[0])) {
            this.props.changeSorting([null]);
            return;
        }
        this.props.changeSorting([+this.props.type.split(' ')[0]]);
    }

    selectSortingNotOnly() {
        if (this.state.selected) {
            if (this.props.stops.length === 1) {
                this.props.changeSorting([null]);
                return;
            }
            if (this.props.type.split(' ')[0] === 'Без') {
                let newSelect = this.props.stops.slice();
                const index = newSelect.findIndex((elem: number) => 0 === elem);
                if (index === 0) {
                    newSelect.shift();
                } else if (index === newSelect.length - 1 && newSelect.length !== 1) {
                    newSelect.pop();
                } else {
                    newSelect = newSelect.splice(index, 1);
                }
                this.props.changeSorting(newSelect);
                return;
            }
            if (typeof +this.props.type.split(' ')[0] === "number") {
                let newSelect = this.props.stops.slice();
                const index = newSelect.findIndex((elem: number) => +this.props.type.split(' ')[0] === elem);
                if (index === 0) {
                    newSelect.shift();
                } else if (index === (newSelect.length - 1) && newSelect.length !== 1) {
                    newSelect.pop();
                } else {
                    newSelect.splice(index, 1);
                }
                this.props.changeSorting(newSelect);
                return;
            }
        }
        if (this.props.type.split(' ')[0] === 'Без') {
            const index = this.props.stops.findIndex((elem: number) => elem === null);
            if (index === 0 && this.props.stops.length === 1) {
                this.props.changeSorting([0]);
                return;
            }
            const newSelect = this.props.stops.slice();
            newSelect.push(0);
            this.props.changeSorting(newSelect);
            return;
        }
        if (isNaN(+this.props.type.split(' ')[0])) {
            this.props.changeSorting([null]);
            return;
        }
        const index = this.props.stops.findIndex((elem: number) => elem === null);
        if (index === 0 && this.props.stops.length === 1) {
            this.props.changeSorting([+this.props.type.split(' ')[0]]);
            return;
        }
        this.props.changeSorting([...this.props.stops, +this.props.type.split(' ')[0]]);
    }
}
