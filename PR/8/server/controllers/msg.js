const msgPath = './server/db/messages/messages.json'
const fs = require('fs')


module.exports = {
    async findMessages(idsArray) {
        try {
            let arr = await JSON.parse(fs.readFileSync(msgPath, 'utf-8'));
            return idsArray.map(id => arr.find(msg => msg._id == id))
        }
        catch(err) {
            console.log(err);
            return false
        }
    }
}