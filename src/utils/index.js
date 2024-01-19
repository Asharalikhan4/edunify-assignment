import { prisma } from "../../config/db"
import multer from 'multer';
import { promises as fsPromises } from 'fs';
import path from 'path';

const upload = multer({ dest: 'public/uploads/' });

const handler = upload.single('file');

export default async function handlerWrapper(req, res) {
    try {
        await handler(req, res);

        const { file } = req;
        const schoolFolder = path.join('public/uploads/school');

        // Check if the school folder exists, create if not
        await fsPromises.mkdir(schoolFolder, { recursive: true });

        // Move the uploaded file to the school folder
        await fsPromises.rename(file.path, path.join(schoolFolder, file.originalname));

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function fetchSchools() {
    const res = await prisma.school.findMany()
    return res
}