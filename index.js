const { context } = require('@actions/github');

console.log(JSON.stringify(context.payload, null, 2));
