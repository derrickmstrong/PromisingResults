// Promise.then() Chaining
// #1
slowMath
  .add(6, 2)
  .then((sum) => {
    console.log(sum);
    return sum;
  })
  // #2
  .then((sum) => {
    slowMath
      .multiply(sum, 2)
      .then((sum) => {
        console.log(sum);
        return sum;
      })
      // #3
      .then((sum) => {
        slowMath
          .divide(sum, 4)
          .then((sum) => {
            console.log(sum);
            return sum;
          })
          // #4
          .then((sum) => {
            slowMath
              .subtract(sum, 3)
              .then((sum) => {
                console.log(sum);
                return sum;
              })
              // #5
              .then((sum) => {
                slowMath
                  .add(sum, 98)
                  .then((sum) => {
                    console.log(sum);
                    return sum;
                  })
                  // #6
                  .then((sum) => {
                    slowMath
                      .remainder(sum, 2)
                      .then((sum) => {
                        console.log(sum);
                        return sum;
                      })
                      // #7
                      .then((sum) => {
                        slowMath
                          .multiply(sum, 50)
                          .then((sum) => {
                            console.log(sum);
                            return sum;
                          })
                          // #8
                          .then((sum) => {
                            slowMath
                              .remainder(sum, 40)
                              .then((sum) => {
                                console.log(sum);
                                return sum;
                              })
                              // #9
                              .then((sum) => {
                                slowMath
                                  .add(sum, 32)
                                  .then((sum) => {
                                    console.log(sum);
                                    return sum;
                                  })
                                  // #10
                                  .then((sum) => {
                                    console.log(`The final result is ${sum}.`);
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

const doMath = async() => {
    try {
        let sum = await ''
    } catch (error) {
        
    }
}