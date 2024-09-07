// $ npm install passport passport-google-oauth20
// aggiunto googleId allo schema di Author

import Author from "../models/author.js";

const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, passportNext) {
        // profile: {
        //     _json: {
        //         given_name: ____
        //         family_name: ____
        //         email: _____
        //         sub: _____
        //     }
        // }

        console.log(profile)

        const {
            given_name: nome,
            family_name: cognome,
            email,
            sub: googleId
        } = profile._json;

        // cerchiamo l'utente nel database
        const author = await Author.findOne({googleId});


        // se non c'è lo creiamo
        if (!author) {
            const newAuthor = new Author ({
                googleId,
                nome,
                cognome,
                email
            })

            author = await newAuthor.save();
        }


        // viene chiamato il prossimo middleware


        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
);