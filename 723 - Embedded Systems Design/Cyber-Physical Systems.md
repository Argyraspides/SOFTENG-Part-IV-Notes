---
aliases:
  - CPS
  - cyber-physical systems
---
A cyber-physical system, also known as CPS, is essentially just another way to refer to an [[Embedded System]], but with the implication that these systems also interact and are ***tightly integrated*** with their immediate environment with some process (hence "cyber-physical"). 

An example of a [[Cyber-Physical Systems|CPS]] is an aircraft collision avoidance [[Embedded System]]. It will constantly monitor its surroundings with some sort of physical sensor and other physical instrumentation tools and provide an output when a collision is imminent. I.e., a cyber-physical system will, in addition to what an [[Embedded System]] has, have processes such as sensors, actuators, or other physical systems that are ***tightly integrated*** with their environment.

Examples of [[Cyber-Physical Systems]]:
- Thermostats
	- Will use a temperature sensor of some kind along with an [[Embedded System]] to control the temperature of the environment

- Aircraft Collision Detection Systems
	- Will use a combination of physical sensors and other instrumentation to interact with an aircraft, physically steering it away from a collision

- Offsite Weather Instrumentation Tools

Examples of things that are indeed [[Embedded System|embedded systems]], but *not* [[Cyber-Physical Systems]]

- Digital Cameras
	- While a digital camera does indeed have physical sensors, such as the image sensor to capture images, it does not ***tightly*** ***integrate*** these sensors with the physical environment. It's sole purpose is to capture images, and nothing more.
- Quartz Watches
	- Has absolutely no physical sensors of any kind

