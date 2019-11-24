import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markDone } from '../../actions'

const Todo = ({ todo }) => {
  const [done] = useState(todo.done)

  const handleChange = () => { markDone(todo.id); }

  return (
    <div>
      <label>
        {todo.task}
        <input type="checkbox" checked={done}
          onChange={handleChange} />
      </label>
    </div>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ markDone }, dispatch)

export default connect(null, mapDispatchToProps)(Todo);
