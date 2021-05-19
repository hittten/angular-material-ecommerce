import {
  BehaviorSubject,
  delay,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  reduce,
  Subject,
  switchMap, take,
  tap,
} from "rxjs";

import {fromFetch} from "rxjs/fetch";

const numbers = [1, 2, 3, 4, 5]
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin']
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']

export function tryObservables() {
  console.warn('start ------>', new Date().toISOString())
  createObservables()
  // usingOperators()
  // asyncObservables()
  // subjectsObservables()
  // customObservables()
  // subscriptions()
  console.warn('end -------->', new Date().toISOString())
}

function createObservables() {
  of(numbers)
    .subscribe(console.log)

  // of('valor unico')
  //   .subscribe(console.log)
  //
  // from(cats)
  //   .subscribe(console.log)
}

function usingOperators() {
  from(materials)
    .pipe(
      map(material => material.length),
    )
    .subscribe(console.log)

  // from(materials)
  //   .pipe(
  //     reduce((acc: any[], value: string) => [...acc, value.length], []),
  //   )
  //   .subscribe(console.log)
}

function asyncObservables() {
  of(cats)
    .pipe(
      delay(1000),
    )
    .subscribe(console.log)

  // from(cats)
  //   .pipe(
  //     delay(1000),
  //   )
  //   .subscribe(console.log)

  // fromEvent(document, 'click')
  //   .pipe(
  //     tap(() => console.warn('CLICK!!!', new Date().toISOString())),
  //     delay(2000),
  //     map(() => new Date().toISOString())
  //   )
  //   .subscribe((e) => {
  //     console.log(e)
  //     console.warn('Subscribe', new Date().toISOString())
  //   })

  // fromFetch('https://api.publicapis.org/entries')
  //   .pipe(
  //     tap(() => console.log('fetching entries...')),
  //     switchMap(res => res.json()),
  //   )
  //   .subscribe(console.log)
}

function subjectsObservables() {
  const page = new Subject()
  page.subscribe(console.log)

  const textEmitter = new BehaviorSubject('hola')
  textEmitter.subscribe(console.log)

  page.next(1)
  page.next(2)
  page.next(3)

  setTimeout(() => page.next(4), 1000)

  fromEvent(document, 'click')
    .pipe(
      tap(() => console.warn('CLICK!!!', new Date().toISOString())),
    )
    .subscribe((e) => {
      page.next(5)
      textEmitter.next('¿Cómo estas?')
    })
}

function customObservables() {
  const myObservable = new Observable(subscriber => {
    let counter = 0;
    setInterval(() => {
      counter++
      console.log('interval tic', counter)
      subscriber.next(counter)
      if (counter === 5) {
        subscriber.complete()
      }
    }, 1000)
  })


  const subscription = myObservable
    .pipe(
      take(3)
    )
    .subscribe(console.log)

  setTimeout(() => {
    subscription.unsubscribe()
  }, 3000)

}

function subscriptions() {
  const source$ = of(cats)

  const subs1 = source$.subscribe(console.log)
  const subs2 = source$.subscribe(console.log)
  const subs3 = source$.subscribe({
    next(x) {
      console.log('got value ', x);
    },
    error(err) {
      console.error('something wrong occurred:', err);
    },
    complete() {
      console.log('done');
    }
  })

  // interval(1000)
  //   .subscribe({
  //     next(x) {
  //       console.log('got value ', x);
  //     },
  //     error(err) {
  //       console.error('something wrong occurred:', err);
  //     },
  //     complete() {
  //       console.log('done');
  //     }
  //   })
  //
  // fromFetch('https://asdasdadsasd.asdasdad')
  //   .pipe(switchMap(r => r.json()))
  //   .subscribe({
  //     next(x) {
  //       console.log('got value ', x);
  //     },
  //     error(err) {
  //       console.error('something wrong occurred:', err);
  //     },
  //     complete() {
  //       console.log('done');
  //     }
  //   })
}
