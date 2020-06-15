// Promise.then() Chaining
/*
// #1
slowMath
  .add(6, 2)
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  // #2
  .then((resolve) => {
    slowMath
      .multiply(resolve, 2)
      .then((resolve) => {
        console.log(resolve);
        return resolve;
      })
      // #3
      .then((resolve) => {
        slowMath
          .divide(resolve, 4)
          .then((resolve) => {
            console.log(resolve);
            return resolve;
          })
          // #4
          .then((resolve) => {
            slowMath
              .subtract(resolve, 3)
              .then((resolve) => {
                console.log(resolve);
                return resolve;
              })
              // #5
              .then((resolve) => {
                slowMath
                  .add(resolve, 98)
                  .then((resolve) => {
                    console.log(resolve);
                    return resolve;
                  })
                  // #6
                  .then((resolve) => {
                    slowMath
                      .remainder(resolve, 2)
                      .then((resolve) => {
                        console.log(resolve);
                        return resolve;
                      })
                      // #7
                      .then((resolve) => {
                        slowMath
                          .multiply(resolve, 50)
                          .then((resolve) => {
                            console.log(resolve);
                            return resolve;
                          })
                          // #8
                          .then((resolve) => {
                            slowMath
                              .remainder(resolve, 40)
                              .then((resolve) => {
                                console.log(resolve);
                                return resolve;
                              })
                              // #9
                              .then((resolve) => {
                                slowMath
                                  .add(resolve, 32)
                                  .then((resolve) => {
                                    console.log(resolve);
                                    return resolve;
                                  })
                                  // #10
                                  .then((resolve) => {
                                    console.log(
                                      `The final resolve is ${resolve}.`
                                    );
                                  })
                                  // #11
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
*/

// Lab Version
/*
slowMath
  .add(6, 2)
  .then((res) => {
    console.log(res);
    return slowMath.multiply(res, 2);
  })
  .then((res) => {
    console.log(res);
    return slowMath.divide(res, 4);
  })
  .then((res) => {
    console.log(res);
    return slowMath.subtract(res, 3);
  })
  .then((res) => {
    console.log(res);
    return slowMath.add(res, 98);
  })
  .then((res) => {
    console.log(res);
    return slowMath.remainder(res, 2);
  })
  .then((res) => {
    console.log(res);
    return slowMath.multiply(res, 50);
  })
  .then((res) => {
    console.log(res);
    return slowMath.remainder(res, 40);
  })
  .then((res) => {
    console.log(res);
    return slowMath.add(res, 32);
  })
  .then((res) => {
    console.log(res);
    console.log(`The final resolve is ${res}`);
  })
  .catch((err) => {
    console.log(err)
  })
*/

// Async/Await
const doMath = async () => {
  try {
    let result = await slowMath.add(6, 2);
    console.log(result);
    result = await slowMath.multiply(result, 2);
    console.log(result);
    result = await slowMath.divide(result, 4);
    console.log(result);
    result = await slowMath.subtract(result, 3);
    console.log(result);
    result = await slowMath.add(result, 98);
    console.log(result);
    result = await slowMath.remainder(result, 2);
    console.log(result);
    result = await slowMath.multiply(result, 50);
    console.log(result);
    result = await slowMath.remainder(result, 40);
    console.log(result);
    result = await slowMath.add(result, 32);
    console.log(result);
    console.log(`The final result is ${result}.`);
  } catch (err) {
    console.log(err);
  }
};

doMath();
