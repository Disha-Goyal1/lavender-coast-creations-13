const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Health check (important for testing)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Checkout API
app.post("/checkout", (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || !total) {
      return res.status(400).json({
        success: false,
        message: "Invalid order data",
      });
    }

    const message = `🛍️ Order Details:\n${items
      .map((i) => `${i.name} x ${i.qty}`)
      .join("\n")}\n\n💰 Total: ₹${total}`;

    const whatsappUrl = `https://wa.me/916200391201?text=${encodeURIComponent(message)}`;

    res.json({
      success: true,
      whatsappUrl,
      const upiUrl = `upi://pay?pa=your-upi-id@okaxis&pn=LavenderCoast&am=${total}&cu=INR`;

qrCode: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiUrl)}&size=200x200`
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// ✅ IMPORTANT FIX (for EC2 + Docker)
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
