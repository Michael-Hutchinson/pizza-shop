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

  render() {
    const { isOpen } = this.state;
    return (
      <div style={{display: isOpen ? 'block' : 'none'}}>
        <button type="button" onClick={() => { 
          this.setState((prevState) => ({isOpen: !prevState}))
        }}>Hello</button>
        <ul>
          <li>Pizza1</li>
          <li>Pizza2</li>
        </ul>
      </div>
    )
  }
}

export default Cart;