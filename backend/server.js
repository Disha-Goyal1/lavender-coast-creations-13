const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Checkout API
app.post("/checkout", (req, res) => {
    const { items, total } = req.body;

    const message = `Order Details:\n${items.map(i => `${i.name} x${i.qty}`).join("\n")}\nTotal: ₹${total}`;

    const whatsappURL = `https://wa.me/916200391201?text=${encodeURIComponent(message)}`;

  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=6200391201@upi&pn=LavenderCoast&am=${total}&cu=INR`;

    res.json({
        whatsapp: whatsappURL,
        qr: qrCodeURL
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
