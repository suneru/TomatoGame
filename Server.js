const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;


app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://suneru:IONxmktJAJRfmq0q@tomato.ba3axok.mongodb.net/TomatoDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(' Current database:', mongoose.connection.db.databaseName);
})
.catch(err => console.log("err"));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

  app.post('/Server/Register', async (req, res) => {
    let newUser = new User({
        UserID: req.body.UserID,
        Name: req.body.Name,
        Password: req.body.Password,
        Rank: req.body.Rank,
        SuperTime: req.body.SuperTime,
        GamesPlayed: req.body.GamesPlayed,
        Won: req.body.Won 
    });

    newUser.save()
    .then(savedUser => {
        console.log("User saved to collection:", savedUser);
        res.status(200).json(savedUser);
    })
    .catch(err => {
        console.error(err);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa "+err);
        res.status(500).json({ error: err.toString() });
    });
});

let User = mongoose.model('User', new mongoose.Schema({
        UserID: Number,
        Name: String,
        Password: String,
        Rank: Number,
        SuperTime: Number,
        GamesPlayed: Number,
        Won: Number
}));

app.get('/Server/UserProfile/:CurrentUserName', async (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    console.log(CurrentUserName);
    User.findOne({ "Name": CurrentUserName })
    .then(user => {
        if (user) {
            console.log(user);
            console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHA USER IS  FOUND");
            res.json(user);
        } else {
            console.log("######################################################### USER NOT FOUND");
            res.json(user);
        }
    })
    .catch(err => {
        let Dummy = {
                UserID: "000000",
                Name: "DUMMY",
                Password: "DUMMY",
                Rank: 0,
                SuperTime: 60,
                GamesPlayed: 0,
                Won: 0
        };
        res.json(Dummy);
        console.log(err);
    });
});

app.get('/Server/TopScore/:Rank', async (req, res) => {
    let Rank = req.params.Rank;
    console.log(Rank);
    User.findOne({ "Rank": Rank })
    .then(user => {
        if (user) {
            console.log(user);
            console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHA USER IS  FOUND");
            res.json(user);
        } else {
            console.log("######################################################### USER NOT FOUND");
            res.json(user);
        }
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/SuperTime/:CurrentUserName', async (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newSuperTime = req.body.SuperTime;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { SuperTime: newSuperTime }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BEST TIME UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/GamesPlayed/:CurrentUserName', async (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newGamesPlayed = req.body.GamesPlayed;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { GamesPlayed: newGamesPlayed }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GAMES PLAYED UPDATED");
        res.json(user);
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/Won/:CurrentUserName', async (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newWon = req.body.Won;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { Won: newWon }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GAMES WON UPDATED");
        res.json(user);
    })
    .catch(err => {
        console.log(err);
    });
});




app.put('/Server/UpdateTopScore', async (req, res) => {
  User.find()
    .then(AllUsers => {
      const SortedUsers = AllUsers.sort((a, b) => {
        if (a.SuperTime === b.SuperTime) {
          return a.UserId > b.UserId ? 1 : -1;
        }
        return a.SuperTime - b.SuperTime;
      });

      for (let i = 0; i < SortedUsers.length; i++) {
        const user = SortedUsers[i];
        User.updateOne({ _id: user._id }, { Rank: i + 1 })
          .then(() => console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRrR  User rank updated successfully"))
          .catch(err => console.log("Error updating user rank: " + err));
      }
    })
    .catch(err => {
      console.error(err);
    });
});



