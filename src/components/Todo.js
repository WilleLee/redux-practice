import { connect } from "react-redux";
import { actionCreators } from "../todosStore";

function Todo({ text, deleteTodo }) {
  return (
    <li
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{text}</span>
      <button onClick={deleteTodo}>delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  //console.log(ownProps);
  return {
    deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
