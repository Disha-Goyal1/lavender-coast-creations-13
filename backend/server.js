const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/checkout", (req, res) => {
  const { items, total } = req.body;

  const message = `Order Details:\n${items
    .map((i) => `${i.name} x ${i.qty}`)
    .join("\n")}\nTotal: ₹${total}`;

  const whatsappUrl = `https://wa.me/916200391201?text=${encodeURIComponent(message)}`;

  res.json({
    success: true,
    whatsappUrl,
    qrCode: `https://api.qrserver.com/v1/create-qr-code/?data=${total}&size=200x200`,
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
