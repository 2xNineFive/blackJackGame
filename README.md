This project is... a game of black jack! 

I started the project by cloning a repo from my instructors' GitHub. Then, I pulled the repo to Git so I could work on it locally. 

I started off trying to style the page in CSS, but I was not able get it done efficiently. So I just grabbed the style from my instructors' GitHub, added it to my repo, and committed it to my repo. 

My next step was to start the javascript program for my game. I tried following the instructions, but I was really lost. I understand what I want to do. I just struggle writing out my thoughts in Javascript-- But that does not stop me. 

I Googled "How to Make a Black Jack Game." I skimmed through several articles and Youtube videos until I found a video that I liked. I followed along by coding the program. I am surprised that I actually understand what is going on. When I didn't understand something, I played with the code to try to understand it. I learned so much--- and my self-esteem took off to the moon! 

But I am back to earth now. I am going to reference the code I wrote and experimented with and adapt it to this project. My instructors created HTML and JS documents with pre-written code. I am going to try to understand it--- and make my program work!

---------------------

Update! 
October 25,2020

This is what I accmplished before today's class on this day:


    I was able to get the program to work. I watched a youtube video and coded along. I then integrated that JS code into my blackjackgame repo. I updated the index.html file so that it could communicate with the script and CSS. I was also able to get the game to display the result of the game and function properly. Once that was working, I noticed that the deal button was not working. 


    I asked a classmate for help, but we were unable to figure it out together. I continued tinkering with the code. Eventually, a random idea occured to me to create a function and pass it the      buildDeck();   ,    shuffleDeck();   &    startGame();    functions because that's what window.onload was doing. And it worked... 


    Well sort of. It just bomborded ONLY the player-hand with cards I am just understanding why as I write this. The stand button wasnt working either. Anywho, I was trying to figure out what was going on here. I eventually came to the conclusion that I needed to initialize all the values. I knew that restartGame function needed to set EVERYTHING back to window.onload somehow. And that brings me to...


With the help of my instructor, Brian Abdo, this is what I accomplished on this day:
    Mr. Abdo helped me make my deal button work. We changed the scope of my event listeners. I do not remember where they were initially, but we set them up inside of window.onload so they would be listening for events immediately. After that, we got to work on initializing all the values. There was so much done. To sum it up, we targeted the the elements in the DOM and set everything to the values from window.load. We also reset the global values by copying the initial variables and their values into restartGame function. 

    I saw Mr. Abdo go into some crazy part of VSCODE where we were looking behgind the engine of HTML code. Apparently, an HTML element is in itlelf an object because it stores its own (metadat?). Idk that was really cool. Coding is so cool. 


So right now, my main goal with this repo is to get the deal button to turn on/off. At this stage in development, the deal button can bee pushed at any moment in time. And that creates an unfair advantage. Especially considering that I plan on adding bets to the game in the future. 

But right now, im going to try setting window.onload = false; and see if I can use that statement to turn it on/off. I am trying to figure out how to make the deal button only be active after hitting the stand button, and then it needs to turn off. Maybe a timer?

Wish me luck! (:
---------------------