module.exports = {

    default:[
        '--require-module ts-node/register',
        '--require tests/CucumberDemo/steps/**/*.js',
        '--format progress',
    ].join(' '),
}