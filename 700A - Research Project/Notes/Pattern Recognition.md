A generic term used to refer to the classification of objects into different categories or classes. Such objects will be different depending on the application, e.g. for speech recognition the objects might be audio waveforms that make certain words. Systems that use pattern recognition must classify objects based on certain attributes which would be extracted from data.

We want to distinguish different objects. How would we go about doing this? Take the example below:

![[Pasted image 20240610012945.png | 500]]

We will call these two the black and white pebble. If us humans are given a different picture of these two variants, we will pretty easily be able to tell which is a “black pebble” and which is a “white pebble”. How do we train machines to do this? Statistics is quite a good way to solve this.

With the pebble example above, suppose we take the intensity of the pixel coloration of each image (this will be one of our attributes/features, but remember we can factor as many attributes as we want), and then with a large dataset of pictures of each type of pebble, we will take the mean and standard deviation of pixel intensity. We can then simply graph the results:

![[Pasted image 20240610013153.png]]


Let “A” be white pebbles and “B” be black pebbles. We have plotted the results based on the mean μ and the standard deviation σ. Drawing a line between these two regions, we now have a very basic model on discriminating between the two types of pebbles. Anything that  ends up above the line will be considered a white pebble, and black otherwise.

Such models aren’t necessarily always going to be simple standard deviation and mean graphs with a few features and a conveniently simple straight line (which we call the “decision line”), but this is a proof of concept for how pattern recognition works fundamentally.

Also, how do we even find this line? There are an infinite amount of lines we could choose to separate regions A and B. On top of this, note that in the pebble example we knew exactly what features to use and how much “weight” they have on determining  a black or white pebble - what if we don’t know any of this? What if our machine sometimes gets things wrong? What if we don’t know precisely what features we want to use or should be used? How do we find these features? What is the best number of features to use? Will our “decision line” always be a line, or can it be a curve? Can there be multiple lines? How will we assess the performance of our model? These are all questions that we must find the answer to in order to implement pattern recognition to any context.

### Next: [[Types of Machine Learning]]