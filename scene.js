
class Scene{
    constructor(dialogOptions, choiceOptions){
        this.dialogOptions = dialogOptions; 
        this.choiceOptions = choiceOptions;
    }

    getDialog(n){
        return this.dialogOptions[n];
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
        "S1": new Scene(
            [
                new DialogOption("Dude, this place is insane! I'm grabbing a drink. You want anything?", "Claire", false, ["Claire"]),
                new DialogOption("Hmm…maybe. What are you thinking?", "You", false, ["You"]),
                new DialogOption("Gonna start with a beer. Then maybe a few vodka shots later. And I'll probably grab a seltzer at some point.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Okay, just…take it easy. Seriously.", "S2A"),
                new ChoiceOption("Alright, but I'm keeping loose track. Just…don't get too messed up.", "S2B"),
                new ChoiceOption("Sounds good. Let's party!", "S2C")
            ],
            "S1"
        ),
        "S2A": new Scene(
            [
                new DialogOption("Here we go! First beer. Shots later. Chad's over there. Wish me luck!", "Claire", false, ["Claire"]),
                new DialogOption("Good luck! Just…remember what you said about taking it easy, okay?", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. I got this.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Okay, go get her. But seriously, Claire, I'm serious. Pace yourself.", "S3A1"),
                new ChoiceOption("Alright, have fun. Just…try not to do anything too crazy.", "S3A2"),
                new ChoiceOption("Okay, but water only if you get really sloppy. Seriously.", "S3A3")
            ],
            "S2A"
        ),
        "S2B": new Scene(
            [
                new DialogOption("Here you go. This is gonna be good. First beer, then the vodka later.", "Claire", false, ["Claire"]),
                new DialogOption("Okay, just…don't forget I'm sort of keeping track. Remember, just a few shots, okay? And remember the seltzer too.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. You're, like, my…vague sense of responsibility. I appreciate it.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Just trying to be a somewhat good DD. Seriously, Claire, be reasonably careful.", "S3B1"),
                new ChoiceOption("Alright, if you start getting noticeably weird, I might say something. But you do you.", "S3B2"),
                new ChoiceOption("Okay, but…just…have fun, I guess.", "S3B3")
            ],
            "S2B"
        ),
        "S2C": new Scene(
            [
                new DialogOption("Let's do this! First beer down! Shots soon!", "Claire", false, ["Claire"]),
                new DialogOption("Just…remember I'm driving later, okay? And remember, just a few shots. Don't want you doing anything you'll regret too much.", "You", false, ["You"]),
                new DialogOption("Relax! I'm good! Besides, a little bit of fun never hurt anyone. Right?", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Yeah, but pace yourself. Seriously.", "S3C1"),
                new ChoiceOption("Alright, but I'm not really babysitting. Just…try not to, like, die or something.", "S3C2"),
                new ChoiceOption("Sounds good! Let's go!", "S3C3")
            ],
            "S2C"
        ),
        "S3A1": new Scene(
            [
                new DialogOption("She said yes! We're gonna grab another drink and then maybe hit the dance floor. This party is awesome!", "Claire", false, ["Claire"]),
                new DialogOption("That sounds fun! Just…remember what we talked about, okay? Pacing is key. And hey, maybe grab a seltzer between drinks? Keeps you hydrated and helps you last longer. Seriously, Claire, I'm not trying to be a buzzkill, but I want us both to have a good night, and that means being responsible.", "You", false, ["You"]),
                new DialogOption("Yeah, you're right. I'll be careful.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Sounds good! Just…don't forget what we talked about, okay? Pace yourself. Seriously, Claire, it's not worth it to get totally wasted. Think about tomorrow.", "S4A1a"),
                new ChoiceOption("Have fun! Just…try not to go too crazy, okay? I mean, it's a party, right? Just…be sensible. You know what I mean.", "S4A1b"),
                new ChoiceOption("Alright, have fun! Just…try not to do anything too stupid. I'm gonna go find some other people to talk to.", "S4A1c")
            ],
            "S3A1"
        ),
        "S3A2": new Scene(
            [
                new DialogOption("She's totally into me! We're gonna grab another drink and then maybe hit the dance floor. This party is awesome!", "Claire", false, ["Claire"]),
                new DialogOption("That's great, Claire! Just…try not to go too overboard, okay? I mean, it's a party, right? Just…be sensible. You know what I mean. Have fun, but, like, not too much fun. You know?", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I got it.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Sounds good! Just…have a good time. Don't, like, do anything you'll really regret.", "S4A2a"),
                new ChoiceOption("Alright, but maybe alternate with a seltzer at some point? Just…you know…for hydration purposes. Wouldn't want you, like, totally losing it later.", "S4A2b"),
                new ChoiceOption("Awesome! I think I'll grab another drink too. Let's do this! This party is getting good.", "S4A2c")
            ],
            "S3A2"
        ),
        "S3A3": new Scene(
            [
                new DialogOption("Chad's awesome! We're gonna hit the dance floor soon. This party is getting wild!", "Claire", false, ["Claire"]),
                new DialogOption("Sounds good! I'm feeling this party too. Another vodka soda, maybe?", "You", false, ["You"]),
                new DialogOption("Yeah, let's do it!", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Yeah, let's do it! Another round sounds perfect. Let's go find the bar.", "S4A3a"),
                new ChoiceOption("Maybe just one more. I should probably…you know…not get too messed up. But yeah, let's keep the party going.", "S4A3b"),
                new ChoiceOption("Yeah, sounds good. Just…we should probably make sure we can still, like, get home later. Right?", "S4A3c")
            ],
            "S3A3"
        ),
        "S3B1": new Scene(
            [
                new DialogOption("Alright, time for shot number one! Wish me luck!", "Claire", false, ["Claire"]),
                new DialogOption("Just trying to be a somewhat good DD. Seriously, Claire, be reasonably careful. I mean, it's your night, but I also gotta get us home safely, you know?", "You", false, ["You"]),
                new DialogOption("Yeah, I know. I'll be careful.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Good luck! Just…remember to grab a seltzer after that one, okay? Hydration is important.", "S4B1a"),
                new ChoiceOption("(You don't say anything, but you watch her as he takes the shot, gauging his reaction.)", "S4B1b"),
                new ChoiceOption("Alright, but just one shot for now, okay? Let's keep it to one shot per hour, deal?", "S4B1c")
            ],
            "S3B1"
        ),
        "S3B2": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("Alright, if you start getting noticeably weird, I might say something. But you do you. Just…try not to, like, fall down the stairs or something. That'd be embarrassing for both of us.", "You", false, ["You"]),
                new DialogOption("Yeah, I got this. Don't worry!", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("(You say nothing.)", "S4B2a"),
                new ChoiceOption("(You say nothing, but you glance over at her as he takes the shot.)", "S4B2b"),
                new ChoiceOption("Hey, slow down there! Maybe space things out a bit?", "S4B2c")
            ],
            "S3B2"
        ),
        "S3B3": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("Okay, but…just…have fun, I guess. I'm gonna go find some other people to talk to.", "You", false, ["You"]),
                new DialogOption("Cool, see you later!", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("(You say nothing. You've already walked away.)", "S4B3a"),
                new ChoiceOption("(You say nothing, even though you vaguely see her taking shots.)", "S4B3b"),
                new ChoiceOption("Claire, you okay? Maybe you should slow down a bit.", "S4B3c")
            ],
            "S3B3"
        ),
        "S3C1": new Scene(
            [
                new DialogOption("Alright, shot number one! Let's do this!", "Claire", false, ["Claire"]),
                new DialogOption("Yeah, but pace yourself. Seriously. It's a long night, and I'd rather not have to deal with you if you get too messed up. Plus, you know Chad's going to be judging you if you're acting a fool.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. I'll be careful.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Hey, remember we talked about pacing? Maybe just one shot for now, okay?", "S4C1a"),
                new ChoiceOption("Sounds good, but maybe grab a seltzer or some water after that one? It'll help you last longer.", "S4C1b"),
                new ChoiceOption("Alright, but I'm keeping an eye on you. Just…try not to go too hard too fast.", "S4C1c")
            ],
            "S3C1"
        ),
        "S3C2": new Scene(
            [
                new DialogOption("Alright, shots time!", "Claire", false, ["Claire"]),
                new DialogOption("Alright, but I'm not really babysitting. Just…try not to, like, die or something. And I'm not paying for your cab if you're too messed up to drive home. Just sayin'.", "You", false, ["You"]),
                new DialogOption("Whatever, I'll be fine!", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Yeah, whatever. Just…try not to make a mess.", "S4C2a"),
                new ChoiceOption("Just…be careful, okay? I mean, you do you, but…", "S4C2b"),
                new ChoiceOption("Alright, have fun. I'm gonna go talk to some other people.", "S4C2c")
            ],
            "S3C2"
        ),
        "S3C3": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("Sounds good! Let's go!", "You", false, ["You"]),
                new DialogOption("Let's do this!", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Yeah! Let's do it! I'm gonna grab another drink too.", "S4C3a"),
                new ChoiceOption("Sounds good…but maybe just one shot for now? We should probably pace ourselves a little bit.", "S4C3b"),
                new ChoiceOption("(You say nothing and join her at the bar, ready to take shots.)", "S4C3c")
            ],
            "S3C3"
        ),
        "S4A1a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, you're right. Good call. Just one for now. Don’t want to, like, totally lose it tonight. Especially with Chad here. Don’t want to embarrass myself.", "Claire", true, ["Claire"]),
                new DialogOption("Actually, she's good for now. We're pacing ourselves tonight.", "You", false, ["You"]),
                new DialogOption("Chad, sensing your firmness, backs off. Claire takes her one shot and then joins Chad on the dance floor. You keep an eye on them, but Claire seems to be having a good time and sticking to her plan.", "Narrator", true, [])
            ],
            [
                new ChoiceOption("That's the plan! I'm glad you're sticking to it. I'm proud of you.", "END"),
                new ChoiceOption("Good. Now, let's go hit that dance floor...responsibly.", "END")
            ],
            "S4A1a"
        ),
        "S4A1b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. Just one. But…it’s a party!", "Claire", true, ["Claire"]),
                new DialogOption("You hesitate. You’re not sure if you should intervene. Claire did say she was only having one, but Chad is being pushy…", "Narrator", true, [])
            ],
            [
                new ChoiceOption("You know what? It's your night. Go for it. Just don't overdo it!", "END"),
                new ChoiceOption("Hey, Chad...she did say just one. So, yeah...just one.", "END")
            ],
            "S4A1b"
        ),
        "S4A1c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Alright, have fun! Just…try not to do anything too stupid. I’m gonna go find some other people to talk to.", "You", false, ["You"]),
                new DialogOption("Claire, feeling a little emboldened by your lack of attention and Chad's flattery, decides to take him up on the offer.", "Narrator", true, [])
            ],
            [
                new ChoiceOption("(You shrug it off.) See ya later!", "END"),
                new ChoiceOption("(You feel guilty.) Well, I'll go check on Claire later.", "END")
            ],
            "S4A1c"
        ),
        "S4A2a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Sounds good! Just…have a good time. Don’t, like, do anything you’ll really regret.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("As long as it's a good time, go for it!", "END"),
                new ChoiceOption("Try not to start any fights. It's really annoying to break those up.", "END")
            ],
            "S4A2a"
        ),
        "S4A2b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Alright, but maybe alternate with a seltzer at some point? Just…you know…for hydration purposes. Wouldn’t want you, like, totally losing it later.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I want to go home eventually...so yeah, seltzer sounds great!", "END"),
                new ChoiceOption("I am driving you, after all. Please, seltzer!", "END")
            ],
            "S4A2b"
        ),
        "S4A2c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Awesome! I think I’ll grab another drink too. Let’s do this! This party is getting good.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("Shot, shot, shot, shot, everybody!", "END"),
                new ChoiceOption("I'm ready for some fun! Let's get this party started!", "END")
            ],
            "S4A2c"
        ),
        "S4A3a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Awesome! Let’s go!", "Claire", false, ["Claire"]),
                new DialogOption("You're busy ordering your drink and don't pay much attention to their interaction. You're both now prioritizing the party over responsible DDing.", "Narrator", true, ["Narrator"])
            ],
            [
                new ChoiceOption("I'm down for fun. Let's do this!", "END"),
                new ChoiceOption("I will take us home...eventually.", "END")
            ],
            "S4A3a"
        ),
        "S4A3b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, okay. One more. But then we’re dancing!", "Claire", false, ["Claire"]),
                new DialogOption("You notice Claire talking to Chad and hear her say \"sure.\" You feel a slight pang of guilt but shrug it off, telling yourself you'll keep an eye on things.", "Narrator", true, ["Narrator"])
            ],
            [
                new ChoiceOption("Just one more and then Chad better make good on these dance moves!", "END"),
                new ChoiceOption("I'm trying to drive tonight...okay, just one more.", "END")
            ],
            "S4A3b"
        ),
        "S4A3c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, we'll figure it out.", "Claire", false, ["Claire"]),
                new DialogOption("You're preoccupied with your own conversation and only half-hear this exchange. You're vaguely concerned about getting home later but don't actively intervene or set any limits.", "Narrator", true, ["Narrator"])
            ],
            [
                new ChoiceOption("Sounds like fun. I'm sure we'll be fine!", "END"),
                new ChoiceOption("I'm more worried about the drive than the dance moves.", "END")
            ],
            "S4A3c"
        ),
        "S4B1a": new Scene(
            [
                new DialogOption("Alright, time for shot number one! Wish me luck!", "Claire", false, ["Claire"]),
                new DialogOption("Good luck! Just…remember to grab a seltzer after that one, okay? Hydration is important.", "You", false, ["You"]),
                new DialogOption("Yeah, good call. Don't want to get dehydrated.", "Claire", true, ["Claire"]),
                new DialogOption("Claire gestures toward her seltzer. Chad, sensing she's not interested in getting overly intoxicated, moves on.", "Narrator", true, [])
            ],
            [
                new ChoiceOption("Seltzers are a lifesaver, especially at these parties!", "END"),
                new ChoiceOption("At least I won't be driving a slob home tonight.", "END")
            ],
            "S4B1a"
        ),
        "S4B1b": new Scene(
            [
                new DialogOption("Alright, time for shot number one! Wish me luck!", "Claire", false, ["Claire"]),
                new DialogOption("(You don't say anything, but you watch her as she takes the shot, gauging her reaction. She seems to handle it well.)", "You", false, ["You"]),
                new DialogOption("Claire takes her shot and then chats with some friends. She seems to be having fun but not overdoing it.", "Narrator", true, []),
                new DialogOption("Claire: Thanks, but I think I'm good for now.", "Claire", true, ["Claire"]),
                new DialogOption("Chad: (Chad tries to push it a little, saying something like, \"Come on, just one more,\", but Claire stands her ground. You're ready to step in if the situation escalates, but she seems to be handling it.)", "Chad", true, ["Chad"])
            ],
            [
                new ChoiceOption("Good for her. Keep going, Claire!", "END"),
                new ChoiceOption("I am ready to intervene if I need to.", "END")
            ],
            "S4B1b"
        ),
        "S4B1c": new Scene(
            [
                new DialogOption("Alright, time for shot number one! Wish me luck!", "Claire", false, ["Claire"]),
                new DialogOption("Alright, but just one shot for now, okay? Let's keep it to one shot per hour, deal?", "You", false, ["You"]),
                new DialogOption("Deal! You're on. One shot per hour. I can handle that.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Okay, but I am timing you.", "END"),
                new ChoiceOption("I'm not letting you drive me into a ditch.", "END")
            ],
            "S4B1c"
        ),
        "S4B2a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing.)", "You", false, ["You"]),
                new DialogOption("Claire takes her shot. You continue your conversation with someone else, not paying any further attention to her.", "Narrator", true, [])
            ],
            [
                new ChoiceOption("See ya later, Claire!", "END"),
                new ChoiceOption("I'll call her a taxi later.", "END")
            ],
            "S4B2a"
        ),
        "S4B2b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing, but you glance over at her as she takes the shot. You register that she's had one shot, but that's about it.)", "You", false, ["You"]),
                new DialogOption("Claire chats with some friends for a while. She seems to be having a good time.", "Narrator", true, [])
            ],
            [
                new ChoiceOption("She seems to be having fun, at least.", "END"),
                new ChoiceOption("One shot can't kill ya.", "END")
            ],
            "S4B2b"
        ),
        "S4B2c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("You say nothing.", "You", false, ["You"]),
                new DialogOption("She looks at you as she takes the first shot, her eyes wide with anticipation. She then goes for another drink, looking back at you with a smirk.", "Narrator", true, []),
                new DialogOption("Okay, time for another one!", "Claire", true, ["Claire"]),
                new DialogOption("Yeah, but remember we talked about keeping it reasonable? I'm driving, and I don’t want you getting too wasted.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I'm going to regret this.", "END"),
                new ChoiceOption("I'll be sleeping on the couch tonight.", "END")
            ],
            "S4B2c"
        ),
        "S4B3a": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing. You've already walked away and are now chatting animatedly with a group of friends on the other side of the room. You're completely disengaged from Claire and her drinking.)", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I'm done talking about this. I'm having fun.", "END"),
                new ChoiceOption("Claire's not my responsibility.", "END")
            ],
            "S4B3a"
        ),
        "S4B3b": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing, even though you vaguely see her taking shots. You're in a conversation but are peripherally aware of what's happening. You see her take one shot.)", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I think I'll walk away. Maybe she'll stop.", "END"),
                new ChoiceOption("Maybe someone will help her.", "END")
            ],
            "S4B3b"
        ),
        "S4B3c": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing. You are generally aware that she is drinking but are not paying close attention.)", "You", false, ["You"]),
                new DialogOption("(Later in the night, Claire is clearly very drunk. She's stumbling, slurring her words, and generally making a scene. She bumps into someone, spilling their drink, and starts arguing with them.)", "Narrator", false, ["Narrator"]),
                new DialogOption("Claire, you okay? Maybe you should slow down a bit.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I should have stopped her earlier. But I didn't want to.", "END"),
                new ChoiceOption("This is not going to be a fun drive home.", "END")
            ],
            "S4B3c"
        ),
        "S4C1a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, you're right. Good call. Just one for now. Don’t want to, like, totally lose it tonight. Especially with Chad here. Don’t want to embarrass myself.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Thanks for thinking of me. You're a great friend.", "END"),
                new ChoiceOption("Let's make sure this one shot counts, then.", "END")
            ],
            "S4C1a"
        ),
        "S4C1b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, good idea. A seltzer sounds good. Thanks.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("As long as someone is thinking clearly tonight.", "END"),
                new ChoiceOption("I appreciate you thinking about me. It's a long drive tonight.", "END")
            ],
            "S4C1b"
        ),
        "S4C1c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one! This party is getting wild! Chad's already promised to teach me some new dance moves. It’s gonna be legendary!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. I got it.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("I am seriously watching you.", "END"),
                new ChoiceOption("I need to stay awake and I need you to stay safe.", "END")
            ],
            "S4C1c"
        ),
        "S4C2a": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Okay, cool.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("You are definitely making a mess of my plans.", "END"),
                new ChoiceOption("Guess I'm driving a messy girl home tonight.", "END")
            ],
            "S4C2a"
        ),
        "S4C2b": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Yeah, yeah, I know. I'll be fine.", "Claire", true, ["Claire"])
            ],
            [
                new ChoiceOption("Are you sure about that?", "END"),
                new ChoiceOption("Fine is relative, I guess.", "END")
            ],
            "S4C2b"
        ),
        "S4C2c": new Scene(
            [
                new DialogOption("Alright, shot time! Number one!", "Claire", false, ["Claire"]),
                new DialogOption("Hey, hold up a sec. Remember we talked about pacing yourself? Maybe just one shot for now, okay? You said you were going to take it easy tonight, and, you know, I'm driving. Plus, you know how you get after a few. Don’t want any regrets in the morning.", "You", false, ["You"]),
                new DialogOption("Alright, have fun. I'm gonna go talk to some other people.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("See ya later!", "END"),
                new ChoiceOption("I hope someone takes care of her tonight.", "END")
            ],
            "S4C2c"
        ),
        "S4C3a": new Scene(
            [
                new DialogOption("Alright, shots time! Number one! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("Yeah! Let's do it! I'm gonna grab another drink too.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("Let's have fun tonight!", "END"),
                new ChoiceOption("I'm not driving anytime soon!", "END")
            ],
            "S4C3a"
        ),
        "S4C3b": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("Sounds good…but maybe just one shot for now? We should probably pace ourselves a little bit.", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I'm going to regret that drink later.", "END"),
                new ChoiceOption("Let's just try to be careful tonight.", "END")
            ],
            "S4C3b"
        ),
        "S4C3c": new Scene(
            [
                new DialogOption("Alright, shots time! Let's get this party started!", "Claire", false, ["Claire"]),
                new DialogOption("(You say nothing and join her at the bar, ready to take shots.)", "You", true, ["You"])
            ],
            [
                new ChoiceOption("I want to have fun, too!", "END"),
                new ChoiceOption("I'll drive us home another night.", "END")
            ],
            "S4C3c"
        )
    }
]

    
