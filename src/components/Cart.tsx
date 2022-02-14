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

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      (e.target as HTMLSpanElement)
    }
    this.setState((prevState) => ({isOpen: !prevState.isOpen}))
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="cartContainer">
        <button className="buttonStyle" type="button" onClick={this.handleClick}>Hello</button>
      <div className="cartDropDown" style={{display: isOpen ? 'block' : 'none'}}>
        <span>
          <p>Pizza</p>
        </span>
      </div>
      </div>
    )
  }
}

export default Cart;