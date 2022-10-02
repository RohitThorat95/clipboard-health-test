# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. I removed the exports.deterministicPartitionKey and instead defined the function and then used module.export to export the function.
   Reason : If new functions are added in the same file , we dont have to wrtie exports. in start if every function. Now we can cleanly define all functions above and in the end we can export the function

2. In the if block where we are checking if event is passed , inside it there was another if else block which i removed and added ternaryy operator instead.

3. I removed the if (candidate) block check since it was not required instead i handled it in the previos block itself by defining TRIVIAL_PARTITION_KEY to be candidate by default and stringify partition key there itself

4. Added the jest test cases in the test file
   - if nothing is passed in event -> will return 0
   - if empty object is passed as event -> returns hash of length 128
   - if partitionKey is passes in event having length less than 256 -> returns partitionKey
   - if partitionKey is passes in event having length more than 256 -> returns hash of length 128
