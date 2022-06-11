import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { v4 as uuidv4 } from 'uuid';

import Task from '../Task/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLabel: '',
    };
  }

  render() {
    const { todos, onDeleted, onToggleDone, onToggleEdit, toggleEditigFalse, chngeDescription, onPlay, onPause } =
      this.props;
    const list = todos.map((item) => {
      const { id, ...itemProps } = item;
      const timeAfterCreate = formatDistanceToNow(Date.now(item.createItem));

      return (
        <Task
          key={id}
          {...itemProps}
          onDeleted={() => onDeleted(item.id)}
          timeAfterCreate={timeAfterCreate}
          id={id}
          onToggleDone={onToggleDone}
          onToggleEdit={onToggleEdit}
          toggleEditigFalse={toggleEditigFalse}
          chngeDescription={chngeDescription}
          onPlay={onPlay}
          onPause={onPause}
        />
      );
    });

    //проверяем на наличие задачь в state и отрисовываем задачи/сообщение

    const data =
      todos.length > 0 && todos !== null ? (
        list
      ) : (
        <li
          className="view"
          style={{ height: '30px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
        >
          <div>Task is not create</div>
        </li>
      );
    return <ul className="todo-list">{data}</ul>;
  }
}

export default TaskList;
TaskList.defaultProps = {
  onDeleted: () => {},
};
