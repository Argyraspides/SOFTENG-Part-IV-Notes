We haven’t yet talked about precisely how we adjust the coefficients of the error function in order to find the optimal polynomial that can model a dataset. There are a few ways to do this.

The gradient descent algorithm is one such way, it allows us to find the minimum of a function which will help us in minimization of errors. The way it works is quite simple, analogous to, say, a binary search algorithm. An illustration is given below. We start at some initial point, and gradually converge towards the minimum. The way we decide how far to “hop” and in which direction is given by the equation:

$$\LARGE x_{n+1} = x_n - \eta\frac{df(x_n)}{dx}$$

  
Our next point, $\large x_{n+1}$, is equal to our current point,  $\large x_n$, minus the current derivative of our point on the graph multiplied by some step size $\large \eta$. If we ever cross the minimum to the other side, our gradient value will flip (as now we go from +ve to -ve gradient or vice versa) and then we begin going in the other direction.

![[Pasted image 20240610025550.png | 400]]

It is important to note that we cannot know if we are converging toward a global or local minima, and that this iterative approach means we can never find the exact value of the minimum point, requiring us to have a tolerance.

![[Pasted image 20240610025839.png]]

We can, of course, use the exact same approach on multi-dimensional functions (3D, 4D and beyond). We simply require more parameters.

How, then, do we use this to minimize our cost function?

Gradient descent is appropriate when we cannot find the minimum of a function analytically. Otherwise we would simply take the derivative and set it equal to zero to obtain the dependent variable. To minimize the cost function, we use the same basic principle for converging to a minimum using the equation above ($\large x_{n+1} = x_n - \eta\frac{df(x_n)}{dx}$) but this time substitute our cost function instead. First let us dive into an analytic approach, which will make the iterative approach much easier to understand.

### Linear Regression - The Analytic Approach

We can simply solve for the optimum point analytically by taking the partial derivative with respect to w, and setting the equation equal to zero. The problem with this approach is that while it does give us the exact optimal value, it can be very difficult to analytically solve for differential equations that may have hundreds of terms. It becomes cumbersome in both computational time and memory. Nevertheless, here is how it is done:

Recall that we initially start with some polynomial equation in the following form:

$$\LARGE y(x,w)= w_0 + w_1x^1 + w_2x^2 + w_3x^3 + \space ... \space + w_nx^n $$

We do not want to initialize the weights, as later on we'll be taking the partial derivative with respect to each w variable. 

For every point from our dataset, we will subtract from the corresponding point on our polynomial model to get the following:

$$\LARGE SS = \frac{1}{2}\sum_{i=1}^{n}(y_i-\hat{y})^2$$
Recall that this is multiplied by half to make differentiation easier later on. Squaring the difference makes all differences positive for ease as well.

The $\large i$ variable represents each and every point. With $\large SS$, we will end up with an equation of this form:
$$\LARGE SS = \frac{1}{2}((w_0x_0 - p_0) + (w_1x_1 - p_1) + (w_2x_2 - p_2) \space...\space)^2$$
Where $\large p_i$ represents the actual data point $\large i$, and $\large w_ix_i$  represents our regression models output (in this case, y-value) at point i. Note that our $\large x$ values will of course be filled out, as we want to take into account our data after all.

We can then take the partial derivative $\large SS$ $\large n$ number of times, each time with respect to the next $\large w$. I.e. 

$$\large \partial SS/\partial w_0 = \space ...$$
$$\large \partial SS/\partial w_1 = \space ...$$
$$\large \partial SS/\partial w_2 = \space ...$$
$$.$$
$$.$$
$$.$$
We set each of these equations to zero, then solve for all values of w simultaneously. This approach also works for linear regression equations, of course. We are done!

### Iterative Approach to Minimization
Above we saw how to minimize the cost function analytically. But we can of course do this iteratively as well if the cost function is hard to minimize analytically. All that is required is that we first initialize the weights, then update each weight based on the following equation:
$$\LARGE w_i = w_i - \alpha \cdot(\hat{y}_i-y_i)\cdot x_i$$
Where $\large w_i$ is the $\large i’$th coefficient, $\large \alpha$ is the learning rate/step size of each iteration, $\large \hat{y}_i$ and $\large y_i$ are the actual and predicted value of the $\large i’$th point, with $\large x_i$ of course being the value of the dependent variable at the $\large i'$th point.

This is quite literally it. We keep iteratively updating each and every weight based on the formula above


### Batch and Stochastic Gradient Descent

### Next: [[Convex Functions]]
