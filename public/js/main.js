// Just for testing if script is active or not;
alert('working?')


/**
 * Random number between a&b
 * @param {*} min 
 * @param {*} max 
 * @returns
 */
const rng = (min,max)=> Math.floor(Math.random() *(max-min+1)+min)


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::    H T M L    C O D E    :::::::::::::::::::::::::::::::::::::::::::::

/**
  * @param {default} = If argument is empty, then "startHtml" will be added as default
  * @param {optional} = Add your own html code, or link to other ...Html script
  * @module gameData
  * @description This function add HTML code into className "script".
  */
 let addHtml = (a=startHtml)=>{
    let script = document.querySelector('.script')
    // All HTML script here;


    switch (a) {


        case 'start':
            script.innerHTML=`
            <h1>Click New Game to start new Game! loadGame is NOT Active yet!;</h1>
            <p class="txt-main">Please click only once on New Game button! async data, so it will take around 2-40sec...</p>
            <div class="btn-main">
                <button class="newGame">New Game</button>
                <button class="loadGame">Load Game</button>
                <button class="saveGame">Save Game</button>
            </div>

            <div class="btn-openAll">
                <button class="openALL">Un-hide all main button</button>
            </div>
            `

            break;
           





        case 'newGame':
            script.innerHTML=`
            <h1>This is new HTML render! You are now in-game!</h1>
            <p class="txt-newGame-main">PST! To show load & new game button, press button below. Else just restart</p>
            <div class="btn-main">
                <button class="saveGame">Save Game</button>
                <button class="newGame">New Game</button>
                <button class="loadGame">Load Game</button>
            </div>

            <div class="btn-openAll">
                <button class="openALL">Show new/load game button</button>
            </div>

            <section class="GameStatus">
                <div class="playerStats">
                    <h2>Current level:</h2><p class="pLevel"></p>
                </div>
                <div class="testStats"></div>
            </section>
            `   
            document.querySelector('.pLevel').innerText = $gameData.player.level
            break;






    
        default:
            script.innerHTML = a
            break;
    }
    


    //script.innerHTML = a
}






addHtml('start')









// ::::::::    T O G G L E    H I D E    ::::::::::::::::::::::

/**
 * By @Umeka
 * @param  {...any} element Input your CSS Class here 
 * @description Can accept multiple css classes
 * @example {".className1", ".className2", "className3"}
 */
const classToggle = (...element)=>{
    element.forEach(ele => {
        document.querySelector(ele).classList.toggle('hide')
    });
}














// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::    G A M E    I N I T    :::::::::::::::::::::::::::::::::::::::::::





 /**
  * @static This is a static class.
  * @module gameData
  * @description GameData where all important value is stored.
  */
  function $gameData() {
    throw new Error('This is a static class');
}



// ***********************
// Add gameData class ;
// ***********************


class gameData {
    constructor(playerAPI) {
        $gameData.player = playerAPI[0],
        $gameData.enemy = {},
        $gameData.item = {},
        $gameData.test = {
            isActive : true,
            btnCount : 0,
            playerName : '',
            playerColor: '',
            selectedLanguage: false,
            language: ''
        }
    }
}






document.querySelector('.newGame').addEventListener('click', newGame)
//document.querySelector('.loadGame').addEventListener('click', loadGame)
//document.querySelector('.saveGame').addEventListener('click', saveGame)


async function newGame(){
    try{
        const response = await fetch('https://yushigame.herokuapp.com/api/db/players')
        const data = await response.json()
        console.log(data[0])
        if(data[0]._id === $gameData.player?._id){
            return console.warn(`Can't load same ID: ${data[0]._id}! Please save current data, or reset current game first!`)
        }
        new gameData(data)
        console.log(data[0]._id)
        console.log(`gameData is now added togheter with player API fetch!`);
        addHtml('newGame')
        classToggle('.newGame','.loadGame')
    }catch(error){
        console.log(error)
    }
}





























































/*
Comments;


Did remove this line of code;

    <h1>Player data. Test db only!</h1>
    <ul class="players">
    <% for(let i=0; i < info.length; i++) {%>
        <li class="player">
            <span>PlayerID:<%= info[i].playerID %></span><br>
            <span>Level:<%= info[i].level %></span><br>
            <span>XP:<%= info[i].xp %></span>
        </li>
    <% } %>
    </ul>

Note;
Will add similar data, will be good ideea to have this left just in case :P

























































































*/