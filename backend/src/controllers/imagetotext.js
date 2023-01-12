const translate = require('translate-google');

// apis/image/translate
const handleTranslate =  async(req,res) => {
    const {text,target } = req.body;
    const result = await translate(text, {to: target}).then(res => {
        return res
    }).catch(err => {
        return err
    })
    return res.status(200).json({data:result})
}

module.exports = {
    handleTranslate
}