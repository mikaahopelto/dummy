import { DateTime } from 'luxon'

let curDay = DateTime.now().minus({ day: 1 }).set({ hour: 16 })
const nextDay = () => {
  curDay = curDay.plus({ days: 1 })
  return curDay.toISO()
}

export default {
  lastupdated: DateTime.now().minus({ hours: 24 }).toISO(),
  bookings: [
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: curDay.minus({ week: 1 }).toISO()
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: curDay.minus({ week: 1 }).toISO()
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: curDay.minus({ week: 2 }).toISO()
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: curDay.minus({ week: 2 }).toISO()
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: curDay.minus({ week: 3 }).toISO()
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 1,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    },
    {
      date: nextDay(),
      booked: 0,
      created: curDay.minus({ year: 1 }).toISO(),
      updated: '0000-00-00 00:00:00'
    }
  ]
}
