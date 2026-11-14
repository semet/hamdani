# CLAUDE.md

Guidance for Claude Code in this repository. The full, canonical guide lives in
`AGENTS.md` and is imported below — keep project rules there, not here.

@AGENTS.md

## Claude Code specifics

- Always branch before making changes: `git checkout -b <type>/<short-name>`.
- Verify with `pnpm lint` (and `pnpm build` for anything beyond content edits). There are no tests.
- Use `/run` or `pnpm dev` to check visual/animation changes in the browser at http://localhost:3000.
