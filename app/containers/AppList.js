import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SearchInput from "../components/SearchInput";
import {filterToDoList} from "../actions/actions";

class AppList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {todos, filter, filterToDoList} = this.props;
        todos = todos.filter((value) => {
            if(!filter) {return true};
            return value.indexOf(filter) >= 0;
        });
        return (
            <div>
                <SearchInput value={filter} onChange={filterToDoList}/>
                {todos.map((item, i) => <div key={i}>{item}</div>)}
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