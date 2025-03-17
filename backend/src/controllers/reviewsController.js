const  reviewsController = {};
import reviewsModel from "../models/Reviews.js"

//SELECT
reviewsController.getReviews = async (req, res) => {
   const products = await reviewsModel.find().populate("idCliente")
   res.json(products)
}

//INSERT
reviewsController.insertReviews = async (req, res) => {
    const { comment, rating, idCliente } = req.body;
    const newReviews = new reviewsModel({ comment, rating, idCliente })
    await newReviews.save()
    res.json({message: "Product saved"})
}

//DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"})
}

//UPDATE
reviewsController.updateReviews = async (req, res) => {
    const { comment, rating, idCliente } = req.body;
    const updateReviews = await reviewsModel.findByIdAndUpdate(req.params.id,
        {comment, rating, idCliente}, {new: true}
    )
    res.json({message: "reviews updated successfully"})
}

export default reviewsController;