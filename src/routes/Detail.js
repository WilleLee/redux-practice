import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todos }) {
  //finding the todo
  const { id } = useParams();
  //console.log(id);
  const todo = todos.find((todo) => todo.id === parseInt(id));
  //console.log(todo);

  //
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  function defineDay(getday) {
    return arr[getday];
  }
  const days = new Date(parseInt(id));
  const y = days.getFullYear();
  const m = (days.getMonth() + 1).toString().padStart(2, "0");
  const d = defineDay(days.getDay());

  return (
    <div className="column-container-center">
      <h2>{todo?.text}</h2>
      <h3>created at {`${d}. ${m}. ${y}.`}</h3>
    </div>
  );
}

function mapStateToProps(state) {
  //console.log(ownProps);
  return { todos: state };
}

export default connect(mapStateToProps)(Detail);
