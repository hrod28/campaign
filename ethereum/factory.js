import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC71de1053BFedfC28AD4cB58991C570c8011588f'
);


export default instance;
