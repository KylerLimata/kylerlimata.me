+++
title = "Piston Connecting Rod"
date = 2025-04-30
extra.summary = "As part of my Internal Combustion Engines course, I designed a piston connecting rod, developing parametric stress models and performing fatigue analysis under cyclic loading to guide design decisions. I wrote Python scripts to compute stresses across the full loading cycle at high resolution, enabling rapid iteration of key design parameters. The finalized geometry was modeled in Fusion 360 and exported to ANSYS for finite element stress analysis, where simulation results were compared against analytical predictions to inform stress model refinements."
+++

# Overview
------

As part of my Internal Combustion Engines course, I designed a piston connecting rod, developing parametric stress models and performing fatigue analysis under cyclic loading to guide design decisions. I wrote Python scripts to compute stresses across the full loading cycle at high resolution, enabling rapid iteration of key design parameters. The finalized geometry was modeled in Fusion 360 and exported to ANSYS for finite element stress analysis, where simulation results were compared against analytical predictions to inform stress model refinements.

You can read the full project report [here](MME540_KylerLimata_GradProjectReport.pdf) and view the Python code for this project on the [GitHub repository](https://github.com/KylerLimata/mme540-connecting-rod-project)

# Design and Stress Analysis
------



# FEA Simulation
------

{% gallery(src="ansys_gallery.json") %}
It was necessary to determine the validity of the derived stress equations at each point using Finite Element Analysis in ANSYS. Due to issues with ANSYS, analysis was done at the crank angle of 6.38 radians - just at the start of the power stroke - instead of over the entire loading cycle. Initial results did show while points 1 and 4 were strongly accurate, refinements needed to be made to the design assumptions at points 2 and 3, including removing the stress concentration factor at point 3 and changing the representation of point 2. The final ANSYS results for normal, shear, and principal stresses are shown here.
{% end %}