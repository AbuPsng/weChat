export const sendMessage = async (req, res) => {
    try {
        res.send("name")
    } catch (error) {
        console.log("error in singUp controller", error.message)
        res.status(500).json({ error: error.message })
    }
}