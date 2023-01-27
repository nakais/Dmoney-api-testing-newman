const newman = require('newman');
 
newman.run({
    //collection: require('./Collection/Dmoney_collection.json'),
    collection: 'https://api.postman.com/collections/20695655-46f224e6-5a87-46f7-a5fb-88f6034c8295?access_key=PMAT-01GQST0DQN9YF7P7AW4XBWP6GX',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});