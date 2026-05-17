# Introduction to Vision-Language-Action Models and Their Trends (2024-2026)

부제: From OpenVLA-Style Fine-Tuning to Efficient, Robust, and Generalist Robot Policies

## 책의 목적

이 책은 2024-2026년 VLA(Vision-Language-Action) 연구 흐름을 입문자가 빠르게 이해하되, 단순 모델 소개가 아니라 실제 로봇 정책으로 가는 기술적 병목까지 읽을 수 있도록 설계한다. 중심 논지는 VLA 연구가 “VLM을 로봇에 붙이는 단계”에서 “행동 표현, post-training, 실시간성, benchmark, robustness를 통해 실제 로봇 정책으로 만드는 단계”로 이동했다는 것이다.

## 대상 독자

- VLM과 LLM은 알지만 VLA와 robot learning은 정리되지 않은 대학원생
- 로봇 조작, embodied AI, robot foundation model 연구를 시작하려는 연구자
- OpenVLA, RT 계열, Octo, diffusion policy 이후의 흐름을 빠르게 잡고 싶은 독자
- 2024-2026년 VLA 논문군에서 연구 주제를 찾고 싶은 독자

## 권장 분량

- 책 기준 10-12장, 약 120-180쪽
- 각 장은 핵심 개념, 대표 논문군, 비교표, 연구 질문, 읽기 과제로 구성

## Part I. VLA를 이해하기 위한 기본 지도

### 1장. 왜 VLA인가: Vision, Language, Action의 결합

- VLM에서 VLA로 넘어가는 이유
- “이미지를 보고 설명하는 모델”과 “행동을 내는 모델”의 차이
- 로봇 정책으로서의 VLA
- 2024-2026년 VLA 붐의 배경: OpenVLA, RT 계열, Octo, diffusion policy 흐름
- 핵심 질문: VLA는 진짜 generalist robot policy가 될 수 있는가?

### 2장. VLA의 기본 구조

- 입력: 이미지, 비디오, 언어 명령, proprioception, force/tactile signal
- 출력: discrete action, continuous action, action chunk, trajectory, waypoint
- backbone: VLM, LLM, diffusion model, flow model, policy head
- 학습: imitation learning, behavior cloning, instruction tuning, post-training
- 추론: autoregressive action, action chunking, closed-loop control

### 3장. VLA 연구를 읽는 13개 질문

- 배경, 문제, 기존 한계, 목표
- 방법, 핵심 아이디어, 검증, 결과
- 비교, 의의, 한계, 향후 과제, 자원 공개
- 이 책에서 모든 논문을 비교할 공통 프레임
- 좋은 VLA 논문과 약한 VLA 논문을 구분하는 기준

## Part II. 2024-2026 VLA 트렌드의 중심축

### 4장. Action Representation: VLA의 진짜 병목

- 왜 action tokenization이 중요한가
- continuous action vs discrete token
- action chunking, trajectory autoregressive modeling
- VQ action tokenizer, B-spline action encoding, diffusion action decoding
- 대표 흐름: VQ-VLA, Chain-of-Action, Discrete Diffusion VLA, BEAST
- 핵심 논점: 언어 모델의 token world와 로봇의 continuous control world를 어떻게 연결할 것인가?

### 5장. Fine-Tuning과 Post-Training: VLA를 과제에 맞추는 방법

- full fine-tuning vs adapter vs LoRA류 접근
- instruction tuning from understanding to manipulation
- interactive post-training
- reinforcement fine-tuning, verified rewards, simulator-based feedback
- OpenVLA-OFT류 문제의식: 속도와 성공률을 동시에 어떻게 올릴 것인가?
- 핵심 논점: VLA는 pretraining보다 post-training에서 성능 차이가 갈리는가?

### 6장. Efficient VLA: 빠르고 작은 VLA 만들기

- 왜 VLA는 느린가: VLM backbone, autoregressive decoding, high-frequency control
- lightweight architecture, tiny-scale VLA, adapter
- sparsification, routing, speculative decoding, token pruning
- real-time action chunking, flow policy, frequency consistency
- 대표 흐름: CogVLA, VLA-Adapter, Spec-VLA, FreqPolicy, lightweight VLA
- 핵심 논점: 성능을 유지하면서 로봇 제어 주기에 맞출 수 있는가?

### 7장. Manipulation이 VLA의 주전장이 된 이유

- pick-and-place에서 long-horizon manipulation으로
- bimanual manipulation, dexterous grasping, contact-rich manipulation
- force-aware VLA, tactile/force-conditioned VLA
- general robot control과 task generalization
- 대표 흐름: DexVLA, DexGraspVLA, ForceVLA, GR 계열, diffusion expert
- 핵심 논점: VLA가 언어 지시를 실제 물리 상호작용으로 안정적으로 바꿀 수 있는가?

### 8장. Benchmarks and Datasets: VLA 성능은 무엇으로 재는가

- LIBERO, Open X-Embodiment, BridgeData, DROID, RoboTwin류 벤치마크
- sim-to-real, domain randomization, bimanual benchmark
- success rate, robustness, generalization, latency
- 데이터셋 크기보다 중요한 것: embodiment 다양성, task diversity, annotation quality
- 대표 흐름: RoboTwin 2.0, LIBERO-plus, benchmark/data generator papers
- 핵심 논점: 지금의 benchmark가 real-world deployment를 충분히 대표하는가?

