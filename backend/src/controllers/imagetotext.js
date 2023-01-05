const transferImageToText = require("tesseract.js")

// const image = require('../images/paragraph1.png')
const handleImageToText = async(req,res) => {
    // const {url_image} = req.body
    const text =  await transferImageToText.
    recognize('../images/paragraph1.png','vie', {logger: e => console.log(e) })
    .then(out => {return out})

    console.log(text)
    return res.status(200).json({ message: 'Chuyển đổi thành công !',data:text });
}


module.exports = {
    handleImageToText
}