We have talked about decision boundaries and how they are used as a separator line to distinguish from different clusters/objects. Sometimes, our decision line isn’t merely a straight line, a neat polynomial function, nor a clean exponential function or any nice looking output. How exactly do we find the perfect function that can help us for the purposes of classification?
  

We can approach this problem with some reverse-engineering. Consider the function $\large ey = sin(2\pi x)$. We will use this function as our training data that we wish to see a pattern in, however we know for a fact that in the real world, this data isn’t going to be a perfect sine wave, whatever the data might be (perhaps the data is variation in the ocean tides, which can be modeled by a sine wave - Google it!), so we will add some random Gaussian variation to it, say with values between zero and three across the function. 

We now have:
$$\LARGE y=sin(2\pi x) + N(0, 0.3)$$
Where "$\large N$" is the Gaussian noise. We will choose a variance of 0.09. We then obtain the following graph:

![[Pasted image 20240610023311.png | 700]]

The blue dots represent the data we will obtain in real life, and the green line is what our function should be to describe the blue dots, with our aim being to figure out how we would even begin to find this function in the first place. I.e., we have the blue dots, now what? How do we figure out that this can be modeled by a sine wave?

We can use the following equation to help us out:

$$\LARGE y(x,w)= w_0 + w_1x^1 + w_2x^2 + w_3x^3 + \space ... \space + w_nx^n $$
This is known as the polynomial regression equation. All that is required from us is to plug in the data points $\large x$ such that we obtain a sum of $\large w$’s, then begin an iterative process by minimizing an error function  a function that measures the discrepancy between the function above for any given value of w and the data points. A common choice for an error function is the sum of squares of the errors between the predictions $\large y(x_n, w)$ for each data point $\large x_n$ and the target value (which in our example above was $\large sin(2πx)$) in order to minimize the following sum of squares function:

$$\LARGE SS = \frac{1}{2}\sum_{i=1}^{n}(y_i-\hat{y})^2$$

Where $\large y_i$  are the observed values (blue dots in our example) and $\large \hat{y}_i$ is our target function, i.e. our polynomial regression equation, in this case the one that we want to approach looking like $\large sin(2\pi x)$. The ½ fraction in the front is simply to make differentiation easier later on, and doesn’t affect our conclusion as we are simply multiplying everything by a constant.

$\large SS$ will take the form of a vector of $\large w$. We can then begin an iterative process which minimizes the total sum $\large SS$ by adjusting the values of $\large w$. Voila! We now have our model.

We haven’t talked about choosing an order for our polynomial - which is important. The larger the order, the more *precise* our model becomes but has the potential to become more or less *accurate*, which can lead to over-fitting. The goal is to choose an optimal order.

![[Pasted image 20240610024539.png | 700]]

We can see that when the order is three, we obtain a very well-generalized model. As we increase the order further we can see that, while the model does indeed pass through every point, it becomes overfitted. The choice in the order should be the smallest one that works. In our example above, if we tried for an order of four, it would be almost the exact same as three, but generally we would stick to three since it is smaller and reduces computational time and resources.

![[Pasted image 20240610024604.png | 700]]

Keep in mind that as we obtain more and more data, we generally can increase our polynomial order as well due to the nature of more data improving accuracy.

### Next: [[Regularization]]