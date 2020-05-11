/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*jshint esversion: 6*/

const app = (() => {

  function getImageName(country) {
    // create and return a promise
    country = country.toLowerCase()
    const promiseOfImageName = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(country === 'spain' || country === 'chile' || country === 'peru'){
          resolve(country + '.png');
        } else {
          reject(Error("Didn't receive a valid country name"))
        }
      }, 1000)
    })
    console.log(promiseOfImageName)
    return promiseOfImageName
  }

  function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"
    return new Promise((resolve, reject)=>{
      if (country === 'Spain'){
        resolve(' The function resolves only Spain')
      } else reject('The function rejects when input is other than spain')
    })
   

  }

  function flagChain(country) {

    // use the promise
    return getImageName(country)
    .catch(fallbackName)
    .then(fetchFlag)  
    .then(processFlag)
    .then(appendFlag)
    .catch(logError)

  }

  const promises = [
    getImageName('Spain'),
    getImageName('Chile'),
    getImageName('Peru')
  ];
  // Promise.all:
  // Promise.all accepts an array of promises, and will attempt to fulfill all of them. Exits early if just 1 promise gets rejected.

  // Promise.race:
  // The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, 
  // with the value or reason from that promise.
  function allFlags(promiseList) {

    // use promise.all
   return Promise.all(promiseList)
  }

  allFlags(promises)
  .then(result =>console.log(result))
  .catch(err => console.log(err))


  // call the allFlags function


  // use Promise.race
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2])
  .then(logSuccess)
  .catch(logError);


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
    }
    return flagResponse.blob(); // blob() returns a promise
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
    const flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
