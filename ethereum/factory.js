import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xac231d1ef5778D8bE9360f4A7428E31B052925D3'
);


export default instance;
