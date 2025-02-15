
class Scene{
    constructor(dialogOptions, choiceOptions){
        this.dialogOptions = dialogOptions; 
        this.choiceOptions = choiceOptions;
        this.index = 0;
    }

    getDialog(){
        if (this.index == this.dialogOptions.length){
            return null;
        }
        let toreturn = this.dialogOptions[this.index];
        this.index++;
        return toreturn
    }

    getChoices(){
        return this.choiceOptions;
    }

    
}

class DialogOption{
    constructor(text, characterName, hasChoice, activeCharacters){
        this.text = text;
        this.characterName = characterName;
        this.hasChoice = hasChoice;
        this.activeCharacters = activeCharacters;
    }

    getDialog(){
        return this.text;
    }

    getCharacterName(){
        return this.characterName;
    }

    getActiveCharacters(){
        return this.activeCharacters;
        // return the active character images
    }
}

class ChoiceOption{
    constructor(choiceText, sceneForward){
        this.choiceText = choiceText;
        this.sceneForward = sceneForward;
    }

    getChoice(){
        return this.choiceText;
    }

    getSceneForward(){
        return this.sceneForward;
    }
}


const levels = [
    {
        0: new Scene(
            [
                new DialogOption("Hello dialog option one", "Fizz (Your Phone)", false, ["raima"]),
                new DialogOption("Hi", "Alice", false, ["alice.png"]),
                new DialogOption("now how you doing", "tanuj", true, ["tanuj.png"])
            ],
            [
                new ChoiceOption("Good", 1),
                new ChoiceOption("Bad", 2)
            ],
            0
        ),
    }
]
    

    
