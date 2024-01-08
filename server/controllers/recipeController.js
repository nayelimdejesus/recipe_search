require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

//Homepage
exports.homepage = async(req, res) =>{
    try{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const food = {latest};

        res.render('index', {title: 'Food Recipe-Home', categories, food});
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}

//Categories
exports.exploreCategories = async(req, res) =>{
    try{
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', {title: 'Food Recipe - Categories', categories})
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}


async function insertDymmyRecipeData(){
    try{
        await Category.insertMany();
    } catch(error){
        console.log('err', + error);
    }
}

insertDymmyRecipeData();