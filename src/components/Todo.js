import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function Todo({ text, deleteTodo, id }) {
  return (
    <li
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/redux-practice/${id}`}>{text}</Link>
      <button onClick={deleteTodo}>delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  //console.log(ownProps);
  return {
    deleteTodo: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
