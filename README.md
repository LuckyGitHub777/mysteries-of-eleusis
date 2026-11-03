# The Mysteries of Eleusis

A quiet, self-contained interactive website exploring the ancient Greek sanctuary at Eleusis and the traditions associated with Demeter and Persephone. A guided sequence introduces the myth, symbols, sacred procession, boundaries of historical knowledge, and an optional creative composition.

The exact ancient inner rites are not recoverable. The seven-movement learning pattern is a contemporary interpretation, not a reconstruction or initiation.

## Run locally

Open `index.html` or run `python3 -m http.server 8000` from the repository root.

## Website

GitHub Pages project site: https://luckygithub777.github.io/mysteries-of-eleusis/

This is a static website. No server, external JavaScript libraries, analytics, cookies, or remote runtime APIs are required. Interactions and reflections stay in the browser.

## Accessibility

Reduced motion, high contrast, focus mode, keyboard navigation and a no-JavaScript reading path are included. Native screen-reader and human usability testing are separate acceptance activities.

## Verification

`python3 tests/static_verify.py` and `node --check app.js`. A lightweight GitHub Actions workflow runs these checks on push and pull requests.

## Context

The ancient sanctuary, the myth, the Sacred Way, and the Telesterion are distinct from this site's symbolic narrative exercises. The 1910 *Rites of Eleusis* are an optional later artistic adaptation, not the original Eleusinian Mysteries. More detail: [`docs/CONTENT_BOUNDARIES.md`](docs/CONTENT_BOUNDARIES.md).

## License

MIT; see [`LICENSE`](LICENSE).

## Museum Lens | Art × Science

This is an interpretive exhibit within [LuckyGitHub777's living museum](https://github.com/LuckyGitHub777), bringing historic curiosity and artistic experience together with transparent engineering.

- **Art:** A contemporary exploration of symbolism, myth, memory, and ritual imagination.
- **Engineering:** A self-contained interactive site designed to be experienced in the browser.
- **Evidence:** The historic Eleusinian mysteries are documented through incomplete primary accounts and scholarship. This exhibit does not claim to reconstruct the lost secret rites, confer an initiation, or establish a metaphysical effect.
- **Visitor boundary:** Creative interpretation remains clearly distinguished from established history. Verify the actual served version, controls and accessibility independently before release acceptance.

*Imagination opens the door. Engineering makes it real. Evidence keeps us honest.*
