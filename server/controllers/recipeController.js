


/**
 * Get/
 * Homepage
 */

exports.homepage = async(req, res) =>{
    res.render('index', {title: 'Food Recipe - Home'});
}