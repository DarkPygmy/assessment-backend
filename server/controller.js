const characters = require("./db1.json")


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You shall receive something nice from a friend.", "You need to watch you back to avoid bad tidings soon.", "The woman/man of your dreams will madly fall in love with you!", "The Spice must flow!", "The sleeper has awakened!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

     logDndCharacter: (req, res) => {
        let { cname, str, dex, consti, int, wis, char, comli } = req.body

        let newCharacter = {
            cname,
            str,
            dex,
            consti,
            int,
            wis,
            char,
            comli
        }

        characters.push(newCharacter)
        res.status(200).send(characters)
    }

}