# game01
Test project!
If you have any suggestions, feel free to help out

PST!
My current status and all my updates can be found below
--  --  --  


The goal is;
Make a funny text-based jrpg.
Provide a new account creation option that allows the user to save and load data anywhere!
There is no need for the user to create an account to play, but the user is limited to saving data locally.



//********
// Web;
//********
When you first enter webpage, you will see 2-3 button;
1) Continue  <---- This will only appear if you have created a new game on your computer.
2) Load data <---- Load your game data anywhere in the world!
3) Save data <---- Save your current game file. This will save both local and web.
4) New game  <---- Start new game.

Please note;
The setup of that isn't clear to me still :P
This is just an idea I have. I'll probably ignore that, but I need to add something
To allow users to save/load data. The user interface isn't that important!








//********
// API;
//********
As far as database creation goes, I'll try to make it super-easy. I would appreciate any tips and assistance :)
There will be one player data file from which the user will load data for the new game.
In this case, when the user chooses to save the game, it will save the current player data as well as another piece of
information in the saveData collection.
In addition, I will add a few random enemies who have very few properties, such as experience and health.


Note;
Still learning about API and mongoDB.
I will try to update this readme file what I have done so far.







//********
// UI;
//********
N/A

Note;
No ideea, but will add style when everything is working fine.
Maybe add some image & sound.
____________________________________________________________________________________________________________





Update note;


< 2022-07-13 >
1) npm init plus .gitignore
2) Got some issue with .gitignore :/
   It still push .env file for some reason. After 1h I did give up and did just add 1 module: express,
   but not until then .gitignore worked for some reason, dunno how. So I did add .env plus secret folder and it working fine now :)
3) Did install some modules, like mongoDB.


< 2022-07-21 >
1) Will add new project with the same name, so in this case v2. Reason: Will try different setup and merge v1 to v2 "IF" v2 works.
   Don't know how to save javascript file into mongoDB, and got error when I try to export javascript...