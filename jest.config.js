const path = require('path')

module.exports = {
    displayName: {
        name: 'Rick & Morty',
        color: 'blue',
    },
    verbose: true,
    collectCoverage: true,
    coverageDirectory: path.resolve(__dirname, 'coverage'),
    coverageReporters: ["html", 'text'],
    transform: {
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    }
};

