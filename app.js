// Promise.then() Chaining
// #1
slowMath
  .add(6, 2)
  .then((result) => {
    console.log(result);
    return result;
  })
  // #2
  .then((result) => {
    slowMath
      .multiply(result, 2)
      .then((result) => {
        console.log(result);
        return result;
      })
      // #3
      .then((result) => {
        slowMath
          .divide(result, 4)
          .then((result) => {
            console.log(result);
            return result;
          })
          // #4
          .then((result) => {
            slowMath
              .subtract(result, 3)
              .then((result) => {
                console.log(result);
                return result;
              })
              // #5
              .then((result) => {
                slowMath
                  .add(result, 98)
                  .then((result) => {
                    console.log(result);
                    return result;
                  })
                  // #6
                  .then((result) => {
                    slowMath
                      .remainder(result, 2)
                      .then((result) => {
                        console.log(result);
                        return result;
                      })
                      // #7
                      .then((result) => {
                        slowMath
                          .multiply(result, 50)
                          .then((result) => {
                            console.log(result);
                            return result;
                          })
                          // #8
                          .then((result) => {
                            slowMath
                              .remainder(result, 40)
                              .then((result) => {
                                console.log(result);
                                return result;
                              })
                              // #9
                              .then((result) => {
                                slowMath
                                  .add(result, 32)
                                  .then((result) => {
                                    console.log(result);
                                    return result;
                                  })
                                  // #10
                                  .then((result) => {
                                    console.log(`The final result is ${result}.`);
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