## Part III. VLA의 다음 단계

### 9장. Reasoning VLA: 로봇은 생각해야 하는가

- long chain-of-thought와 embodied reasoning
- planning representation inside VLA
- memory, cognition-aligned routing, system-2 thinking
- task decomposition, recovery, re-planning
- 대표 흐름: MemoryVLA, CogVLA, HUME, reasoning survey 계열
- 핵심 논점: reasoning은 실제 success rate를 올리는가, 아니면 설명 가능한 껍데기인가?

### 10장. World Models and Simulation: 행동 전에 세계를 예측하기

- autoregressive action world model
- implicit world modeling
- video/world model 기반 policy learning
- simulator에서 reward verification과 policy improvement
- digital twin과 synthetic data
- 대표 흐름: WorldVLA, FLARE, simulator-based VLA-RFT, RoboTwin
- 핵심 논점: world model은 VLA의 sample efficiency와 safety를 바꿀 수 있는가?

### 11장. Robustness, Safety, and Failure Modes

- distribution shift
- language ambiguity
- visual distractor
- adversarial instruction, backdoor, jailbreak
- contact-rich task failure
- long-horizon compounding error
- 대표 흐름: LIBERO-plus, safety/robustness VLA papers
- 핵심 논점: VLA는 demo에서는 강하지만 배포에서는 왜 약해지는가?

### 12장. Beyond Manipulation: Navigation, Driving, Games, and General Embodiment

- VLA for autonomous driving
- robot navigation and omni-modal VLA
- keyboard/mouse game agents as VLA-like systems
- household robots, mobile manipulation
- humanoid and multi-embodiment policies
- 핵심 논점: VLA는 manipulator 중심에서 general embodied agent로 확장될 수 있는가?

## Part IV. 연구자로서 VLA를 어떻게 읽고 만들 것인가

### 13장. 2024-2026 VLA 트렌드 맵

- 2024: VLA foundation policy의 등장과 OpenVLA류 전환점
- 2025: fine-tuning, action tokenization, benchmark, dexterous manipulation 폭발
- 2026: efficiency, routing, speculative decoding, real-time control, robustness로 이동
- 논문군별 지도: survey, manipulation, efficiency, reasoning, world model, benchmark, safety
- 많이 인용되는 논문과 실제로 중요한 논문의 차이

### 14장. 좋은 VLA 연구 주제를 고르는 법

- “또 다른 VLA 모델”이 약한 이유
- 좋은 주제 1: action representation
- 좋은 주제 2: efficient real-time control
- 좋은 주제 3: robust benchmark and failure diagnosis
- 좋은 주제 4: post-training protocol
- 좋은 주제 5: contact-rich manipulation
- 피해야 할 주제: benchmark 없는 모델명 논문, 작은 ablation 없는 adapter 논문, real robot claim 없는 deployment 논문

### 15장. VLA 논문 읽기 실전: 대표 논문 20편 해설

- OpenVLA / OpenVLA-OFT 계열
- DexVLA / DexGraspVLA
- VQ-VLA / Discrete Diffusion VLA
- CogVLA / MemoryVLA
- WorldVLA / FLARE
- RoboTwin 2.0 / LIBERO-plus
- Spec-VLA / VLA-Adapter / FreqPolicy
- 각 논문을 13-question framework로 짧게 재분석

## Appendix

### A. VLA 용어 사전

- VLA, VLM, policy head, action chunk, action tokenizer
- behavior cloning, imitation learning, post-training, RFT
- embodiment, sim-to-real, closed-loop control

### B. 주요 데이터셋과 벤치마크 표

- LIBERO
- Open X-Embodiment
- BridgeData
- DROID
- RoboTwin
- CALVIN
- RLBench
- ManiSkill

### C. 주요 모델 계열 비교표

- OpenVLA 계열
- RT 계열
- Octo 계열
- diffusion policy 계열
- world model 계열
- efficient VLA 계열

### D. 2024-2026 VLA 논문 읽기 체크리스트

- 이 논문은 어떤 행동 표현을 쓰는가?
- 학습 데이터와 evaluation task가 분리되어 있는가?
- 실제 로봇 실험인가, 시뮬레이션인가, 오프라인 benchmark인가?
- baseline이 충분히 강한가?
- 속도, latency, closed-loop control 주기를 보고하는가?
- failure case와 limitation을 공개하는가?
- 코드, 데이터셋, checkpoint가 실제로 접근 가능한가?

### E. VLA 연구 주제 기획 템플릿

- 문제 정의
- 기존 한계
- 제안 방법
- action representation
- training/post-training protocol
- benchmark
- real robot or simulation validation
- baseline
- expected failure modes
- 공개 자원 계획

### F. 439편 인용 논문 목록과 분류 태그

- fine-tuning / post-training
- efficient inference
- action tokenization
- manipulation
- reasoning and planning
- world model and simulation
- benchmark and dataset
- robustness and safety
- navigation and autonomous driving

## 책의 한 문장 thesis

2024-2026년 VLA 연구의 핵심 변화는 “VLM을 로봇에 붙이는 것”에서 “행동 표현, post-training, 실시간성, benchmark, robustness를 통해 실제 로봇 정책으로 만드는 것”으로 이동한 것이다.
