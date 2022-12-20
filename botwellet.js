const request = require("request");
const fs = require("fs");
const login = require("fb-chat-api");
login({appState: JSON.parse(fs.readFileSync('app.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
    api.listen((err,mess)=>{
    switch(mess.type){
    case "message":
    var se = mess.body.split(" ")
    try{
    var target = se[0]
    const regex1 = /gift.truemoney/;
    var mat = target.match(regex1);
    var campaign = mat.input
    let api = "http://localhost:5000/api/";
    let success = campaign.slice(39)
    let by = api+success+"/0648183872"
    request.get(by,(err,res,body)=>{
    console.log(body)
    })
    }catch (e) {}
}    
})
});
process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
