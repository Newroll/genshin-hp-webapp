var enemynames = ["Cicin", "Slime (Small)", "Slime (Large)", "Whopperflower", "Hilichurls (Except Cryo Grenadier)", "Cryo Hilichurl Grenadier", "Hilichurl Shooter", "Samachurl", "Fatui Skirmisher - Anemoboxer Vanguard", "Fatui Skirmisher - Electrohammer Vanguard", "Fatui Skirmisher - Geochanter Bracer", "Fatui Skirmisher - Pyroslinger Bracer", "Fatui Skirmisher - Cryogunner Legionnaire", "Fatui Skirmisher - Hydrogunner Legionnaire", "Treasure Hoarder Potioneer", "Treasure Hoarders: Scout", "Treasure Hoarders: Marksman", "Treasure Hoarders: Crusher", "Treasure Hoarders: Gravedigger", "Treasure Hoarders: Seaman", "Treasure Hoarders: Handyman", "Treasure Hoarders: Pugilist", "Treasure Hoarders: Crusher", "Nobushi", "Kairagi", "Specter", "Fungus (Most)", "Winged Dendroshroom", "Grounded Hydroshroom", "Winged Cryoshroom", "Grounded Geoshroom", "The Eremites (Most)", "Eremite Desert Clearwater", "Eremite Sunfrost", "Eremite Daythunder", "Eremite Stone Enchanter", "Eremite Floral Ring-Dancer", "Eremite Galehunter", "Eremite Scorching Loremaster", "Abyss Mage", "Abyss Herald", "Abyss Lector", "Eye of the Storm", "Fatui Cicin Mage", "Fatui Pyro Agent", "Geovishap", "Geovishap Hatchling", "Mitachurl", "Lawachurl", "Ruin Guard", "Ruin Hunter", "Ruin Grader", "Ruin Cruiser", "Ruin Destroyer", "Ruin Defender", "Ruin Scout", "The Great Snowboar King", "Mirror Maiden", "Rifthound", "Rifthound Whelp", "Primordial Bathysmal Vishap", "Primordial Bathysmal Vishap Hatchling", "Bolteater Bathysmal Vishap Hatchling", "Rimebiter Bathysmal Vishap Hatchling", "Shadowy Husk: Defender", "Shadowy Husk: Line Breaker", "Shadowy Husk: Standard Bearer", "Black Serpent Knight: Windcutter", "Black Serpent Knight: Rockbreaker Ax", "Ruin Drake: Earthguard", "Ruin Drake: Skywatch", "Primal Construct", "Consecrated Beast", "Hilichurl Rogue", "Hypostasis (Most)", "Hydro Hypostasis", "Dendro Hypostasis", "Hypostasis (Hypostatic Symphony)", "Hypostasis (Hypostatic Symphony: Dissonant Verse)", "Regisvine", "Resurgent Cryo Regisvine", "Oceanid", "Oceanid (Event)", "Primo Geovishap", "Maguu Kenki", "Dual Maguu Kenki", "Perpetual Mechanical Array", "Thunder Manifestation", "Golden Wolflord", "Coral Defenders", "Ruin Serpent", "Jadeplume Terrorshroom", "Aeonblight Drake", "Algorithm of Semi-Intransient Matrix of Overseer Network", "Setekh Wenut", "Iniquitous Baptist", "Unusual Hilichurl", "Treasure Hoarders: Raptor", "Treasure Hoarders: Boss", "Treasure Hoarders: Liuliu", "Treasure Hoarders: Carmen", "Treasure Hoarders: Wallenstein", "Millelith Soldier", "Millelith Sergeant", "Shogunate Infantry", "Shogunate Infantry Captain", "Yoriki Samurai", "Watatsumi Soldier: Kouzen", "Watatsumi Soldier: Kouzen (Event)", "Hydro Mimic Crane", "Hydro Mimic Raptor", "Hydro Mimic Mallard", "Hydro Mimic Crab", "Hydro Mimic Boar", "Hydro Mimic Ferret", "Hydro Mimic Frog", "Hydro Mimic Finch", "Hydro Mimic Crab (Event)", "Hydro Mimic Boar (Event)", "Hydro Mimic Ferret (Event)", "\"Miasmic Tumor\"", "Canine Bunshin", "Black Shadow: Hayate no Gotoku", "Beisht", "Nobushi: Hitsukeban (Event)", "Yoriki Samurai (Hues of the Violet Garden)", "Yoriki Samurai (Warrior's Spirit)", "Kairagi: Dancing Thunder (Event)", "Kairagi: Fiery Might (Event)", "Taroumaru (Hues of the Violet Garden)", "Taroumaru (Warrior's Spirit)", "Marana's Avatar", "Spirit of Omen: Stone Drake", "Spirit of Omen: Dendro Spirit-Serpent", "Spirit of Omen: Wind Glede", "Spirit of Omen: Pyro Scorpion", "Sumpter Beast (Wild Small)", "Sumpter Beast (Wild Medium)", "Sumpter Beast (Wild Large)", "Sumpter Beast (Faction Small)", "Sumpter Beast (Faction Medium)", "Sumpter Beast (Faction Large)", "Spinocrocodile", "Rishboland Tiger", "Scorpion", "Red Vulture", "Eremite Stone Enchanter (Event)", "Mechanicus: Cleansing Flame", "Mechanicus: Frostcaller", "Mechanicus: Thunderflash", "Mechanicus: Wicked Waves", "Mechanicus: Flame of Pancha", "Mechanicus: Sharkwinter", "Mechanicus: Water Mirror", "Tent Tortoise", "Preliminary Proliferating Organism", "Protective Proliferating Organism", "Pernicious Proliferating Organism", "Predatory Proliferating Organism", "Provender Proliferating Organism", "Perch Proliferating Organism", "Andrius", "Dvalin", "Childe (Phase 1/2)", "Childe (Phase 3)", "Azhdaha", "La Signora (Phase 1)", "La Signora (Phase 2)", "Magatsu Mitake Narukami no Mikoto", "Everlasting Lord of Arcane Wisdom (Phase 1)", "Everlasting Lord of Arcane Wisdom (Phase 2)", "Guardian of Apep's Oasis (Phase 1)", "Guardian of Apep's Oasis (Phase 3)"]
var enemyscaling = [0.5, 0.8, 2, 3, 1, 0.8, 0.8, 1, 3, 4, 3, 3, 4, 3, 1.6, 1.2, 1.2, 2, 2, 2, 2, 2, 2, 2, 4.8, 1.6, 1, 2, 2, 2.8, 2.8, 1.6, 3.6, 3.6, 4, 5, 5, 4.4, 4.4, 2, 8, 8, 5, 5, 5, 8, 3, 3, 9, 7, 6, 9, 3, 3, 4.2, 4.2, 11, 6, 7, 2.4, 8, 4, 4, 4, 4, 6, 5, 7, 8, 7, 5, 3.4, 7, 5, 7, 9, 9, 11, 9, 7, 11, 10, 14, 30, 20, 16, 16, 14, 12, 12, 16, 14, 17, 16, 15, 10, 1.6, 2, 7, 7, 8, 8, 1.6, 2.4, 1.6, 2.4, 3.6, 1.6, 7.925, 0.8, 0.8, 1.6, 1.6, 1.6, 1.4, 3, 3, 0.6, 3.4, 3.4, 15, 60, 15, 6, 5.6, 6.4, 9.056, 7.6, 10.104, 7, 8.66, 3, 1.5, 1.5, 1.32, 1.32, 0.2, 0.6, 1, 0.8, 1.2, 1.6, 0.8, 0.8, 0.8, 0.6, 10.188, 7.95, 7.95, 7.95, 7.95, 13.25, 13.25, 13.25, 1, 1.6, 3.2, 2, 2.4, 3.2, 2.4, 18, 9, 6, 10, 36, 10, 20, 40, 20, 18, 18, 16]
var magicnumber = [0, 72.91699666, 92.62800552, 114.3940019, 138.2150266, 164.0929541, 192.0500486, 222.0750355, 237.8199782, 261.7340669, 286.6040616, 326.8830667, 368.7590069, 412.2570125, 460.5209645, 510.5830306, 562.4699712, 624.8779915, 679.9279666, 736.0020394, 885.2000016, 932.0130466, 979.4830138, 1023.664974, 1083.858938, 1145.135004, 1208.107982, 1272.34699, 1337.866018, 1404.67933, 1472.800373, 1554.98629, 1638.968011, 1708.106496, 2020.001928, 2088.602486, 2158.307424, 2253.31392, 2357.922946, 2464.276157, 2694.849614, 2825.17451, 2957.735333, 3083.906242, 3212.144635, 3593.158176, 3718.716446, 3934.57164, 4154.840275, 4379.58348, 4996.484539, 5224.29637, 5454.720403, 5687.789242, 5923.530053, 6146.910782, 6333.417744, 6572.411923, 6835.255531, 7101.442162, 8381.254646, 8657.451326, 8961.233035, 9268.136347, 9668.122661, 9982.892467, 10241.75053, 11265.31851, 11619.70741, 11949.94532, 13051.97313, 13410.88958, 13805.52787, 14092.24536, 14504.316, 14920.82861, 15265.3596, 15663.9685, 16066.61184, 16439.80507, 18565.72824, 18947.87333, 19333.38725, 19573.30786, 20178.59731, 20424.35904, 20823.04944, 21244.64246, 21718.22146, 22197.34272, 24354.08798, 24932.38603, 25570.90195, 26217.75845, 27122.64302, 27748.83826, 27923.10739, 28116.28546, 30658.23221, 30869.96602, 36765.12317]
var backup;

