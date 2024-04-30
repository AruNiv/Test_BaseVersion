const config = {
  branches: ['main' ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "assets": ["package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"    
     }
     ],
    '@semantic-release/github',
    ["@semantic-release/exec", {
      "verifyReleaseCmd": "echo ${nextRelease.version} >> version_info.txt",
      "generateNotesCmd": "git log -1 --pretty=%B >> version_info.txt"
    }]    
  ]
};

module.exports = config;
