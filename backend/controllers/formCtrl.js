
exports.sendMail = (req, res, next) => {
    if(res){
        return res.status(200).json('Votre email a bien été envoyé')
    } else if (error){
        return res.status(400).json('Requête non aboutie' + error)
    }
}

