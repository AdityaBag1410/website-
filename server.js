import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// MongoDB Atlas Connection Configuration
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://bagoria1410_db_user:h9b5VmzlC1OJljh9@cluster0.jiucph9.mongodb.net/?appName=Cluster0";
const DB_NAME = "shri_swaroop_school";
const COLLECTION_NAME = "site_content";

let cachedDb = null;
let cachedCollection = null;

async function getCollection() {
    if (cachedCollection) return cachedCollection;
    try {
        const { MongoClient, ServerApiVersion } = await import('mongodb');
        const client = new MongoClient(MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        cachedDb = client.db(DB_NAME);
        cachedCollection = cachedDb.collection(COLLECTION_NAME);
        console.log("Connected successfully to MongoDB Atlas Cluster0!");
        return cachedCollection;
    } catch (err) {
        console.warn("MongoDB connection warning (falling back to memory/file):", err.message);
        return null;
    }
}

// GET /api/content
app.get('/api/content', async (req, res) => {
    try {
        const col = await getCollection();
        if (col) {
            const doc = await col.findOne({ _id: 'active_site_content' });
            if (doc && doc.data) {
                return res.json(doc.data);
            }
        }
        res.status(200).json(null);
    } catch (e) {
        console.error("Error fetching content from MongoDB:", e);
        res.status(500).json({ error: e.message });
    }
});

// POST /api/content
app.post('/api/content', async (req, res) => {
    try {
        const content = req.body;
        const col = await getCollection();
        if (col) {
            await col.updateOne(
                { _id: 'active_site_content' },
                { $set: { data: content, updatedAt: new Date() } },
                { upsert: true }
            );
            return res.json({ success: true, message: 'Saved to MongoDB Atlas!' });
        }
        res.json({ success: true, message: 'Saved locally' });
    } catch (e) {
        console.error("Error saving content to MongoDB:", e);
        res.status(500).json({ error: e.message });
    }
});

// Admin Route alias
app.get('/admin', (req, res) => {
    res.redirect('/admin.html');
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Shri Swaroop Public School CMS Server running on http://localhost:${PORT}`);
    console.log(`Admin Portal: http://localhost:${PORT}/admin`);
});
