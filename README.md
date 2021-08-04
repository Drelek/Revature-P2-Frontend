#  Bohemian Grove 2.0

   [View Our Backend Repository](https://github.com/RevatureRobert/Project1-BohemianGrove-Backend)

## About
Bohemian Grove is the message board for those in the know! It is a message board to share any conspiracy theories while your identity is safely secured.
This is the mobile version of our application that works on both Android and iOS.

## Technologies 
  * Frontend: React Native, Redux, Hooks, Expo, React Navigation, TypeScript
  * Serverless Backend: NodeJs, AWS Lambda, AWS DynamoDB, AWS SAM, AWS Cognito, Docker Container, TypeScript
  * Styling: React Native Paper, Google Fonts, Canvas, Material Icons, React Navigation
  * Testing: Jest


## Features 

  ## User Authentication 
  We decided on implementing a more robust and scalable user authentication and the answer we found was AWS Cognito!
  AWS Cognito managed user authentication, allowing users to create, confirm and login through Amazon's service. We used the token provided from Cognito as a  
  secondary valdiation check and security measure for accessing core components and screens in our mobile application.

  ## Search Bar

  The search bar allows users to search for users. The user's input queries the database and returns the closest matches. The search will return nothing if there   is no match or will return any user profile cards that match the input 

  ## User Features

  We allow users to create, delete, and update their accounts and their post accordingly. Users are able to follow specific users on the application and only see   posts of users they have followed. Users can also like and reply to any post.

  ## UI Features

  We used a few libraries like React Native Paper and Material Icon to further improve user experience as well as keeping the theme of our application intact. We   customized components, and used industry standard implementations to give our users a sleek modern experience.  We even have a toggle which will help our users   save on battery life when using our application for prolonged time! 
  
  ## Navigation 
  
  We used React Navigation to allow users to seamlessly navigate through our application with the use of our DrawerSlide.

  ##Challenges
  We faced many challenges throughout the project. One such one was using AWS DynamoDB's Document Client V3 with React Native as we needed the use of Sets but     this was not something supported by the Document Client. We solved this issue by switching to the standard client. We also faced keyboard popup issues as the Android and iOS keyboard popups   are very different in nature. KeyboardAvoidView was not the solution as we sought for the textinputs to lay ontop of the keyboard popup. We solved it by using   keyboard events to create an offset for the textinputs to get our desired outcomes.

 ## Future Goals!

 We plan to add News, direct messaging, and refactor code to make it even more scalable.

## DEMO

![](gifREADME.gif)
