// Your code here
const saturdayFun = (activity="roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
  return `This Monday, I will ${activity}.`
}

const wrapAdju = (style="*") => {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}