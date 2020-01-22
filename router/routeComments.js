const router = require('express').Router();
const db = require('../data/db')

router.get('/:id/comments', (req, res) => {
    db.findById(req.params.id)
        .then(post => {
            if (post.length > 0) {
                db.findPostComments(req.params.id)
                    .then(comments => {
                        if (comments.length > 0) {
                            res.status(200).json(comments);
                        }
                        else {
                            res.status(404).json({ erroMessage: "There aren't any comments on this post" });
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ errorMessage: "The comments could not be recieved" })
                    });
            }
            else {
                res.status(404).json({errorMessage: "The post with this ID doesn't exist" });
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Couldn't get post info" })
        });
});

router.post('/:id/comments', (req, res) => {
    const { text } = req.body;

    if (text) {
      db.findById(req.params.id)
        .then(post => {
          if (post.length > 0) {
            db.insertComment({ text: text, post_id: req.params.id })
              .then(() => {
                res.status(201).json({ message: `${text} was commented` });
              })
              .catch(err => {
                res.status(500).json({ errorMessage: "There was an error while saving the comment to the database." });
              });
          } else {
            res.status(404).json({ errorMessage: "The post with the specified ID does not exist." });
          }
        })
        .catch(err => {
          res.status(500).json({ errorMessage: "Post information could not be retrieved." });
        });
    } else {
      res.status(400).json({ errorMessage: "Please provide text for the comment." });
    }
  });





module.exports = router;  