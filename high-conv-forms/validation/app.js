/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */

var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
var firstValue = firstPasswordInput.value
var secondValue = secondPasswordInput.value
/*
You'll probably find this function useful...
 */  

submit.onclick = function(){
    // console.log(typeof firstPasswordInput.value.length,  firstPasswordInput.value.length, ' password input value')
    // event.preventDefault()
    const str = /[!@#$%^&*]/g
    const found = str.test('asd@')
    console.log('testing regex: ',found)

    if( firstPasswordInput.value === secondPasswordInput.value){
        console.log("same here",  firstPasswordInput.value, secondPasswordInput.value)
        secondPasswordInput.setCustomValidity("")
    } else {
        console.log("shut it")
        secondPasswordInput.setCustomValidity("Password do not match")
        return
    }

    if(firstPasswordInput.value.length < 16){

        console.log(typeof firstPasswordInput.value.length, 'log first password input')
        firstPasswordInput.setCustomValidity("Password should be greater than 16")
        return
    } else {
        console.log("what have i done")
        firstPasswordInput.setCustomValidity("")
    }
}