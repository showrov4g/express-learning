import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';

export const bookRoutes = express.Router();

// 👉 POST: Create a new book
bookRoutes.post('/create-book', async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      book
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// 👉 GET: Get all books
bookRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: 'Books fetched successfully',
      books
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 👉 GET: Get a single book by ID
bookRoutes.get('/:bookId', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.status(200).json({
      success: true,
      message: 'Book fetched successfully',
      book
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Book not found'
    });
  }
});

// 👉 PATCH: Update a book
bookRoutes.patch('/:bookId', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const book = await Book.findByIdAndUpdate(bookId, updatedBody, { new: true });
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      book
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// 👉 DELETE: Delete a book
bookRoutes.delete('/:bookId', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findByIdAndDelete(bookId);
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      book
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});
