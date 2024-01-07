require('../models/database');
const Category = require('../models/Category');


/**
 * Get/
 * Homepage
 */

exports.homepage = async(req, res) =>{
    try{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('index', {title: 'Food Recipe-Home', categories})
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}



// async function insertDymmyCategoryData(){
//     try{
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "thai-food.jpg"
//             },
//             {
//                 "name": "American",
//                 "image": "american-food.jpg"
//             },
//             {
//                 "name": "Chinese",
//                 "image": "chinese-food.jpg"
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican-food.jpg"
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian-food.jpg"
//             },
//             {
//                 "name": "Spanish",
//                 "image": "spanish-food.jpg"
//             }
//         ]);
//     } catch(error){
//         res.status(500).send({message: error.message || })
//     }
// }

// insertDymmyCategoryData();