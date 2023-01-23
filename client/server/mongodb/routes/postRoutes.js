import { Express } from "express";
import * as dotenv from "dotenv";
import {v2 as coudinary} from 'cloudinary'
import Post from '../mongodb/models/post.js'

dotenv.config()

const router =express.Router();
