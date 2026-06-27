# arXiv Update Snapshot - 2026-06-27

This note records the June 2026 arXiv refresh used for Draft v0.5 of the VLA trends book. It is intentionally a curated update, not a complete bibliographic dump.

## Search Scope

- Date window: papers published or updated after the previous May 2026 draft, checked on 2026-06-27.
- Primary source: arXiv metadata and abstracts.
- Search themes: `Vision-Language-Action`, `VLA robot`, `World Action Model`, `action-conditioned world model`, `embodied robot`.

## Main Trend Finding

The strongest new signal is that VLA is moving from a model-centric framing to an execution-system framing. The new papers cluster around five axes:

1. World-action models as policy steering, evaluation, replay, and safety infrastructure.
2. Online/self-improving VLA via sparse feedback, RL fine-tuning, recovery data, and self-distillation.
3. Asynchronous and fast/slow execution for real robot latency.
4. Diagnostic safety benchmarks and runtime failure detection.
5. Cross-domain data engines for laboratory, multimodal sensing, egocentric human video, and geometry-aware action.

## Curated Anchor Papers

| Axis | arXiv ID | Paper | How it is used in the book |
|---|---:|---|---|
| WAM policy steering | 2606.12403 | World Pilot | Ch10/Ch16: WAM priors as latent/action steering, not just video prediction |
| Latent WAM | 2606.15768 | LaWAM | Ch10/Ch16: latent visual subgoals and low-latency dynamics-aware policy |
| Asynchronous WAM | 2606.09811 | AHA-WAM | Ch06/Ch10/Ch16: low-frequency world context plus high-frequency action |
| Continual WAM | 2606.27374 | World Action Models Enable Continual Imitation Learning | Ch10/Ch16: WAM as recurrent generative replay |
| Generated-world evaluation | 2606.04463 | OSCAR | Ch10/Ch16: generated worlds as policy evaluation infrastructure |
| Physical AI backbone | 2606.02800 | Cosmos 3 | Ch10/Ch16: omnimodal world model framing for physical AI |
| Online adaptation | 2606.25800 | ROAD-VLA | Ch05/Ch16: action-space self-distillation from sparse rewards |
| RL fine-tuning | 2606.26006 | FORCE | Ch05/Ch16: value-calibrated RL fine-tuning and self-distillation |
| Async control | 2606.25985 | Action ControlNet | Ch06/Ch16: stale observation and chunk handoff discontinuity |
| Fast/slow execution | 2606.22794 | UniFS | Ch06/Ch16: multi-timescale VLM/action coupling |
| Safety benchmark | 2606.23686 | LIBERO-Safety | Ch08/Ch11/Ch16: physical and semantic safety benchmark |
| Safety diagnostics | 2606.27079 | ForesightSafety-VLA | Ch08/Ch11/Ch16: cumulative safety cost and risk exposure time |
| Failure detection | 2606.23085 | Foresight | Ch10/Ch11/Ch16: action-conditioned world-model latents for long-horizon failure monitoring |
| Runtime reliability | 2606.27146 | PhysReflect-VLA | Ch11/Ch16: physical feasibility and execution-time self-reflection |
| Provenance | 2606.23574 | A Watermark for VLA and WAM | Ch11/Ch16: model ownership and black-box policy verification |
| Laboratory VLA | 2606.13578 | LabVLA | Ch12/Ch16: scientific laboratory as a domain-specific VLA setting |
| Multimodal sensing | 2606.17598 | MuseVLA | Ch12/Ch16: sensor invocation beyond RGB |
| Egocentric pretraining | 2606.17200 | ACE-Ego-0 | Ch04/Ch12/Ch16: human video converted into robot-format pseudo-actions |
| Language-action pretraining | 2606.27295 | LA4VLA | Ch04/Ch16: language-action priors without visual observations |
| Geometry-aware VLA | 2606.19784 | EquiVLA | Ch04/Ch16: rotational equivariance as an action generalization bias |

## Integration Decision

Draft v0.5 adds a new Chapter 16 instead of scattering short paragraphs across all existing chapters. This keeps the original chapter flow stable while making the update auditable. Chapter 16 maps each trend back to the older chapters and identifies where a future full rewrite should expand the material.

## Versioning

- Version: Draft v0.5
- Date: 2026-06-27
- Files changed for this update: `book/main.tex`, `book/chapters/ch13_trend_map_2024_2026.tex`, `book/chapters/ch16_june_2026_update.tex`, `book/appendices/appA_reading_catalog.tex`, `book/references.bib`, `README.md`, `CHANGELOG.md`.
