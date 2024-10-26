import Exx from "express";
import isAuthenticated from './../middlewares/auth.js';
import { addMembers, leaveGroup, myChat, myGroupChat, newGroup, removeMember, sendAttachment } from "../controllers/chat.controller.js";
import { attachmentsMulter } from "../middlewares/multer.js";

const chatRouter = Exx.Router();

chatRouter.use(isAuthenticated)

chatRouter.route("/new").post( newGroup )

chatRouter.route("/my").post( myChat )

chatRouter.route("/my/groups").post( myGroupChat )

chatRouter.route("/add").post( addMembers )

chatRouter.route("/remove").post( removeMember )

chatRouter.route("/leave/:id").post( leaveGroup )

chatRouter.route("/message").post( attachmentsMulter , sendAttachment )

chatRouter

export default chatRouter;