import DiceRadio from './DiceRadio.js'

export default {
  'AgentName': {
    position: { bottom: '20.5%', left: '17.5%', width: '29.5%' },
  },
  'Codename': {
    position: { bottom: '23.5%', left: '15%', width: '32%' },
  },
  'Alias': {
    position: { bottom: '26.5%', left: '11%', width: '36%' },
  },
  'Division': {
    position: { bottom: '29.5%', left: '15%', width: '8%' },
  },
  'Branch': {
    position: { bottom: '29.5%', left: '34%', width: '13%' },
  },
  'BranchBenefit': {
    position: { bottom: '32.5%', left: '23%', width: '24%' },
  },
  'Informants': {
    position: { bottom: '35.5%', left: '17.5%', width: '29.5%' },
  },
  'Rank': {
    position: { bottom: '38.5%', left: '9.5%', width: '11%' },
  },
  'XP': {
    position: { bottom: '38.5%', left: '25.5%', width: '5%' },
  },
  'Funds': {
    position: { bottom: '38.5%', left: '39%', width: '8%' },
  },
  'Origin': {
    position: { bottom: '41.5%', left: '12%', width: '35%' },
  },
  'Description': {
    component: 'textarea',
    position: { bottom: '47%', left: '3%', width: '43%' },
  },
  'Pace': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '55.5%', left: '19.5%', width: '2%' },
  },
  'Toughness': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '55.5%', left: '40%', width: '2%' },
  },
  'Parry': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '60.5%', left: '19.5%', width: '2%' },
  },
  'Charisma': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '60.5%', left: '40%', width: '2%' },
  },
  'Languages': {
    component: 'textarea',
    position: { bottom: '70%', left: '16%', width: '32%', height: '10%' },
  },
  'Hindrances': {
    component: 'textarea',
    position: { bottom: '83%', left: '1%', width: '25.5%', height: '10%' },
  },
  'Edges': {
    component: 'textarea',
    position: { bottom: '125%', left: '1%', width: '25.5%', height: '31%' },
  },
  'DefiningInterests': {
    component: 'textarea',
    position: { bottom: '111%', left: '30%', width: '18.5%', height: '10%' },
  },
  /* Attributes - do not reorder, or click zones break! */
  'Vigor': {
    component: DiceRadio,
    position: { bottom: '36.4%', left: '66.1%', height: '10%' },
  },
  'Spirit': {
    component: DiceRadio,
    position: { bottom: '33.3%', left: '66.1%', height: '11%' },
  },
  'Strength': {
    component: DiceRadio,
    position: { bottom: '30.3%', left: '66.1%', height: '12%' },
  },
  'Smarts': {
    component: DiceRadio,
    position: { bottom: '27.2%', left: '66.1%', height: '13%' },
  },
  'Agility': {
    component: DiceRadio,
    position: { bottom: '24.1%', left: '66.1%', height: '15%' },
  },
  /* /Attributes */
}
