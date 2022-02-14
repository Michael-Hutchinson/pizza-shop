import React from "react";

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

  handleClick() {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}))
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="cartContainer">
        <button className="buttonStyle" type="button" onClick={this.handleClick}>Hello</button>
      <div className="cartDropDown" style={{display: isOpen ? 'block' : 'none'}}>
        <ul>
          <li>Pizza1</li>
          <li>Pizza2</li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Cart;