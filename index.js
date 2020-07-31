// Your code here
const saturdayFun = (activity="roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (style="*") => {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2
  }
}
