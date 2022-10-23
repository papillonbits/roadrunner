import { fromEvent, map, interval, take, combineLatestAll } from 'rxjs'

export function CombineLatestAll() {
  const clicks = fromEvent(document, 'click')
  const higherOrder = clicks.pipe(
    map(() => interval(Math.random() * 2000).pipe(take(3))),
    take(2),
  )
  const result = higherOrder.pipe(combineLatestAll())

  result.subscribe((x) => console.log(x))
}
