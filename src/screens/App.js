import React from 'react';
import { Route } from 'react-router-dom';

// import MenuScreen from './MenuScreen';
import InboxScreen from './InboxScreen';
// import SnoozedScreen from './SnoozedScreen';
// import ArchivedScreen from './ArchivedScreen';

const App = () => (
  <div id="container" className="menuOpen">
    {/* <MenuScreen /> */}
    <div id="content-container">
      <Route exactly pattern="/" component={InboxScreen} />
      {/* <Route exactly pattern="/snoozed" component={SnoozedScreen} /> */}
      {/* <Route exactly pattern="/archived" component={ArchivedScreen} /> */}
    </div>
  </div>
);

export default App;
