---
aliases:
  - embedded systems
  - embedded system
---
Think for a moment about the device you are using now. That device, be it a phone or a computer, is able to perform a wide range of arbitrary tasks, whether that is watching YouTube videos, playing games, or browsing the web. You can even make it do whatever you want given you have enough knowledge (for example, you may write a program in C++ that executes on your computer, or perhaps you root an Android phone to add functionality at your will).

Suppose for a moment that you don't want to be able to do a bunch of arbitrary things upon your own volition, but rather you only want to do *one* thing. Perhaps you have a plane, and while the plane may have it's own general purpose computer onboard, you want this plane to have its own, ***dedicated*** GPS system, that does absolutely nothing but provide a GPS coordinate. A simple, or perhaps even very complicated, circuit board with it's very own GPS module on board, outputting some signal that encodes latitude and longitude.

This, in fact, is one example of an embedded system. A **hardware system** with **dedicated** functionality, performing operations in **real time**, maybe with some **resource constraints** (you don't want your GPS to chug through the planes power, do you?), that is **integrated into a wider system**, being the plane itself.

![[Pasted image 20240228180501.png | 300]]

Above is an example of such an embedded GPS system. A combination of some processor (perhaps for computing GPS related things), alongside some memory (to store the GPS related data), and an input/output system (to, of course, tell *something* what the GPS coordinates are, be it the pilot or other systems onboard a plane).


Perhaps a more simple example is a digital quartz watch, whose sole purpose is to convert the vibrations of a quartz crystal upon electrical impulses into time. 

![[Pasted image 20240228181028.png]]

In the case of a watch -- we do in fact have dedicated functionality as mentioned above. Alongside this, we have real-time operation, resource constraints (the system must draw a minuscule amount of power, so little as to have the ability to be powered by such a small battery for so long), integration into a wider system (the watch display, watch buttons, etc), and in this specific case also autonomy, as the watch chugs along on its own without needing any input once it begins operation.


In short, an embedded system is:

- A combination of hardware and software, with a dedicated purpose in mind
- Is part of some larger system
- Has resource constraints
- Operates in real-time
- Can be autonomous
- Is *not* meant to be programmed by a user (although it certainly can be) -- the system is fixed in nature
- Have some sort of interface to communicate with things around it, whether that be other parts of its wider system or a human
***
# Categories

There are two major types of embedded systems: reactive/control-dominated systems, and data-flow or/data-dominated systems.

### Reactive/Control-dominated systems:

In these [[Embedded System|embedded systems]], data flows into the system at irregular intervals and must be processed within strict timing constraints. An example would be, as mentioned above, aircraft collision avoidance systems, where certain information pertaining to an imminent crash would arrive at unknown times and a response must be produced ASAP. Usually the time constraint for a response is extremely critical, and depending on the application can kill people or cause catastrophic damage if not met. Given that these systems often respond to their environment, the delay in the actual sensing of the environment is incredibly important. For example, if an embedded system is to capture how often birds fly past a certain point for the purposes of gathering migration data, it cannot miss a bird due to a sensing delay.

### Data-flow/data-dominated systems

Quite the opposite to reactive systems, these embedded systems have data flowing in at regular streams/intervals, where it is processed with some sort of algorithm against certain accuracy constraints. This is usually through periodic sampling of data, an example being offsite weather instrumentation taking, say, samples of moisture content of the air. Given the constant input, they oftentimes have more powerful microprocessors.



In the real world, many [[Embedded System|embedded systems]] are a combination of these two major categories, and hence we call them *heterogeneous embedded systems*.

***

# Properties of embedded systems

Embedded systems, given that they are designed for a single purpose in mind, must be reliable, maintainable, available, safe, and maintain high security. More formally:

- Reliability $R(t)$ = probability of the system working correctly provided that it was working correctly at $t=0$
- Maintainability $M(d)$ = probability of the system working correctly $d$ time units after an error occurred (i.e. maintaining its reliability after an error)
- Availability $A(t)$ = probability of the system working at any arbitrary time $t$ 
- Safety: The system doesn't harm anything or anyone
- Security: The system prevents any unintended and/or unauthorized actions

In addition to these, embedded systems must also be efficient in a variety of ways, including but not limited to:

- Energy efficiency (consume the minimum amount of power possible)
- Digital storage efficiency (use the least amount of storage for code possible)
- Runtime efficiency (any algorithms and such onboard must have the smallest execution time possible)
- Weight efficiency (cannot be too heavy)
- Cost efficiency (must be as cheap as possible)






