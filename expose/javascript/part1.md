# Answers to questions in part 1 of Expose Section

1. 20
2. 20
3. 20
4. An error because result is defined using the let keyword so it can only be accessed within the if block in which it is defined. line 13 is outside this if block, thus it cannot access result. 
5. An error, since line 7 won't change result because it is declared using the "const" keyword, thus the program can't change it from its original value. 
6. An error because, like the let keyword, const also has block scope so outside of the if statement that it is defined, result cannot be accessed, and line 13 is outside this block. Also, we can't change the value of a variable that has a const declaration, so there will be an error earlier in the code anyway. 
   