import React, { PropTypes } from 'react';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

const alignStyles = {
  fontSize: '14px',
  lineHeight: '1.5rem',
  padding: '0.75em 0.25em'
};

export default function Task(
  {
    task: { id, title, url, state, subtitle },
    onSnoozeTask,
    onPinTask
  }
) {
  return (
    <div className="list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" />
      </label>
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
        onClick={() => open(url, '_new')}
      />
      {subtitle &&
        <p style={{ flex: 1, color: '#666', ...alignStyles }}>{subtitle}</p>}
      {state !== 'TASK_SNOOZED' &&
        state !== 'TASK_ARCHIVED' &&
        <a style={alignStyles} onClick={() => onSnoozeTask(id)}>
          <span className="icon-link icon-sync" />
        </a>}
      {state !== 'TASK_PINNED' &&
        <a style={alignStyles} onClick={() => onPinTask(id)}>
          <span className="icon-link icon-arrow-down" />
        </a>}
    </div>
  );
}

Task.fragments = {
  task: gql`
    fragment TaskFragment on Task {
      id
      title
      subtitle
      url
      state
    }
  `
};

Task.propTypes = {
  task: propType(Task.fragments.task).isRequired,
  onSnoozeTask: PropTypes.func,
  onPinTask: PropTypes.func
};
