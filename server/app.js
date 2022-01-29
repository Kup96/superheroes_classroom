const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();


app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json());
app.use('/api', router);
app.use(cors({
    origin:'*'
  }));
module.exports = app;






/*
{
    "nickname":"Superman",
    "real_name": "Clark Kent",
    "origin_description": "rrqrqfewqqf21@gmail.com",
    "superpowers": ["solar energy absorption","solar flare"],
    "catch_phrase": "Something”"
}

{
    "nickname":"Железный человек",
    "real_name": "Э́нтони Э́двард «То́ни»",
    "origin_description": "rrqewq@gmail.com",
    "superpowers": ["healing factor","flight"],
    "catch_phrase": "Something”"
}

{
    "nickname":"Капитан Америка",
    "real_name": "Сти́вен Ро́джерс",
    "origin_description": "dasad@gmail.com",
    "superpowers": ["solar energy absorption","heat vision"],
    "catch_phrase": "Something”"
}

{
    "nickname":"Тор",
    "real_name": "Тор Одинсон",
    "origin_description": "vasvsav@gmail.com",
    "superpowers": ["solar energy absorption","solar flare"],
    "catch_phrase": "Something”"
}
{
    "nickname":"Халк",
    "real_name": "Ро́берт Брюс Бе́ннер",
    "origin_description": "dsadas@gmail.com",
    "superpowers": ["solar energy absorption","solar flare", "power"],
    "catch_phrase": "Something”"
}
{
    "nickname":"Дэдпул",
    "real_name": "Райаном Рейнольдсом ",
    "origin_description": "kytkyt@gmail.com",
    "superpowers": ["solar energy absorption","solar flare"],
    "catch_phrase": "Something”"
}
*/