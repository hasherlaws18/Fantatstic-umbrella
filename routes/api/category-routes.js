const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const CategoryData = await Category.findAll();
    tatus(200).json(locationData);
    tatus(500).jspm(err);
  }catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne(
    {
      where: {
        id: req.params.isbn
      },
    }
  ).then((CategoryData) => {
    res.json(CategoryData);
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.params.id,
    }
  )
});

router.delete('/:id', async (req, res) => {
 try {
  const CategoryData = await Category.destory({
    where: {
      id: req.params.id
    }
  });

  if (!CategoryData){
    res.status(404).json({message: 'No category was find with this ID'})
    return;
  }
  res.status(200).json(CategoryData);
 }catch (err) {
  res.status(500).json(err);
 }
  // delete a category by its `id` value
});

module.exports = router;
