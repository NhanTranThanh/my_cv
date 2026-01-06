# MongoDB Local Setup Guide

## ✅ Installation Complete

MongoDB Community Edition 8.0.17 has been successfully installed and started on your system.

## Service Status

MongoDB is running as a background service and will automatically start on system boot.

### Service Management Commands

**Start MongoDB:**
```bash
brew services start mongodb/brew/mongodb-community@8.0
```

**Stop MongoDB:**
```bash
brew services stop mongodb/brew/mongodb-community@8.0
```

**Restart MongoDB:**
```bash
brew services restart mongodb/brew/mongodb-community@8.0
```

**Check Status:**
```bash
brew services list | grep mongodb
```

## Connection Details

- **Host:** localhost
- **Port:** 27017
- **Default Database:** myapp (as configured in .env)
- **Connection String:** `mongodb://localhost:27017/myapp`

## Using MongoDB Shell (mongosh)

Connect to the database:
```bash
mongosh myapp
```

Or connect to the default database:
```bash
mongosh
```

### Common MongoDB Shell Commands

```javascript
// Show all databases
show dbs

// Use a database
use myapp

// Show collections
show collections

// Insert a document
db.users.insertOne({ name: "John", email: "john@example.com" })

// Find documents
db.users.find()

// Find one document
db.users.findOne()

// Count documents
db.users.countDocuments()
```

## Data Storage

MongoDB data is stored at:
```
/opt/homebrew/var/mongodb
```

Logs are stored at:
```
/opt/homebrew/var/log/mongodb
```

## Testing the Connection

Your Express server is configured to connect to MongoDB automatically when started. To test:

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

You should see:
```
✅ MongoDB Connected: localhost:27017
🚀 Server is running on port 3000
```

## Troubleshooting

### MongoDB won't start
```bash
# Check logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log

# Check if port is in use
lsof -i :27017
```

### Connection refused
- Ensure MongoDB service is running: `brew services list | grep mongodb`
- Check if the port is correct in your `.env` file
- Verify MongoDB is listening: `lsof -i :27017`

### Reset MongoDB
If you need to reset your MongoDB data:
```bash
# Stop MongoDB
brew services stop mongodb/brew/mongodb-community@8.0

# Remove data directory (WARNING: This deletes all data!)
rm -rf /opt/homebrew/var/mongodb

# Start MongoDB again
brew services start mongodb/brew/mongodb-community@8.0
```

## Next Steps

1. ✅ MongoDB is installed and running
2. ✅ `.env` file is configured
3. ✅ Express server is ready to connect

You can now start your Express server and it will automatically connect to MongoDB!

