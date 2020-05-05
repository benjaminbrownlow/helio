import Senators from './data/senators'

export const repulicans = () => {return Senators.filter((republican) => {return republican.party === 'Republican'})}

export const democrats = () => {return Senators.filter((democrat) => {return democrat.party === 'Democrat'})}

export const independents = () => {return Senators.filter((independent) => {return independent.party === 'Independant'})}

export const males = () => {return Senators.filter((male) => {return male.gender === 'male'})}

export const females = () => {return Senators.filter((female) => {return female.gender === 'female'})}

export const byState = (state = 'UT') => {return Senators.filter((utah) => {return utah.state === 'UT'})}

export const mapping = () => {
  return REPLACE_ME_WITH_CODE
}

export const reducedCount = () => {
  return REPLACE_ME_WITH_CODE
}


const REPLACE_ME_WITH_CODE = false
