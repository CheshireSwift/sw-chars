import DiceRadio from './DiceRadio.js'
import SkillList from './SkillList.js'
import SliderTracker from './SliderTracker.js'

export default {
  'AgentName': {
    position: { bottom: '21%', left: '17.5%', width: '29.5%' },
  },
  'Codename': {
    position: { bottom: '24%', left: '15%', width: '32%' },
  },
  'Alias': {
    position: { bottom: '27%', left: '11%', width: '36%' },
  },
  'Division': {
    position: { bottom: '30%', left: '15%', width: '8%' },
  },
  'Branch': {
    position: { bottom: '30%', left: '34%', width: '13%' },
  },
  'BranchBenefit': {
    position: { bottom: '33%', left: '23%', width: '24%' },
  },
  'Informants': {
    position: { bottom: '36%', left: '17.5%', width: '29.5%' },
  },
  'Rank': {
    position: { bottom: '39%', left: '9.5%', width: '11%' },
  },
  'XP': {
    position: { bottom: '39%', left: '25.5%', width: '5%' },
  },
  'Funds': {
    position: { bottom: '39%', left: '39%', width: '8%' },
  },
  'Origin': {
    position: { bottom: '42%', left: '12%', width: '35%' },
  },
  'Description': {
    component: 'textarea',
    position: { bottom: '47.5%', left: '3%', width: '43%' },
  },
  'Pace': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '56.5%', left: '19.5%', width: '2%' },
  },
  'Toughness': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '56.5%', left: '40.3%', width: '2%' },
  },
  'Parry': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '61.5%', left: '19.5%', width: '2%' },
  },
  'Charisma': {
    style: { borderRadius: 9999, padding: '1%' },
    position: { bottom: '61.5%', left: '40.3%', width: '2%' },
  },
  'Languages': {
    component: 'textarea',
    position: { bottom: '70.5%', left: '16%', width: '32%', height: '8%' },
  },
  'Hindrances': {
    component: 'textarea',
    position: { bottom: '84%', left: '1%', width: '25.5%', height: '9%' },
  },
  'Edges': {
    component: 'textarea',
    position: { bottom: '127%', left: '1%', width: '25.5%', height: '31%' },
  },
  'DefiningInterests': {
    component: 'textarea',
    position: { bottom: '112%', left: '30%', width: '18.5%', height: '10%' },
  },
  /* Attributes - do not reorder, or click zones break! */
  'Vigor': {
    component: DiceRadio,
    position: { bottom: '37.1%', left: '66.1%', height: '9999%' },
  },
  'Spirit': {
    component: DiceRadio,
    position: { bottom: '34%', left: '66.1%', height: '9999%' },
  },
  'Strength': {
    component: DiceRadio,
    position: { bottom: '31%', left: '66.1%', height: '9999%' },
  },
  'Smarts': {
    component: DiceRadio,
    position: { bottom: '28%', left: '66.1%', height: '9999%' },
  },
  'Agility': {
    component: DiceRadio,
    position: { bottom: '25.1%', left: '66.1%', height: '9999%' },
  },
  /* /Attributes */
  'Skills': {
    component: SkillList,
    position: { bottom: '72%', left: '51%', width: '37%', height: '47%' },
  },
  'Wounds': {
    component: SliderTracker(5, 'column'),
    position: { bottom: '75%', left: '88%', width: '3%', height: '27%' },
  },
  'Fatigue': {
    component: SliderTracker(4, 'column-reverse'),
    position: { bottom: '87%', left: '96%', width: '3%', height: '18.5%' },
  },
}
