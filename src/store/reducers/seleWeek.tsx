const initState = {
  week: "1"
}
export default function countReducer(state = initState, action: any) {
  const { type, week } = action
  switch (type) {
    case "seleWeek":
      state.week = week
      return state
    default:
      return state
  }
}
