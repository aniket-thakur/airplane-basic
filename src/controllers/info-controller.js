const info = (req, res) =>{
    return res.json({
        success : true,
        message : "Api is Live",
        error : {},
        data : {}
    })
}
module.exports = {
    info
}