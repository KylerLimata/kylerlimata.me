+++
title = "Spherical Pulsation Dampener"
date = 2022-04-30
extra.summary = "For my Capstone Project, I collaborated with a partner to design and prototype a spherical fluid pulsation dampener demonstrating a passive, no-moving-parts fluid dampening concept based on prior research. I was responsible for modeling the components and producing detailed 2D engineering drawings in Autodesk Inventor, applying GD&T standards to communicate the design. I extracted the internal fluid volume from the assembly for CFD analysis in ANSYS Fluent, where simulation results verified the vortex formation required for effective pulsation dampening. After evaluating machining and additive manufacturing options, we selected 3D printing to meet a $500 budget constraint. Performance was validated by designing and building a custom test apparatus using pressure transducers and a Raspberry Pi to measure inlet and outlet pressure response."
extra.icon="velocity_streamline_260gph.png"
+++

# Overview
------

For my Capstone Project, I collaborated with a partner to design and prototype a spherical fluid pulsation dampener demonstrating a passive, no-moving-parts fluid dampening concept based on prior research. I was responsible for modeling the components and producing detailed 2D engineering drawings in Autodesk Inventor, applying GD&T standards to communicate the design. I extracted the internal fluid volume from the assembly for CFD analysis in ANSYS Fluent, where simulation results verified the vortex formation required for effective pulsation dampening. After evaluating machining and additive manufacturing options, we selected 3D printing to meet a $500 budget constraint. Performance was validated by designing and building a custom test apparatus using pressure transducers and a Raspberry Pi to measure inlet and outlet pressure response.

# Prototype Creation
------

## CAD Modelling

{% gallery(src="assembly_gallery.json") %}
One of my responsibilities was creating the CAD model for the prototype. After iterating on the design, we settled on an assembly consisting of four different parts: two housing components with built-in pipes and separate receiver and distributor plates. The plates are only shown separately for presentation purposes as they were each 3D printed with half of the housing.
{% end %}

## CAD Drafting
{% gallery(src="drawing_gallery.json") %}
I was also responsible for converting the CAD model into the drawings seen here. These drawings follow the general dimensioning guidelines and are created, including the appropriate symbols for holes, radii, and diameters.
{% end %}

## ANSYS Simulation

{% gallery(src="ansys_gallery.json") %}

From the assembly model, I was able to subtractively model the internal geometry in Inventor, which was required for simulating the internal fluid dynamics in ANSYS. This simulation was performed in ANSYS fluent, which provided a look at the fluid velocity streamlines. Not only was the expected vortex clearly demonstrated, but fluid velocity rapidly slowed as it left the nozzles of the distributor plate, only speeding back up in the receiver plate, indicative of the desired dampening effect.<br><br>

Fluent also provided fluid pressure data which was fed into ANSYS structural, allowing us to verify that the dampener was structurally stable under the fluid loading conditions.

{% end %} 

# Testing and Results
------
## Development of Testing Apparatus

{% youtube(id="j80AP9xh_D0") %}
To test the prototype, we used a cheap aquarium pump and pressure sensors as close to the inlet and outlet as possible. These pressure sensors had a range of 0 to 10 psi, or 0 to 64 kPa. With an input of 5v, the pressure range would translate to an output of 0.5v to 4.5v, but the output range would decrease to match a lower input voltage.
{% end %}

{% image_with_text(src="raspberrypi.jpg",caption="Raspberry Pi Setup") %}
In order to record data, I also wrote a command line program for the Raspberry Pi Zero W that would interface with an ADS1115 Analog to Digital converter. This program would record data for a specified amount of seconds and a specified time interval. It would then output a graph for immediate viewing and an Excel file containing the recorded data. The setup for the raspberry pi is shown on the right and the code for the command line program can be found on the <a href="https://github.com/KylerLimata/pressure_recorder">GitHub Repository</a>.
{% end %}

## Results

{% gallery(src="trials_gallery.json") %}
The results of our experiments can be seen here; while the damping effect was not as much as initially expected, the actual damping effect is clearly demonstrated. As the graphs show, the inlet pressure significantly and unpredicably fluctuates while outlet pressure is lower and almost perfectly smooth, at least in comparison to the inlet pressure.
{% end %}