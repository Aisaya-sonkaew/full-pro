const express = require("express");
const cors = require('cors');
const path = require("path");
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');  

const app = express();
const PORT = 3000;
const saltRounds = 10; // Define saltRounds



const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',   
    password: '1234',  
    database: 'user'  
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to the database:', err);
        return;
    }
    console.log('✅ Connected to the database!');
});

app.use(cors());  
app.use(express.json());
  

// ให้ Express บริการไฟล์ static ในโฟลเดอร์ต่างๆ
app.use(express.static(path.join(__dirname, 'main')));
app.use('/',express.static(path.join(__dirname)));
app.use('/login',express.static(path.join(__dirname, 'login')));
app.use('/login',express.static(path.join(__dirname, 'register')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main', 'index.html'));
});

// เส้นทางหลัก (หน้า index)

// เส้นทางไปหน้า Login
app.get('/login/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

// เส้นทางไปหน้า Register
app.get('/login/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'register.html'));
});



// เส้นทางสมัครสมาชิก
app.post('/Register', async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกันหรือไม่
    if (password !== confirm_password) {
        return res.status(400).json({ message: '❌ Passwords do not match!' });
    }

    // ตรวจสอบว่า username หรือ email มีอยู่แล้วหรือไม่
    const checkQuery = 'SELECT * FROM user WHERE username = ? OR email = ?';
    db.query(checkQuery, [username, email], async (err, result) => {
        if (err) {
            console.error('❌ Error checking user: ', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: '❌ Username or email already exists.' });
        }

        // ✅ เข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล
        // const hashedPassword = await bcrypt.hash(password, saltRounds);

        // บันทึกลงฐานข้อมูล
        const insertQuery = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';
        db.query(insertQuery, [username, email, password], (err, result) => {
            if (err) {
                console.error('❌ Error inserting user: ', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            return res.redirect("/");
        });
    });
});
// เส้นทางเข้าสู่ระบบ
// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const checkQuery = 'SELECT * FROM datauser WHERE email = ?';
    db.query(checkQuery, [email], async (err, result) => {
        if (err) {
            console.error('❌ Error fetching user: ', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'Email not found.' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, result[0].password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password.' });
        }

        return res.status(200).json({ message: '✅ Login successful!' });
    });
});
// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
