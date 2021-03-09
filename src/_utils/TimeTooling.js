const TimeTooling = {
  TIMEZONE_ARGENTINA: -3,
  gmtToTimezone: (date, timezone) => TimeTooling.addHours(date, timezone),
  gmtToArgentinaTimezone: date => TimeTooling.gmtToTimezone(date, TimeTooling.TIMEZONE_ARGENTINA),
  addMinutes: (date, minutes) => {
    const clonedDate = new Date(date)
    return new Date(clonedDate.setMinutes(clonedDate.getMinutes() + minutes))
  },
  addHours: (date, hours) => {
    const clonedDate = new Date(date)
    return new Date(clonedDate.setHours(clonedDate.getHours() + hours))
  },
  addDays: (date, days) => {
    const clonedDate = new Date(date)
    return new Date(clonedDate.setDate(clonedDate.getDate() + days))
  },
  addMonths: (date, months) => {
    const clonedDate = new Date(date)
    return new Date(clonedDate.setMonth(clonedDate.getMonth() + months))
  },
  nextDays: (date, days) => {
    const clonedDate = TimeTooling.addDays(date, days)
    clonedDate.setHours(0, 0, 0, 0)
    return clonedDate
  },
  day: date => TimeTooling.nextDays(date, 0),
  JStoHTMLDate: function (date) {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2)
  },
  getHTMLDate: (date) => {
    const jsDate = new Date(date)
    return ('0' + (jsDate.getDate())).slice(-2) + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2) + '-' + TimeTooling.twoDigitsYear(jsDate)
  },
  HTMLtoJSDate: function (HTMLdate) {
    const date = new Date(HTMLdate)
    const dateUTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

    return dateUTC
  },
  isValidDateObj: function (date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())
  },
  toTimestamp: function (date) {
    return Math.round(date.getTime() / 1000)
  },
  isToday: (date) => {
    const today = new Date()
    return date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getYear() == today.getYear()
  },
  isTomorrow: (date) => {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    return date.getDate() == tomorrow.getDate() && date.getMonth() == tomorrow.getMonth() && date.getYear() == tomorrow.getYear()
  },
  isYesterday: (date) => {
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
    return date.getDate() == yesterday.getDate() && date.getMonth() == yesterday.getMonth() && date.getYear() == yesterday.getYear()
  },
  twoDigitsMinutes: (date) => ('0' + date.getMinutes()).slice(-2),
  twoDigitsHours: (date) => ('0' + date.getHours()).slice(-2),
  twoDigitsDate: (date) => ('0' + date.getDate()).slice(-2),
  twoDigitsMonth: (date) => ('0' + (date.getMonth() + 1)).slice(-2),
  twoDigitsYear: (date) => (date.getFullYear() + '').slice(-2),
  month: (date) => date.getMonth() + 1,
  hoursTT: date => date.getHours() <= 12 ? date.getHours() : date.getHours() - 12,
  tt: date => {
    const hours = date.getHours()
    return hours >= 12 ? 'pm' : 'am'
  },
  formatDate: (date) => {
    if (TimeTooling.isToday(date)) { return 'Hoy' }

    if (TimeTooling.isTomorrow(date)) { return 'Mañana' }

    if (TimeTooling.isYesterday(date)) { return 'Ayer' }

    return date.getDate() + ' de ' + TimeTooling.mes(date) + ', ' + date.getFullYear()
  },
  mes: date => ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'][date.getMonth()],
  Dia: date => ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][date.getDay()],
  dia: date => ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'][date.getDay()],
  fullDateHoursMinutes: (date) => {
    return date.getDate() + '/' + TimeTooling.month(date) + '/' + TimeTooling.twoDigitsYear(date) + ' ' + date.getHours() + ':' + TimeTooling.twoDigitsMinutes(date)
  }
}

export default TimeTooling
