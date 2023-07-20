exports.BATCH_SIZE = 1000;
exports.BATCH_INTERVAL = 2000;
exports.API_URL = 'https://collector-observability.browserstack.com';
exports.SCREENSHOT_EVENT_URL = 'api/v1/screenshots';
exports.BATCH_EVENT_URL = 'api/v1/batch';
exports.RERUN_FILE = 'rerun.json';
exports.DEFAULT_WAIT_TIMEOUT_FOR_PENDING_UPLOADS = 5000;
exports.DEFAULT_WAIT_INTERVAL_FOR_PENDING_UPLOADS = 100;
exports.CUSTOM_REPORTER_CALLBACK_TIMEOUT = 3600000;
exports.consoleHolder = Object.assign({}, console);
exports.PID_MAPPING_REGEX = /^TEST-OBSERVABILITY-PID-TESTCASE-MAPPING-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
exports.IPC_SERVER_NAME = 'browserstackTestObservability';
exports.IPC_EVENTS = {
  LOG: 'testObservability:log',
  LOG_INIT: 'testObservability:log:init',
  SCREENSHOT: 'testObservability:screenshot'
};
