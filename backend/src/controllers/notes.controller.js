import Note from "../models/note.model.js"

const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

        res
            .status(200)
            .json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller\n", error);

        res
            .status(500)
            .json({ message: "Internal Server Error" });
    }
}

const getNoteById = async (req, res) => {

    try {
        const { id } = req.params; // get ID from route

        const note = await Note.findById(id); // fetch note by ID

        if (!note) {
            return res
                .status(404)
                .json({ message: "Note Not Found!" });
        }

        res
            .status(200)
            .json({
                message: `Retrieved note with ID: ${note._id}`,
                note: note,
            });

    } catch (error) {
        console.error("Error in getNoteById controller\n", error);

        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = new Note(
            {
                title: title,
                content: content
            }
        )

        const savedNote = await note.save();

        res
            .status(201)
            .json({ message: "Note Created Successfully", savedNote })
    } catch (error) {
        console.error("Error in createNote controller\n", error);

        res
            .status(500)
            .json({ message: "Internal Server Error" });
    }
}

const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        )

        if (!updateNote) {
            return res
                .status(404)
                .json({ message: "Note Not Found" })
        }

        res
            .status(200)
            .json({ message: "Note Updated Successfully", updatedNote })
    } catch (error) {
        console.error("Error in updateNote controller\n", error);

        res
            .status(500)
            .json({ message: "Internal Server Error" });
    }
}

const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res
                .status(404)
                .json({ message: "Note Not Found" })
        }

        res
            .status(200)
            .json({ message: "Note Deleted Successfully" })
    } catch (error) {
        console.error("Error in deleteNote controller\n", error);

        res
            .status(500)
            .json({ message: "Internal Server Error" });
    }
}

export {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
}