export const formatDate = (date: Date) => {
  const d = new Date(date)
  const year = d.getFullYear()
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export const addDays = function (date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
