// TODO

class GroceryListItem extends React.Component{
  constructor(props){
    super(props);5
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return(
    <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );
  }
};

var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {
        props.items.map((items) =>(
        <GroceryListItem items={items} />
        ))
      }
    </ul>
  </div>
);


ReactDOM.render(<GroceryList items={['Milk', 'Eggs', 'Whey']}/>, document.getElementById("app"));
