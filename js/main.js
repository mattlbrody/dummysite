var character = {
    charName: '',
    charHealth: 10,
    charDamage: 10,
    charArmor: 0
}

// each object represents 1 scene in the game
var scenes = [
    {
        sceneTitle: 'DevStar Quest',
        sceneContent: 'Start the game?',
        choice1: 'No',
        choice1Result: function() {
            updateGame('You lost the game before it even started :(', 'Try Again', "sure, let's do it!", scenes[0].choice2Result, scenes[0].choice2, scenes[0].choice2Result)
        },
        choice2: 'Start',
        choice2Result: function() {
            var charName = document.getElementById('charNameInput').value;
            console.log(charName.length)
            if(charName.length > 0) {
                document.getElementById('charInfo').style.display = 'flex';
                character.charName = charName;
                document.getElementById('charNameInput').style.display = 'none';
                updateGame(scenes[1].sceneTitle, scenes[1].sceneContent, scenes[1].choice1, scenes[1].choice1Result, scenes[1].choice2, scenes[1].choice2Result)
                updateCharacter(character.charName,character.charHealth, character.charDamage, character.charArmor)
            } else {
                document.getElementById('charNameInput').style.border = '1px solid red';
                alert('You need to enter a character name')
            }
        },
    },
    {
        sceneTitle: 'The Tavern',
        sceneContent: 'You walk into a christmas themed tavern, do you buy a drink or sit by the fire?',
        choice1: 'Buy a drink',
        choice1Result: function() {
            updateGame(scenes[2].sceneTitle, scenes[2].sceneContent, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
        },
        choice2: 'Sit by the fire',
        choice2Result: function() {
            updateGame(scenes[3].sceneTitle, scenes[3].sceneContent, scenes[3].choice1, scenes[3].choice1Result, scenes[3].choice2, scenes[3].choice2Result)
            character.charHealth = character.charHealth + 1;
            updateCharacter(character.charName,character.charHealth, character.charDamage, character.charArmor)
        },
    },
    {
        sceneTitle: 'At the bar',
        sceneContent: "You buy the fanciest drink they have, and right when it's handed to you, the big oaf to your right knocks it over. Do you kick his bar stool out from under him or ask him to buy you another one?",
        choice1: 'Kick his stool out',
        choice1Result: function() {
            alert("He's too heavy and you hurt your foot real bad on his stool, losing 3 health");
            character.charHealth = character.charHealth - 3;
            updateCharacter(character.charName,character.charHealth, character.charDamage, character.charArmor)
        },
        choice2: 'Ask him to buy you another one',
        choice2Result: function() {
            alert("He apologizes profusely and says he doesn't have any more money to buy another drink for you, but he does have a job he needs help with and he'd love for you to come along and make some coin.");
        },
    },
    {
        sceneTitle: 'By the fire',
        sceneContent: "The fire warms you and you start feeling better, your health increase by 1. There's an old woman sitting in the only chair, do you stand next to her and start a conversation or tell her to get up out of your chair?",
        choice1: 'Start a conversation',
        choice1Result: function() {
            alert('You start a conversation and she tells you all about her grandchildren. better head to the bar.');
            updateGame(scenes[2].sceneTitle, scenes[2].sceneContent, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
        },
        choice2: 'Tell her to get out of your chair',
        choice2Result: function() {
            alert('You tell her to get out of your chair and she starts berating you relentlessly, everyone else at the bar finds it hilarious and you lose confidence, -2 to your damage. Head to the bar to drink away your sorrows.');
            updateGame(scenes[2].sceneTitle, scenes[2].sceneContent, scenes[2].choice1, scenes[2].choice1Result, scenes[2].choice2, scenes[2].choice2Result)
            character.charDamage = character.charDamage - 2;
            updateCharacter(character.charName,character.charHealth, character.charDamage, character.charArmor)
        },
    }
]

function updateGame(title, content, choice1text, choice2text, choice1result, choice2result) {
    // update the page content
    document.getElementById('sceneTitle').textContent = title;
    document.getElementById('sceneContent').textContent = content;
    document.getElementById('choice1').textContent = choice1text;
    document.getElementById('choice1').onclick = choice2text;
    document.getElementById('choice2').textContent = choice1result;
    document.getElementById('choice2').onclick = choice2result;
    
    // play audio
    var x = document.getElementById("myAudio");
    x.play(); 
}

function updateCharacter(name, health, damage, armor) {
    document.getElementById('charName').textContent = name;
    document.getElementById('charHealth').textContent = health;
    document.getElementById('charDamage').textContent = damage;
    document.getElementById('charArmor').textContent = armor;
}

updateGame(scenes[0].sceneTitle, scenes[0].sceneContent, scenes[0].choice1, scenes[0].choice1Result, scenes[0].choice2, scenes[0].choice2Result);