function autocompleteMatch(enemy) {
    if (enemy == '') {
        return [];
    }
    var reg = new RegExp(enemy, 'i')
    return enemynames.filter(function (term) {
        if (term.match(reg)) {
            return term;
        }
    });
}

function showResults(val) {
    res = document.getElementById("resultlist");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i = 0; i < terms.length; i++) {
        list += '<li>' + terms[i] + '</li>';
        backup = terms[0];
    }
    res.innerHTML = '<ul>' + list + '</ul>';
}

function calculate() {
    var enemy = document.getElementById("enemy").value;
    var level = document.getElementById("enemylvl").value;
    var multiplier = document.getElementById("multiplier").value;
    var result = document.getElementById("result").value;

    if (level > 90 || level < 1) {
        alert("Enemy level must be between 1 and 90!");
        return;
    }

    if (multiplier < 0) {
        alert("Multiplier must be greater than 0!");
        return;
    }

    if (multiplier > 5) {
        alert("Multiplier cannot be greater than 5!");
        return;
    }

    if (!enemynames.includes(enemy)) {
        enemy = backup;
        document.getElementById("error").innerHTML = "WARNING: Invalid input! Using the closest match (" + enemy + ") instead!";
    }

    var enemyindex = enemynames.indexOf(enemy);
    result = Math.round(enemyscaling[enemyindex] * magicnumber[level] * multiplier);

    document.getElementById("result").innerHTML = result;
}

