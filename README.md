# Node.js Tutorial Repository

A comprehensive Node.js tutorial repository covering various topics from basic concepts to advanced applications.

## 📚 Tutorial Topics Covered

### A. Core Node.js Concepts
- **Tu_A1**: Introduction & Global Objects
  - Global objects, process, console, timers
  - File: `app.js`, `global.js`, `globalProcess.js`, `timers.js`, `questions.js`

- **Tu_A2**: Node Core Modules
  - Path, util, v8, readline modules
  - File: `core.js`, `readLineModule.js`, `questions.js`, `lib/collectAnswers.js`

- **Tu_A3**: NPM Modules
  - cat-me, superheroes, supervillains, chalk, validator, yargs, faker
  - Files: `1_catNPM.js`, `2_superHeroNPM.js`, `3_superVillansNMP.js`, `4_chalkNPM.js`, `5_validaterNMP.js`, `6_yargsNMP.js`, `7_fakerNMP.js`, `8_checkImageurl.js`

- **Tu_A4**: Export/Custom Modules
  - Creating and using custom modules
  - Files: `app.js`, `myModule.js`

- **Tu_A5**: File System Operations
  - Reading, writing, appending, renaming files and directories
  - Files: `readFile.js`, `writeFile.js`, `append.js`, `list.js`, `directories.js`, `rename.js`, `renameDir.js`

- **Tu_A6**: Book Catalog App
  - Simple command-line book management
  - Files: `app.js`, `util/books.js`, `about.md`

- **Tu_A7**: Custom Events
  - Event-driven programming with EventEmitter
  - File: `customEvents.js`

- **Tu_A8**: File Streams
  - Reading and writing file streams
  - Files: `readStream.js`, `writeStream.js`, `assets/myfile.txt`, `assets/read.md`

- **Tu_A9**: Child Process Module
  - Executing external commands
  - File: `exec.js`

### B. Web Development
- **Tu_B1**: HTTP Server Creation
  - Basic HTTP server, query string handling
  - Files: `helloServer.js`, `queryString.js`

- **Tu_B2**: Serving Files in HTTP
  - Static file serving
  - Files: `app.js`, `index.html`

- **Tu_B3**: Display Different Pages
  - Multiple HTML pages with routing
  - Files: `app.js`, `index.html`, `about.html`, `service.html`

- **Tu_B4**: Personal Website
  - Complete personal website
  - Files: `app.js`, `index.html`, `about.html`, `resume.html`

- **Tu_B5**: Express.js Introduction
  - Basic Express routing and rendering
  - Files: `expressRoutes.js`, `renderHTML.js`, `renderHTMLMultiple.js`, `renderJSON.js`

- **Tu_B6**: Express.js Advanced
  - Static file serving with Express
  - Files: `renderStaticHTML1.js`, `renderStaticHTML2.js`, `public/` folder

- **Tu_B9**: Task List App with EJS
  - Template engine with EJS
  - Files: `index.js`, `views/`, `utils/`, `public/`

### C. Database & Authentication
- **Tu_C1**: MongoDB Introduction
  - Native MongoDB driver operations
  - Files: `1_mongoIntro.js`, `2_createCollcection.js`, `3_insertMany.js`, `4_fetchData.js`, `5_fetchMultiData.js`, `6_updateDocument.js`, `7_updateManyDocument.js`, `8_deletDoc.js`, `9_deletManyDoc.js`

- **Tu_C2**: Mongoose ODM
  - Mongoose schema and validation
  - Files: `1_monggoseIntro.js`, `2_monggoseValidaiton.js`

- **Tu_C3**: Mongoose Associations
  - Data relationships and references
  - Files: `1_embedding_data.js`, `2_referencing.js`

- **Tu_C4**: CRUD Application
  - Complete CRUD app with Handlebars
  - Files: `app.js`, `models/note.js`, `views/` folder

- **Tu_C6**: Task Manager REST API
  - RESTful API with MongoDB
  - Files: `app.js`, `DB/mongooseConnections.js`, `models/`, `routers/`

- **Tu_C8**: CRUD App V2 (with authentication)
  - User authentication with Passport
  - Files: `app.js`, `config/passportConfig.js`, `middleware/`, `models/`, `routes/`, `views/`

- **Tu_C9**: Node Pagination
  - Pagination implementation examples
  - Files: `Example1/`, `Example2/`, `Example3/`

### D. Advanced Features
- **Tu_D1**: Image Upload with Multer
  - File upload handling
  - File: `app.js`

- **Tu_D2**: Task Manager REST V2
  - Advanced REST API with authentication
  - Files: `app.js`, `DB/mongooseConnections.js`, `middleware/auth.js`, `models/`, `routers/`

- **Tu_D3**: Node Testing
  - Unit testing with Jest
  - Files: `math.js`, `math.test.js`

## 🛠️ Installation & Setup

### Prerequisites
- Node.js >= 16.0.0
- MongoDB (for database tutorials)

### Installation
```bash
# Clone the repository
git clone https://github.com/fitsumcs/NodeTutore.git
cd NodeTutore

# Install dependencies
npm install

# Run security audit
npm audit
```

### Running Tutorials
```bash
# Run a specific tutorial
node "Tu_A3(Node_NPM_Modules)/1_catNPM.js"

# Run with nodemon for development
npm run dev

# Run tests
npm test
```

### Testing & Coverage
```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with coverage in watch mode
npm run test:coverage:watch

# Run tests with verbose output
npm run test:verbose

# Run tests for CI/CD
npm run test:ci
```

## 🔧 How to Make Updates

### Adding New Tutorials
1. Create a new folder with descriptive name (e.g., `Tu_E1(New_Topic)`)
2. Add your tutorial files
3. Update this README with the new tutorial information
4. Test your tutorial: `node path/to/your/tutorial.js`

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix

# For breaking changes
npm audit fix --force
```

### Adding New Dependencies
```bash
# Install new package
npm install package-name

# Install as dev dependency
npm install --save-dev package-name

# Update package.json manually if needed
```

### Code Style Guidelines
- Use descriptive folder names: `Tu_X1(Topic_Name)`
- Include a main file (usually `app.js` or `index.js`)
- Add supporting files in subfolders when needed
- Include comments explaining the concepts
- Test your code before committing

### Security Best Practices
- Always run `npm audit` after adding dependencies
- Keep packages updated to latest secure versions
- Use environment variables for sensitive data
- Validate user inputs
- Use HTTPS in production

### Testing Best Practices
- Write tests for new functionality
- Maintain good test coverage
- Use descriptive test names
- Test both success and error cases
- Run tests before committing changes

## 📝 Important Notes

### Database Connections
All MongoDB connections use simplified syntax:
```javascript
// Modern syntax (current)
mongoose.connect('mongodb://localhost/db');
```

### Package Compatibility
- Node.js >= 16.0.0 required
- All packages updated to latest secure versions
- CommonJS modules used throughout

### Test Coverage
- Coverage reports are generated in the `coverage/` directory
- HTML coverage reports can be viewed in browser
- Coverage includes statements, branches, functions, and lines
- Current coverage focuses on testable modules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tutorial or improvements
4. Test your changes: `npm test`
5. Run security audit: `npm audit`
6. Update README if needed
7. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Fitsum Alemu**

---

*Last updated: $(July 2025)*
*Security audit: ✅ Passed*
*Dependencies: ✅ Up to date* 
