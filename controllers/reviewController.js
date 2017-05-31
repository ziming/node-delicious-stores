const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
    res.body.author = req.user._id;
    res.body.store = req.params.id;
    const newReview = new Review(req.body);
    await newReview.save();
    req.flash('success', 'Review Saved!');
    res.redirect('back');
};