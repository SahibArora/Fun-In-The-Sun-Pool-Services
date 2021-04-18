const mongoose = require('mongoose')

 mongoose.connect(('mongodb://127.0.0.1:27017/fun-in-the-sun-pool-services'),{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})