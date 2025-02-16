import { saveProgress } from './login.js';
let writingNonce = 0;

window.levelIndex = null;
window.sceneIndex = null;
window.dialogIndex = null;
var isAdvancable = true;
var activeCharacters = [];

document.getElementById("dialogue-box-container").onclick = advance;
document.getElementById("continue-signed-out").onclick = startGame;

const chadImages = [
    'assets/chad/chad 1.png',
    'assets/chad/chad 2.png',
    'assets/chad/chad 3.png'
];

const claireImages = [
    'assets/claire/claire 1.png',
    'assets/claire/claire 2.png',
    'assets/claire/claire 3.png',
    'assets/claire/claire 4.png',
    'assets/claire/claire 5.png'
];

export function startGame(){

    let dialoguebox = document.getElementById("dialogue-box-container");
    dialoguebox.classList.remove("hidden");

    if (window.levelIndex == null){
        window.levelIndex = 0;
        window.sceneIndex = "S1";
        window.dialogIndex = 0;
    }
    getAndShowDialog()
}


export function showHistory(){
    let popup = document.getElementById('history-popup');
    popup.style.opacity = 1;
    popup.style.pointerEvents = 'all';

    let history = document.getElementById("history");
    history.scrollTop = history.scrollHeight;
}

export function hideHistory(){
    let popup = document.getElementById('history-popup');
    popup.style.opacity = 0;
    popup.style.pointerEvents = 'none';
}

document.getElementById('continue-signed-out').addEventListener('click', function() {
    let popup = document.getElementById('sign-in-popup');
    popup.style.opacity = 0;
    popup.style.pointerEvents = 'none';
});

function showDialogueFrom(person, dialogue, hasChoice) {
    isAdvancable = false;
    const dialogueBox = document.getElementById('dialogue-box');
    const personName = document.getElementById('person-name').children[0];
    personName.textContent = person;
    dialogueBox.textContent = '';

    const thisWritingNonce = Math.random();
    writingNonce = thisWritingNonce;

    let i = 0;
    function typeWriter() {
        if (i < dialogue.length) {
            if (thisWritingNonce != writingNonce) return;
            dialogueBox.textContent += dialogue.charAt(i);
            i++;
            setTimeout(typeWriter, 10);
        }
    }
    typeWriter();
    setTimeout(function(){
        if (hasChoice){
            isAdvancable = false;
            console.log("choice time (will move to new scene after this)")
            let choiceOptions = levels[levelIndex][sceneIndex].getChoices();
            console.log(choiceOptions);
            document.getElementById("choices").style.opacity = 1;
            document.getElementById("choices").style.pointerEvents = "all";
    
            let dialogueBox = document.getElementById("dialogue-box-container");
            dialogueBox.style.opacity = 0.5;
    
            for (let i = 0; i < choiceOptions.length; i++){
                let html = `<button class="choice">${choiceOptions[i].getChoice()}</button>`
                let obj = htmlToObj(html);
                obj.onclick = function() { choose(choiceOptions[i].getSceneForward()) };
                document.getElementById("choice-holder").appendChild(obj);
            }
        }
    }, (dialogue.length * 10) + 100);
    isAdvancable = true;
    
}

var visible_ids = [];
function addPerson(id) {
    const person = document.getElementById(id);

    if (person) {
        person.style.display = 'block';
        visible_ids.push(id);
        const totalVisible = visible_ids.length;
        const containerWidth = document.querySelector('.people').offsetWidth;
        const personWidth = person.offsetWidth;
        const spacing = (containerWidth - (totalVisible * personWidth)) / (totalVisible + 1);

        visible_ids.forEach((visibleId, index) => {
            const visiblePerson = document.getElementById(visibleId);
            visiblePerson.style.left = `${spacing + index * (personWidth + spacing)}px`;
        });
    }
}

function removePerson(id) {
        
}


async function getAndShowDialog(){

    let dialog = levels[levelIndex][sceneIndex].getDialog(dialogIndex);
    await saveProgress();
    dialogIndex++;
    showDialogueFrom(dialog.characterName, dialog.text, dialog.hasChoice);
    document.getElementById("history").innerHTML += `<p>${dialog.characterName}</p>`
    document.getElementById("history").innerHTML += `<p>${dialog.text}</p>`

    let people = dialog.getActiveCharacters();
    activeCharacters.forEach(character => removePerson(character));
    activeCharacters = people;
    let currentId = 1;
    people.forEach(character => {
        addPerson(character);
    });

    
}

function choose(forward){
    console.log("chose " + forward)
    sceneIndex = forward;
    if (sceneIndex == -1){
        console.log("Level One Fin")
    }
    dialogIndex = 0;
    isAdvancable = true;
    document.getElementById("choice-holder").innerHTML = "";
    document.getElementById("choices").style.opacity = 0;
    document.getElementById("choices").style.pointerEvents = "none";

    let dialogueBox = document.getElementById("dialogue-box-container");
    dialogueBox.style.opacity = 1;
    getAndShowDialog();
}

function htmlToObj(html) {
    const div = document.createElement('div');
    div.innerHTML = html
    return div.children[0]
}

function advance(){
    if (isAdvancable){
        getAndShowDialog();
    }
}