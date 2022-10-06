module.exports = {
    extends: [
        './rules/api',
    ].map(require.resolve),
    rules: {}
};