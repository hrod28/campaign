import React from 'react';
import { Menu } from 'semantic-ui-react';

export default props => {
  return (
    <Menu>
      <Menu.Item>
        Crowdcoin
      </Menu.Item>

      <Menu.Menu position="right">
      <Menu.Item>
        Campaigns
      </Menu.Item>
      <Menu.Item>
        +
      </Menu.Item>

      </Menu.Menu>
    </Menu>

  );
};
