# Unit 10 OOP Homework: Template Engine - Employee Summary

For this project I built a Node CLI that takes in user information at the command-line level about employees, and generates an HTML webpage that displays summaries for each person on cards. I tested my code with jest to ensure that it is maintainable, and all cases passed.

For the questions I used Inquirer. The biggest challenge was figuring out how to ask the same "core" questions of all the roles while keeping the code DRY, then going on to ask role-specific questions and save them all to the correct place. I realize the manager questions should only fire once before cycling through the other employee roles, but I didn't figure out how to do it.
 
I gained more understanding on how to use parameters (i.e. id, name, email, etc) correctly throughout each function and constructor. I ran into problems with parameters being out of order from file to file, or some files having incorrect capitalization. Before I knew that they were minor errors I really thought my code was broken beyond repair. It was a good lesson in not going overboard but instead backing up and checking simple things. 

This project was also a huge lesson in fitting a bunch of moving parts together, and understanding how they are routed. Sometimes I look at my code and understand it very well; other times I don't. I'm getting there.

As for the styling, I couldn't get cards to drop down to a new row, they just get slimmer and slimmer, and sometimes at various window sizes they become different sizes from one another. The project uses Bootstrap; it's sometimes difficult and time-consuming to override parts of the bootstrap styling, there is so much going on behind the scenes. Styling is important to me but I ran out of time to make it my ideal. I'll be going back in to fix those problems in order to include it in my portfolio.

At this point I have fulfilled the minimum project requirements:

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests pass.

