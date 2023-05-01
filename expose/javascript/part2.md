# Answers to part 2 questions

1. 3 will be printed. At line 12, the value of variable i will be printed. i will be equal to prices.length. This is because var i, from the for loop, was instantiated with the var keyword, so the program can access it outside the for loop for which it was defined as well. Now, line 12 only runs after the for loop has exited. It exits once i = prices.length. Thus line 12 will print the variable i who's value is prices.length.
2. 150 will be printed. At line 13, it will log the discounted price of the last item in prices. Since discountedPrice is instantiated using the var keyword, it is still accessible after the for loop ends. However, on each iteration of the for loop, it gets reset to a new value based on the new price. Thus, when the for loop exits and line 12 runs, discountedPrice will be equal to the discounted price of the last item in the array prices. 
3. 150 will be printed. At line 14, the finalPrice of the last item in prices - the new price of the item after the discount - will be logged. finalPrice is instantiated using the var keyword as well. This means that it can still be accessed inside the for loop. Line 14 runs after the for loop terminates, at which point, finalPrice is equal to the final price of the last item in prices - new price after the discount. 
4. The function will return the array of discounted prices in the same order as the original prices are listed in the array prices. Since dicounted is instantiated with the var keyword, it can still be accessed in the for loop. Then, as we keep pushing the value of finalPrice, they get added to the back of the array. So once the for loop exits, all the discounted prices would have been added to discounted and then the function returns. Should look like this: [ 50, 100, 150 ]
5. It will cause an error because the variable i is instantiated with the let keyword which means it cannot be accessed outside of the block it was created in. Thus, when trying to log it after the for loop has exited, the program cannot access its value thus returning an error. 
6. Same as with variable i, discountedPrice was instantiated inside the for loop using the let keyword, thus outside the for loop, it cannot be accessed. Thus trying to log it after the for loop has exited will result in an error. 
7. 150 will be printed. The code will output the finalPrice for the last element in prices. FinalPrice can still be accessed inside the for loop since the for loop has been created in the same block as the instantiation of finalprice.
8. The function will correctly return the array of discounted prices in the array discounted. Even though it is instantiated with a let keyword, it can still be accessed inside the for loop since they are in the same block, thus we can properly push finalPrices into discounted at line 9. SHould look like this: [ 50, 100, 150 ].
9. There will be an error, since i is instantiated with the let keyword, it cannot be accessed outside the for loop in which it is defined. 
10. The length of the array prices will be written in the console. In this case it is 3. 
11. It will still return the array discounted with the 3 discounted prices as they are now calculated. Even though it is instantiated with the const keyword, we can still add to the array because const just declares a constant address - we can change the contents of discounted as long as we don't change what structure discounted points to. Should look like this: [ 50, 100, 150 ].
12. - student.name
    - student["Grad Year"]
    - student.greeting.call()
    - student["Favorite Teacher"].name
    - student.courseLoad[0]

13. - '32' - when adding and there is a string in the expression, javascript converts all references to strings because it expects you to be appending strings
    - 1 - when subtracting, javascripts converts all elements to integers because it reads - as a math operation - subtraction
    - 3 - null has a value of 0 in javascipt, so 3 + 0  = 3
    - '3null' - since we have a string literal in the expression, all other elements are treated as if they are being appended because of the + in the expression
    - 4 - true has a value of 1 in javascript, so 1+3 = 4
    - 0 - false has a value of 0 in javascript, null also has a value of 0, since we are adding 2 integers  - 0+0 = 0
    - '3undefined' - again, we have a string and an addition sign so javascript thinks we are appending a string, thus treats undefined as a string literal and appends it
    - NaN - Javascript sees the negative sign and thinks that we want to do subtraction on the elements in the expression so converts both to integer vaues, but undefined obviously is NaN thus we get an output of NaN.

14. - True - when comparing two different types, javascript converts the values to numbers then compares, so '2' will be converted to 2 before comparison.
    - False - string comparison happens letter-by-letter so '2' and '1' are compared first and since '2' > '1', the comparison returns false
    - True - double equal sign checks for equality and when comparing 2 different types, all get changed to numbers thus 2 == 2 is true
    - false - triple equal sign is the strict equality operator which means it won't change types so that they match, thus comparing a string to a number will return false.
    - False - true has a value of 1 and even after type conversion, 1 != 2 so we return false
    - true - the Boolean() function converts other types to boolean. It returns true as long as the input is non-empty and non-zero, thus Boolean(2) == true.

15. The difference between ```==``` and ```===``` is that ``==`` converts the types of both sides of the equality to numbers if they are different and then compares them, ```===``` does not convert the types of the two elements being compared before comparison. 
16. See part2-question16.js
17. The new array [2,4,6] will be returned. Working through the code, after modifyArray is called, we first create newArr. Then we enter a for loop that runs array.length times. array = [1,2,3] in this case, so the for loop will run 3 times. Then, inside the for loop, we push ```callback(array[i])```, which means we push whatever value ```doSomething()``` returns when ```array[i]``` is it's input. The function doSomething simply multiplies its input by 2 and returns that value, so we are just pushing each element in array multiplied by 2 into newArr. Then we return newArr after the for loop exits. 
18. See part2-question18.js
19. 1 4 3 2