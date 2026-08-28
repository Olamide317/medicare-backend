import Contact from "../model/contact.model.js";
import { StatusCodes } from "http-status-codes";

// const createContactMessage = async(req, res) => {
//     //GET THE BODY/INPUT
//   const body = req.body;
//   console.log(req.body);

//   //SAVE IN THE DB 1
//   await Contact.create(body);

//   res.send("Thanks for reaching out to us. We'd get back to you swiftly");
// };

// const createContactMessage = async (req, res) => {
//     try {
//         const body = req.body;
//         await Contact.create(body);
//         res.status(201).json({
//             message: "Thanks for reaching out",
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Something went wrong",
//         });
        
//     }
// };

const createContactMessage = async (req, res) => {
    try {
        const body = req.body;
        await Contact.create(body);
        res.status(StatusCodes.CREATED).json({
            message: "Thanks for reaching out",
            status: true,
        });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            status: false,
        });
        
    }
};

const getAllContactMessages = async(req, res) => {
    try {
        const response = await Contact.find();
        res.status(StatusCodes.OK).json({
            message: "Messages loaded",
            status: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
             message: "Something went wrong",
            status: false,
        });
    }
};

export { getAllContactMessages, createContactMessage };
