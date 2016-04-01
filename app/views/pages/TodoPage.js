import React from 'react';
import Intro from '../components/Intro';
import { connect } from 'react-redux';
import { getTodo, addTodo } from '../../actions/todoActions';
import TodoList from '../components/TodoList';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object.isRequired
};

class TodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItem: '' };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodo());
  }
  handleAddTodo(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      const newItem = this.state.newItem;
      if (newItem.length > 0) {
        this.props.dispatch(addTodo({ item: newItem }));
        this.setState({ newItem: '' });
      }
    }
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <Intro>
          <p>
            My Onion Todo App uses react, redux as the UI modules, express.js as the server async,
            pg-promise as the database driver and postgres as the database.
          </p>
        </Intro>
        <div className="col-sm-4 col-sm-offset-1">
          <div className="container-fluid">
            <div className="page-header">
              <h4>My Onion Todo App</h4>
            </div>
            <div className="row">
              <div className="input-group">
                <input type="text" className="form-control"
                  placeholder="Add new todo item" value={ this.state.newItem }
                  onChange={ (e) => this.setState({ newItem: e.target.value })}
                  onKeyPress={ this.handleAddTodo }
                />
                <span className="input-group-btn">
                  <button className="btn btn-default"type="button" onClick={ this.handleAddTodo }>
                    Add!
                  </button>
                </span>
              </div>
            </div>
            <div className="row">
              <TodoList todo={ todo } />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

TodoPage.propTypes = propTypes;

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TodoPage);
