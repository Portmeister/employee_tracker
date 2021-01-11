// Import the mysql package
const mysql = require('mysql2');

// Import Constants Choice Variables
const [ALL_SONGS_BY_ARTIST, ARTISTS_WITH_TWO_OR_MORE_SONGS, 
       SONGS_BY_RANGE, SPECIFIC_SONG, TOP_SONG_AND_ALBUM_BY_ARTIST] = require('./lib/const');

// Import Prompt Functions
const {promptChoices, promptArtistName,promptRange,promptSong} = require('./lib/prompts');

// Import Query Functions
const  {artistSearch, multiSearch, rangeSearch, songSearch, songAndAlbumSearch} = require('./lib/queries');


// Connect to the top_songsDB database using a localhost connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port, if not 3306
    port: 3306,

    // Your MySQL username
    user: 'root',

    // Your MySQL password (leave blank for class demonstration purposes; fill in later)
    password: 'password',

    // Name of database
    database: 'company_db',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    await runSearch();
    connection.end();
});

async function runSearch() {

    let answer, employee, role, dept;

    answer = await promptChoices();

    switch (answer.action) {
        case VIEW_EMPLOYEES:
            viewAllEmp();
            break;

        case EMPLOYEES_BY_ROLE:
            viewAllEmpByRole();
            break;

        case EMPLOYEES_BY_DEPT:
            viewAllEmpByDept();
            break;

        case EMPLOYEES_BY_MGR:
            viewAllEmpByMngr();
            break;
        
        case ADD_EMPLOYEE:
            addEmp();
            break;

        case ADD_ROLE:
            addRole();
            break;
        
        case ADD_DEPT:
            addDept();
            break;

        case UPDATE_ROLE:
            updateEmpRole();
            break;

        case UPDATE_MGR:
            updateEmpMngr();
            break;

        case DELETE_EMPLOYEE:
            deleteEmp();
            break;

        case DELETE_ROLE:
            deleteRole();
            break;

        case DELETE_DEPT:
            deleteDept();
            break;

        case VIEW_BUDGET:
            viewDeptBudget();
            break;
    };
}