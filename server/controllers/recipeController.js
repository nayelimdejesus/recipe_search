require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

//Homepage

exports.homepage = async(req, res) =>{
    try{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);

        //grabs recipes of each section
        const thai = await Recipe.find({'category': 'Thai'}).limit(limitNumber);
        const american= await Recipe.find({'category': 'American'}).limit(limitNumber);
        const mexican = await Recipe.find({'category': 'Mexican'}).limit(limitNumber);
        const chinese = await Recipe.find({'category': 'Chinese'}).limit(limitNumber);

        const food = {latest, thai, american, mexican, chinese};

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
        res.render('categories', { title: 'Food Recipe - Categories', categories});
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}

//Categories by Id
exports.exploreCategoriesById = async(req, res) =>{
    try{
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipe.find({'category': categoryId}).limit(limitNumber);
        res.render('categories', { title: 'Food Recipe - Categories', categoryById});
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}










// Get Recipes
exports.exploreRecipe = async(req, res) =>{
    try{
        let recipeId = req.params.id;

        const recipe = await Recipe.findById(recipeId);


        res.render('recipe', {title: 'Food - Recipe', recipe});
    }catch(error){
    res.status(500).send({message: error.message || "Error Occurred"});
    }
}

// insertDymmyCategoryData();


//search

exports.searchRecipe = async(req, res) =>{
    try{
        let searchTerm = req.body.searchTerm;
        let recipe = await Recipe.find({$text: {$search: searchTerm, $diacriticSensitive: true}});
        res.render('search', {title: 'Food Recipe - Search', recipe});

    }catch(error){
        res.status(500).send({message: error.message || "Error Occurred"});
    }
}



exports.exploreLatest = async(req, res) =>{
    try{
        const limitNumber = 20;
        const recipe = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.render('explore-latest', {title: 'Food Recipe - Explore Latest', recipe});

    }catch(error){
        res.status(500).send({message: error.message || "Error Occurred"});
    }
}


exports.exploreRandom = async(req, res) =>{
    try{

        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();

        res.render('explore-random', {title: 'Food Recipe - Explore Random Recipe', recipe});
    } catch(error){
        res.status(500).send({message: error.message || "Error Occurred"});
    }
}

//submit 
exports.submitRecipe = async(req, res) =>{
    res.render('submit-recipe', {title: 'Food Recipe - Submit Recipe'});
}