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

// helper functions ----------

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function validateResponse(response){
  if( !response.ok){
    throw Error( response.statusText)
  }
  return response
}

function readResponseAsJson(response){
  return response.json()
}

// Fetch JSON ----------

function fetchJSON() {
  // TODO
  fetch('examples/animals.json')
  .then(validateResponse)
  .then(readResponseAsJson)
  .then(logResult)
  .catch(logError)
}

const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);


// Fetch Image ----------
function showImage(responseAsBlob){
  const container = document.getElementById('img-container')
  const imgElem = document.createElement('img')
  container.appendChild(imgElem)
  const imgUrl = URL.createObjectURL(responseAsBlob)
  imgElem.src = imgUrl
}

function readResponseAsBlob(response){
  return response.blob()
}

function fetchImage() {
  // TODO
  fetch('examples/fetching.jpg')
  .then(validateResponse)
  .then(readResponseAsBlob)
  .then(showImage)
  .catch(logError)
}

const imgButton = document.getElementById('img-btn');
imgButton.addEventListener('click', fetchImage);


// Fetch text ----------
function ResponseAsText(response){
  return response.text()
}

function showText(response){
const message = document.getElementById('message')
message.textContent = response
}

function fetchText() {
  fetch('examples/words.txt')
  .then(validateResponse)
  .then(ResponseAsText)
  .then(showText)
  .catch(logError)
  // TODO
}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);


// HEAD request ----------


function logSize(response) {
  const url = response.url;
  const size = response.headers.get('content-length');
  console.log( response, `${url} is ${size} bytes`);
}
function headRequest() {
  // TODO
  fetch('examples/words.txt', {
    method: 'HEAD'
  })
  .then(validateResponse)
  .then(logSize)
  .catch(logError)
}
const headButton = document.getElementById('head-btn');
headButton.addEventListener('click', headRequest);


// POST request ----------
const messageHeaders= new Headers()
messageHeaders.append('Content-Type', 'application/json')
messageHeaders.append('X-CUSTOM', 'hello world')
/* NOTE: Never send unencrypted user credentials in production! */
function postRequest() {
  // TODO
  const formData = new FormData(document.getElementById('msg-form'))
  fetch('http://localhost:5000', {
    method: 'POST',
    body: JSON.stringify({ lab: 'fetch', status: 'fun' }),
    headers: messageHeaders
  })
  .then(validateResponse)
  .then(ResponseAsText)
  .then(showText)
  .then(logError)
}
const postButton = document.getElementById('post-btn');
postButton.addEventListener('click', postRequest);
