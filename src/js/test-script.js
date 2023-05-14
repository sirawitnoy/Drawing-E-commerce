function delay(ms) {
    return new Promise ((e) => {
        setTimeout(() => {
            console.log('hello');
            e();
        }, ms);
    });
  }
  
  async function myAsyncFunction() {
    console.log('Start');
  
    await delay(2000); // Wait for 2000 milliseconds (2 seconds)
  
    console.log('End');
  }
  
  myAsyncFunction();