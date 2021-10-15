const path = require("path")
const express = require("express")


const app = express()
const port = 8000

app.use(express.static(__dirname + "/public"))  
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/app.bundle.js"))
  })
app.listen(port, () => {
    console.log("server on http://localhost:" + port)
})
