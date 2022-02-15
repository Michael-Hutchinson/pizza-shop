import React from "react";
import { AppStateContext } from './AppState'

interface Props {}

interface State {
  isOpen: boolean
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      (e.target as HTMLSpanElement)
    }
    this.setState((prevState) => ({isOpen: !prevState.isOpen}))
  }

  render() {
    const { isOpen } = this.state;
    return (
      <AppStateContext.Consumer>{(state) => (
        <div className="cartContainer">
        <button className="buttonStyle" type="button" onClick={this.handleClick}>Hello</button>
        <div className="cartDropDown" style={{display: isOpen ? 'block' : 'none'}}>
          <span>
            <p>{state.cart.items.length} pizzas in basket</p>
          </span>
          <ul>{state.cart.items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
      </div>
        )
      }
      </AppStateContext.Consumer>
    )
  }
}

export default Cart;