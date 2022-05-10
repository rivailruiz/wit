const logsService = require('../services/logs');

const generateLogs = () => {
    return logsService.generateLogs();
}

module.exports = { generateLogs }