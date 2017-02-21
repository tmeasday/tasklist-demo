import { configure } from '@kadira/storybook';

import '../src/index.css';

const req = require.context('../src', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
