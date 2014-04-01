Parking-Lot-Monitor
===================
Idea: Parking Spot Counter

Details:

BYU frequently deals with complaints about poor parking availability and many students are 	subject to wandering around parking lots on a daily basis. 	Additional parking lots are costly and don't seem to be high on 	BYU's priority list.
The idea of this application is to create a place for students to log in and see the total number of cars that are currently in a parking lot. Using existing BYU 	webcams, the application will track the number of cars entering and exiting a particular parking lot, providing the user with a good idea of whether that parking lot will have spaces available.

The application may keep track of some simple statistics, but more complicated algorithms could be added to forecast when parking areas will be full (perhaps accounting for certain local events).
Another extension of this idea could give the user the option of selecting which building they would like to be closest to, and the application would suggest the best open parking lot.

Ideally, this will become a mobile app that would talk to the user indicating the availability of parking spaces. It would have one setting in which the app tracks one or more parking lots chosen by the user. It will also have an automatic setting in which the app tracks the user's location and gives updates on the parking lot that he enters. 

For this semester, we would like to make it work in the web browser. It will be able to track one parking lot.

Frameworks: 

MySQL for storing parking lot information

Javascript node.js for back end and Angular for front end

Concept Webpage Image: https://drive.google.com/file/d/0B8d6etq7zPGWT0VNLWVYMHMyVUU/edit?usp=sharing

The above webpage is a single-page, vertical design that should be intuitive upon inspection. The user will simply enter their desired destination and directions to a parking lot near that location with available parking spaces will be provided. The user may also click "nearby" in order to be shown parking availability close to where they currently are. Clicking "about" or "contact" will simply scroll further down the page to where the desired information is provided.
