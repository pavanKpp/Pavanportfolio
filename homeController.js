// File name: homeController.js
// Student’s Name: Pavankumar Patel
// StudentID: 301299711
// Date: 10/06/2023
/**
 * Renders the home page with a title and message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const homecontroller = (req, res) => {
    res.render("index", { title: "Home Page" })
};
/**
 * This module exports the home controller.
 * @module homeController
 */
export {homecontroller};