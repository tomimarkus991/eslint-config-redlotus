module.exports = {
    extends: [
        './rules/ui',
    ].map(require.resolve),
    rules: {}
};