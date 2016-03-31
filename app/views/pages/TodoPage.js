import React from 'react';
import Intro from '../components/Intro';
import { connect } from 'react-redux';
import { getTodo } from '../../actions/todoActions';

const propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

class TodoPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodo());
  }
  render() {
    return (
      <div>
        <Intro>
          <p>
            My Onion Todo App uses react, redux as the UI modules, express.js as the server async,
            pg-promise as the database driver and postgres as the database.
          </p>
        </Intro>
        <div className="col-sm-9">
          <div className="page-header">
            <h4>My Onion Todo App</h4>
          </div>
          <div className="row">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Add new todo item" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Add!</button>
                </span>
            </div>
          </div>
          <div className="row">
            <ul className="list-group">
              <li className="list-group-item" contentEditable value="item1" />
              <li className="list-group-item" contentEditable value="item2" />
              <li className="list-group-item" contentEditable value="item3" />
              <li className="list-group-item" contentEditable value="item4" />
            </ul>
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
