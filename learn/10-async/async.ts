export function tryAsync() {
  console.warn('start ------>', new Date().toISOString())
  intro()
  // await asyncAwait()
  console.warn('end -------->', new Date().toISOString())
}

function intro() {
  setTimeout(() => console.log('despues de 1 seg'), 1000);
  setTimeout(() => console.log('inmediatamente sync?'), 0);
  console.log("hola sync")
}

async function intro2() {
  return new Promise(resolve => {
    setTimeout(() => console.log('despues de 1 seg'), 1000);
    setTimeout(() => console.log('inmediatamente sync?'), 0);
    console.log("hola sync")
    resolve(undefined)
  })
}

async function intro3() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('despues de 1 seg');
      resolve(null)
    }, 1000);
  })
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('inmediatamente sync?');
      resolve(null)
    }, 0)
  });

  console.log("hola sync")
}

async function asyncAwait() {
  return intro();
}
