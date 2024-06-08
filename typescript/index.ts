/*
 * This is the Palindrome program
 *
 * By:  Lucas Tyman
 * @version 1.0
 * Since:   2024-06-07
 */

// This is the is Palindrome function
function isPalindrome(inputNumber: number): boolean {
    const reversed = reverseNumber(inputNumber)
    if (inputNumber === reversed) {
      return true
    } else {
      return false
    }
  }
  
  
  // This is the reverseNumber function
  function reverseNumber(inputNumber: number): number {
    let reversedNumber = 0
    while (inputNumber > 0) {
      // Extract the last digit
      const digit = inputNumber % 10
      // Append it to the reversed number
      reversedNumber = reversedNumber * 10 + digit
      // Remove the last digit from the original number
      inputNumber = Math.floor(inputNumber / 10)
    }
    return reversedNumber
  }
  
  // This is the findDepth function
  function findDepth(inputNumber: number, currentDepth: number = 0): number {
    if (isPalindrome(inputNumber)) {
      return currentDepth
    } else {
      const reversedNumber = reverseNumber(inputNumber)
      const sum = inputNumber + reversedNumber
      return findDepth(sum, currentDepth + 1)
    }
  }
  
  // Loops through all the two-digit numbers to see if they are a palindrome
  const startInt: number = 10
  const finishInt: number = 99
  
  for (let counter = startInt; counter <= finishInt; counter++) {
    let intDepth: number = findDepth(counter, 0)
    console.log(`Number: ${counter}, Depth: ${intDepth}`)
  }
  
  console.log("\nDone.")