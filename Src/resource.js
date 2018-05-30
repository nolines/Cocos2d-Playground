var dirArt = "Art/";
var dirSounds = "Sounds/";

var s_player = dirArt + "test.png";
var s_monster = dirArt + "monster-hd.png";
var s_projectile = dirArt + "projectile-hd.png";
var s_bg = dirArt + "level1_bg.png";

var s_bgMusic = dirSounds + "background-music.mp3";
var s_bgMusicOgg = dirSounds + "background-music.ogg";
var s_bgMusicCaf = dirSounds + "background-music.caf";

var s_shootEffect = dirSounds + "pew-pew-lei.mp3";
var s_shootEffectOgg = dirSounds + "pew-pew-lei.ogg";
var s_shootEffectWav = dirSounds + "pew-pew-lei.wav";

var g_ressources = [

    { type: "image", src: s_player },
    { type: "image", src: s_monster },
    { type: "image", src: s_projectile },
    { type: "image", src: s_bg },

    { type: "sound", src: s_bgMusic },
    { type: "sound", src: s_bgMusicOgg },
    { type: "sound", src: s_bgMusicCaf },

    { type: "sound", src: s_shootEffect },
    { type: "sound", src: s_shootEffectOgg },
    { type: "sound", src: s_shootEffectWav }

];