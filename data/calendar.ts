import { DateTime } from 'luxon'

const todayAt = (h: number, m: number) => DateTime.now().set({ hour: h, minute: m }).toRFC2822()
const tomorrowAt = (h: number, m: number) =>
  DateTime.now().plus({ days: 1 }).set({ hour: h, minute: m }).toRFC2822()
const plusDays = (d: number, h: number, m: number) =>
  DateTime.now().plus({ days: d }).set({ hour: h, minute: m }).toRFC2822()

export default [
  {
    start: todayAt(16, 30),
    end: todayAt(18, 30),
    summary: '#Football practice',
    uid: '856DD0C7-B800-4DB6-BE3D-00B9162AD476'
  },
  {
    start: tomorrowAt(15, 0),
    end: tomorrowAt(17, 30),
    summary: '#Football practice',
    uid: '18FA3317-26DB-480E-8FA8-324B4B5A7688'
  },
  {
    start: plusDays(3, 10, 40),
    end: plusDays(3, 11, 45),
    summary: 'Groceries ',
    uid: '31AFF7F0-FB90-45E7-9DBA-14E5D4C81F63'
  },
  {
    start: plusDays(3, 7, 0),
    end: plusDays(3, 9, 30),
    summary: '#Running',
    uid: 'F4A45EC0-227F-4B02-AF25-569CC5EFA09E'
  },
  {
    start: plusDays(4, 15, 30),
    end: plusDays(4, 18, 30),
    summary: '#Football practice',
    uid: 'D969CC46-35F0-46AF-9F05-BED8DADAB4C5'
  },
  {
    start: plusDays(5, 7, 30),
    end: plusDays(5, 8, 30),
    summary: '#Gym',
    uid: '229E48F6-4C3C-414B-9CCD-A57BB39D6DC1'
  },
  {
    start: plusDays(6, 12, 35),
    end: plusDays(6, 11, 20),
    summary: 'Groceries ',
    uid: 'E21360B1-0CBF-4588-8FB2-C4C710AF7F14'
  }
]
