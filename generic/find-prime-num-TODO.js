/** 
 * Find a prime number in an array 
 * cioè un numero che sia divisibile solamente per 1 e per se stesso.
 * */

let numbers = [30, 5, 8, 12];
let primeCheck_obj = {
    1: true
}

/** 
 * Devo invece verificare che
 * a. il numero sia divisibile per uno e per se stesso (sempre vero)
 * a. il numero non sia divisibile da altri numeri
 *    cioè (parlando JavaScript...) che il modulo number%i sia sempre uguale != da zero 
 * per tutti gli altri casi. Se quindi c'è sempre resto il numero è primo!
 * */

/** check if a number is a prime 
 *  (info: a prime is only divisible for 1 and itself)
 */
function prime(n) {
    if(n == undefined || n <= 0 || n == null || typeof n !== Number) {
        throw console.log('input not valid')
    }

    let isPrime = true;

    for( let i=2; i<n; i++ ) {
        if( n%i === 0 ) 
            isPrime = false;
    }

    return isPrime;
}

console.log(prime(71), prime(30), prime(3), prime(90), prime(-1))

// let result = numbers.find(prime);
// console.log(result);

/** todo: 
 * - the code work with 1? 
 * - what's happen when the input is a negative or 0 number?
*/
