const { Router } = require('express')
const router = Router()
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.post(
    '/data', urlencodedParser,
    async (req, res) => {
    try {
       await console.log("Данные", req.body);
        res.json(200);
    } catch(e){
        res.status(500).json({message: 'try again server-error'}); //server error
        console.log(e);
    }
})



module.exports = router