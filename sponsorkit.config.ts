// sponsorkit.config.ts — your personal sponsor wall (github.com/sponsors/edgarriba).
// Generates ./sponsors.svg, embedded in the profile README.
// Local run:  SPONSORKIT_GITHUB_TOKEN=xxx SPONSORKIT_GITHUB_LOGIN=edgarriba npx sponsorkit@latest
// Token: a PAT with read:user. Docs: github.com/antfu/sponsorkit
// (Plain object export — avoids importing `sponsorkit` from the config, which breaks under npx.)

export default {
  mode: 'sponsors',
  outputDir: '.',            // writes ./sponsors.svg next to README.md
  formats: ['svg', 'png'],
  width: 800,
  github: {
    login: 'edgarriba',
    type: 'user',
  },
  renders: [
    { name: 'sponsors', renderer: 'circles' },
  ],
}
