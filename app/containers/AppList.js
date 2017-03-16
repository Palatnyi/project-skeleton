import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import SearchInput from "../components/SearchInput/SearchInput";
import TableBar from "../components/TableBar/TableBar";
import {filterToDoList, addTodoItem} from "../actions/actions";

class AppList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {todos, filter, filterToDoList} = this.props;
        todos = todos.filter((value) => {
            if(!filter) {return true};
            return value.title.indexOf(filter) >= 0;
        });
        return (
            <div>
                <TableBar>
                    <SearchInput value={filter} onChange={filterToDoList}/>
                    <Link to="/addTodo">Add new todo</Link>
                </TableBar>
                {todos.map((item, i) => <div key={i}>{item.title}</div>)}
            </div>
        )
    };
}

function mapStateToProps(state) {
    return state;
};

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({filterToDoList}, dispatch);
    return actions;
};

AppList = connect(mapStateToProps, mapDispatchToProps)(AppList);

export default AppList;