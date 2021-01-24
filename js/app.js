var Spotify= document.querySelector("#Spotify"),
    AppleMusic = document.querySelector("#AppleMusic"),
    YouTube = document.querySelector("#YouTube"),
    SoundCloud = document.querySelector("#SoundCloud");

    Spotify.addEventListener("click", function(){
        window.open("https://open.spotify.com/album/1qjWfwEUfNOvc6SOxJ04mL?si=TYnVbQZySY-JgfsZs9T9NQ");
    });

    AppleMusic.addEventListener("click", function(){
        window.open("https://music.apple.com/ca/album/luca-mattia/1550046473");
    });

    SoundCloud.addEventListener("click", function(){
        window.open("https://soundcloud.com/lucamattia1997/sets/luca-mattia");
    });

   YouTube.addEventListener("click", function(){
        window.open("https://youtu.be/SWNSHowQkdc");
    });

