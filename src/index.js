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
          name: 'Refs',
          url: '/',
          scroll: true
        },
        {
          name: 'Feeds',
          url: '/feeds',
          scroll: false
        },
        {
          name: 'About',
          url: '/about',
          scroll: true
        }
      ]}>
        <Explorer data={data} />
        <Channels channelVideos={data.videos} />
        <Info curators={data.curators} />
      </Tabs>
    </StrictMode>,
    document.getElementById('root')
  );
}

