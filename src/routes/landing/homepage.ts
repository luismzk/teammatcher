import express from 'express';
const router = express.Router();

router.get('/', async function (req, res) {
  try {
    const levels = [1, 2, 3, 4, 5]

    res.render('landing/homepage', {
      levels
    });

  } catch (e) {
    console.log(e);
    res.send("error")
  }
});

export const homepageRoutes = router;