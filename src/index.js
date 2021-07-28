import './index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Explorer from './components/Explorer';
import Tabs from './components/Tabs';
import Channels from './components/Channels';
import Info from './components/Info';

window.renderGarden = (data) => {
  ReactDOM.render(
    <StrictMode>
      <Tabs tabs={[
        {
          name: 'Refs'
        },
        {
          name: 'Feeds'
        },
        {
          name: 'About'
        }
      ]}>
        <Explorer data={data} />
        <Channels />
        <Info curators={data.curators} />
      </Tabs>
    </StrictMode>,
    document.getElementById('root')
  );
}

