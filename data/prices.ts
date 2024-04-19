import { DateTime } from 'luxon'

let priceAt = DateTime.now().minus({ hours: 1 }).startOf('hour')
const nextHour = () => {
  priceAt = priceAt.plus({ hours: 1 })
  return priceAt.toISO()
}
export default [
  {
    DateTime: nextHour(),
    Price: 7.353
  },
  {
    DateTime: nextHour(),
    Price: 7.198
  },
  {
    DateTime: nextHour(),
    Price: 16.142
  },
  {
    DateTime: nextHour(),
    Price: 24.116
  },
  {
    DateTime: nextHour(),
    Price: 20.146
  },
  {
    DateTime: nextHour(),
    Price: 7.534
  },
  {
    DateTime: nextHour(),
    Price: 13.804
  },
  {
    DateTime: nextHour(),
    Price: 20.81
  },
  {
    DateTime: nextHour(),
    Price: 19.02
  },
  {
    DateTime: nextHour(),
    Price: 12.759
  },
  {
    DateTime: nextHour(),
    Price: 10.394
  },
  {
    DateTime: nextHour(),
    Price: 9.957
  },
  {
    DateTime: nextHour(),
    Price: 10.197
  },
  {
    DateTime: nextHour(),
    Price: 9.891
  },
  {
    DateTime: nextHour(),
    Price: 7.639
  },
  {
    DateTime: nextHour(),
    Price: 7.597
  },
  {
    DateTime: nextHour(),
    Price: 7.943
  },
  {
    DateTime: nextHour(),
    Price: 8.301
  },
  {
    DateTime: nextHour(),
    Price: 13.87
  },
  {
    DateTime: nextHour(),
    Price: 11.399
  },
  {
    DateTime: nextHour(),
    Price: 8.769
  },
  {
    DateTime: nextHour(),
    Price: 8.921
  },
  {
    DateTime: nextHour(),
    Price: 7.679
  },
  {
    DateTime: nextHour(),
    Price: 7.645
  },
  {
    DateTime: nextHour(),
    Price: 7.906
  },
  {
    DateTime: nextHour(),
    Price: 7.983
  },
  {
    DateTime: nextHour(),
    Price: 8.014
  },
  {
    DateTime: nextHour(),
    Price: 8.056
  },
  {
    DateTime: nextHour(),
    Price: 8.152
  },
  {
    DateTime: nextHour(),
    Price: 11.83
  },
  {
    DateTime: nextHour(),
    Price: 15.353
  },
  {
    DateTime: nextHour(),
    Price: 19.559
  },
  {
    DateTime: nextHour(),
    Price: 16.508
  },
  {
    DateTime: nextHour(),
    Price: 12.779
  },
  {
    DateTime: nextHour(),
    Price: 11.426
  },
  {
    DateTime: nextHour(),
    Price: 10.64
  },
  {
    DateTime: nextHour(),
    Price: 10.239
  },
  {
    DateTime: nextHour(),
    Price: 9.813
  },
  {
    DateTime: nextHour(),
    Price: 9.293
  },
  {
    DateTime: nextHour(),
    Price: 9.007
  },
  {
    DateTime: nextHour(),
    Price: 9.173
  },
  {
    DateTime: nextHour(),
    Price: 10.325
  },
  {
    DateTime: nextHour(),
    Price: 11.9
  },
  {
    DateTime: nextHour(),
    Price: 15.77
  },
  {
    DateTime: nextHour(),
    Price: 16.215
  },
  {
    DateTime: nextHour(),
    Price: 13.374
  },
  {
    DateTime: nextHour(),
    Price: 8.174
  },
  {
    DateTime: nextHour(),
    Price: 7.815
  }
]
