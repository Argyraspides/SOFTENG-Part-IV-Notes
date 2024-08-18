Variables to keep the same:
- Training dataset
	- Dataset split, including test, validation, and training
	- Image size (640x640)
- Epochs, batch sizes, frozen layers, 


**PREPARATION:**

- Label EVEN MORE DATA (for testing, specifically)! Gather some e-scooter rider footage from online, download it, and label it using Roboflow.

**Plan:**

- Train a few models FROM SCRATCH (again, from BOTH roboflow and locally). KEEP ALL DATA.
	- Train a small model, medium model, and large model on the dataset. Report findings.


*Uh oh! These are shit. Try again with pre-trained models.*

- Train a few pretrained models meant for DETECTING HUMANS
	- Source at least 3 different models from three different sources

*Should perform a LOT better. Make sure to play around with frozen layer count.*

- Train a few pretrained models meant for NOT DETECTING HUMANS (do like one to detect plants or smth lol -- something completely unrelated)

*Should perform worse. Make sure to keep frozen layer count the same. Now you can confirm that using pretrained models on humans is a potential way to boost e-scooter rider detection accuracy and performance.*

*Uh oh! Model doesn't perform well on occluded environments. New study: how to improve occlusion detection? Wait for adwait*

While you wait for adwait, you will:

Test out a combination of YOLO + SAM to see if that increases accuracy or not.


