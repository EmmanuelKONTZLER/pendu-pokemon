var mongoose = require("mongoose");


var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect(`mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASSWORD}@cluster0.ji2sm.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,options,
    function(err) {
        if(err != null){
            console.log(err);
        } else {
            console.log('Connexion database OK')
        }
    }
);