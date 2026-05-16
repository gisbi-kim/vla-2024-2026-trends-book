# Fine-Tuning VLA 인용 논문 13문항 요약 - 읽기용 다듬은 버전

- 대상 논문: Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success
- 인용 논문 수: 439
- 작성 방식: 확보한 로컬 PDF 406개와 Scholar 메타데이터를 바탕으로 13개 질문을 모두 한국어 설명문으로 다시 정리했다.
- 범위 주의: 이 파일은 439편 전체를 빠르게 훑기 위한 대량 triage 요약본이며, 각 논문의 모든 표·appendix를 사람이 정독한 최종 리뷰는 아니다.
- 영어 표기 원칙: 모델명, 데이터셋명, 고유 방법명, 원문 제목은 영어를 유지하고, 설명 문장은 한국어로 다듬었다.

## 목차

- [001. Vision-language-action models: Concepts, progress, applications and challenges](#paper-001)
- [002. Vision-language-action models for robotics: A review towards real-world applications](#paper-002)
- [003. Towards reasoning era: A survey of long chain-of-thought for reasoning large language models](#paper-003)
- [004. Real-time execution of action chunking flow policies](#paper-004)
- [005. A Survey on Vision–Language–Action Models for Embodied AI](#paper-005)
- [006. Forcevla: Enhancing vla models with a force-aware moe for contact-rich manipulation](#paper-006)
- [007. CogVLA: Cognition-Aligned Vision-Language-Action Models via Instruction-Driven Routing & Sparsification](#paper-007)
- [008. Vla-adapter: An effective paradigm for tiny-scale vision-language-action model](#paper-008)
- [009. Dexgraspvla: A vision-language-action framework towards general dexterous grasping](#paper-009)
- [010. A survey on vision-language-action models for autonomous driving](#paper-010)
- [011. Dexvla: Vision-language model with plug-in diffusion expert for general robot control](#paper-011)
- [012. Vq-vla: Improving vision-language-action models via scaling vector-quantized action tokenizers](#paper-012)
- [013. Robotwin 2.0: A scalable data generator and benchmark with strong domain randomization for robust bimanual robotic manipulation](#paper-013)
- [014. A survey of reinforcement learning for large reasoning models](#paper-014)
- [015. Vla-os: Structuring and dissecting planning representations and paradigms in vision-language-action models](#paper-015)
- [016. Worldvla: Towards autoregressive action world model](#paper-016)
- [017. Gr-3 technical report](#paper-017)
- [018. Interactive post-training for vision-language-action models](#paper-018)
- [019. A survey on vision-language-action models: An action tokenization perspective](#paper-019)
- [020. Instructvla: Vision-language-action instruction tuning from understanding to manipulation](#paper-020)
- [021. Memoryvla: Perceptual-cognitive memory in vision-language-action models for robotic manipulation](#paper-021)
- [022. Discrete diffusion vla: Bringing discrete diffusion to action decoding in vision-language-action policies](#paper-022)
- [023. Flare: Robot learning with implicit world modeling](#paper-023)
- [024. Freqpolicy: Efficient flow-based visuomotor policy via frequency consistency](#paper-024)
- [025. Beast: Efficient tokenization of b-splines encoded action sequences for imitation learning](#paper-025)
- [026. Jarvis-vla: Post-training large-scale vision language models to play visual games with keyboards and mouse](#paper-026)
- [027. Large vlm-based vision-language-action models for robotic manipulation: A survey](#paper-027)
- [028. Chain-of-action: Trajectory autoregressive modeling for robotic manipulation](#paper-028)
- [029. Spec-vla: speculative decoding for vision-language-action models with relaxed acceptance](#paper-029)
- [030. Unified vision-language-action model](#paper-030)
- [031. Semanticvla: Semantic-aligned sparsification and enhancement for efficient robotic manipulation](#paper-031)
- [032. Conditioning matters: Training diffusion policies is faster than you think](#paper-032)
- [033. A survey on efficient vision-language-action models](#paper-033)
- [034. Hume: Introducing system-2 thinking in visual-language-action model](#paper-034)
- [035. Villa-x: enhancing latent action modeling in vision-language-action models](#paper-035)
- [036. Flower: Democratizing generalist robot policies with efficient vision-language-action flow policies](#paper-036)
- [037. Vision language action models in robotic manipulation: A systematic review](#paper-037)
- [038. Specprune-vla: Accelerating vision-language-action models via action-aware self-speculative pruning](#paper-038)
- [039. Vla-cache: Efficient vision-language-action manipulation via adaptive token caching](#paper-039)
- [040. Evo-0: Vision-language-action model with implicit spatial understanding](#paper-040)
- [041. What foundation models can bring for robot learning in manipulation: A survey](#paper-041)
- [042. Suturebot: A precision framework & benchmark for autonomous end-to-end suturing](#paper-042)
- [043. Geovla: Empowering 3d representations in vision-language-action models](#paper-043)
- [044. Towards a unified understanding of robot manipulation: A comprehensive survey](#paper-044)
- [045. Tgrpo: Fine-tuning vision-language-action model via trajectory-wise group relative policy optimization](#paper-045)
- [046. Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos](#paper-046)
- [047. Vla-rft: Vision-language-action reinforcement fine-tuning with verified rewards in world simulators](#paper-047)
- [048. Wovr: World models as reliable simulators for post-training vla policies with rl](#paper-048)
- [049. Abot-m0: Vla foundation model for robotic manipulation with action manifold learning](#paper-049)
- [050. The better you learn, the smarter you prune: Towards efficient vision-language-action models via differentiable token pruning](#paper-050)
- [051. Ceed-vla: Consistency vision-language-action model with early-exit decoding](#paper-051)
- [052. Como: Learning continuous latent motion from internet videos for scalable robot learning](#paper-052)
- [053. Libero-plus: In-depth robustness analysis of vision-language-action models](#paper-053)
- [054. Worldeval: World model as real-world robot policies evaluator](#paper-054)
- [055. Datamil: Selecting data for robot imitation learning with datamodels](#paper-055)
- [056. Internvla-m1: A spatially guided vision-language-action framework for generalist robot policy](#paper-056)
- [057. Review and perspectives on multimodal perception, mutual cognition, and embodied execution for human–robot collaboration in Industry 5.0](#paper-057)
- [058. Think twice, act once: Token-aware compression and action reuse for efficient inference in vision-language-action models](#paper-058)
- [059. Efficient vision-language-action models for embodied manipulation: A systematic survey](#paper-059)
- [060. World-env: Leveraging world model as a virtual environment for vla post-training](#paper-060)
- [061. Parallels between vla model post-training and human motor learning: Progress, challenges, and trends](#paper-061)
- [062. Agentic robot: A brain-inspired framework for vision-language-action models in embodied agents](#paper-062)
- [063. Clip-rt: Learning language-conditioned robotic policies from natural language supervision](#paper-063)
- [064. dvla: Diffusion vision-language-action model with multimodal chain-of-thought](#paper-064)
- [065. Shortcut learning in generalist robot policies: The role of dataset diversity and fragmentation](#paper-065)
- [066. Inspire: Vision-language-action models with intrinsic spatial reasoning](#paper-066)
- [067. Recurrent-depth vla: Implicit test-time compute scaling of vision-language-action models via latent iterative reasoning](#paper-067)
- [068. Cosmos policy: Fine-tuning video models for visuomotor control and planning](#paper-068)
- [069. Align-then-steer: Adapting the vision-language action models through unified latent guidance](#paper-069)
- [070. Rynnvla-001: Using human demonstrations to improve robot manipulation](#paper-070)
- [071. Vote: vision-language-action optimization with trajectory ensemble voting](#paper-071)
- [072. 3d cavla: Leveraging depth and 3d context to generalize vision language action models for unseen tasks](#paper-072)
- [073. Spatial forcing: Implicit spatial representation alignment for vision-language-action model](#paper-073)
- [074. OmniVLA: An omni-modal vision-language-action model for robot navigation](#paper-074)
- [075. Unified diffusion vla: Vision-language-action model via joint discrete denoising diffusion process](#paper-075)
- [076. Residual off-policy rl for finetuning behavior cloning policies](#paper-076)
- [077. Large model empowered embodied ai: A survey on decision-making and embodied learning](#paper-077)
- [078. Survey of vision-language-action models for embodied manipulation](#paper-078)
- [079. Fast ecot: Efficient embodied chain-of-thought via thoughts reuse](#paper-079)
- [080. Action-aware dynamic pruning for efficient vision-language-action manipulation](#paper-080)
- [081. Switchvla: Execution-aware task switching for vision-language-action models](#paper-081)
- [082. Geoaware-vla: Implicit geometry aware vision-language-action model](#paper-082)
- [083. Polaris: Scalable real-to-sim evaluations for generalist robot policies](#paper-083)
- [084. Global prior meets local consistency: Dual-memory augmented vision-language-action model for efficient robotic manipulation](#paper-084)
- [085. 10 open challenges steering the future of vision-language-action models](#paper-085)
- [086. Deepthinkvla: Enhancing reasoning capability of vision-language-action models](#paper-086)
- [087. Self-improving vision-language-action models with data generation via residual rl](#paper-087)
- [088. Rise: Self-improving robot policy with compositional world model](#paper-088)
- [089. World-in-world: World models in a closed-loop world](#paper-089)
- [090. Dexbotic: Open-source vision-language-action toolbox](#paper-090)
- [091. Jepa-vla: Video predictive embedding is needed for vla models](#paper-091)
- [092. Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking](#paper-092)
- [093. SRPO: Self-Referential Policy Optimization for Vision-Language-Action Models](#paper-093)
- [094. Adaptive action chunking at inference-time for vision-language-action models](#paper-094)
- [095. Phantom menace: Exploring and enhancing the robustness of vla models against physical sensor attacks](#paper-095)
- [096. Robotic manipulation via imitation learning: Taxonomy, evolution, benchmark, and challenges](#paper-096)
- [097. Lap: Language-action pre-training enables zero-shot cross-embodiment transfer](#paper-097)
- [098. Learning physics from pretrained video models: A multimodal continuous and sequential world interaction models for robotic manipulation](#paper-098)
- [099. Rynnvla-002: A unified vision-language-action and world model](#paper-099)
- [100. Towards Deploying VLA Without Fine-Tuning: Plug-and-Play Inference-Time VLA Policy Steering via Embodied Evolutionary Diffusion](#paper-100)
- [101. Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging](#paper-101)
- [102. Rlinf: Flexible and efficient large-scale reinforcement learning via macro-to-micro flow transformation](#paper-102)
- [103. Towards long-lived robots: Continual learning vla models via reinforcement fine-tuning](#paper-103)
- [104. Failsafe: Reasoning and recovery from failures in vision-language-action models](#paper-104)
- [105. When Vision Overrides Language: Evaluating and Mitigating Counterfactual Failures in VLAs](#paper-105)
- [106. Benchmarking vision, language, & action models in procedurally generated, open ended action environments](#paper-106)
- [107. HoloBrain-0 Technical Report](#paper-107)
- [108. ConsisVLA-4D: Advancing Spatiotemporal Consistency in Efficient 3D-Perception and 4D-Reasoning for Robotic Manipulation](#paper-108)
- [109. Dualcot-vla: Visual-linguistic chain of thought via parallel reasoning for vision-language-action models](#paper-109)
- [110. Embodied robot manipulation in the era of foundation models: Planning and learning perspectives](#paper-110)
- [111. VLA-Thinker: Boosting Vision-Language-Action Models through Thinking-with-Image Reasoning](#paper-111)
- [112. TabVLA: Targeted Backdoor Attacks on Vision-Language-Action Models](#paper-112)
- [113. MMaDA-VLA: Large Diffusion Vision-Language-Action Model with Unified Multi-Modal Instruction and Generation](#paper-113)
- [114. Vla-forget: Vision-language-action unlearning for embodied foundation models](#paper-114)
- [115. A1: A Fully Transparent Open-Source, Adaptive and Efficient Truncated Vision-Language-Action Model](#paper-115)
- [116. Self-vla: A skill enhanced agentic vision-language-action framework for contact-rich disassembly](#paper-116)
- [117. AdaWorldPolicy: World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation](#paper-117)
- [118. Benchmarking generalizable bimanual manipulation: Robotwin dual-arm collaboration challenge at cvpr 2025 meis workshop](#paper-118)
- [119. RobustVLA: Robustness-aware reinforcement post-training for vision-language-action models](#paper-119)
- [120. How Fast Can I Run My VLA? Demystifying VLA Inference Performance with VLA-Perf](#paper-120)
- [121. Compliantvla-adaptor: Vlm-guided variable impedance action for safe contact-rich manipulation](#paper-121)
- [122. Rethinking the practicality of vision-language-action model: A comprehensive benchmark and an improved baseline](#paper-122)
- [123. VLA: Prior-Guided Vision-Language-Action Models via World Knowledge Variation](#paper-123)
- [124. Leveraging os-level primitives for robotic action management](#paper-124)
- [125. UAOR: Uncertainty-aware Observation Reinjection for Vision-Language-Action Models](#paper-125)
- [126. Xiaomi-robotics-0: An open-sourced vision-language-action model with real-time execution](#paper-126)
- [127. InteLiPlan: An Interactive Lightweight LLM-Based Planner for Domestic Robot Autonomy](#paper-127)
- [128. In-N-On: Scaling Egocentric Manipulation with in-the-wild and on-task Data](#paper-128)
- [129. Evovla: Self-evolving vision-language-action model](#paper-129)
- [130. METIS: Multi-Source Egocentric Training for Integrated Dexterous Vision-Language-Action Model](#paper-130)
- [131. Hypervla: Efficient inference in vision-language-action models via hypernetworks](#paper-131)
- [132. Pixelvla: Advancing pixel-level understanding in vision-language-action model](#paper-132)
- [133. Worldagen: Unified state-action prediction with test-time world model training](#paper-133)
- [134. MetaSym: A Symplectic Meta-learning Framework for Physical Intelligence](#paper-134)
- [135. VLA-Arena: An Open-Source Framework for Benchmarking Vision-Language-Action Models](#paper-135)
- [136. Actioncodec: What makes for good action tokenizers](#paper-136)
- [137. HiMoE-VLA: Hierarchical Mixture-of-Experts for Generalist Vision-Language-Action Policies](#paper-137)
- [138. ELMUR: External Layer Memory with Update/Rewrite for Long-Horizon RL](#paper-138)
- [139. VLA-Pruner: Temporal-Aware Dual-Level Visual Token Pruning for Efficient Vision-Language-Action Inference](#paper-139)
- [140. Hybrid Training for Vision-Language-Action Models](#paper-140)
- [141. Vla-0: Building state-of-the-art vlas with zero modification](#paper-141)
- [142. Dit4dit: Jointly modeling video dynamics and actions for generalizable robot control](#paper-142)
- [143. Robot-dift: Distilling diffusion features for geometrically consistent visuomotor control](#paper-143)
- [144. H-wm: Robotic task and motion planning guided by hierarchical world model](#paper-144)
- [145. Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data](#paper-145)
- [146. Future-vla: Forecasting unified trajectories under real-time execution](#paper-146)
- [147. AR-VLA: True Autoregressive Action Expert for Vision-Language-Action Models](#paper-147)
- [148. OXE-AugE: A Large-Scale Robot Augmentation of OXE for Scaling Cross-Embodiment Policy Learning](#paper-148)
- [149. Embodied ai: A survey on the evolution from perceptive to behavioral intelligence](#paper-149)
- [150. FutureVLA: Joint Visuomotor Prediction for Vision-Language-Action Model](#paper-150)
- [151. PVI: Plug-in Visual Injection for Vision-Language-Action Models](#paper-151)
- [152. ROCKET: Residual-Oriented Multi-Layer Alignment for Spatially-Aware Vision-Language-Action Models](#paper-152)
- [153. Expertise need not monopolize: Action-Specialized Mixture of Experts for Vision-Language-Action Learning](#paper-153)
- [154. World2Act: Latent Action Post-Training via Skill-Compositional World Models](#paper-154)
- [155. OFlow: Injecting Object-Aware Temporal Flow Matching for Robust Robotic Manipulation](#paper-155)
- [156. Beyond Attention Magnitude: Leveraging Inter-layer Rank Consistency for Efficient Vision-Language-Action Models](#paper-156)
- [157. Continually Evolving Skill Knowledge in Vision Language Action Model](#paper-157)
- [158. Eva-VLA: Evaluating Vision-Language-Action Models' Robustness Under Real-World Physical Variations](#paper-158)
- [159. Seeing to Act, Prompting to Specify: A Bayesian Factorization of Vision Language Action Policy](#paper-159)
- [160. DySL-VLA: Efficient Vision-Language-Action Model Inference via Dynamic-Static Layer-Skipping for Robot Manipulation](#paper-160)
- [161. VLSA: Vision-Language-Action Models with Plug-and-Play Safety Constraint Layer](#paper-161)
- [162. Robo-Dopamine: General Process Reward Modeling for High-Precision Robotic Manipulation](#paper-162)
- [163. TwinBrainVLA: Unleashing the Potential of Generalist VLMs for Embodied Tasks via Asymmetric Mixture-of-Transformers](#paper-163)
- [164. Uni-Skill: Building Self-Evolving Skill Repository for Generalizable Robotic Manipulation](#paper-164)
- [165. HiF-VLA: Hindsight, Insight and Foresight through Motion Representation for Vision-Language-Action Models](#paper-165)
- [166. RoboScape-R: Unified Reward-Observation World Models for Generalizable Robotics Training via RL](#paper-166)
- [167. RoboStereo: Dual-Tower 4D Embodied World Models for Unified Policy Optimization](#paper-167)
- [168. TAG: Target-Agnostic Guidance for Stable Object-Centric Inference in Vision-Language-Action Models](#paper-168)
- [169. Token Expand-Merge: Training-Free Token Compression for Vision-Language-Action Models](#paper-169)
- [170. VLA^ 2: Empowering Vision-Language-Action Models with an Agentic Framework for Unseen Concept Manipulation](#paper-170)
- [171. LiLo-VLA: Compositional Long-Horizon Manipulation via Linked Object-Centric Policies](#paper-171)
- [172. EVOLVE-VLA: Test-Time Training from Environment Feedback for Vision-Language-Action Models](#paper-172)
- [173. VGAS: Value-Guided Action-Chunk Selection for Few-Shot Vision-Language-Action Adaptation](#paper-173)
- [174. Fast-dVLA: Accelerating Discrete Diffusion VLA to Real-Time Performance](#paper-174)
- [175. DiG-Flow: Discrepancy-Guided Flow Matching for Robust VLA Models](#paper-175)
- [176. Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA](#paper-176)
- [177. GP3: A 3D Geometry-Aware Policy with Multi-View Images for Robotic Manipulation](#paper-177)
- [178. PosA-VLA: Enhancing Action Generation via Pose-Conditioned Anchor Attention](#paper-178)
- [179. [HTML] Multimodal fusion with vision-language-action models for robotic manipulation: A systematic review](#paper-179)
- [180. IA-VLA: Input Augmentation for Vision-Language-Action models in settings with semantically complex tasks](#paper-180)
- [181. [HTML] PI-VLA: Adaptive Symmetry-Aware Decision-Making for Long-Horizon Vision–Language–Action Manipulation](#paper-181)
- [182. Say, dream, and act: Learning video world models for instruction-driven robot manipulation](#paper-182)
- [183. ReMem-VLA: Empowering Vision-Language-Action Model with Memory via Dual-Level Recurrent Queries](#paper-183)
- [184. Mixture of Horizons in Action Chunking](#paper-184)
- [185. Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models](#paper-185)
- [186. Chain of World: World Model Thinking in Latent Motion](#paper-186)
- [187. HazardArena: Evaluating Semantic Safety in Vision-Language-Action Models](#paper-187)
- [188. Bridging language and action: A survey of language-conditioned robot manipulation](#paper-188)
- [189. RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies](#paper-189)
- [190. FlowCorrect: Efficient Interactive Correction of Generative Flow Policies for Robotic Manipulation](#paper-190)
- [191. MapleGrasp: Mask-guided Feature Pooling for Language-driven Efficient Robotic Grasping](#paper-191)
- [192. AnoleVLA: Lightweight Vision-Language-Action Model with Deep State Space Models for Mobile Manipulation](#paper-192)
- [193. FASTER: Rethinking Real-Time Flow VLAs](#paper-193)
- [194. Growing with your embodied agent: A human-in-the-loop lifelong code generation framework for long-horizon manipulation skills](#paper-194)
- [195. A survey of robotic manipulation: From bottom-up approaches to end-to-end paradigms with LLMs](#paper-195)
- [196. Neural Implicit Action Fields: From Discrete Waypoints to Continuous Functions for Vision-Language-Action Models](#paper-196)
- [197. Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration](#paper-197)
- [198. ABPolicy: Asynchronous B-Spline Flow Policy for Real-Time and Smooth Robotic Manipulation](#paper-198)
- [199. Object-centric mobile manipulation through sam2-guided perception and imitation learning](#paper-199)
- [200. Omnisat: Compact action token, faster auto regression](#paper-200)
- [201. Habilis-: A Fast-Motion and Long-Lasting On-Device Vision-Language-Action Model](#paper-201)
- [202. Stable Language Guidance for Vision-Language-Action Models](#paper-202)
- [203. Exploring the Robustness of Vision-Language-Action Models against Sensor Attacks](#paper-203)
- [204. NanoVLA: Routing Decoupled Vision-Language Understanding for Nano-sized Generalist Robotic Policies](#paper-204)
- [205. Human centric general physical intelligence for agile manufacturing automation](#paper-205)
- [206. Mimic Intent, Not Just Trajectories](#paper-206)
- [207. Open-Loop Planning, Closed-Loop Verification: Speculative Verification for VLA](#paper-207)
- [208. RT-Cache: Training-Free Retrieval for Real-Time Manipulation](#paper-208)
- [209. SVA: Towards Speech-Enabled Vision-Language-Action Model](#paper-209)
- [210. BeSafe-Bench: Unveiling Behavioral Safety Risks of Situated Agents in Functional Environments](#paper-210)
- [211. SaiVLA-0: Cerebrum--Pons--Cerebellum Tripartite Architecture for Compute-Aware Vision-Language-Action](#paper-211)
- [212. MergeVLA: Cross-Skill Model Merging Toward a Generalist Vision-Language-Action Agent](#paper-212)
- [213. Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling](#paper-213)
- [214. Generative Control as Optimization: Time Unconditional Flow Matching for Adaptive and Robust Robotic Control](#paper-214)
- [215. Any3D-VLA: Enhancing VLA Robustness via Diverse Point Clouds](#paper-215)
- [216. VLANeXt: Recipes for Building Strong VLA Models](#paper-216)
- [217. Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning](#paper-217)
- [218. MolmoAct2: Action Reasoning Models for Real-world Deployment](#paper-218)
- [219. StarVLA-: Reducing Complexity in Vision-Language-Action Systems](#paper-219)
- [220. CronusVLA: Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling](#paper-220)
- [221. Audio-VLA: Adding Contact Audio Perception to Vision-Language-Action Model for Robotic Manipulation](#paper-221)
- [222. Inject Once Survive Later: Backdooring Vision-Language-Action Models to Persist Through Downstream Fine-tuning](#paper-222)
- [223. Look Before Acting: Enhancing Vision Foundation Representations for Vision-Language-Action Models](#paper-223)
- [224. TCoT: Trajectory Chain-of-Thoughts for Robotic Manipulation with Failure Recovery in Vision-Language-Action Model](#paper-224)
- [225. World-Gymnast: Training Robots with Reinforcement Learning in a World Model](#paper-225)
- [226. Beyond Imitation: Reinforcement Learning-Based Sim-Real Co-Training for VLA Models](#paper-226)
- [227. BFA++: Hierarchical Best-Feature-Aware Token Prune for Multi-View Vision Language Action Model](#paper-227)
- [228. MM-ACT: Learn from Multimodal Parallel Generation to Act](#paper-228)
- [229. Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs](#paper-229)
- [230. UniT: Toward a Unified Physical Language for Human-to-Humanoid Policy Learning and World Modeling](#paper-230)
- [231. TacMamba: A Tactile History Compression Adapter Bridging Fast Reflexes and Slow VLA Reasoning](#paper-231)
- [232. TempoFit: Plug-and-Play Layer-Wise Temporal KV Memory for Long-Horizon Vision-Language-Action Manipulation](#paper-232)
- [233. Breaking Cross-modal Alignment in Embodied Intelligence: A Multimodal Adversarial Attack Framework for Vision-Language-Action Models](#paper-233)
- [234. Reshaping Action Error Distributions for Reliable Vision-Language-Action Models](#paper-234)
- [235. Tactile Modality Fusion for Vision-Language-Action Models](#paper-235)
- [236. FASTer: Toward Efficient Autoregressive Vision Language Action Modeling via Neural Action Tokenization](#paper-236)
- [237. [HTML] A systematic review of vision language models: Comprehensive analysis of architectures, applications, datasets and challenges towards robust multimodal …](#paper-237)
- [238. LaMP: Learning Vision-Language-Action Policies with 3D Scene Flow as Latent Motion Prior](#paper-238)
- [239. SilentDrift: Exploiting Action Chunking for Stealthy Backdoor Attacks on Vision-Language-Action Models](#paper-239)
- [240. PRM-as-a-Judge: A Dense Evaluation Paradigm for Fine-Grained Robotic Auditing](#paper-240)
- [241. Reinforcing VLAs in Task-Agnostic World Models](#paper-241)
- [242. PokeVLA: Empowering Pocket-Sized Vision-Language-Action Model with Comprehensive World Knowledge Guidance](#paper-242)
- [243. ProgressVLA: Progress-Guided Diffusion Policy for Vision-Language Robotic Manipulation](#paper-243)
- [244. When Robots Obey the Patch: Universal Transferable Patch Attacks on Vision-Language-Action Models](#paper-244)
- [245. CapVector: Learning Transferable Capability Vectors in Parametric Space for Vision-Language-Action Models](#paper-245)
- [246. Action-Sketcher: From Reasoning to Action via Visual Sketches for Long-Horizon Robotic Manipulation](#paper-246)
- [247. Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching](#paper-247)
- [248. VEGA: Visual Encoder Grounding Alignment for Spatially-Aware Vision-Language-Action Models](#paper-248)
- [249. Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior](#paper-249)
- [250. HiVLA: A Visual-Grounded-Centric Hierarchical Embodied Manipulation System](#paper-250)
- [251. Being-H0. 5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization](#paper-251)
- [252. AsyncVLA: Asynchronous Flow Matching for Vision-Language-Action Models](#paper-252)
- [253. Mini-BEHAVIOR-Gran: Revealing U-Shaped Effects of Instruction Granularity on Language-Guided Embodied Agents](#paper-253)
- [254. Unified Noise Steering for Efficient Human-Guided VLA Adaptation](#paper-254)
- [255. ALAM: Algebraically Consistent Latent Transitions for Vision-Language-Action Models](#paper-255)
- [256. R3D: Revisiting 3D Policy Learning](#paper-256)
- [257. SwiftVLA: Unlocking Spatiotemporal Dynamics for Lightweight VLA Models at Minimal Overhead](#paper-257)
- [258. HarmoWAM: Harmonizing Generalizable and Precise Manipulation via Adaptive World Action Models](#paper-258)
- [259. An Anatomy of Vision-Language-Action Models: From Modules to Milestones and Challenges](#paper-259)
- [260. Robotic Manipulation is Vision-to-Geometry Mapping (): Vision-Geometry Backbones over Language and Video Models](#paper-260)
- [261. BiCoord: A Bimanual Manipulation Benchmark towards Long-Horizon Spatial-Temporal Coordination](#paper-261)
- [262. Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation](#paper-262)
- [263. VAG: Dual-Stream Video-Action Generation for Embodied Data Synthesis](#paper-263)
- [264. Ask-to-Clarify: Resolving Instruction Ambiguity through Multi-turn Dialogue](#paper-264)
- [265. MobileManiBench: Simplifying Model Verification for Mobile Manipulation](#paper-265)
- [266. Contrastive Representation Regularization for Vision-Language-Action Models](#paper-266)
- [267. ACoT-VLA: Action Chain-of-Thought for Vision-Language-Action Models](#paper-267)
- [268. CycleVLA: Proactive Self-Correcting Vision-Language-Action Models via Subtask Backtracking and Minimum Bayes Risk Decoding](#paper-268)
- [269. Libra-VLA: Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System](#paper-269)
- [270. See, Plan, Rewind: Progress-Aware Vision-Language-Action Models for Robust Robotic Manipulation](#paper-270)
- [271. Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation](#paper-271)
- [272. DynamicVLA: A Vision-Language-Action Model for Dynamic Object Manipulation](#paper-272)
- [273. Beyond World-Frame Action Heads: Motion-Centric Action Frames for Vision-Language-Action Models](#paper-273)
- [274. ForgeVLA: Federated Vision-Language-Action Learning without Language Annotations](#paper-274)
- [275. Intelligent Food Portioning System Using Vision-Language-Action (VLA) Models for Small-Scale Food Operations](#paper-275)
- [276. Vision-and-Language Navigation for UAVs: Progress, Challenges, and a Research Roadmap](#paper-276)
- [277. Generation Models Know Space: Unleashing Implicit 3D Priors for Scene Understanding](#paper-277)
- [278. Dynamic Maclaurin-Series-Based Vision-Language-Action Model](#paper-278)
- [279. LIBERO-Para: A Diagnostic Benchmark and Metrics for Paraphrase Robustness in VLA Models](#paper-279)
- [280. SpecRLBench: A Benchmark for Generalization in Specification-Guided Reinforcement Learning](#paper-280)
- [281. CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation](#paper-281)
- [282. Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation](#paper-282)
- [283. Thinking in Text and Images: Interleaved Vision--Language Reasoning Traces for Long-Horizon Robot Manipulation](#paper-283)
- [284. VAMPO: Policy Optimization for Improving Visual Dynamics in Video Action Models](#paper-284)
- [285. Beyond the Majority: Long-tail Imitation Learning for Robotic Manipulation](#paper-285)
- [286. vla-eval: A Unified Evaluation Harness for Vision-Language-Action Models](#paper-286)
- [287. World-VLA-Loop: Closed-Loop Learning of Video World Model and VLA Policy](#paper-287)
- [288. Pri4R: Learning World Dynamics for Vision-Language-Action Models with Privileged 4D Representation](#paper-288)
- [289. A Survey on Reinforcement Learning of Vision-Language-Action Models for Robotic Manipulation](#paper-289)
- [290. Towards Generalizable Robotic Manipulation in Dynamic Environments](#paper-290)
- [291. Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies](#paper-291)
- [292. ComSim: Building Scalable Real-World Robot Data Generation via Compositional Simulation](#paper-292)
- [293. VISTA: Enhancing Visual Conditioning via Track-Following Preference Optimization in Vision-Language-Action Models](#paper-293)
- [294. Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation](#paper-294)
- [295. Being-H0. 7: A Latent World-Action Model from Egocentric Videos](#paper-295)
- [296. A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control](#paper-296)
- [297. ForceVLA2: Unleashing Hybrid Force-Position Control with Force Awareness for Contact-Rich Manipulation](#paper-297)
- [298. 3D Generation for Embodied AI and Robotic Simulation: A Survey](#paper-298)
- [299. RoboSSM: Scalable In-context Imitation Learning via State-Space Models](#paper-299)
- [300. \\pi-StepNFT: Wider Space Needs Finer Steps in Online RL for Flow-based VLAs](#paper-300)
- [301. DiscreteRTC: Discrete Diffusion Policies are Natural Asynchronous Executors](#paper-301)
- [302. BayesianVLA: Bayesian Decomposition of Vision Language Action Models via Latent Action Queries](#paper-302)
- [303. Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge](#paper-303)
- [304. One Token Per Frame: Reconsidering Visual Bandwidth in World Models for VLA Policy](#paper-304)
- [305. Latent Reasoning VLA: Latent Thinking and Prediction for Vision-Language-Action Models](#paper-305)
- [306. ActionFlow: A Pipelined Action Acceleration for Vision Language Models on Edge](#paper-306)
- [307. MoE-ACT: Improving Surgical Imitation Learning Policies through Supervised Mixture-of-Experts](#paper-307)
- [308. Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models](#paper-308)
- [309. Predictive but Not Plannable: RC-aux for Latent World Models](#paper-309)
- [310. HiMaCon: Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data](#paper-310)
- [311. Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models](#paper-311)
- [312. Tex3D: Objects as Attack Surfaces via Adversarial 3D Textures for Vision-Language-Action Models](#paper-312)
- [313. CRL-VLA: Continual Vision-Language-Action Learning](#paper-313)
- [314. Mirage2Matter: A Physically Grounded Gaussian World Model from Video](#paper-314)
- [315. LoopVLA: Learning Sufficiency in Recurrent Refinement for Vision-Language-Action Models](#paper-315)
- [316. DIAL: Decoupling Intent and Action via Latent World Modeling for End-to-End VLA](#paper-316)
- [317. Grounding Sim-to-Real Generalization in Dexterous Manipulation: An Empirical Study with Vision-Language-Action Models](#paper-317)
- [318. Vision-Language-Action Models for Selective Robotic Disassembly: A Case Study on Critical Component Extraction from Desktops](#paper-318)
- [319. Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets](#paper-319)
- [320. Robotic Assistant: Completing Collaborative Tasks with Dexterous Vision-Language-Action Models](#paper-320)
- [321. World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems](#paper-321)
- [322. OA-WAM: Object-Addressable World Action Model for Robust Robot Manipulation](#paper-322)
- [323. Recursive Belief Vision Language Action Models](#paper-323)
- [324. Eq. Bot: Enhance Robotic Manipulation Learning via Group Equivariant Canonicalization](#paper-324)
- [325. Recipe for Vision-Language-Action Models in Robotic Manipulation: A Survey](#paper-325)
- [326. ReconVLA: An Uncertainty-Guided and Failure-Aware Vision-Language-Action Framework for Robotic Control](#paper-326)
- [327. DA-PTQ: Drift-Aware Post-Training Quantization for Efficient Vision-Language-Action Models](#paper-327)
- [328. ATA: Bridging Implicit Reasoning with Attention-Guided and Action-Guided Inference for Vision-Language Action Models](#paper-328)
- [329. VLA-ATTC: Adaptive Test-Time Compute for VLA Models with Relative Action Critic Model](#paper-329)
- [330. RC-NF: Robot-Conditioned Normalizing Flow for Real-Time Anomaly Detection in Robotic Manipulation](#paper-330)
- [331. See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model](#paper-331)
- [332. Agentic Scene Policies: Unifying Space, Semantics, and Affordances for Robot Action](#paper-332)
- [333. VUDA: Breaking CUDA-Vulkan Isolation for Spatial Sharing of Compute and Graphics on the Same GPU](#paper-333)
- [334. StreamVLA: Breaking the Reason-Act Cycle via Completion-State Gating](#paper-334)
- [335. ElasticFlow: One-Step Physics-Consistent Policy with Elastic Time Horizons for Language-Guided Manipulation](#paper-335)
- [336. Nautilus: From One Prompt to Plug-and-Play Robot Learning](#paper-336)
- [337. Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning](#paper-337)
- [338. Test-Time Training for Visual Foresight Vision-Language-Action Models](#paper-338)
- [339. CrowdVLA: Embodied Vision-Language-Action Agents for Context-Aware Crowd Simulation](#paper-339)
- [340. VLA-InfoEntropy: A Training-Free Vision-Attention Information Entropy Approach for Vision-Language-Action Models Inference Acceleration and Success](#paper-340)
- [341. Anticipation-VLA: Solving Long-Horizon Embodied Tasks via Anticipation-based Subgoal Generation](#paper-341)
- [342. From Noise to Intent: Anchoring Generative VLA Policies with Residual Bridges](#paper-342)
- [343. Learning to See and Act: Task-Aware Virtual View Exploration for Robotic Manipulation](#paper-343)
- [344. LaST-R1: Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models](#paper-344)
- [345. EveryDayVLA: A Vision-Language-Action Model for Affordable Robotic Manipulation](#paper-345)
- [346. Adaptive Action Chunking via Multi-Chunk Q Value Estimation](#paper-346)
- [347. Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models](#paper-347)
- [348. AVA-VLA: Improving Vision-Language-Action models with Active Visual Attention](#paper-348)
- [349. Altered Thoughts, Altered Actions: Probing Chain-of-Thought Vulnerabilities in VLA Robotic Manipulation](#paper-349)
- [350. ProGAL-VLA: Grounded Alignment through Prospective Reasoning in Vision-Language-Action Models](#paper-350)
- [351. LIBERO-X: Robustness Litmus for Vision-Language-Action Models](#paper-351)
- [352. AnyCamVLA: Zero-Shot Camera Adaptation for Viewpoint Robust Vision-Language-Action Models](#paper-352)
- [353. VLA-4D: Embedding 4D Awareness into Vision-Language-Action Models for SpatioTemporally Coherent Robotic Manipulation](#paper-353)
- [354. Data Scaling for Navigation in Unknown Environments](#paper-354)
- [355. StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing](#paper-355)
- [356. Redefining End-of-Life: Intelligent Automation for Electronics Remanufacturing Systems](#paper-356)
- [357. Hierarchical Vision Language Action Model Using Success and Failure Demonstrations](#paper-357)
- [358. RoboNeuron: A Modular Framework Linking Foundation Models and ROS for Embodied AI](#paper-358)
- [359. Learning to Manipulate Anything: Revealing Data Scaling Laws in Bounding-Box Guided Policies](#paper-359)
- [360. Unifying Perception and Action: A Hybrid-Modality Pipeline with Implicit Visual Chain-of-Thought for Robotic Action Generation](#paper-360)
- [361. Review of Reinforcement Learning for Large Language Models: Formulations, Algorithms, and Opportunities](#paper-361)
- [362. SAM2Grasp: Resolve Multi-modal Grasping via Prompt-conditioned Temporal Action Prediction](#paper-362)
- [363. \\mathcal{E}_0: Enhancing Generalization and Fine-Grained Control in VLA Models via Continuized Discrete Diffusion](#paper-363)
- [364. Integrating World Models into Vision Language Action and Navigation: A Comprehensive Survey](#paper-364)
- [365. D2E: Scaling Vision-Action Pretraining on Desktop Data for Transfer to Embodied AI](#paper-365)
- [366. FocusVLA: Focused Visual Utilization for Vision-Language-Action Models](#paper-366)
- [367. From Imagined Futures to Executable Actions: Mixture of Latent Actions for Robot Manipulation](#paper-367)
- [368. VLingNav: Embodied Navigation with Adaptive Reasoning and Visual-Assisted Linguistic Memory](#paper-368)
- [369. Fine-Tuning Integrity for Modern Neural Networks: Structured Drift Proofs via Norm, Rank, and Sparsity Certificates](#paper-369)
- [370. Causal World Modeling for Robot Control](#paper-370)
- [371. \\pi_\\texttt{RL}: Online RL Fine-tuning for Flow-based Vision-Language-Action Models](#paper-371)
- [372. Sliding-Cache VLA: Training-Free Acceleration of Vision Language Action Models via Foreground-Background Decoupling](#paper-372)
- [373. Act, Sense, Act: Learning Non-Markovian Active Perception Strategies from Large-Scale Egocentric Human Data](#paper-373)
- [374. L1 Sample Flow for Efficient Visuomotor Learning](#paper-374)
- [375. Differentiate-and-Inject: Enhancing VLAs via Functional Differentiation Induced by In-Parameter Structural Reasoning](#paper-375)
- [376. Landmark-Based Goal Recognition for Shared Autonomy: A Framework for Enhanced Teleoperation](#paper-376)
- [377. VLA-GSE: Boosting Parameter-Efficient Fine-Tuning in VLA with Generalized and Specialized Experts](#paper-377)
- [378. MoS-VLA: A Vision-Language-Action Model with One-Shot Skill Adaptation](#paper-378)
- [379. Action Draft and Verify: A Self-Verifying Framework for Vision-Language-Action Model](#paper-379)
- [380. CARE: Multi-Task Pretraining for Latent Continuous Action Representation in Robot Control](#paper-380)
- [381. Fast Visuomotor Policy for Robotic Manipulation](#paper-381)
- [382. SuperSuit: An Isomorphic Bimodal Interface for Scalable Mobile Manipulation](#paper-382)
- [383. Learning to Feel the Future: DreamTacVLA for Contact-Rich Manipulation](#paper-383)
- [384. Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation](#paper-384)
- [385. CoRAL: Contact-Rich Adaptive LLM-based Control for Robotic Manipulation](#paper-385)
- [386. Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation](#paper-386)
- [387. Closing the Motion Execution Gap: From Semantic Motion Task Constraints to Kinematic Control](#paper-387)
- [388. From Pixels to Tokens: A Systematic Study of Latent Action Supervision for Vision-Language-Action Models](#paper-388)
- [389. VLA-LPAF: Lightweight Perspective-Adaptive Fusion for Vision-Language-Action to Enable More Unconstrained Robotic Manipulation](#paper-389)
- [390. A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation](#paper-390)
- [391. Compressor-VLA: Instruction-Guided Visual Token Compression for Efficient Robotic Manipulation](#paper-391)
- [392. Sigma: The Key for Vision-Language-Action Models toward Telepathic Alignment](#paper-392)
- [393. Efficient Architectures and Learning Strategies for Large Vision Language Models](#paper-393)
- [394. CORAL: Scalable Multi-Task Robot Learning via LoRA Experts](#paper-394)
- [395. Towards Computationally Efficient Large Vision Language Models for Scalable Multimodal Intelligence](#paper-395)
- [396. Embodied Multimedia: When Multimedia Meets Embodied Intelligence](#paper-396)
- [397. PhysiFlow: Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching and Robust Tracking](#paper-397)
- [398. Box-Chain VLA: Explicit Reasoning-to-Action Interfaces for Generalizable Robotic Manipulation](#paper-398)
- [399. RL-VLA^3: Reinforcement Learning VLA Accelerating via Full Asynchronism](#paper-399)
- [400. PyBatchRender: A Python Library for Batched 3D Rendering at Up to One Million FPS](#paper-400)
- [401. LongBench: Evaluating Robotic Manipulation Policies on Real-World Long-Horizon Tasks](#paper-401)
- [402. Safety of Vision-Language-Action Models: A Survey from Lifecycle Perspectives](#paper-402)
- [403. Vision-Language-Action Instruction Tuning: From Understanding to Manipulation](#paper-403)
- [404. FASTer: Toward Powerful and Efficient Autoregressive Vision–Language–Action Models with Learnable Action Tokenizer and Block-wise Decoding](#paper-404)
- [405. Robots That Last: Long-Horizon Robotics Should Optimize Persistent Autonomy](#paper-405)
- [406. Toward Efficient Large Vision Language Models for Scalable Multimodal Intelligence](#paper-406)
- [407. Interleave-VLA: Enhancing Robot Manipulation with Image-Text Interleaved Instructions](#paper-407)
- [408. ELMUR: External Layer Memory with Update/Rewrite for Long-Horizon RL Problems](#paper-408)
- [409. Unified Vision-Language-Action Model](#paper-409)
- [410. ManipEvalAgent: Promptable and Efficient Evaluation Framework for Robotic Manipulation Policies](#paper-410)
- [411. Scenario Generation as a Tool for Robust Intelligent Agents](#paper-411)
- [412. 面向具身操作的视觉− 语言− 动作模型综述](#paper-412)
- [413. PI-VLA: A Symmetry-Aware Predictive and Interactive Vision--Language--Action Framework for Robust Robotic Manipulation](#paper-413)
- [414. Towards Generalist Embodied Agents via Representation Learning](#paper-414)
- [415. How Data Drives ML Models Performance](#paper-415)
- [416. Rethinking Efficiency in Large Vision Language Models for Deployment Oriented Multimodal AI](#paper-416)
- [417. Development of Imitation Learning and Large Language Model-based Assembly Algorithm](#paper-417)
- [418. Object-Centric Agentic Robot Policies](#paper-418)
- [419. Combining foundation models and numerical solvers for physics-informed motion control](#paper-419)
- [420. MVP: Memory-enhanced Vision-Language-Action Policy with Feedback Learning](#paper-420)
- [421. RoboMonster: Compositional Generalization of Heterogeneous Multi-End Effector Embodied Agents](#paper-421)
- [422. FlashDrive: Flash Vision-Language-Action Inference for Autonomous Driving](#paper-422)
- [423. Building Scalable Real-World Robot Data Generation via Compositional Simulation](#paper-423)
- [424. Stable-FAST: Stabilizing Inference of Autoregressive Vision-Language-Action Models](#paper-424)
- [425. GateFlow: Mitigating Shortcut Learning in VLA Models via Gated Flow Matching](#paper-425)
- [426. On the Representation Degradation in Vision-Language-Action Models](#paper-426)
- [427. Learning Feasibility from Failure Data in Vision–Language–Action Models](#paper-427)
- [428. PIXELVLA: ADVANCING PIXEL-LEVEL UNDER-STANDING IN VISION-LANGUAGE-ACTION MODEL](#paper-428)
- [429. 大模型参数高效微调方法综述: 技术, 趋势与挑战](#paper-429)
- [430. In-depth Robustness Analysis for Vision-Language-Action Models](#paper-430)
- [431. CSO: Refining Robotic Policies via Skill Distribution Alignment and Skill-Grained Optimization](#paper-431)
- [432. Leveraging Language Representations for Vision-Language-Action Models with Flipped Auxiliary Learning](#paper-432)
- [433. ROBOTWIN 2.0: AScalable DATA GENERATOR AND BENCHMARK WITH STRONG DOMAIN RANDOMIZA-TION FOR ROBUST BIMANUAL ROBOTIC MANIPULA](#paper-433)
- [434. 모방학습 및 언어모델 기반 조립기술 개발](#paper-434)
- [435. CrossVLA-Attack: Universal Transferable Adversarial Patches for Vision-Language-Action Robotics](#paper-435)
- [436. Task Robustness via Re-Labelling Vision-Action Robot Data](#paper-436)
- [437. Modelos VLA para robótica autónoma en computación de borde](#paper-437)
- [438. Scaling Language-Conditioned Policies with Fast and Lightweight Architectures](#paper-438)
- [439. 모바일 매니퓰레이터를 이용한 가사물체 조작 데이터 수집 시스템](#paper-439)

<a id="paper-001"></a>
## Paper 001. Vision-language-action models: Concepts, progress, applications and challenges

- 출처/venue: R Sapkota, Y Cao, KI Roumeliotis, M Karkee - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 121
- URL: https://arxiv.org/abs/2505.04769
- PDF: https://arxiv.org/pdf/2505.04769
- 로컬 PDF: 20250507_Vision-language-action models Concepts, progress, applications and challenges.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.04769; PDF: https://arxiv.org/pdf/2505.04769가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-002"></a>
## Paper 002. Vision-language-action models for robotics: A review towards real-world applications

- 출처/venue: K Kawaharazuka, J Oh, J Yamada, I Posner… - IEEE Access, 2025 - ieeexplore.ieee.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 101
- URL: https://ieeexplore.ieee.org/abstract/document/11164279/
- PDF: https://ieeexplore.ieee.org/iel8/6287639/6514899/11164279.pdf
- 로컬 PDF: 2025_Vision-language-action models for robotics A review towards real-world applications.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-language-action models for robotics`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Vision-language-action models for robotics`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11164279/; PDF: https://ieeexplore.ieee.org/iel8/6287639/6514899/11164279.pdf; https://vla-survey.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-003"></a>
## Paper 003. Towards reasoning era: A survey of long chain-of-thought for reasoning large language models

- 출처/venue: Q Chen, L Qin, J Liu, D Peng, J Guan, P Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 482
- URL: https://arxiv.org/abs/2503.09567
- PDF: https://arxiv.org/pdf/2503.09567
- 로컬 PDF: 20250312_Towards reasoning era A survey of long chain-of-thought for reasoning large language models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards reasoning era`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Towards reasoning era`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2503.09567; PDF: https://arxiv.org/pdf/2503.09567; https://long-cot.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-004"></a>
## Paper 004. Real-time execution of action chunking flow policies

- 출처/venue: K Black, M Galliker, S Levine - Advances in Neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 85
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/300ccb2187dedd4edcc07f7e76d8e553-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/300ccb2187dedd4edcc07f7e76d8e553-Paper-Conference.pdf
- 로컬 PDF: 2026_Real-time execution of action chunking flow policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Real-time execution of action chunking flow policies`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Real-time execution of action chunking flow policies`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Real-time execution of action chunking flow policies`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 30% of the model’s prediction horizon라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/300ccb2187dedd4edcc07f7e76d8e553-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/300ccb2187dedd4edcc07f7e76d8e553-Paper-Conference.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-005"></a>
## Paper 005. A Survey on Vision–Language–Action Models for Embodied AI

- 출처/venue: Y Ma, Z Song, Y Zhuang, J Hao… - IEEE Transactions on …, 2026 - ieeexplore.ieee.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 316
- URL: https://ieeexplore.ieee.org/abstract/document/11495231/
- PDF: https://ieeexplore.ieee.org/iel8/5962385/6104215/11495231.pdf
- 로컬 PDF: 2026_A Survey on Vision–Language–Action Models for Embodied AI.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A Survey on Vision–Language–Action Models for Embodied AI`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A Survey on Vision–Language–Action Models for Embodied AI`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11495231/; PDF: https://ieeexplore.ieee.org/iel8/5962385/6104215/11495231.pdf; https://github.com/yueen-ma/Awesome-VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-006"></a>
## Paper 006. Forcevla: Enhancing vla models with a force-aware moe for contact-rich manipulation

- 출처/venue: J Yu, H Liu, Q Yu, J Ren, C Hao… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 63
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/8633b46e12cc5f2ee1f05a6ca2c65b38-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/8633b46e12cc5f2ee1f05a6ca2c65b38-Paper-Conference.pdf
- 로컬 PDF: 2026_Forcevla Enhancing vla models with a force-aware moe for contact-rich manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Forcevla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Forcevla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Forcevla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 23.2% over strong π0-based baselines, achieving up to 80% success in tasks such as plug insertion라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/8633b46e12cc5f2ee1f05a6ca2c65b38-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/8633b46e12cc5f2ee1f05a6ca2c65b38-Paper-Conference.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-007"></a>
## Paper 007. CogVLA: Cognition-Aligned Vision-Language-Action Models via Instruction-Driven Routing & Sparsification

- 출처/venue: W Li, R Zhang, R Shao, J He… - Advances in neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 48
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/c9028f7874df04843e7bf435ee4cd3c3-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/c9028f7874df04843e7bf435ee4cd3c3-Paper-Conference.pdf
- 로컬 PDF: 2026_CogVLA Cognition-Aligned Vision-Language-Action Models via Instruction-Driven Routing & Sparsification.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CogVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `CogVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `CogVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 nstrate that CogVLA achieves state-of-the-art performance with success rates of 97.4%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/c9028f7874df04843e7bf435ee4cd3c3-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/c9028f7874df04843e7bf435ee4cd3c3-Paper-Conference.pdf; https://jiutian-vl.github.io/CogVLA-page가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-008"></a>
## Paper 008. Vla-adapter: An effective paradigm for tiny-scale vision-language-action model

- 출처/venue: Y Wang, P Ding, L Li, C Cui, Z Ge, X Tong… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 77
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/38931
- PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38931/42893
- 로컬 PDF: 2026_Vla-adapter An effective paradigm for tiny-scale vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-adapter`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Vla-adapter`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Vla-adapter`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 our method achieves high performance using only a 0.5라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/38931; PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38931/42893; https://vla-adapter.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-009"></a>
## Paper 009. Dexgraspvla: A vision-language-action framework towards general dexterous grasping

- 출처/venue: Y Zhong, X Huang, R Li, C Zhang, Z Chen… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 90
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/38953
- PDF: https://ojs.aaai.org/index.php/AAAI/article/download/38953/42915
- 로컬 PDF: 2026_Dexgraspvla A vision-language-action framework towards general dexterous grasping.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Dexgraspvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Dexgraspvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Dexgraspvla`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/38953; PDF: https://ojs.aaai.org/index.php/AAAI/article/download/38953/42915; https://dexgraspvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-010"></a>
## Paper 010. A survey on vision-language-action models for autonomous driving

- 출처/venue: S Jiang, Z Huang, K Qian, Z Luo… - Proceedings of the …, 2025 - openaccess.thecvf.com
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 58
- URL: https://openaccess.thecvf.com/content/ICCV2025W/WDFM-AD/html/Jiang_A_Survey_on_Vision-Language-Action_Models_for_Autonomous_Driving_ICCVW_2025_paper.html
- PDF: https://openaccess.thecvf.com/content/ICCV2025W/WDFM-AD/papers/Jiang_A_Survey_on_Vision-Language-Action_Models_for_Autonomous_Driving_ICCVW_2025_paper.pdf
- 로컬 PDF: 2025_A survey on vision-language-action models for autonomous driving.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A survey on vision-language-action models for autonomous driving`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A survey on vision-language-action models for autonomous driving`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openaccess.thecvf.com/content/ICCV2025W/WDFM-AD/html/Jiang_A_Survey_on_Vision-Language-Action_Models_for_Autonomous_Driving_ICCVW_2025_paper.html; PDF: https://openaccess.thecvf.com/content/ICCV2025W/WDFM-AD/papers/Jiang_A_Survey_on_Vision-Language-Action_Models_for_Autonomous_Driving_ICCVW_2025_paper.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-011"></a>
## Paper 011. Dexvla: Vision-language model with plug-in diffusion expert for general robot control

- 출처/venue: J Wen, Y Zhu, J Li, Z Tang, C Shen, F Feng - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 160
- URL: https://arxiv.org/abs/2502.05855
- PDF: https://arxiv.org/pdf/2502.05855
- 로컬 PDF: 20250209_Dexvla Vision-language model with plug-in diffusion expert for general robot control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Dexvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Dexvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Dexvla`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 OpenVLA, ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2502.05855; PDF: https://arxiv.org/pdf/2502.05855; https://dex-vla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-012"></a>
## Paper 012. Vq-vla: Improving vision-language-action models via scaling vector-quantized action tokenizers

- 출처/venue: Y Wang, H Zhu, M Liu, J Yang… - Proceedings of the …, 2025 - openaccess.thecvf.com
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 43
- URL: https://openaccess.thecvf.com/content/ICCV2025/html/Wang_VQ-VLA_Improving_Vision-Language-Action_Models_via_Scaling_Vector-Quantized_Action_Tokenizers_ICCV_2025_paper.html
- PDF: https://openaccess.thecvf.com/content/ICCV2025/papers/Wang_VQ-VLA_Improving_Vision-Language-Action_Models_via_Scaling_Vector-Quantized_Action_Tokenizers_ICCV_2025_paper.pdf
- 로컬 PDF: 2025_Vq-vla Improving vision-language-action models via scaling vector-quantized action tokenizers.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vq-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Vq-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Vq-vla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 30% higher success rate on two real-world tasks in long-horizon scenarios라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openaccess.thecvf.com/content/ICCV2025/html/Wang_VQ-VLA_Improving_Vision-Language-Action_Models_via_Scaling_Vector-Quantized_Action_Tokenizers_ICCV_2025_paper.html; PDF: https://openaccess.thecvf.com/content/ICCV2025/papers/Wang_VQ-VLA_Improving_Vision-Language-Action_Models_via_Scaling_Vector-Quantized_Action_Tokenizers_ICCV_2025_paper.pdf; https://xiaoxiao0406.github.io/vqvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-013"></a>
## Paper 013. Robotwin 2.0: A scalable data generator and benchmark with strong domain randomization for robust bimanual robotic manipulation

- 출처/venue: T Chen, Z Chen, B Chen, Z Cai, Y Liu, Z Li… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 195
- URL: https://arxiv.org/abs/2506.18088
- PDF: https://arxiv.org/pdf/2506.18088
- 로컬 PDF: 20250622_Robotwin 2.0 A scalable data generator and benchmark with strong domain randomization for robust bimanual robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robotwin 2.0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Robotwin 2.0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Robotwin 2.0`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 10.9% gain in code generation success rate라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.18088; PDF: https://arxiv.org/pdf/2506.18088; https://robotwin-platform.github.io; https://robotwin-platform.github.io/doc/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-014"></a>
## Paper 014. A survey of reinforcement learning for large reasoning models

- 출처/venue: K Zhang, Y Zuo, B He, Y Sun, R Liu, C Jiang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 104
- URL: https://arxiv.org/abs/2509.08827
- PDF: https://arxiv.org/pdf/2509.08827
- 로컬 PDF: 20250910_A survey of reinforcement learning for large reasoning models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A survey of reinforcement learning for large reasoning models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A survey of reinforcement learning for large reasoning models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.08827; PDF: https://arxiv.org/pdf/2509.08827가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-015"></a>
## Paper 015. Vla-os: Structuring and dissecting planning representations and paradigms in vision-language-action models

- 출처/venue: C Gao, Z Liu, Z Chi, J Huang, X Fei… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 26
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/c7af751b5e0a407c62ac023e3cb381f9-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/c7af751b5e0a407c62ac023e3cb381f9-Paper-Conference.pdf
- 로컬 PDF: 2026_Vla-os Structuring and dissecting planning representations and paradigms in vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-os`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vla-os`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vla-os`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/c7af751b5e0a407c62ac023e3cb381f9-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/c7af751b5e0a407c62ac023e3cb381f9-Paper-Conference.pdf; https://nus-lins-lab.github.io/vlaos/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-016"></a>
## Paper 016. Worldvla: Towards autoregressive action world model

- 출처/venue: J Cen, C Yu, H Yuan, Y Jiang, S Huang, J Guo… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 166
- URL: https://arxiv.org/abs/2506.21539
- PDF: https://arxiv.org/pdf/2506.21539
- 로컬 PDF: 20250626_Worldvla Towards autoregressive action world model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Worldvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Worldvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Worldvla`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.21539; PDF: https://arxiv.org/pdf/2506.21539; https://github.com/alibaba-damo-academy/WorldVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-017"></a>
## Paper 017. Gr-3 technical report

- 출처/venue: C Cheang, S Chen, Z Cui, Y Hu, L Huang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 64
- URL: https://arxiv.org/abs/2507.15493
- PDF: https://arxiv.org/pdf/2507.15493
- 로컬 PDF: 20250721_Gr-3 technical report.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Gr-3 technical report`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Gr-3 technical report`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Gr-3 technical report`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.15493; PDF: https://arxiv.org/pdf/2507.15493가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-018"></a>
## Paper 018. Interactive post-training for vision-language-action models

- 출처/venue: S Tan, K Dou, Y Zhao, P Krähenbühl - arXiv preprint arXiv:2505.17016, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 57
- URL: https://arxiv.org/abs/2505.17016
- PDF: https://arxiv.org/pdf/2505.17016
- 로컬 PDF: 20250522_Interactive post-training for vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Interactive post-training for vision-language-action models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Interactive post-training for vision-language-action models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Interactive post-training for vision-language-action models`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 21.2%, and the 7B OpenVLA-OFT model to an unprecedented 97라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.17016; PDF: https://arxiv.org/pdf/2505.17016; https://ariostgx.github.io/ript가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-019"></a>
## Paper 019. A survey on vision-language-action models: An action tokenization perspective

- 출처/venue: Y Zhong, F Bai, S Cai, X Huang, Z Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 71
- URL: https://arxiv.org/abs/2507.01925
- PDF: https://arxiv.org/pdf/2507.01925
- 로컬 PDF: 20250702_A survey on vision-language-action models An action tokenization perspective.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A survey on vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A survey on vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.01925; PDF: https://arxiv.org/pdf/2507.01925가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-020"></a>
## Paper 020. Instructvla: Vision-language-action instruction tuning from understanding to manipulation

- 출처/venue: S Yang, H Li, B Wang, Y Chen, Y Tian, T Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 41
- URL: https://arxiv.org/abs/2507.17520
- PDF: https://arxiv.org/pdf/2507.17520
- 로컬 PDF: 20250723_Instructvla Vision-language-action instruction tuning from understanding to manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Instructvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Instructvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Instructvla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 33% improvement over Spa- tialVLA라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.17520; PDF: https://arxiv.org/pdf/2507.17520가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-021"></a>
## Paper 021. Memoryvla: Perceptual-cognitive memory in vision-language-action models for robotic manipulation

- 출처/venue: H Shi, B Xie, Y Liu, L Sun, F Liu, T Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 88
- URL: https://arxiv.org/abs/2508.19236
- PDF: https://arxiv.org/pdf/2508.19236
- 로컬 PDF: 20250826_Memoryvla Perceptual-cognitive memory in vision-language-action models for robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Memoryvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Memoryvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Memoryvla`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 71.9%, 72라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.19236; PDF: https://arxiv.org/pdf/2508.19236; https://shihao1895.github.io/MemoryVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-022"></a>
## Paper 022. Discrete diffusion vla: Bringing discrete diffusion to action decoding in vision-language-action policies

- 출처/venue: Z Liang, Y Li, T Yang, C Wu, S Mao, T Nian… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 58
- URL: https://arxiv.org/abs/2508.20072
- PDF: https://arxiv.org/pdf/2508.20072
- 로컬 PDF: 20250827_Discrete diffusion vla Bringing discrete diffusion to action decoding in vision-language-action policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Discrete diffusion vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Discrete diffusion vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Discrete diffusion vla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 96.3% avg라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.20072; PDF: https://arxiv.org/pdf/2508.20072가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-023"></a>
## Paper 023. Flare: Robot learning with implicit world modeling

- 출처/venue: R Zheng, J Wang, S Reed, J Bjorck, Y Fang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 57
- URL: https://arxiv.org/abs/2505.15659
- PDF: https://arxiv.org/pdf/2505.15659
- 로컬 PDF: 20250521_Flare Robot learning with implicit world modeling.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Flare`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Flare`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Flare`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 26%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.15659; PDF: https://arxiv.org/pdf/2505.15659가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-024"></a>
## Paper 024. Freqpolicy: Efficient flow-based visuomotor policy via frequency consistency

- 출처/venue: Y Su, N Liu, D Chen, Z Zhao, K Wu… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 11
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/282c3318be1b047b7bb5ba94fa4f3231-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/282c3318be1b047b7bb5ba94fa4f3231-Paper-Conference.pdf
- 로컬 PDF: 2026_Freqpolicy Efficient flow-based visuomotor policy via frequency consistency.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Freqpolicy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Freqpolicy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Freqpolicy`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 model and achieve acceleration without performance degradation on 40라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/282c3318be1b047b7bb5ba94fa4f3231-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/282c3318be1b047b7bb5ba94fa4f3231-Paper-Conference.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-025"></a>
## Paper 025. Beast: Efficient tokenization of b-splines encoded action sequences for imitation learning

- 출처/venue: H Zhou, W Liao, X Huang, Y Tang… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 10
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/fc75cfcec16170f2b54d00283c739928-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/fc75cfcec16170f2b54d00283c739928-Paper-Conference.pdf
- 로컬 PDF: 2026_Beast Efficient tokenization of b-splines encoded action sequences for imitation learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Beast`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Beast`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Beast`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/fc75cfcec16170f2b54d00283c739928-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/fc75cfcec16170f2b54d00283c739928-Paper-Conference.pdf; https://intuitive-robots.github.io/beast_website/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-026"></a>
## Paper 026. Jarvis-vla: Post-training large-scale vision language models to play visual games with keyboards and mouse

- 출처/venue: M Li, Z Wang, K He, X Ma, Y Liang - Findings of the Association for …, 2025 - aclanthology.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 29
- URL: https://aclanthology.org/2025.findings-acl.920/
- PDF: https://aclanthology.org/2025.findings-acl.920.pdf
- 로컬 PDF: 2025_Jarvis-vla Post-training large-scale vision language models to play visual games with keyboards and mouse.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Jarvis-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Jarvis-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Jarvis-vla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 40% improvement over the best agent baseline on a diverse set of atomic tasks라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://aclanthology.org/2025.findings-acl.920/; PDF: https://aclanthology.org/2025.findings-acl.920.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-027"></a>
## Paper 027. Large vlm-based vision-language-action models for robotic manipulation: A survey

- 출처/venue: R Shao, W Li, L Zhang, R Zhang, Z Liu, R Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 65
- URL: https://arxiv.org/abs/2508.13073
- PDF: https://arxiv.org/pdf/2508.13073
- 로컬 PDF: 20250818_Large vlm-based vision-language-action models for robotic manipulation A survey.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Large vlm-based vision-language-action models for robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Large vlm-based vision-language-action models for robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.13073; PDF: https://arxiv.org/pdf/2508.13073; https://github.com/JiuTian-VL/Large가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-028"></a>
## Paper 028. Chain-of-action: Trajectory autoregressive modeling for robotic manipulation

- 출처/venue: W Zhang, T Hu, H Zhang, Y Qiao… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 9
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/9877d915a4b4f00e85e7b4cfdf41e450-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/9877d915a4b4f00e85e7b4cfdf41e450-Paper-Conference.pdf
- 로컬 PDF: 2026_Chain-of-action Trajectory autoregressive modeling for robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Chain-of-action`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Chain-of-action`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Chain-of-action`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 RLBench 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 Diffusion Policy, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/9877d915a4b4f00e85e7b4cfdf41e450-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/9877d915a4b4f00e85e7b4cfdf41e450-Paper-Conference.pdf; https://chain-of-action.github.io/; https://github.com/ByteDance-Seed/Chain-of-Action가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-029"></a>
## Paper 029. Spec-vla: speculative decoding for vision-language-action models with relaxed acceptance

- 출처/venue: S Wang, R Yu, Z Yuan, C Yu, F Gao… - Proceedings of the …, 2025 - aclanthology.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 28
- URL: https://aclanthology.org/2025.emnlp-main.1367/
- PDF: https://aclanthology.org/2025.emnlp-main.1367.pdf
- 로컬 PDF: 2025_Spec-vla speculative decoding for vision-language-action models with relaxed acceptance.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Spec-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Spec-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Spec-vla`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 44%, achieving 1라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://aclanthology.org/2025.emnlp-main.1367/; PDF: https://aclanthology.org/2025.emnlp-main.1367.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-030"></a>
## Paper 030. Unified vision-language-action model

- 출처/venue: Y Wang, X Li, W Wang, J Zhang, Y Li, Y Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 77
- URL: https://arxiv.org/abs/2506.19850
- PDF: https://arxiv.org/pdf/2506.19850
- 로컬 PDF: 20250624_Unified vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Unified vision-language-action model`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Unified vision-language-action model`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.19850; PDF: https://arxiv.org/pdf/2506.19850; https://robertwyq.github.io/univla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-031"></a>
## Paper 031. Semanticvla: Semantic-aligned sparsification and enhancement for efficient robotic manipulation

- 출처/venue: W Li, R Zhang, R Shao, Z Fang, K Zhou… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 15
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/38904
- PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38904/42866
- 로컬 PDF: 2026_Semanticvla Semantic-aligned sparsification and enhancement for efficient robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Semanticvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Semanticvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Semanticvla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 while reducing training cost and inference latency by3.0라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/38904; PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38904/42866; https://github.com/JiuTian-VL/SemanticVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-032"></a>
## Paper 032. Conditioning matters: Training diffusion policies is faster than you think

- 출처/venue: Z Dong, Y Liu, Y Li, H Zhao… - Advances in Neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 6
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/ad6363efb7af02f7db13d087c7e649bd-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/ad6363efb7af02f7db13d087c7e649bd-Paper-Conference.pdf
- 로컬 PDF: 2026_Conditioning matters Training diffusion policies is faster than you think.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Conditioning matters`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Conditioning matters`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Conditioning matters`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 2.14x faster than the vanilla model라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 Diffusion Policy, ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/ad6363efb7af02f7db13d087c7e649bd-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/ad6363efb7af02f7db13d087c7e649bd-Paper-Conference.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-033"></a>
## Paper 033. A survey on efficient vision-language-action models

- 출처/venue: Z Yu, B Wang, P Zeng, H Zhang, J Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 24
- URL: https://arxiv.org/abs/2510.24795
- PDF: https://arxiv.org/pdf/2510.24795
- 로컬 PDF: 20251027_A survey on efficient vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A survey on efficient vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A survey on efficient vision-language-action models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.24795; PDF: https://arxiv.org/pdf/2510.24795; https://evla-survey.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-034"></a>
## Paper 034. Hume: Introducing system-2 thinking in visual-language-action model

- 출처/venue: H Song, D Qu, Y Yao, Q Chen, Q Lv, Y Tang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 48
- URL: https://arxiv.org/abs/2505.21432
- PDF: https://arxiv.org/pdf/2505.21432
- 로컬 PDF: 20250527_Hume Introducing system-2 thinking in visual-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Hume`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Hume`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.21432; PDF: https://arxiv.org/pdf/2505.21432; https://hume-vla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-035"></a>
## Paper 035. Villa-x: enhancing latent action modeling in vision-language-action models

- 출처/venue: X Chen, H Wei, P Zhang, C Zhang, K Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 49
- URL: https://arxiv.org/abs/2507.23682
- PDF: https://arxiv.org/pdf/2507.23682
- 로컬 PDF: 20250731_Villa-x enhancing latent action modeling in vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Villa-x`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Villa-x`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Villa-x`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.23682; PDF: https://arxiv.org/pdf/2507.23682; https://github.com/microsoft/villa-x가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-036"></a>
## Paper 036. Flower: Democratizing generalist robot policies with efficient vision-language-action flow policies

- 출처/venue: M Reuss, H Zhou, M Rühle, ÖE Yağmurlu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 48
- URL: https://arxiv.org/abs/2509.04996
- PDF: https://arxiv.org/pdf/2509.04996
- 로컬 PDF: 20250905_Flower Democratizing generalist robot policies with efficient vision-language-action flow policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Flower`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Flower`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Flower`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 50%of LLM layers, and action-specific Global-AdaLN con- ditioning, which cuts parameters by20%through modular adaptation라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.04996; PDF: https://arxiv.org/pdf/2509.04996가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-037"></a>
## Paper 037. Vision language action models in robotic manipulation: A systematic review

- 출처/venue: MU Din, W Akram, LS Saoud, J Rosell… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 41
- URL: https://arxiv.org/abs/2507.10672
- PDF: https://arxiv.org/pdf/2507.10672
- 로컬 PDF: 20250714_Vision language action models in robotic manipulation A systematic review.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision language action models in robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Vision language action models in robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.10672; PDF: https://arxiv.org/pdf/2507.10672; https://github.com/Muhayyuddin/VLAs가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-038"></a>
## Paper 038. Specprune-vla: Accelerating vision-language-action models via action-aware self-speculative pruning

- 출처/venue: H Wang, J Xu, Y Xiang, J Pan, Y Zhou, YL Li… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 23
- URL: https://arxiv.org/abs/2509.05614
- PDF: https://arxiv.org/pdf/2509.05614
- 로컬 PDF: 20250906_Specprune-vla Accelerating vision-language-action models via action-aware self-speculative pruning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Specprune-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Specprune-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Specprune-vla`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 20% success rate drop and lim- ited speedup in some scenarios라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.05614; PDF: https://arxiv.org/pdf/2509.05614가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-039"></a>
## Paper 039. Vla-cache: Efficient vision-language-action manipulation via adaptive token caching

- 출처/venue: S Xu, Y Wang, C Xia, D Zhu… - Advances in Neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 15
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/f062da1973ac9ac61fc6d44dd7fa309f-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/f062da1973ac9ac61fc6d44dd7fa309f-Paper-Conference.pdf
- 로컬 PDF: 2026_Vla-cache Efficient vision-language-action manipulation via adaptive token caching.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-cache`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vla-cache`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vla-cache`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 speedup in CUDA latency and a 15%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/f062da1973ac9ac61fc6d44dd7fa309f-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/f062da1973ac9ac61fc6d44dd7fa309f-Paper-Conference.pdf; https://vla-cache.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-040"></a>
## Paper 040. Evo-0: Vision-language-action model with implicit spatial understanding

- 출처/venue: T Lin, G Li, Y Zhong, Y Zou, Y Du, J Liu, E Gu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 43
- URL: https://arxiv.org/abs/2507.00416
- PDF: https://arxiv.org/pdf/2507.00416
- 로컬 PDF: 20250701_Evo-0 Vision-language-action model with implicit spatial understanding.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Evo-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Evo-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Evo-0`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.00416; PDF: https://arxiv.org/pdf/2507.00416; https://mint-sjtu.github.io/Evo-0.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-041"></a>
## Paper 041. What foundation models can bring for robot learning in manipulation: A survey

- 출처/venue: D Li, Y Jin, Y Sun, YA, H Yu, J Shi… - … Journal of Robotics …, 2024 - journals.sagepub.com
- 연도: 2024
- 인용수(Google Scholar 수집 당시): 36
- URL: https://journals.sagepub.com/doi/abs/10.1177/02783649251390579
- PDF: https://journals.sagepub.com/doi/pdf/10.1177/02783649251390579
- 로컬 PDF: 20251120_What foundation models can bring for robot learning in manipulation A survey.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `What foundation models can bring for robot learning in manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `What foundation models can bring for robot learning in manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://journals.sagepub.com/doi/abs/10.1177/02783649251390579; PDF: https://journals.sagepub.com/doi/pdf/10.1177/02783649251390579가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-042"></a>
## Paper 042. Suturebot: A precision framework & benchmark for autonomous end-to-end suturing

- 출처/venue: J Haworth, JT Chen, N Nelson… - Advances in …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 5
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/4d6549ae9aa0ccfcfef1ad051f1278d8-Abstract-Datasets_and_Benchmarks_Track.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/4d6549ae9aa0ccfcfef1ad051f1278d8-Paper-Datasets_and_Benchmarks_Track.pdf
- 로컬 PDF: 2026_Suturebot A precision framework & benchmark for autonomous end-to-end suturing.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Suturebot`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Suturebot`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Suturebot`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 improving targeting accuracy by 59%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/4d6549ae9aa0ccfcfef1ad051f1278d8-Abstract-Datasets_and_Benchmarks_Track.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/4d6549ae9aa0ccfcfef1ad051f1278d8-Paper-Datasets_and_Benchmarks_Track.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-043"></a>
## Paper 043. Geovla: Empowering 3d representations in vision-language-action models

- 출처/venue: L Sun, B Xie, Y Liu, H Shi, T Wang, J Cao - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 36
- URL: https://arxiv.org/abs/2508.09071
- PDF: https://arxiv.org/pdf/2508.09071
- 로컬 PDF: 20250812_Geovla Empowering 3d representations in vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Geovla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Geovla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Geovla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, ManiSkill에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.09071; PDF: https://arxiv.org/pdf/2508.09071; https://linsun449.github.io/GeoVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-044"></a>
## Paper 044. Towards a unified understanding of robot manipulation: A comprehensive survey

- 출처/venue: S Bai, W Song, J Chen, Y Ji, Z Zhong, J Yang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 28
- URL: https://arxiv.org/abs/2510.10903
- PDF: https://arxiv.org/pdf/2510.10903
- 로컬 PDF: 20251013_Towards a unified understanding of robot manipulation A comprehensive survey.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards a unified understanding of robot manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Towards a unified understanding of robot manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.10903; PDF: https://arxiv.org/pdf/2510.10903가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-045"></a>
## Paper 045. Tgrpo: Fine-tuning vision-language-action model via trajectory-wise group relative policy optimization

- 출처/venue: Z Chen, R Niu, H Kong, Q Wang, Q Xing… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 31
- URL: https://arxiv.org/abs/2506.08440
- PDF: https://arxiv.org/pdf/2506.08440
- 로컬 PDF: 20250610_Tgrpo Fine-tuning vision-language-action model via trajectory-wise group relative policy optimization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Tgrpo`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Tgrpo`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Tgrpo`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.08440; PDF: https://arxiv.org/pdf/2506.08440가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-046"></a>
## Paper 046. Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos

- 출처/venue: Q Li, Y Deng, Y Liang, L Luo, L Zhou, C Yao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 19
- URL: https://arxiv.org/abs/2510.21571
- PDF: https://arxiv.org/pdf/2510.21571
- 로컬 PDF: 20251024_Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Scalable vision-language-action model pretraining for robotic manipulation with real-life human activity videos`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.21571; PDF: https://arxiv.org/pdf/2510.21571; https://microsoft.github.io/VITRA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-047"></a>
## Paper 047. Vla-rft: Vision-language-action reinforcement fine-tuning with verified rewards in world simulators

- 출처/venue: H Li, P Ding, R Suo, Y Wang, Z Ge, D Zang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 38
- URL: https://arxiv.org/abs/2510.00406
- PDF: https://arxiv.org/pdf/2510.00406
- 로컬 PDF: 20251001_Vla-rft Vision-language-action reinforcement fine-tuning with verified rewards in world simulators.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-rft`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vla-rft`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vla-rft`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.00406; PDF: https://arxiv.org/pdf/2510.00406가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-048"></a>
## Paper 048. Wovr: World models as reliable simulators for post-training vla policies with rl

- 출처/venue: Z Jiang, S Zhou, Y Jiang, Z Huang, M Wei… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 14
- URL: https://arxiv.org/abs/2602.13977
- PDF: https://arxiv.org/pdf/2602.13977
- 로컬 PDF: 20260215_Wovr World models as reliable simulators for post-training vla policies with rl.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Wovr`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Wovr`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Wovr`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 39.95% to 69라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.13977; PDF: https://arxiv.org/pdf/2602.13977; https://huggingface.co/Collections/RLinf/wovr; https://github.com/RLinf/RLinf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-049"></a>
## Paper 049. Abot-m0: Vla foundation model for robotic manipulation with action manifold learning

- 출처/venue: Y Yang, S Zeng, T Lin, X Chang, D Qi, J Xiao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 15
- URL: https://arxiv.org/abs/2602.11236
- PDF: https://arxiv.org/pdf/2602.11236
- 로컬 PDF: 20260211_Abot-m0 Vla foundation model for robotic manipulation with action manifold learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Abot-m0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Abot-m0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Abot-m0`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11236; PDF: https://arxiv.org/pdf/2602.11236; https://github.com/amap-cvlab/ABot-Manipulation; https://amap-cvlab.github.io/ABot-Manipulation가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-050"></a>
## Paper 050. The better you learn, the smarter you prune: Towards efficient vision-language-action models via differentiable token pruning

- 출처/venue: T Jiang, X Jiang, Y Ma, X Wen, B Li, K Zhan… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 23
- URL: https://arxiv.org/abs/2509.12594
- PDF: https://arxiv.org/pdf/2509.12594
- 로컬 PDF: 20250916_The better you learn, the smarter you prune Towards efficient vision-language-action models via differentiable token pruning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `The better you learn, the smarter you prune`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `The better you learn, the smarter you prune`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `The better you learn, the smarter you prune`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.12594; PDF: https://arxiv.org/pdf/2509.12594; https://liauto-research.github.io/LightVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-051"></a>
## Paper 051. Ceed-vla: Consistency vision-language-action model with early-exit decoding

- 출처/venue: W Song, J Chen, P Ding, Y Huang, H Zhao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 35
- URL: https://arxiv.org/abs/2506.13725
- PDF: https://arxiv.org/pdf/2506.13725
- 로컬 PDF: 20250616_Ceed-vla Consistency vision-language-action model with early-exit decoding.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Ceed-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Ceed-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Ceed-vla`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.13725; PDF: https://arxiv.org/pdf/2506.13725; https://irpn-eai.github.io/CEED-VLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-052"></a>
## Paper 052. Como: Learning continuous latent motion from internet videos for scalable robot learning

- 출처/venue: J Yang, Y Shi, H Zhu, M Liu, K Ma, Y Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 19
- URL: https://arxiv.org/abs/2505.17006
- PDF: https://arxiv.org/pdf/2505.17006
- 로컬 PDF: 20250522_Como Learning continuous latent motion from internet videos for scalable robot learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Como`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Como`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Como`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.17006; PDF: https://arxiv.org/pdf/2505.17006; https://github.com/MCG-가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-053"></a>
## Paper 053. Libero-plus: In-depth robustness analysis of vision-language-action models

- 출처/venue: S Fei, S Wang, J Shi, Z Dai, J Cai, P Qian, L Ji… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 74
- URL: https://arxiv.org/abs/2510.13626
- PDF: https://arxiv.org/pdf/2510.13626
- 로컬 PDF: 20251015_Libero-plus In-depth robustness analysis of vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Libero-plus`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Libero-plus`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Libero-plus`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 with performance dropping from 95%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.13626; PDF: https://arxiv.org/pdf/2510.13626; https://sylvestf.github.io/LIBERO-plus/; https://github.com/sylvestf/LIBERO-plus; https://huggingface.co/collections/Sylvest/libero-plus가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-054"></a>
## Paper 054. Worldeval: World model as real-world robot policies evaluator

- 출처/venue: Y Li, Y Zhu, J Wen, C Shen, Y Xu - arXiv preprint arXiv:2505.19017, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 27
- URL: https://arxiv.org/abs/2505.19017
- PDF: https://arxiv.org/pdf/2505.19017
- 로컬 PDF: 20250525_Worldeval World model as real-world robot policies evaluator.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Worldeval`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Worldeval`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.19017; PDF: https://arxiv.org/pdf/2505.19017가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-055"></a>
## Paper 055. Datamil: Selecting data for robot imitation learning with datamodels

- 출처/venue: S Dass, A Khaddaj, L Engstrom, A Madry… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 17
- URL: https://arxiv.org/abs/2505.09603
- PDF: https://arxiv.org/pdf/2505.09603
- 로컬 PDF: 20250514_Datamil Selecting data for robot imitation learning with datamodels.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Datamil`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Datamil`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Datamil`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 Open X-Embodiment에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.09603; PDF: https://arxiv.org/pdf/2505.09603가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-056"></a>
## Paper 056. Internvla-m1: A spatially guided vision-language-action framework for generalist robot policy

- 출처/venue: X Chen, Y Chen, Y Fu, N Gao, J Jia, W Jin, H Li… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 30
- URL: https://arxiv.org/abs/2510.13778
- PDF: https://arxiv.org/pdf/2510.13778
- 로컬 PDF: 20251015_Internvla-m1 A spatially guided vision-language-action framework for generalist robot policy.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Internvla-m1`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Internvla-m1`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Internvla-m1`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.13778; PDF: https://arxiv.org/pdf/2510.13778가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-057"></a>
## Paper 057. Review and perspectives on multimodal perception, mutual cognition, and embodied execution for human–robot collaboration in Industry 5.0

- 출처/venue: K Ding, Q Mao, Y Zhang, Y Zhang, P Zheng… - Robotics and Computer …, 2026 - Elsevier
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://www.sciencedirect.com/science/article/pii/S0736584526000591
- PDF: https://scholar.google.com/scholar?output=instlink&q=info:gd8Yl6kmogcJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=16542598625126261492&oi=lle
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Review and perspectives on multimodal perception, mutual cognition, and embodied execution for human–robot collaboration in Industry 5.0`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Review and perspectives on multimodal perception, mutual cognition, and embodied execution for human–robot collaboration in Industry 5.0`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S0736584526000591; PDF: https://scholar.google.com/scholar?output=instlink&q=info:gd8Yl6kmogcJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=16542598625126261492&oi=lle가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-058"></a>
## Paper 058. Think twice, act once: Token-aware compression and action reuse for efficient inference in vision-language-action models

- 출처/venue: X Tan, Y Yang, P Ye, J Zheng, B Bai, X Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 23
- URL: https://arxiv.org/abs/2505.21200
- PDF: https://arxiv.org/pdf/2505.21200
- 로컬 PDF: 20250527_Think twice, act once Token-aware compression and action reuse for efficient inference in vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Think twice, act once`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Think twice, act once`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Think twice, act once`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 and latency by 36.0%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.21200; PDF: https://arxiv.org/pdf/2505.21200가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-059"></a>
## Paper 059. Efficient vision-language-action models for embodied manipulation: A systematic survey

- 출처/venue: W Guan, Q Hu, A Li, J Cheng - arXiv preprint arXiv:2510.17111, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 14
- URL: https://arxiv.org/abs/2510.17111
- PDF: https://arxiv.org/pdf/2510.17111
- 로컬 PDF: 20251020_Efficient vision-language-action models for embodied manipulation A systematic survey.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Efficient vision-language-action models for embodied manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Efficient vision-language-action models for embodied manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.17111; PDF: https://arxiv.org/pdf/2510.17111가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-060"></a>
## Paper 060. World-env: Leveraging world model as a virtual environment for vla post-training

- 출처/venue: J Xiao, Y Yang, X Chang, R Chen, F Xiong… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 32
- URL: https://arxiv.org/abs/2509.24948
- PDF: https://arxiv.org/pdf/2509.24948
- 로컬 PDF: 20250929_World-env Leveraging world model as a virtual environment for vla post-training.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World-env`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `World-env`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `World-env`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.24948; PDF: https://arxiv.org/pdf/2509.24948; https://github.com/amap-가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-061"></a>
## Paper 061. Parallels between vla model post-training and human motor learning: Progress, challenges, and trends

- 출처/venue: TY Xiang, AQ Jin, XH Zhou, MJ Gui, XL Xie… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 24
- URL: https://arxiv.org/abs/2506.20966
- PDF: https://arxiv.org/pdf/2506.20966
- 로컬 PDF: 20250626_Parallels between vla model post-training and human motor learning Progress, challenges, and trends.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Parallels between vla model post-training and human motor learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Parallels between vla model post-training and human motor learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Parallels between vla model post-training and human motor learning`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.20966; PDF: https://arxiv.org/pdf/2506.20966가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-062"></a>
## Paper 062. Agentic robot: A brain-inspired framework for vision-language-action models in embodied agents

- 출처/venue: Z Yang, Y Chen, X Zhou, J Yan, D Song, Y Liu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 18
- URL: https://arxiv.org/abs/2505.23450
- PDF: https://arxiv.org/pdf/2505.23450
- 로컬 PDF: 20250529_Agentic robot A brain-inspired framework for vision-language-action models in embodied agents.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Agentic robot`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Agentic robot`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Agentic robot`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 Agentic Robot achieves state-of-the-art performance with an average success rate of 79.6%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.23450; PDF: https://arxiv.org/pdf/2505.23450; https://agentic-robot.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-063"></a>
## Paper 063. Clip-rt: Learning language-conditioned robotic policies from natural language supervision

- 출처/venue: GC Kang, J Kim, K Shim, JK Lee, BT Zhang - arXiv preprint arXiv …, 2024 - arxiv.org
- 연도: 2024
- 인용수(Google Scholar 수집 당시): 26
- URL: https://arxiv.org/abs/2411.00508
- PDF: https://arxiv.org/pdf/2411.00508
- 로컬 PDF: 20241101_Clip-rt Learning language-conditioned robotic policies from natural language supervision.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Clip-rt`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Clip-rt`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Clip-rt`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 CLIP 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2411.00508; PDF: https://arxiv.org/pdf/2411.00508; https://clip-rt.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-064"></a>
## Paper 064. dvla: Diffusion vision-language-action model with multimodal chain-of-thought

- 출처/venue: J Wen, M Zhu, J Liu, Z Liu, Y Yang, L Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 18
- URL: https://arxiv.org/abs/2509.25681
- PDF: https://arxiv.org/pdf/2509.25681
- 로컬 PDF: 20250930_dvla Diffusion vision-language-action model with multimodal chain-of-thought.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `dvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `dvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `dvla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, Franka에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 LIBERO benchmark it achieves state-of-the-art performance with a 96.4%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.25681; PDF: https://arxiv.org/pdf/2509.25681가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-065"></a>
## Paper 065. Shortcut learning in generalist robot policies: The role of dataset diversity and fragmentation

- 출처/venue: Y Xing, X Luo, J Xie, L Gao, H Shen, J Song - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 20
- URL: https://arxiv.org/abs/2508.06426
- PDF: https://arxiv.org/pdf/2508.06426
- 로컬 PDF: 20250808_Shortcut learning in generalist robot policies The role of dataset diversity and fragmentation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Shortcut learning in generalist robot policies`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Shortcut learning in generalist robot policies`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Shortcut learning in generalist robot policies`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 Open X-Embodiment, OXE에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.06426; PDF: https://arxiv.org/pdf/2508.06426; https://lucky-light-sun.github.io/proj/shortcut-learning-in-grps/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-066"></a>
## Paper 066. Inspire: Vision-language-action models with intrinsic spatial reasoning

- 출처/venue: J Zhang, S Wu, X Luo, H Wu, L Gao, HT Shen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 17
- URL: https://arxiv.org/abs/2505.13888
- PDF: https://arxiv.org/pdf/2505.13888
- 로컬 PDF: 20250520_Inspire Vision-language-action models with intrinsic spatial reasoning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Inspire`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Inspire`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Inspire`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.13888; PDF: https://arxiv.org/pdf/2505.13888; https://koorye.github.io/proj/Inspire가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-067"></a>
## Paper 067. Recurrent-depth vla: Implicit test-time compute scaling of vision-language-action models via latent iterative reasoning

- 출처/venue: Y Tur, J Naghiyev, H Fang, WC Tsai, J Duan… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 6
- URL: https://arxiv.org/abs/2602.07845
- PDF: https://arxiv.org/pdf/2602.07845
- 로컬 PDF: 20260208_Recurrent-depth vla Implicit test-time compute scaling of vision-language-action models via latent iterative reasoning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Recurrent-depth vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Recurrent-depth vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Recurrent-depth vla`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.07845; PDF: https://arxiv.org/pdf/2602.07845가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-068"></a>
## Paper 068. Cosmos policy: Fine-tuning video models for visuomotor control and planning

- 출처/venue: MJ Kim, Y Gao, TY Lin, YC Lin, Y Ge, G Lam… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 53
- URL: https://arxiv.org/abs/2601.16163
- PDF: https://arxiv.org/pdf/2601.16163
- 로컬 PDF: 20260122_Cosmos policy Fine-tuning video models for visuomotor control and planning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Cosmos policy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Cosmos policy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Cosmos policy`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 98.5% and 67라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.16163; PDF: https://arxiv.org/pdf/2601.16163가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-069"></a>
## Paper 069. Align-then-steer: Adapting the vision-language action models through unified latent guidance

- 출처/venue: Y Zhang, C Wang, O Lu, Y Zhao, Y Ge, Z Sun… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 13
- URL: https://arxiv.org/abs/2509.02055
- PDF: https://arxiv.org/pdf/2509.02055
- 로컬 PDF: 20250902_Align-then-steer Adapting the vision-language action models through unified latent guidance.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Align-then-steer`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Align-then-steer`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Align-then-steer`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.02055; PDF: https://arxiv.org/pdf/2509.02055; https://align-then-steer.github.io/; https://github.com/TeleHuman/Align-Then-Steer가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-070"></a>
## Paper 070. Rynnvla-001: Using human demonstrations to improve robot manipulation

- 출처/venue: Y Jiang, S Huang, S Xue, Y Zhao, J Cen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 17
- URL: https://arxiv.org/abs/2509.15212
- PDF: https://arxiv.org/pdf/2509.15212
- 로컬 PDF: 20250918_Rynnvla-001 Using human demonstrations to improve robot manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Rynnvla-001`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Rynnvla-001`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Rynnvla-001`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.15212; PDF: https://arxiv.org/pdf/2509.15212; https://github.com/alibaba-damo-academy/RynnVLA-001가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-071"></a>
## Paper 071. Vote: vision-language-action optimization with trajectory ensemble voting

- 출처/venue: J Lin, A Taherin, A Akbari, A Akbari, L Lu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 15
- URL: https://arxiv.org/abs/2507.05116
- PDF: https://arxiv.org/pdf/2507.05116
- 로컬 PDF: 20250707_Vote vision-language-action optimization with trajectory ensemble voting.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vote`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vote`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vote`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 achieving significantly higher success rates and 39라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.05116; PDF: https://arxiv.org/pdf/2507.05116; https://github.com/LukeLIN-web/VOTE가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-072"></a>
## Paper 072. 3d cavla: Leveraging depth and 3d context to generalize vision language action models for unseen tasks

- 출처/venue: V Bhat, YH Lan, P Krishnamurthy, R Karri… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 19
- URL: https://arxiv.org/abs/2505.05800
- PDF: https://arxiv.org/pdf/2505.05800
- 로컬 PDF: 20250509_3d cavla Leveraging depth and 3d context to generalize vision language action models for unseen tasks.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `3d cavla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `3d cavla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `3d cavla`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.05800; PDF: https://arxiv.org/pdf/2505.05800가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-073"></a>
## Paper 073. Spatial forcing: Implicit spatial representation alignment for vision-language-action model

- 출처/venue: F Li, W Song, H Zhao, J Wang, P Ding, D Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 37
- URL: https://arxiv.org/abs/2510.12276
- PDF: https://arxiv.org/pdf/2510.12276
- 로컬 PDF: 20251014_Spatial forcing Implicit spatial representation alignment for vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Spatial forcing`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Spatial forcing`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Spatial forcing`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 3.8× and improves data efficiency across diverse robotic tasks라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.12276; PDF: https://arxiv.org/pdf/2510.12276; https://spatial-forcing.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-074"></a>
## Paper 074. OmniVLA: An omni-modal vision-language-action model for robot navigation

- 출처/venue: N Hirose, C Glossop, D Shah, S Levine - arXiv preprint arXiv:2509.19480, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 21
- URL: https://arxiv.org/abs/2509.19480
- PDF: https://arxiv.org/pdf/2509.19480
- 로컬 PDF: 20250923_OmniVLA An omni-modal vision-language-action model for robot navigation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `OmniVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `OmniVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `OmniVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.19480; PDF: https://arxiv.org/pdf/2509.19480가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-075"></a>
## Paper 075. Unified diffusion vla: Vision-language-action model via joint discrete denoising diffusion process

- 출처/venue: J Chen, W Song, P Ding, Z Zhou, H Zhao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 19
- URL: https://arxiv.org/abs/2511.01718
- PDF: https://arxiv.org/pdf/2511.01718
- 로컬 PDF: 20251103_Unified diffusion vla Vision-language-action model via joint discrete denoising diffusion process.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Unified diffusion vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Unified diffusion vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Unified diffusion vla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 4× faster inference than autoregressive methods, and we demonstrate its effectiveness through in-depth analysis and real-wo라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.01718; PDF: https://arxiv.org/pdf/2511.01718가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-076"></a>
## Paper 076. Residual off-policy rl for finetuning behavior cloning policies

- 출처/venue: L Ankile, Z Jiang, R Duan, G Shi, P Abbeel… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 15
- URL: https://arxiv.org/abs/2509.19301
- PDF: https://arxiv.org/pdf/2509.19301
- 로컬 PDF: 20250923_Residual off-policy rl for finetuning behavior cloning policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Residual off-policy rl for finetuning behavior cloning policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Residual off-policy rl for finetuning behavior cloning policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Residual off-policy rl for finetuning behavior cloning policies`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.19301; PDF: https://arxiv.org/pdf/2509.19301가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-077"></a>
## Paper 077. Large model empowered embodied ai: A survey on decision-making and embodied learning

- 출처/venue: W Liang, R Zhou, Y Ma, B Zhang, S Li, Y Liao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 20
- URL: https://arxiv.org/abs/2508.10399
- PDF: https://arxiv.org/pdf/2508.10399
- 로컬 PDF: 20250814_Large model empowered embodied ai A survey on decision-making and embodied learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Large model empowered embodied ai`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Large model empowered embodied ai`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.10399; PDF: https://arxiv.org/pdf/2508.10399가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-078"></a>
## Paper 078. Survey of vision-language-action models for embodied manipulation

- 출처/venue: H Li, Y Chen, W Cui, W Liu, K Liu, M Zhou… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2508.15201
- PDF: https://arxiv.org/pdf/2508.15201
- 로컬 PDF: 20250821_Survey of vision-language-action models for embodied manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Survey of vision-language-action models for embodied manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Survey of vision-language-action models for embodied manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.15201; PDF: https://arxiv.org/pdf/2508.15201가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-079"></a>
## Paper 079. Fast ecot: Efficient embodied chain-of-thought via thoughts reuse

- 출처/venue: Z Duan, Y Zhang, S Geng, G Liu, J Boedecker… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 17
- URL: https://arxiv.org/abs/2506.07639
- PDF: https://arxiv.org/pdf/2506.07639
- 로컬 PDF: 20250609_Fast ecot Efficient embodied chain-of-thought via thoughts reuse.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Fast ecot`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Fast ecot`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Fast ecot`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.07639; PDF: https://arxiv.org/pdf/2506.07639가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-080"></a>
## Paper 080. Action-aware dynamic pruning for efficient vision-language-action manipulation

- 출처/venue: X Pei, Y Chen, S Xu, Y Wang, Y Shi, C Xu - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 14
- URL: https://arxiv.org/abs/2509.22093
- PDF: https://arxiv.org/pdf/2509.22093
- 로컬 PDF: 20250926_Action-aware dynamic pruning for efficient vision-language-action manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Action-aware dynamic pruning for efficient vision-language-action manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Action-aware dynamic pruning for efficient vision-language-action manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Action-aware dynamic pruning for efficient vision-language-action manipulation`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 25.8% improvements with OpenVLA) compared to baselines, thereby provid- ing a simple plug-in path to efficient robot policies라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.22093; PDF: https://arxiv.org/pdf/2509.22093가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-081"></a>
## Paper 081. Switchvla: Execution-aware task switching for vision-language-action models

- 출처/venue: M Li, Z Zhao, Z Che, F Liao, K Wu, Z Xu, P Ren… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 14
- URL: https://arxiv.org/abs/2506.03574
- PDF: https://arxiv.org/pdf/2506.03574
- 로컬 PDF: 20250604_Switchvla Execution-aware task switching for vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Switchvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Switchvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Switchvla`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.03574; PDF: https://arxiv.org/pdf/2506.03574; https://switchvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-082"></a>
## Paper 082. Geoaware-vla: Implicit geometry aware vision-language-action model

- 출처/venue: A Abouzeid, M Mansour, Q Sun, Z Sun… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 9
- URL: https://arxiv.org/abs/2509.14117
- PDF: https://arxiv.org/pdf/2509.14117
- 로컬 PDF: 20250917_Geoaware-vla Implicit geometry aware vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Geoaware-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Geoaware-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Geoaware-vla`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.14117; PDF: https://arxiv.org/pdf/2509.14117가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-083"></a>
## Paper 083. Polaris: Scalable real-to-sim evaluations for generalist robot policies

- 출처/venue: A Jain, M Zhang, K Arora, W Chen, M Torne… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 10
- URL: https://arxiv.org/abs/2512.16881
- PDF: https://arxiv.org/pdf/2512.16881
- 로컬 PDF: 20251218_Polaris Scalable real-to-sim evaluations for generalist robot policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Polaris`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Polaris`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Polaris`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.16881; PDF: https://arxiv.org/pdf/2512.16881가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-084"></a>
## Paper 084. Global prior meets local consistency: Dual-memory augmented vision-language-action model for efficient robotic manipulation

- 출처/venue: Z Li, B Hu, R Shao, G Chen, D Jiang, P Xie… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2602.20200
- PDF: https://arxiv.org/pdf/2602.20200
- 로컬 PDF: 20260222_Global prior meets local consistency Dual-memory augmented vision-language-action model for efficient robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Global prior meets local consistency`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Global prior meets local consistency`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Global prior meets local consistency`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin, CALVIN 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 average success rate on RoboTwin 2.0라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.20200; PDF: https://arxiv.org/pdf/2602.20200; https://cybertronagent.github.io/OptimusVLA.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-085"></a>
## Paper 085. 10 open challenges steering the future of vision-language-action models

- 출처/venue: S Poria, N Majumder, CY Hung… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/41333
- PDF: https://ojs.aaai.org/index.php/AAAI/article/view/41333/45294
- 로컬 PDF: 2026_10 open challenges steering the future of vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `10 open challenges steering the future of vision-language-action models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `10 open challenges steering the future of vision-language-action models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `10 open challenges steering the future of vision-language-action models`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/41333; PDF: https://ojs.aaai.org/index.php/AAAI/article/view/41333/45294가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-086"></a>
## Paper 086. Deepthinkvla: Enhancing reasoning capability of vision-language-action models

- 출처/venue: C Yin, Y Lin, W Xu, S Tam, X Zeng, Z Liu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2511.15669
- PDF: https://arxiv.org/pdf/2511.15669
- 로컬 PDF: 20251031_Deepthinkvla Enhancing reasoning capability of vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Deepthinkvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Deepthinkvla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Deepthinkvla`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 degrading performance by 4.2라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.15669; PDF: https://arxiv.org/pdf/2511.15669; https://github.com/OpenBMB/DeepThinkVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-087"></a>
## Paper 087. Self-improving vision-language-action models with data generation via residual rl

- 출처/venue: W Xiao, H Lin, A Peng, H Xue, T He, Y Xie, F Hu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 14
- URL: https://arxiv.org/abs/2511.00091
- PDF: https://arxiv.org/pdf/2511.00091
- 로컬 PDF: 20251030_Self-improving vision-language-action models with data generation via residual rl.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Self-improving vision-language-action models with data generation via residual rl`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Self-improving vision-language-action models with data generation via residual rl`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Self-improving vision-language-action models with data generation via residual rl`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.00091; PDF: https://arxiv.org/pdf/2511.00091가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-088"></a>
## Paper 088. Rise: Self-improving robot policy with compositional world model

- 출처/venue: J Yang, K Lin, J Li, W Zhang, T Lin, L Wu, Z Su… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2602.11075
- PDF: https://arxiv.org/pdf/2602.11075
- 로컬 PDF: 20260211_Rise Self-improving robot policy with compositional world model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Rise`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Rise`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Rise`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11075; PDF: https://arxiv.org/pdf/2602.11075; https://github.com/OpenDriveLab/RISE가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-089"></a>
## Paper 089. World-in-world: World models in a closed-loop world

- 출처/venue: J Zhang, M Jiang, N Dai, T Lu, A Uzunoglu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2510.18135
- PDF: https://arxiv.org/pdf/2510.18135
- 로컬 PDF: 20251020_World-in-world World models in a closed-loop world.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World-in-world`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `World-in-world`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `World-in-world`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.18135; PDF: https://arxiv.org/pdf/2510.18135가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-090"></a>
## Paper 090. Dexbotic: Open-source vision-language-action toolbox

- 출처/venue: B Xie, E Zhou, F Jia, H Shi, H Fan, H Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 9
- URL: https://arxiv.org/abs/2510.23511
- PDF: https://arxiv.org/pdf/2510.23511
- 로컬 PDF: 20251027_Dexbotic Open-source vision-language-action toolbox.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Dexbotic`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Dexbotic`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Dexbotic`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.23511; PDF: https://arxiv.org/pdf/2510.23511; https://github.com/Dexmal/dexbotic가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-091"></a>
## Paper 091. Jepa-vla: Video predictive embedding is needed for vla models

- 출처/venue: S Miao, N Feng, J Wu, Y Lin, X He, D Li… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.11832
- PDF: https://arxiv.org/pdf/2602.11832
- 로컬 PDF: 20260212_Jepa-vla Video predictive embedding is needed for vla models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Jepa-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Jepa-vla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Jepa-vla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11832; PDF: https://arxiv.org/pdf/2602.11832가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-092"></a>
## Paper 092. Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking

- 출처/venue: J So, C Lee, S Lee, J Ok, E Park - Advances in Neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/79ce24f9e8d3c4ff5919240eac78a782-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/79ce24f9e8d3c4ff5919240eac78a782-Paper-Conference.pdf
- 로컬 PDF: 2026_Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Improving Generative Behavior Cloning via Self-Guidance and Adaptive Chunking`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/79ce24f9e8d3c4ff5919240eac78a782-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/79ce24f9e8d3c4ff5919240eac78a782-Paper-Conference.pdf; https://github.com/junhyukso/SGAC가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-093"></a>
## Paper 093. SRPO: Self-Referential Policy Optimization for Vision-Language-Action Models

- 출처/venue: S Fei, S Wang, L Ji, A Li, S Zhang, L Liu, J Hou… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 11
- URL: https://arxiv.org/abs/2511.15605
- PDF: https://arxiv.org/pdf/2511.15605
- 로컬 PDF: 20251119_SRPO Self-Referential Policy Optimization for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SRPO`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `SRPO`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `SRPO`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 SRPO achieves a new state-of-the-art success rate of 99.2%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.15605; PDF: https://arxiv.org/pdf/2511.15605; https://github.com/sii-research/siiRL; https://huggingface.co/collections/Sylvest/srpo가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-094"></a>
## Paper 094. Adaptive action chunking at inference-time for vision-language-action models

- 출처/venue: Y Liang, X Wang, K Wang, S Wang, X Peng… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2604.04161
- PDF: https://arxiv.org/pdf/2604.04161
- 로컬 PDF: 20260405_Adaptive action chunking at inference-time for vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Adaptive action chunking at inference-time for vision-language-action models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Adaptive action chunking at inference-time for vision-language-action models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Adaptive action chunking at inference-time for vision-language-action models`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.04161; PDF: https://arxiv.org/pdf/2604.04161; https://lance-lot.github.io/adaptive-가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-095"></a>
## Paper 095. Phantom menace: Exploring and enhancing the robustness of vla models against physical sensor attacks

- 출처/venue: X Lu, J Chen, S Xiao, Z Jin, Z Chen, H Yu… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/40881
- PDF: https://ojs.aaai.org/index.php/AAAI/article/download/40881/44842
- 로컬 PDF: 2026_Phantom menace Exploring and enhancing the robustness of vla models against physical sensor attacks.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Phantom menace`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Phantom menace`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Phantom menace`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/40881; PDF: https://ojs.aaai.org/index.php/AAAI/article/download/40881/44842; https://github.com/ZJUshine/Phantom-Menace가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-096"></a>
## Paper 096. Robotic manipulation via imitation learning: Taxonomy, evolution, benchmark, and challenges

- 출처/venue: Z Li, A Chapin, E Xiang, R Yang, B Machado… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://arxiv.org/abs/2508.17449
- PDF: https://arxiv.org/pdf/2508.17449
- 로컬 PDF: 20250824_Robotic manipulation via imitation learning Taxonomy, evolution, benchmark, and challenges.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robotic manipulation via imitation learning`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Robotic manipulation via imitation learning`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.17449; PDF: https://arxiv.org/pdf/2508.17449가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-097"></a>
## Paper 097. Lap: Language-action pre-training enables zero-shot cross-embodiment transfer

- 출처/venue: L Zha, AJ Hancock, M Zhang, T Yin, Y Huang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.10556
- PDF: https://arxiv.org/pdf/2602.10556
- 로컬 PDF: 20260211_Lap Language-action pre-training enables zero-shot cross-embodiment transfer.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Lap`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Lap`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Lap`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.10556; PDF: https://arxiv.org/pdf/2602.10556; https://lap-vla.github.io; https://github.com/lihzha/lap가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-098"></a>
## Paper 098. Learning physics from pretrained video models: A multimodal continuous and sequential world interaction models for robotic manipulation

- 출처/venue: Z Song, Q Li, S Qin, Y Chen, T Chen, L Lin… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2603.00110
- PDF: https://arxiv.org/pdf/2603.00110
- 로컬 PDF: 20260218_Learning physics from pretrained video models A multimodal continuous and sequential world interaction models for robotic manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning physics from pretrained video models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Learning physics from pretrained video models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Learning physics from pretrained video models`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, ManiSkill, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 13.8% and 8라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.00110; PDF: https://arxiv.org/pdf/2603.00110가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-099"></a>
## Paper 099. Rynnvla-002: A unified vision-language-action and world model

- 출처/venue: J Cen, S Huang, Y Yuan, K Li, H Yuan, C Yu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 25
- URL: https://arxiv.org/abs/2511.17502
- PDF: https://arxiv.org/pdf/2511.17502
- 로컬 PDF: 20251121_Rynnvla-002 A unified vision-language-action and world model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Rynnvla-002`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Rynnvla-002`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Rynnvla-002`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.17502; PDF: https://arxiv.org/pdf/2511.17502; https://github.com/alibaba-damo-academy/RynnVLA-002가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-100"></a>
## Paper 100. Towards Deploying VLA Without Fine-Tuning: Plug-and-Play Inference-Time VLA Policy Steering via Embodied Evolutionary Diffusion

- 출처/venue: Z Li, J Liu, Z Dong, T Teng, Q Rouxel… - IEEE Robotics and …, 2026 - ieeexplore.ieee.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://ieeexplore.ieee.org/abstract/document/11457243/
- PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11457243.pdf
- 로컬 PDF: 2026_Towards Deploying VLA Without Fine-Tuning Plug-and-Play Inference-Time VLA Policy Steering via Embodied Evolutionary Diffusion.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Deploying VLA Without Fine-Tuning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Towards Deploying VLA Without Fine-Tuning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Towards Deploying VLA Without Fine-Tuning`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11457243/; PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11457243.pdf; https://rip4kobe.github.io/vla-pilot/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-101"></a>
## Paper 101. Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging

- 출처/venue: Y Yadav, Z Zhou, A Wagenmaker, K Pertsch… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://arxiv.org/abs/2512.08333
- PDF: https://arxiv.org/pdf/2512.08333
- 로컬 PDF: 20251209_Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Robust Finetuning of Vision-Language-Action Robot Policies via Parameter Merging`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.08333; PDF: https://arxiv.org/pdf/2512.08333가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-102"></a>
## Paper 102. Rlinf: Flexible and efficient large-scale reinforcement learning via macro-to-micro flow transformation

- 출처/venue: C Yu, Y Wang, Z Guo, H Lin, S Xu, H Zang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 19
- URL: https://arxiv.org/abs/2509.15965
- PDF: https://arxiv.org/pdf/2509.15965
- 로컬 PDF: 20250919_Rlinf Flexible and efficient large-scale reinforcement learning via macro-to-micro flow transformation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Rlinf`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Rlinf`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Rlinf`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 2.43× speedup in end-to-end training throughput라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.15965; PDF: https://arxiv.org/pdf/2509.15965; https://github.com/RLinf/RLinf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-103"></a>
## Paper 103. Towards long-lived robots: Continual learning vla models via reinforcement fine-tuning

- 출처/venue: Y Liu, H Li, S Tian, Y Qin, Y Chen, Y Zheng… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.10503
- PDF: https://arxiv.org/pdf/2602.10503
- 로컬 PDF: 20260211_Towards long-lived robots Continual learning vla models via reinforcement fine-tuning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards long-lived robots`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Towards long-lived robots`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Towards long-lived robots`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.10503; PDF: https://arxiv.org/pdf/2602.10503가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-104"></a>
## Paper 104. Failsafe: Reasoning and recovery from failures in vision-language-action models

- 출처/venue: Z Lin, J Duan, H Fang, D Fox, R Krishna, C Tan… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2510.01642
- PDF: https://arxiv.org/pdf/2510.01642
- 로컬 PDF: 20251002_Failsafe Reasoning and recovery from failures in vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Failsafe`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Failsafe`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Failsafe`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.01642; PDF: https://arxiv.org/pdf/2510.01642; https://jimntu.github.io/FailSafe/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-105"></a>
## Paper 105. When Vision Overrides Language: Evaluating and Mitigating Counterfactual Failures in VLAs

- 출처/venue: Y Fang, Y Feng, D Jing, J Liu, Y Yang, Z Wei… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.17659
- PDF: https://arxiv.org/pdf/2602.17659
- 로컬 PDF: 20260219_When Vision Overrides Language Evaluating and Mitigating Counterfactual Failures in VLAs.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `When Vision Overrides Language`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `When Vision Overrides Language`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `When Vision Overrides Language`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.17659; PDF: https://arxiv.org/pdf/2602.17659; https://vla-va.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-106"></a>
## Paper 106. Benchmarking vision, language, & action models in procedurally generated, open ended action environments

- 출처/venue: P Guruprasad, Y Wang, S Chowdhury, H Sikka… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2505.05540
- PDF: https://arxiv.org/pdf/2505.05540
- 로컬 PDF: 20250508_Benchmarking vision, language, & action models in procedurally generated, open ended action environments.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Benchmarking vision, language, & action models in procedurally generated, open ended action environments`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Benchmarking vision, language, & action models in procedurally generated, open ended action environments`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Benchmarking vision, language, & action models in procedurally generated, open ended action environments`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2505.05540; PDF: https://arxiv.org/pdf/2505.05540; https://huggingface.co/openvla/openvla-7b; https://github.com/Physical-Intelligence/openpi가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-107"></a>
## Paper 107. HoloBrain-0 Technical Report

- 출처/venue: X Lin, T Lin, Y Du, H Xie, Y Jin, J Li, S Wu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.12062
- PDF: https://arxiv.org/pdf/2602.12062
- 로컬 PDF: 20260212_HoloBrain-0 Technical Report.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HoloBrain-0 Technical Report`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `HoloBrain-0 Technical Report`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `HoloBrain-0 Technical Report`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.12062; PDF: https://arxiv.org/pdf/2602.12062가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-108"></a>
## Paper 108. ConsisVLA-4D: Advancing Spatiotemporal Consistency in Efficient 3D-Perception and 4D-Reasoning for Robotic Manipulation

- 출처/venue: W Li, J Liu, L Yixing, J Tong, R Shao, L Nie - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2605.05126
- PDF: https://arxiv.org/pdf/2605.05126
- 로컬 PDF: 20260506_ConsisVLA-4D Advancing Spatiotemporal Consistency in Efficient 3D-Perception and 4D-Reasoning for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ConsisVLA-4D`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ConsisVLA-4D`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ConsisVLA-4D`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.05126; PDF: https://arxiv.org/pdf/2605.05126; https://github.com/JiuTian-VL/ConsisVLA-4D가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-109"></a>
## Paper 109. Dualcot-vla: Visual-linguistic chain of thought via parallel reasoning for vision-language-action models

- 출처/venue: Z Zhong, J Li, J He, H Yan, X Gong, G Zhao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2603.22280
- PDF: https://arxiv.org/pdf/2603.22280
- 로컬 PDF: 20260323_Dualcot-vla Visual-linguistic chain of thought via parallel reasoning for vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Dualcot-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Dualcot-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Dualcot-vla`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.22280; PDF: https://arxiv.org/pdf/2603.22280; https://livfour.github.io/DualCoT-VLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-110"></a>
## Paper 110. Embodied robot manipulation in the era of foundation models: Planning and learning perspectives

- 출처/venue: S Bai, W Song, J Chen, Y Ji, Z Zhong, J Yang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2512.22983
- PDF: https://arxiv.org/pdf/2512.22983
- 로컬 PDF: 20251228_Embodied robot manipulation in the era of foundation models Planning and learning perspectives.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Embodied robot manipulation in the era of foundation models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Embodied robot manipulation in the era of foundation models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Embodied robot manipulation in the era of foundation models`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.22983; PDF: https://arxiv.org/pdf/2512.22983가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-111"></a>
## Paper 111. VLA-Thinker: Boosting Vision-Language-Action Models through Thinking-with-Image Reasoning

- 출처/venue: C Wang, W Bao, S Gao, B Xu, Y Tian, YS Rawat… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2603.14523
- PDF: https://arxiv.org/pdf/2603.14523
- 로컬 PDF: 20260315_VLA-Thinker Boosting Vision-Language-Action Models through Thinking-with-Image Reasoning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-Thinker`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VLA-Thinker`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VLA-Thinker`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 97.5%) and the RoboTwin 2라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.14523; PDF: https://arxiv.org/pdf/2603.14523가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-112"></a>
## Paper 112. TabVLA: Targeted Backdoor Attacks on Vision-Language-Action Models

- 출처/venue: Z Xu, X Zheng, X Ma, YG Jiang - arXiv preprint arXiv:2510.10932, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://arxiv.org/abs/2510.10932
- PDF: https://arxiv.org/pdf/2510.10932
- 로컬 PDF: 20251013_TabVLA Targeted Backdoor Attacks on Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TabVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `TabVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `TabVLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.10932; PDF: https://arxiv.org/pdf/2510.10932가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-113"></a>
## Paper 113. MMaDA-VLA: Large Diffusion Vision-Language-Action Model with Unified Multi-Modal Instruction and Generation

- 출처/venue: Y Liu, P Ding, T Jiang, X Wang, W Song, M Lin… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2603.25406
- PDF: https://arxiv.org/pdf/2603.25406
- 로컬 PDF: 20260326_MMaDA-VLA Large Diffusion Vision-Language-Action Model with Unified Multi-Modal Instruction and Generation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MMaDA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `MMaDA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `MMaDA-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 98.0% average success on LIBERO and 4라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.25406; PDF: https://arxiv.org/pdf/2603.25406가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-114"></a>
## Paper 114. Vla-forget: Vision-language-action unlearning for embodied foundation models

- 출처/venue: R Ranjan, A Polyzou - arXiv preprint arXiv:2604.03956, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2604.03956
- PDF: https://arxiv.org/pdf/2604.03956
- 로컬 PDF: 20260405_Vla-forget Vision-language-action unlearning for embodied foundation models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-forget`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vla-forget`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vla-forget`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 10%, preserves perceptual specificity by22%, retains reasoning and task success by 9%, and reduces post-quantization recove라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.03956; PDF: https://arxiv.org/pdf/2604.03956; https://github.com/raviranjan-ai/VLA-Forget가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-115"></a>
## Paper 115. A1: A Fully Transparent Open-Source, Adaptive and Efficient Truncated Vision-Language-Action Model

- 출처/venue: K Zhang, J Zhang, R Xu, Y Sun, S Xue, Y Wen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2604.05672
- PDF: https://arxiv.org/pdf/2604.05672
- 로컬 PDF: 20260407_A1 A Fully Transparent Open-Source, Adaptive and Efficient Truncated Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `A1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `A1`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, Franka에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 lower per-episode latency for flow-matching inference and up to76.6%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, RDT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.05672; PDF: https://arxiv.org/pdf/2604.05672; https://github.com/ATeam-Research/A1가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-116"></a>
## Paper 116. Self-vla: A skill enhanced agentic vision-language-action framework for contact-rich disassembly

- 출처/venue: C Liu, S Tian, X Liang, M Zheng - arXiv preprint arXiv:2603.11080, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2603.11080
- PDF: https://arxiv.org/pdf/2603.11080
- 로컬 PDF: 20260310_Self-vla A skill enhanced agentic vision-language-action framework for contact-rich disassembly.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Self-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Self-vla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Self-vla`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.11080; PDF: https://arxiv.org/pdf/2603.11080가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-117"></a>
## Paper 117. AdaWorldPolicy: World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation

- 출처/venue: G Yuan, Q Qiao, J Zhang, D Xu - arXiv preprint arXiv:2602.20057, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.20057
- PDF: https://arxiv.org/pdf/2602.20057
- 로컬 PDF: 20260223_AdaWorldPolicy World-Model-Driven Diffusion Policy with Online Adaptive Learning for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AdaWorldPolicy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `AdaWorldPolicy`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `AdaWorldPolicy`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 Diffusion Policy, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.20057; PDF: https://arxiv.org/pdf/2602.20057; https://AdaWorldPolicy.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-118"></a>
## Paper 118. Benchmarking generalizable bimanual manipulation: Robotwin dual-arm collaboration challenge at cvpr 2025 meis workshop

- 출처/venue: T Chen, K Wang, Z Yang, Y Zhang, Z Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://arxiv.org/abs/2506.23351
- PDF: https://arxiv.org/pdf/2506.23351
- 로컬 PDF: 20250629_Benchmarking generalizable bimanual manipulation Robotwin dual-arm collaboration challenge at cvpr 2025 meis workshop.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Benchmarking generalizable bimanual manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Benchmarking generalizable bimanual manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Benchmarking generalizable bimanual manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.23351; PDF: https://arxiv.org/pdf/2506.23351; https://robotwin-benchmark.github.io/cvpr-2025-challenge/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-119"></a>
## Paper 119. RobustVLA: Robustness-aware reinforcement post-training for vision-language-action models

- 출처/venue: H Zhang, S Zhang, J Jin, Q Zeng, R Li… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://arxiv.org/abs/2511.01331
- PDF: https://arxiv.org/pdf/2511.01331
- 로컬 PDF: 20251103_RobustVLA Robustness-aware reinforcement post-training for vision-language-action models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RobustVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RobustVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RobustVLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.01331; PDF: https://arxiv.org/pdf/2511.01331가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-120"></a>
## Paper 120. How Fast Can I Run My VLA? Demystifying VLA Inference Performance with VLA-Perf

- 출처/venue: W Jiang, J Clemons, K Sankaralingam… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.18397
- PDF: https://arxiv.org/pdf/2602.18397
- 로컬 PDF: 20260220_How Fast Can I Run My VLA Demystifying VLA Inference Performance with VLA-Perf.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `How Fast Can I Run My VLA? Demystifying VLA Inference Performance with VLA-Perf`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `How Fast Can I Run My VLA? Demystifying VLA Inference Performance with VLA-Perf`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `How Fast Can I Run My VLA? Demystifying VLA Inference Performance with VLA-Perf`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.18397; PDF: https://arxiv.org/pdf/2602.18397; https://github.com/NVlabs/vla-perf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-121"></a>
## Paper 121. Compliantvla-adaptor: Vlm-guided variable impedance action for safe contact-rich manipulation

- 출처/venue: H Zhang, WH Huang, Q Tong, G Solak, P Liu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2601.15541
- PDF: https://arxiv.org/pdf/2601.15541
- 로컬 PDF: 20260121_Compliantvla-adaptor Vlm-guided variable impedance action for safe contact-rich manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Compliantvla-adaptor`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Compliantvla-adaptor`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Compliantvla-adaptor`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.15541; PDF: https://arxiv.org/pdf/2601.15541가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-122"></a>
## Paper 122. Rethinking the practicality of vision-language-action model: A comprehensive benchmark and an improved baseline

- 출처/venue: W Song, J Chen, X Sun, H Lei, Y Qin, W Zhao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.22663
- PDF: https://arxiv.org/pdf/2602.22663
- 로컬 PDF: 20260226_Rethinking the practicality of vision-language-action model A comprehensive benchmark and an improved baseline.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Rethinking the practicality of vision-language-action model`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Rethinking the practicality of vision-language-action model`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Rethinking the practicality of vision-language-action model`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.22663; PDF: https://arxiv.org/pdf/2602.22663; https://github.com/OpenHelix-Team/LLaV가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-123"></a>
## Paper 123. VLA: Prior-Guided Vision-Language-Action Models via World Knowledge Variation

- 출처/venue: Y Zhu, J He, R Shao, K Yuan, T Tan, X Yuan… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2603.08361
- PDF: https://arxiv.org/pdf/2603.08361
- 로컬 PDF: 20260309_VLA Prior-Guided Vision-Language-Action Models via World Knowledge Variation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.08361; PDF: https://arxiv.org/pdf/2603.08361; https://github.com/JiuTian-VL/DeltaVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-124"></a>
## Paper 124. Leveraging os-level primitives for robotic action management

- 출처/venue: W Zheng, B Li, B Xu, E Feng, J Gu, H Chen - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2508.10259
- PDF: https://arxiv.org/pdf/2508.10259
- 로컬 PDF: 20250814_Leveraging os-level primitives for robotic action management.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Leveraging os-level primitives for robotic action management`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Leveraging os-level primitives for robotic action management`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Leveraging os-level primitives for robotic action management`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 achieving task success rate improvements ranging from 7라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.10259; PDF: https://arxiv.org/pdf/2508.10259가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-125"></a>
## Paper 125. UAOR: Uncertainty-aware Observation Reinjection for Vision-Language-Action Models

- 출처/venue: J Yang, Y Chen, Y Xu, P Li, X Wu, Z Wen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.18020
- PDF: https://arxiv.org/pdf/2602.18020
- 로컬 PDF: 20260220_UAOR Uncertainty-aware Observation Reinjection for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `UAOR`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `UAOR`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `UAOR`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.18020; PDF: https://arxiv.org/pdf/2602.18020가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-126"></a>
## Paper 126. Xiaomi-robotics-0: An open-sourced vision-language-action model with real-time execution

- 출처/venue: R Cai, J Guo, X He, P Jin, J Li, B Lin, F Liu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2602.12684
- PDF: https://arxiv.org/pdf/2602.12684
- 로컬 PDF: 20260213_Xiaomi-robotics-0 An open-sourced vision-language-action model with real-time execution.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Xiaomi-robotics-0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Xiaomi-robotics-0`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Xiaomi-robotics-0`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.12684; PDF: https://arxiv.org/pdf/2602.12684; https://xiaomi-robotics-0.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-127"></a>
## Paper 127. InteLiPlan: An Interactive Lightweight LLM-Based Planner for Domestic Robot Autonomy

- 출처/venue: KT Ly, K Lu, I Havoutis - IEEE Robotics and Automation Letters, 2026 - ieeexplore.ieee.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 8
- URL: https://ieeexplore.ieee.org/abstract/document/11373859/
- PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11373859.pdf
- 로컬 PDF: 2026_InteLiPlan An Interactive Lightweight LLM-Based Planner for Domestic Robot Autonomy.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `InteLiPlan`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `InteLiPlan`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `InteLiPlan`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11373859/; PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11373859.pdf; https://kimtienly.github.io/InteLiPlan가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-128"></a>
## Paper 128. In-N-On: Scaling Egocentric Manipulation with in-the-wild and on-task Data

- 출처/venue: X Cai, RZ Qiu, G Chen, L Wei, I Liu, T Huang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2511.15704
- PDF: https://arxiv.org/pdf/2511.15704
- 로컬 PDF: 20251119_In-N-On Scaling Egocentric Manipulation with in-the-wild and on-task Data.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `In-N-On`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `In-N-On`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `In-N-On`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.15704; PDF: https://arxiv.org/pdf/2511.15704; https://xiongyicai.github.io/In-N-On가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-129"></a>
## Paper 129. Evovla: Self-evolving vision-language-action model

- 출처/venue: Z Liu, Z Yang, Z Zhang, H Tang - arXiv preprint arXiv:2511.16166, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2511.16166
- PDF: https://arxiv.org/pdf/2511.16166
- 로컬 PDF: 20251120_Evovla Self-evolving vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Evovla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Evovla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Evovla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 69.2%, achieves 1라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT, Gemini 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.16166; PDF: https://arxiv.org/pdf/2511.16166; https://github.com/AIGeeksGroup/EvoVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-130"></a>
## Paper 130. METIS: Multi-Source Egocentric Training for Integrated Dexterous Vision-Language-Action Model

- 출처/venue: Y Fu, N Chen, J Zhao, S Shan, G Yao, P Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2511.17366
- PDF: https://arxiv.org/pdf/2511.17366
- 로컬 PDF: 20251121_METIS Multi-Source Egocentric Training for Integrated Dexterous Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `METIS`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `METIS`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `METIS`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.17366; PDF: https://arxiv.org/pdf/2511.17366; https://aureleopku.github.io/METIS가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-131"></a>
## Paper 131. Hypervla: Efficient inference in vision-language-action models via hypernetworks

- 출처/venue: Z Xiong, K Li, Z Wang, M Jackson, J Foerster… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2510.04898
- PDF: https://arxiv.org/pdf/2510.04898
- 로컬 PDF: 20251006_Hypervla Efficient inference in vision-language-action models via hypernetworks.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Hypervla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Hypervla`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Hypervla`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 and accelerates inference speed by120라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.04898; PDF: https://arxiv.org/pdf/2510.04898; https://github.com/MasterXiong/Hyper-VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-132"></a>
## Paper 132. Pixelvla: Advancing pixel-level understanding in vision-language-action model

- 출처/venue: W Liang, G Sun, Y He, J Dong, S Dai, I Laptev… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2511.01571
- PDF: https://arxiv.org/pdf/2511.01571
- 로컬 PDF: 20251103_Pixelvla Advancing pixel-level understanding in vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Pixelvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Pixelvla`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Pixelvla`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 ts show that Pix- elVLA improves manipulation success rates by10.1%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.01571; PDF: https://arxiv.org/pdf/2511.01571; https://wenqiliang.github.io/PixelVLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-133"></a>
## Paper 133. Worldagen: Unified state-action prediction with test-time world model training

- 출처/venue: C Wan, K Wang, Y Si, P Zhang, M Li - Proceedings of the AAAI …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/38925
- PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38925/42887
- 로컬 PDF: 2026_Worldagen Unified state-action prediction with test-time world model training.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Worldagen`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Worldagen`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Worldagen`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/38925; PDF: https://ojs.aaai.org/index.php/AAAI/article/view/38925/42887가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-134"></a>
## Paper 134. MetaSym: A Symplectic Meta-learning Framework for Physical Intelligence

- 출처/venue: P Vaidhyanathan, A Papatheodorou… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2502.16667
- PDF: https://arxiv.org/pdf/2502.16667
- 로컬 PDF: 20250223_MetaSym A Symplectic Meta-learning Framework for Physical Intelligence.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MetaSym`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `MetaSym`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `MetaSym`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2502.16667; PDF: https://arxiv.org/pdf/2502.16667가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-135"></a>
## Paper 135. VLA-Arena: An Open-Source Framework for Benchmarking Vision-Language-Action Models

- 출처/venue: B Zhang, J Li, J Shen, Y Cai, Y Zhang, Y Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 11
- URL: https://arxiv.org/abs/2512.22539
- PDF: https://arxiv.org/pdf/2512.22539
- 로컬 PDF: 20251227_VLA-Arena An Open-Source Framework for Benchmarking Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-Arena`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-Arena`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-Arena`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.22539; PDF: https://arxiv.org/pdf/2512.22539; https://vla-arena.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-136"></a>
## Paper 136. Actioncodec: What makes for good action tokenizers

- 출처/venue: Z Dong, Y Liu, S Zhang, B Ye, Y Yuan, F Ni… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.15397
- PDF: https://arxiv.org/pdf/2602.15397
- 로컬 PDF: 20260217_Actioncodec What makes for good action tokenizers.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Actioncodec`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Actioncodec`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Actioncodec`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 95.5% success rate with- out any robotics pre-training라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.15397; PDF: https://arxiv.org/pdf/2602.15397가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-137"></a>
## Paper 137. HiMoE-VLA: Hierarchical Mixture-of-Experts for Generalist Vision-Language-Action Policies

- 출처/venue: Z Du, B Liu, Y Liang, Y Shen, H Cao, X Zheng… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2512.05693
- PDF: https://arxiv.org/pdf/2512.05693
- 로컬 PDF: 20251205_HiMoE-VLA Hierarchical Mixture-of-Experts for Generalist Vision-Language-Action Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HiMoE-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `HiMoE-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `HiMoE-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.05693; PDF: https://arxiv.org/pdf/2512.05693; https://github.com/ZhiyingDu/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-138"></a>
## Paper 138. ELMUR: External Layer Memory with Update/Rewrite for Long-Horizon RL

- 출처/venue: E Cherepanov, AK Kovalev, AI Panov - arXiv preprint arXiv:2510.07151, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2510.07151
- PDF: https://arxiv.org/pdf/2510.07151
- 로컬 PDF: 20251008_ELMUR External Layer Memory with Update Rewrite for Long-Horizon RL.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ELMUR`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ELMUR`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ELMUR`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 achieving the best success rate on 21라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.07151; PDF: https://arxiv.org/pdf/2510.07151; https://elmur-paper.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-139"></a>
## Paper 139. VLA-Pruner: Temporal-Aware Dual-Level Visual Token Pruning for Efficient Vision-Language-Action Inference

- 출처/venue: Z Liu, Y Chen, H Cai, T Lin, S Yang, Z Liu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2511.16449
- PDF: https://arxiv.org/pdf/2511.16449
- 로컬 PDF: 20251120_VLA-Pruner Temporal-Aware Dual-Level Visual Token Pruning for Efficient Vision-Language-Action Inference.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-Pruner`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-Pruner`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-Pruner`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 50% 60% 70% 80% 90% Prune Ratio (%) 40 45 50 55 60 65 70 75 80Performance VLA-Pruner SparseVLM DivPrune FastV VLA-Cache Ori라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.16449; PDF: https://arxiv.org/pdf/2511.16449; https://github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-140"></a>
## Paper 140. Hybrid Training for Vision-Language-Action Models

- 출처/venue: P Mazzaglia, C Sancaktar, M Peschl… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2510.00600
- PDF: https://arxiv.org/pdf/2510.00600
- 로컬 PDF: 20251001_Hybrid Training for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Hybrid Training for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Hybrid Training for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Hybrid Training for Vision-Language-Action Models`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.00600; PDF: https://arxiv.org/pdf/2510.00600가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-141"></a>
## Paper 141. Vla-0: Building state-of-the-art vlas with zero modification

- 출처/venue: A Goyal, H Hadfield, X Yang, V Blukis… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 24
- URL: https://arxiv.org/abs/2510.13054
- PDF: https://arxiv.org/pdf/2510.13054
- 로컬 PDF: 20251015_Vla-0 Building state-of-the-art vlas with zero modification.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vla-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vla-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vla-0`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.13054; PDF: https://arxiv.org/pdf/2510.13054; https://vla0.github.io/; https://github.com/huggingface/lerobot가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-142"></a>
## Paper 142. Dit4dit: Jointly modeling video dynamics and actions for generalizable robot control

- 출처/venue: T Ma, J Zheng, Z Wang, C Jiang, A Cui, J Liang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2603.10448
- PDF: https://arxiv.org/pdf/2603.10448
- 로컬 PDF: 20260311_Dit4dit Jointly modeling video dynamics and actions for generalizable robot control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Dit4dit`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Dit4dit`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Dit4dit`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 reaching average success rates of 98.6%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.10448; PDF: https://arxiv.org/pdf/2603.10448; https://dit4dit.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-143"></a>
## Paper 143. Robot-dift: Distilling diffusion features for geometrically consistent visuomotor control

- 출처/venue: Y Deng, Y Jin, X Jia, J Xue, G Neumann… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.11934
- PDF: https://arxiv.org/pdf/2602.11934
- 로컬 PDF: 20260212_Robot-dift Distilling diffusion features for geometrically consistent visuomotor control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robot-dift`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Robot-dift`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Robot-dift`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11934; PDF: https://arxiv.org/pdf/2602.11934가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-144"></a>
## Paper 144. H-wm: Robotic task and motion planning guided by hierarchical world model

- 출처/venue: J Huang, W Chen, Z Li, O Pang, X Hu, L Zhang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.11291
- PDF: https://arxiv.org/pdf/2602.11291
- 로컬 PDF: 20260211_H-wm Robotic task and motion planning guided by hierarchical world model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `H-wm`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `H-wm`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `H-wm`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11291; PDF: https://arxiv.org/pdf/2602.11291가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-145"></a>
## Paper 145. Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data

- 출처/venue: R Liu, P Zhou, Q Luo, L Sun, J Cen… - Advances in Neural …, 2026 - proceedings.neurips.cc
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://proceedings.neurips.cc/paper_files/paper/2025/hash/97a9a4de4337c7a0ef2b603ca0fa1d6a-Abstract-Conference.html
- PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/97a9a4de4337c7a0ef2b603ca0fa1d6a-Paper-Conference.pdf
- 로컬 PDF: 2026_Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://proceedings.neurips.cc/paper_files/paper/2025/hash/97a9a4de4337c7a0ef2b603ca0fa1d6a-Abstract-Conference.html; PDF: https://proceedings.neurips.cc/paper_files/paper/2025/file/97a9a4de4337c7a0ef2b603ca0fa1d6a-Paper-Conference.pdf; https://github.com/zrllrz/HiMaCon가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-146"></a>
## Paper 146. Future-vla: Forecasting unified trajectories under real-time execution

- 출처/venue: J Fan, Y Liu, S Li, B Ren, S Li, XP Zhang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.15882
- PDF: https://arxiv.org/pdf/2602.15882
- 로컬 PDF: 20260205_Future-vla Forecasting unified trajectories under real-time execution.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Future-vla`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Future-vla`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.15882; PDF: https://arxiv.org/pdf/2602.15882가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-147"></a>
## Paper 147. AR-VLA: True Autoregressive Action Expert for Vision-Language-Action Models

- 출처/venue: Y Hu, JN Zaech, N Nikolov, Y Yao, S Dey… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.10126
- PDF: https://arxiv.org/pdf/2603.10126
- 로컬 PDF: 20260310_AR-VLA True Autoregressive Action Expert for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AR-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `AR-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `AR-VLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.10126; PDF: https://arxiv.org/pdf/2603.10126가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-148"></a>
## Paper 148. OXE-AugE: A Large-Scale Robot Augmentation of OXE for Scaling Cross-Embodiment Policy Learning

- 출처/venue: G Ji, H Polavaram, LY Chen, S Bajamahal, Z Ma… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2512.13100
- PDF: https://arxiv.org/pdf/2512.13100
- 로컬 PDF: 20251215_OXE-AugE A Large-Scale Robot Augmentation of OXE for Scaling Cross-Embodiment Policy Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `OXE-AugE`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `OXE-AugE`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `OXE-AugE`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 OXE에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.13100; PDF: https://arxiv.org/pdf/2512.13100; https://OXE-AugE.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-149"></a>
## Paper 149. Embodied ai: A survey on the evolution from perceptive to behavioral intelligence

- 출처/venue: C Yifan, M Wei, X Wang, Y Liu, J Wang, H Song… - SmartBot, 2025 - Wiley Online Library
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 16
- URL: https://onlinelibrary.wiley.com/doi/abs/10.1002/smb2.70003
- PDF: https://onlinelibrary.wiley.com/doi/pdf/10.1002/smb2.70003
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Embodied ai`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Embodied ai`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://onlinelibrary.wiley.com/doi/abs/10.1002/smb2.70003; PDF: https://onlinelibrary.wiley.com/doi/pdf/10.1002/smb2.70003가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-150"></a>
## Paper 150. FutureVLA: Joint Visuomotor Prediction for Vision-Language-Action Model

- 출처/venue: X Xu, H Li, J Ye, Y Chen, J Zeng, X Chen, L Xu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.10712
- PDF: https://arxiv.org/pdf/2603.10712
- 로컬 PDF: 20260311_FutureVLA Joint Visuomotor Prediction for Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FutureVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `FutureVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `FutureVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 11.4% improvement on the SimplerEnv and a striking 21라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.10712; PDF: https://arxiv.org/pdf/2603.10712가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-151"></a>
## Paper 151. PVI: Plug-in Visual Injection for Vision-Language-Action Models

- 출처/venue: Z Zhang, S Zhang, X Xiong, J Zhang, Z Xie, J Xi… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.12772
- PDF: https://arxiv.org/pdf/2603.12772
- 로컬 PDF: 20260313_PVI Plug-in Visual Injection for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PVI`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PVI`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PVI`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.12772; PDF: https://arxiv.org/pdf/2603.12772가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-152"></a>
## Paper 152. ROCKET: Residual-Oriented Multi-Layer Alignment for Spatially-Aware Vision-Language-Action Models

- 출처/venue: G Sun, T Du, K Feng, C Luo, X Ding, Z Shen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.17951
- PDF: https://arxiv.org/pdf/2602.17951
- 로컬 PDF: 20260220_ROCKET Residual-Oriented Multi-Layer Alignment for Spatially-Aware Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ROCKET`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ROCKET`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ROCKET`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 4% of the compute budget while achieving 98라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.17951; PDF: https://arxiv.org/pdf/2602.17951; https://github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-153"></a>
## Paper 153. Expertise need not monopolize: Action-Specialized Mixture of Experts for Vision-Language-Action Learning

- 출처/venue: W Shen, Y Liu, Y Wu, Z Liang, S Gu, D Wang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2510.14300
- PDF: https://arxiv.org/pdf/2510.14300
- 로컬 PDF: 20251016_Expertise need not monopolize Action-Specialized Mixture of Experts for Vision-Language-Action Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Expertise need not monopolize`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Expertise need not monopolize`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Expertise need not monopolize`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 delivering performance gains of1.8%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.14300; PDF: https://arxiv.org/pdf/2510.14300가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-154"></a>
## Paper 154. World2Act: Latent Action Post-Training via Skill-Compositional World Models

- 출처/venue: AD Vuong, T Van Vo, A Sohail, H Ding, L Ma… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.10422
- PDF: https://arxiv.org/pdf/2603.10422
- 로컬 PDF: 20260311_World2Act Latent Action Post-Training via Skill-Compositional World Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World2Act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `World2Act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `World2Act`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 and improves real-world performance by 6.7%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT, CLIP 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.10422; PDF: https://arxiv.org/pdf/2603.10422가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-155"></a>
## Paper 155. OFlow: Injecting Object-Aware Temporal Flow Matching for Robust Robotic Manipulation

- 출처/venue: K Wang, K Fan, C Qiu, Z Shangguan, Y Fu, Y Fu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2604.17876
- PDF: https://arxiv.org/pdf/2604.17876
- 로컬 PDF: 20260420_OFlow Injecting Object-Aware Temporal Flow Matching for Robust Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `OFlow`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `OFlow`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `OFlow`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.17876; PDF: https://arxiv.org/pdf/2604.17876가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-156"></a>
## Paper 156. Beyond Attention Magnitude: Leveraging Inter-layer Rank Consistency for Efficient Vision-Language-Action Models

- 출처/venue: P Liu, J Liu, X Qiu, X Huang - arXiv preprint arXiv:2603.24941, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.24941
- PDF: https://arxiv.org/pdf/2603.24941
- 로컬 PDF: 20260326_Beyond Attention Magnitude Leveraging Inter-layer Rank Consistency for Efficient Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Beyond Attention Magnitude`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Beyond Attention Magnitude`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Beyond Attention Magnitude`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 TIES improves average success rates by 6%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.24941; PDF: https://arxiv.org/pdf/2603.24941가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-157"></a>
## Paper 157. Continually Evolving Skill Knowledge in Vision Language Action Model

- 출처/venue: Y Wu, G Wang, Z Yang, M Yao, B Sheil… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2511.18085
- PDF: https://arxiv.org/pdf/2511.18085
- 로컬 PDF: 20251122_Continually Evolving Skill Knowledge in Vision Language Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Continually Evolving Skill Knowledge in Vision Language Action Model`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Continually Evolving Skill Knowledge in Vision Language Action Model`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Continually Evolving Skill Knowledge in Vision Language Action Model`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 1% data replay라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.18085; PDF: https://arxiv.org/pdf/2511.18085; https://stellarvla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-158"></a>
## Paper 158. Eva-VLA: Evaluating Vision-Language-Action Models' Robustness Under Real-World Physical Variations

- 출처/venue: H Liu, S Ruan, J Long, J Wu, J Hou, H Tang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2509.18953
- PDF: https://arxiv.org/pdf/2509.18953
- 로컬 PDF: 20250923_Eva-VLA Evaluating Vision-Language-Action Models' Robustness Under Real-World Physical Variations.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Eva-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Eva-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Eva-VLA`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 90% across three physical vari- ations on the LIBERO-Long task, exposing critical systemic fragilities라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.18953; PDF: https://arxiv.org/pdf/2509.18953가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-159"></a>
## Paper 159. Seeing to Act, Prompting to Specify: A Bayesian Factorization of Vision Language Action Policy

- 출처/venue: K Xu, Z Zhu, A Chen, S Zhao, Q Huang, Y Yang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2512.11218
- PDF: https://arxiv.org/pdf/2512.11218
- 로컬 PDF: 20251212_Seeing to Act, Prompting to Specify A Bayesian Factorization of Vision Language Action Policy.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Seeing to Act, Prompting to Specify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Seeing to Act, Prompting to Specify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Seeing to Act, Prompting to Specify`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.11218; PDF: https://arxiv.org/pdf/2512.11218; https://xukechun.github.io/papers/BayesVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-160"></a>
## Paper 160. DySL-VLA: Efficient Vision-Language-Action Model Inference via Dynamic-Static Layer-Skipping for Robot Manipulation

- 출처/venue: Z Yang, Y Qi, T Xie, B Yu, S Liu, M Li - arXiv preprint arXiv:2602.22896, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.22896
- PDF: https://arxiv.org/pdf/2602.22896
- 로컬 PDF: 20260226_DySL-VLA Efficient Vision-Language-Action Model Inference via Dynamic-Static Layer-Skipping for Robot Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DySL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `DySL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `DySL-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 2.1% improvement in success length over Deer-VLA on the Calvin dataset, while simultaneously reducing trainable parameters b라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.22896; PDF: https://arxiv.org/pdf/2602.22896; https://github.com/PKU-SEC-Lab/DYSL_VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-161"></a>
## Paper 161. VLSA: Vision-Language-Action Models with Plug-and-Play Safety Constraint Layer

- 출처/venue: S Hu, Z Liu, S Liu, J Cen, Z Meng, X He - arXiv preprint arXiv:2512.11891, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 11
- URL: https://arxiv.org/abs/2512.11891
- PDF: https://arxiv.org/pdf/2512.11891
- 로컬 PDF: 20251209_VLSA Vision-Language-Action Models with Plug-and-Play Safety Constraint Layer.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLSA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLSA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLSA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 e substantially increasing the task execution success rate by 17.25%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.11891; PDF: https://arxiv.org/pdf/2512.11891; https://vlsa-aegis.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-162"></a>
## Paper 162. Robo-Dopamine: General Process Reward Modeling for High-Precision Robotic Manipulation

- 출처/venue: H Tan, S Chen, Y Xu, Z Wang, Y Ji, C Chi, Y Lyu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2512.23703
- PDF: https://arxiv.org/pdf/2512.23703
- 로컬 PDF: 20251229_Robo-Dopamine General Process Reward Modeling for High-Precision Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robo-Dopamine`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Robo-Dopamine`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Robo-Dopamine`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 95% success with only 150 online rollouts (approximately 1 hour of real robot interaction), while retaining strong generali라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.23703; PDF: https://arxiv.org/pdf/2512.23703; https://robo-dopamine.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-163"></a>
## Paper 163. TwinBrainVLA: Unleashing the Potential of Generalist VLMs for Embodied Tasks via Asymmetric Mixture-of-Transformers

- 출처/venue: B Yu, S Lian, X Lin, Y Wei, Z Shen, C Wu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2601.14133
- PDF: https://arxiv.org/pdf/2601.14133
- 로컬 PDF: 20260120_TwinBrainVLA Unleashing the Potential of Generalist VLMs for Embodied Tasks via Asymmetric Mixture-of-Transformers.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TwinBrainVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `TwinBrainVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `TwinBrainVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.14133; PDF: https://arxiv.org/pdf/2601.14133; https://github.com/ZGC-EmbodyAI/TwinBrainVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-164"></a>
## Paper 164. Uni-Skill: Building Self-Evolving Skill Repository for Generalizable Robotic Manipulation

- 출처/venue: S Xie, Y Zhang, R Wang, X Chen - arXiv preprint arXiv:2603.02623, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2603.02623
- PDF: https://arxiv.org/pdf/2603.02623
- 로컬 PDF: 20260303_Uni-Skill Building Self-Evolving Skill Repository for Generalizable Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Uni-Skill`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Uni-Skill`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Uni-Skill`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.02623; PDF: https://arxiv.org/pdf/2603.02623가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-165"></a>
## Paper 165. HiF-VLA: Hindsight, Insight and Foresight through Motion Representation for Vision-Language-Action Models

- 출처/venue: M Lin, P Ding, S Wang, Z Zhuang, Y Liu, X Tong… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2512.09928
- PDF: https://arxiv.org/pdf/2512.09928
- 로컬 PDF: 20251210_HiF-VLA Hindsight, Insight and Foresight through Motion Representation for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HiF-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `HiF-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `HiF-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.09928; PDF: https://arxiv.org/pdf/2512.09928; https://hifvla.github.io/githubhttps://github.com/OpenHelix-Team/HiF-VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-166"></a>
## Paper 166. RoboScape-R: Unified Reward-Observation World Models for Generalizable Robotics Training via RL

- 출처/venue: Y Tang, Y Shang, Y Chen, B Wei, X Zhang, S Yu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2512.03556
- PDF: https://arxiv.org/pdf/2512.03556
- 로컬 PDF: 20251203_RoboScape-R Unified Reward-Observation World Models for Generalizable Robotics Training via RL.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboScape-R`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RoboScape-R`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RoboScape-R`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 37.5% performance im- provement over baselines under out-of-domain scenarios라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.03556; PDF: https://arxiv.org/pdf/2512.03556가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-167"></a>
## Paper 167. RoboStereo: Dual-Tower 4D Embodied World Models for Unified Policy Optimization

- 출처/venue: R Zhang, G Chen, Z Xu, Z Liu, Z Zhong… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.12639
- PDF: https://arxiv.org/pdf/2603.12639
- 로컬 PDF: 20260313_RoboStereo Dual-Tower 4D Embodied World Models for Unified Policy Optimization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboStereo`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RoboStereo`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RoboStereo`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 97% average relative improvement on fine-grained manipulation tasks라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.12639; PDF: https://arxiv.org/pdf/2603.12639가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-168"></a>
## Paper 168. TAG: Target-Agnostic Guidance for Stable Object-Centric Inference in Vision-Language-Action Models

- 출처/venue: J Zhou, Z Zhan, R Zhai, Q Lyu, H Liu, K Wang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.24584
- PDF: https://arxiv.org/pdf/2603.24584
- 로컬 PDF: 20260325_TAG Target-Agnostic Guidance for Stable Object-Centric Inference in Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TAG`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `TAG`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `TAG`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.24584; PDF: https://arxiv.org/pdf/2603.24584가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-169"></a>
## Paper 169. Token Expand-Merge: Training-Free Token Compression for Vision-Language-Action Models

- 출처/venue: Y Ye, J Ma, J Cen, Z Lu - arXiv preprint arXiv:2512.09927, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2512.09927
- PDF: https://arxiv.org/pdf/2512.09927
- 로컬 PDF: 20251210_Token Expand-Merge Training-Free Token Compression for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Token Expand-Merge`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Token Expand-Merge`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Token Expand-Merge`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.09927; PDF: https://arxiv.org/pdf/2512.09927; https://github.com/Jasper-aaa/TEAM-VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-170"></a>
## Paper 170. VLA^ 2: Empowering Vision-Language-Action Models with an Agentic Framework for Unseen Concept Manipulation

- 출처/venue: H Zhao, J Zhang, W Song, P Ding, D Wang - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2510.14902
- PDF: https://arxiv.org/pdf/2510.14902
- 로컬 PDF: 20251016_VLA^ 2 Empowering Vision-Language-Action Models with an Agentic Framework for Unseen Concept Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA^ 2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VLA^ 2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VLA^ 2`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.14902; PDF: https://arxiv.org/pdf/2510.14902가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-171"></a>
## Paper 171. LiLo-VLA: Compositional Long-Horizon Manipulation via Linked Object-Centric Policies

- 출처/venue: Y Yang, S Cheng, Y Fang, H Bharadhwaj… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.21531
- PDF: https://arxiv.org/pdf/2602.21531
- 로컬 PDF: 20260225_LiLo-VLA Compositional Long-Horizon Manipulation via Linked Object-Centric Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LiLo-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `LiLo-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `LiLo-VLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.21531; PDF: https://arxiv.org/pdf/2602.21531; https://yy-gx.github.io/LiLo-VLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-172"></a>
## Paper 172. EVOLVE-VLA: Test-Time Training from Environment Feedback for Vision-Language-Action Models

- 출처/venue: Z Bai, C Gao, MZ Shou - arXiv preprint arXiv:2512.14666, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2512.14666
- PDF: https://arxiv.org/pdf/2512.14666
- 로컬 PDF: 20251216_EVOLVE-VLA Test-Time Training from Environment Feedback for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `EVOLVE-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `EVOLVE-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `EVOLVE-VLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 8.6% on long-horizon tasks, +22라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.14666; PDF: https://arxiv.org/pdf/2512.14666; https://showlab.github.io/EVOLVE-VLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-173"></a>
## Paper 173. VGAS: Value-Guided Action-Chunk Selection for Few-Shot Vision-Language-Action Adaptation

- 출처/venue: C Xu, J Lu, J Xuan, E Yu - arXiv preprint arXiv:2602.07399, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.07399
- PDF: https://arxiv.org/pdf/2602.07399
- 로컬 PDF: 20260207_VGAS Value-Guided Action-Chunk Selection for Few-Shot Vision-Language-Action Adaptation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VGAS`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VGAS`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 모델을 비교하고 재현하기 위한 데이터셋 또는 벤치마크 구성을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VGAS`를 중심으로 모델을 비교하고 재현하기 위한 데이터셋 또는 벤치마크 구성을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.07399; PDF: https://arxiv.org/pdf/2602.07399; https://github.com/Jyugo-15/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-174"></a>
## Paper 174. Fast-dVLA: Accelerating Discrete Diffusion VLA to Real-Time Performance

- 출처/venue: W Song, J Chen, S Chen, J Wang, P Ding… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.25661
- PDF: https://arxiv.org/pdf/2603.25661
- 로컬 PDF: 20260326_Fast-dVLA Accelerating Discrete Diffusion VLA to Real-Time Performance.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Fast-dVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Fast-dVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Fast-dVLA`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.25661; PDF: https://arxiv.org/pdf/2603.25661; https://chris1220313648.github.io/Fast-dVLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-175"></a>
## Paper 175. DiG-Flow: Discrepancy-Guided Flow Matching for Robust VLA Models

- 출처/venue: W Zhang, Y Wang, H Luo, H Yuan, Y Feng… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2512.01715
- PDF: https://arxiv.org/pdf/2512.01715
- 로컬 PDF: 20251201_DiG-Flow Discrepancy-Guided Flow Matching for Robust VLA Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DiG-Flow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `DiG-Flow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `DiG-Flow`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.01715; PDF: https://arxiv.org/pdf/2512.01715; https://beingbeyond.github.io/DiG-Flow가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-176"></a>
## Paper 176. Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA

- 출처/venue: P Zhao, A Akbari, X Shen, Z Kong, Y Shen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2512.22208
- PDF: https://arxiv.org/pdf/2512.22208
- 로컬 PDF: 20251222_Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Open-Source Multimodal Moxin Models with Moxin-VLM and Moxin-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.22208; PDF: https://arxiv.org/pdf/2512.22208; https://github.com/moxin-org/Moxin-LLM; https://huggingface.co/moxin-org/Moxin-7B-LLM; https://huggingface.co/moxin-org/Moxin-7B-Instruct; https://huggingface.co/moxin-org/Moxin-7B-Reasoning; https://huggingface.co/moxin-org/Moxin-7B-VLM; https://huggingface.co/moxin-org/Moxin-7B-VLA; https://huggingface.co/moxin-org/Moxin-7B-Chinese가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-177"></a>
## Paper 177. GP3: A 3D Geometry-Aware Policy with Multi-View Images for Robotic Manipulation

- 출처/venue: Q Qian, G Zhao, G Zhang, J Wang, R Xu, J Gao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2509.15733
- PDF: https://arxiv.org/pdf/2509.15733
- 로컬 PDF: 20250919_GP3 A 3D Geometry-Aware Policy with Multi-View Images for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `GP3`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `GP3`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `GP3`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.15733; PDF: https://arxiv.org/pdf/2509.15733가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-178"></a>
## Paper 178. PosA-VLA: Enhancing Action Generation via Pose-Conditioned Anchor Attention

- 출처/venue: Z Li, X Wang, H Zhang, R Chen, R Lin, X He… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2512.03724
- PDF: https://arxiv.org/pdf/2512.03724
- 로컬 PDF: 20251203_PosA-VLA Enhancing Action Generation via Pose-Conditioned Anchor Attention.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PosA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `PosA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `PosA-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.03724; PDF: https://arxiv.org/pdf/2512.03724가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-179"></a>
## Paper 179. [HTML] Multimodal fusion with vision-language-action models for robotic manipulation: A systematic review

- 출처/venue: MU Din, W Akram, LS Saoud, J Rosell, I Hussain - Information Fusion, 2025 - Elsevier
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://www.sciencedirect.com/science/article/pii/S1566253525011248
- PDF: https://www.sciencedirect.com/science/article/pii/S1566253525011248
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `[HTML] Multimodal fusion with vision-language-action models for robotic manipulation: A systematic review`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `[HTML] Multimodal fusion with vision-language-action models for robotic manipulation: A systematic review`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S1566253525011248; PDF: https://www.sciencedirect.com/science/article/pii/S1566253525011248가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-180"></a>
## Paper 180. IA-VLA: Input Augmentation for Vision-Language-Action models in settings with semantically complex tasks

- 출처/venue: E Hannus, M Malin, TN Le, V Kyrki - arXiv preprint arXiv:2509.24768, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2509.24768
- PDF: https://arxiv.org/pdf/2509.24768
- 로컬 PDF: 20250929_IA-VLA Input Augmentation for Vision-Language-Action models in settings with semantically complex tasks.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `IA-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `IA-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `IA-VLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.24768; PDF: https://arxiv.org/pdf/2509.24768가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-181"></a>
## Paper 181. [HTML] PI-VLA: Adaptive Symmetry-Aware Decision-Making for Long-Horizon Vision–Language–Action Manipulation

- 출처/venue: Y Jian, D Tian, XJ Chen, ZY Wei, CW Liang, MJS Wang - Symmetry, 2026 - mdpi.com
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://www.mdpi.com/2073-8994/18/3/394
- PDF: https://www.mdpi.com/2073-8994/18/3/394
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `[HTML] PI-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `[HTML] PI-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `[HTML] PI-VLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.mdpi.com/2073-8994/18/3/394; PDF: https://www.mdpi.com/2073-8994/18/3/394가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-182"></a>
## Paper 182. Say, dream, and act: Learning video world models for instruction-driven robot manipulation

- 출처/venue: S Gu, Y Cai, T Wang, S Wu, Y Fu - arXiv preprint arXiv:2602.10717, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.10717
- PDF: https://arxiv.org/pdf/2602.10717
- 로컬 PDF: 20260211_Say, dream, and act Learning video world models for instruction-driven robot manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Say, dream, and act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Say, dream, and act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Say, dream, and act`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.10717; PDF: https://arxiv.org/pdf/2602.10717가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-183"></a>
## Paper 183. ReMem-VLA: Empowering Vision-Language-Action Model with Memory via Dual-Level Recurrent Queries

- 출처/venue: H Li, F Shen, D Chen, L Yang, X Wang, J Shi… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.12942
- PDF: https://arxiv.org/pdf/2603.12942
- 로컬 PDF: 20260313_ReMem-VLA Empowering Vision-Language-Action Model with Memory via Dual-Level Recurrent Queries.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ReMem-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ReMem-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ReMem-VLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 OpenVLA, ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.12942; PDF: https://arxiv.org/pdf/2603.12942가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-184"></a>
## Paper 184. Mixture of Horizons in Action Chunking

- 출처/venue: D Jing, G Wang, J Liu, W Tang, Z Sun, Y Yao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2511.19433
- PDF: https://arxiv.org/pdf/2511.19433
- 로컬 PDF: 20251124_Mixture of Horizons in Action Chunking.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Mixture of Horizons in Action Chunking`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Mixture of Horizons in Action Chunking`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Mixture of Horizons in Action Chunking`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 average success rate on LIBERO after only 30라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.19433; PDF: https://arxiv.org/pdf/2511.19433가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-185"></a>
## Paper 185. Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models

- 출처/venue: Z Zhang, H Ren, Y Sun, Y Sheng, H Wang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.20607
- PDF: https://arxiv.org/pdf/2603.20607
- 로컬 PDF: 20260321_Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Towards Practical World Model-based Reinforcement Learning for Vision-Language-Action Models`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.20607; PDF: https://arxiv.org/pdf/2603.20607가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-186"></a>
## Paper 186. Chain of World: World Model Thinking in Latent Motion

- 출처/venue: F Yang, D Di, L Tang, X Zhang, L Fan, H Li… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.03195
- PDF: https://arxiv.org/pdf/2603.03195
- 로컬 PDF: 20260303_Chain of World World Model Thinking in Latent Motion.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Chain of World`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Chain of World`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Chain of World`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.03195; PDF: https://arxiv.org/pdf/2603.03195; https://fx-hit.github.io/cowvla-io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-187"></a>
## Paper 187. HazardArena: Evaluating Semantic Safety in Vision-Language-Action Models

- 출처/venue: Z Chen, Y Gao, L Wang, Y Zhao, Y Liu, J Li… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2604.12447
- PDF: https://arxiv.org/pdf/2604.12447
- 로컬 PDF: 20260414_HazardArena Evaluating Semantic Safety in Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HazardArena`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `HazardArena`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `HazardArena`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.12447; PDF: https://arxiv.org/pdf/2604.12447가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-188"></a>
## Paper 188. Bridging language and action: A survey of language-conditioned robot manipulation

- 출처/venue: X Yao, H Zhou, O Mees, Y Meng, T Xiao, Y Bisk… - arXiv preprint arXiv …, 2023 - arxiv.org
- 연도: 2023
- 인용수(Google Scholar 수집 당시): 12
- URL: https://arxiv.org/abs/2312.10807
- PDF: https://arxiv.org/pdf/2312.10807
- 로컬 PDF: 20231217_Bridging language and action A survey of language-conditioned robot manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Bridging language and action`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Bridging language and action`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2312.10807; PDF: https://arxiv.org/pdf/2312.10807가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-189"></a>
## Paper 189. RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies

- 출처/venue: A Yakefu, B Xie, C Xu, E Zhang, E Zhou, F Jia… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 9
- URL: https://arxiv.org/abs/2510.17950
- PDF: https://arxiv.org/pdf/2510.17950
- 로컬 PDF: 20251020_RoboChallenge Large-scale Real-robot Evaluation of Embodied Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboChallenge`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `RoboChallenge`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.17950; PDF: https://arxiv.org/pdf/2510.17950가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-190"></a>
## Paper 190. FlowCorrect: Efficient Interactive Correction of Generative Flow Policies for Robotic Manipulation

- 출처/venue: E Welte, Y Shi, R Wolf, M Gilles, R Rayyes - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.22056
- PDF: https://arxiv.org/pdf/2602.22056
- 로컬 PDF: 20260225_FlowCorrect Efficient Interactive Correction of Generative Flow Policies for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FlowCorrect`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `FlowCorrect`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `FlowCorrect`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.22056; PDF: https://arxiv.org/pdf/2602.22056가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-191"></a>
## Paper 191. MapleGrasp: Mask-guided Feature Pooling for Language-driven Efficient Robotic Grasping

- 출처/venue: V Bhat, N Patel, P Krishnamurthy… - Proceedings of the …, 2026 - openaccess.thecvf.com
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openaccess.thecvf.com/content/WACV2026/html/Bhat_MapleGrasp_Mask-guided_Feature_Pooling_for_Language-driven_Efficient_Robotic_Grasping_WACV_2026_paper.html
- PDF: https://openaccess.thecvf.com/content/WACV2026/papers/Bhat_MapleGrasp_Mask-guided_Feature_Pooling_for_Language-driven_Efficient_Robotic_Grasping_WACV_2026_paper.pdf
- 로컬 PDF: 2026_MapleGrasp Mask-guided Feature Pooling for Language-driven Efficient Robotic Grasping.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MapleGrasp`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `MapleGrasp`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `MapleGrasp`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, Franka에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 MapleGrasp scores a strong grasping accuracy of 89%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, CLIP 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openaccess.thecvf.com/content/WACV2026/html/Bhat_MapleGrasp_Mask-guided_Feature_Pooling_for_Language-driven_Efficient_Robotic_Grasping_WACV_2026_paper.html; PDF: https://openaccess.thecvf.com/content/WACV2026/papers/Bhat_MapleGrasp_Mask-guided_Feature_Pooling_for_Language-driven_Efficient_Robotic_Grasping_WACV_2026_paper.pdf; https://github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-192"></a>
## Paper 192. AnoleVLA: Lightweight Vision-Language-Action Model with Deep State Space Models for Mobile Manipulation

- 출처/venue: Y Takagi, M Kambara, D Yashima, K Seno… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.15046
- PDF: https://arxiv.org/pdf/2603.15046
- 로컬 PDF: 20260316_AnoleVLA Lightweight Vision-Language-Action Model with Deep State Space Models for Mobile Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AnoleVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `AnoleVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `AnoleVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.15046; PDF: https://arxiv.org/pdf/2603.15046가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-193"></a>
## Paper 193. FASTER: Rethinking Real-Time Flow VLAs

- 출처/venue: Y Lu, Z Liu, X Fan, Z Yang, J Hou, J Li, K Ding… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.19199
- PDF: https://arxiv.org/pdf/2603.19199
- 로컬 PDF: 20260319_FASTER Rethinking Real-Time Flow VLAs.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FASTER`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `FASTER`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `FASTER`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.19199; PDF: https://arxiv.org/pdf/2603.19199; https://innovator-zero.github.io/FASTER가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-194"></a>
## Paper 194. Growing with your embodied agent: A human-in-the-loop lifelong code generation framework for long-horizon manipulation skills

- 출처/venue: Y Meng, Z Sun, M Fest, X Li, Z Bing, A Knoll - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2509.18597
- PDF: https://arxiv.org/pdf/2509.18597
- 로컬 PDF: 20250923_Growing with your embodied agent A human-in-the-loop lifelong code generation framework for long-horizon manipulation skills.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Growing with your embodied agent`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Growing with your embodied agent`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.18597; PDF: https://arxiv.org/pdf/2509.18597가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-195"></a>
## Paper 195. A survey of robotic manipulation: From bottom-up approaches to end-to-end paradigms with LLMs

- 출처/venue: K Peng, Q Li, Z He, B Zhang, X Fu, B Li, X Wang… - Neurocomputing, 2026 - Elsevier
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://www.sciencedirect.com/science/article/pii/S0925231226003188
- PDF: https://scholar.google.com/scholar?output=instlink&q=info:MdG58dM7d-sJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=8670270778540598427&oi=lle
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `A survey of robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A survey of robotic manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S0925231226003188; PDF: https://scholar.google.com/scholar?output=instlink&q=info:MdG58dM7d-sJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=8670270778540598427&oi=lle가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-196"></a>
## Paper 196. Neural Implicit Action Fields: From Discrete Waypoints to Continuous Functions for Vision-Language-Action Models

- 출처/venue: H Liu, J Zhao, X Chang, T Shi, C Meng, J Tan… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.01766
- PDF: https://arxiv.org/pdf/2603.01766
- 로컬 PDF: 20260302_Neural Implicit Action Fields From Discrete Waypoints to Continuous Functions for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Neural Implicit Action Fields`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Neural Implicit Action Fields`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Neural Implicit Action Fields`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.01766; PDF: https://arxiv.org/pdf/2603.01766가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-197"></a>
## Paper 197. Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration

- 출처/venue: N Zhang, B Zhu, S Zhou, J Chen - arXiv preprint arXiv:2603.06001, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.06001
- PDF: https://arxiv.org/pdf/2603.06001
- 로컬 PDF: 20260306_Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA, Franka에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.06001; PDF: https://arxiv.org/pdf/2603.06001가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-198"></a>
## Paper 198. ABPolicy: Asynchronous B-Spline Flow Policy for Real-Time and Smooth Robotic Manipulation

- 출처/venue: F Yang, P Jing, K Qu, N Zhao, Y Su - arXiv preprint arXiv:2602.23901, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.23901
- PDF: https://arxiv.org/pdf/2602.23901
- 로컬 PDF: 20260227_ABPolicy Asynchronous B-Spline Flow Policy for Real-Time and Smooth Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ABPolicy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ABPolicy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ABPolicy`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.23901; PDF: https://arxiv.org/pdf/2602.23901가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-199"></a>
## Paper 199. Object-centric mobile manipulation through sam2-guided perception and imitation learning

- 출처/venue: W Zhicheng, S Yagi, S Yamamori… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2507.10899
- PDF: https://arxiv.org/pdf/2507.10899
- 로컬 PDF: 20250715_Object-centric mobile manipulation through sam2-guided perception and imitation learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Object-centric mobile manipulation through sam2-guided perception and imitation learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Object-centric mobile manipulation through sam2-guided perception and imitation learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Object-centric mobile manipulation through sam2-guided perception and imitation learning`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2507.10899; PDF: https://arxiv.org/pdf/2507.10899가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-200"></a>
## Paper 200. Omnisat: Compact action token, faster auto regression

- 출처/venue: H Lyu, C Chen, S Xie, P Wang, X Chen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2510.09667
- PDF: https://arxiv.org/pdf/2510.09667
- 로컬 PDF: 20251008_Omnisat Compact action token, faster auto regression.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Omnisat`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Omnisat`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Omnisat`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 DROID에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.09667; PDF: https://arxiv.org/pdf/2510.09667가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-201"></a>
## Paper 201. Habilis-: A Fast-Motion and Long-Lasting On-Device Vision-Language-Action Model

- 출처/venue: T Robotics, J Kang, T Park, J An, SM Kimm… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.18813
- PDF: https://arxiv.org/pdf/2602.18813
- 로컬 PDF: 20260221_Habilis- A Fast-Motion and Long-Lasting On-Device Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Habilis-`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Habilis-`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Habilis-`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.18813; PDF: https://arxiv.org/pdf/2602.18813가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-202"></a>
## Paper 202. Stable Language Guidance for Vision-Language-Action Models

- 출처/venue: Z Zhan, Y Chen, J Zhou, Q Lv, H Liu, K Wang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2601.04052
- PDF: https://arxiv.org/pdf/2601.04052
- 로컬 PDF: 20260107_Stable Language Guidance for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Stable Language Guidance for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Stable Language Guidance for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Stable Language Guidance for Vision-Language-Action Models`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.04052; PDF: https://arxiv.org/pdf/2601.04052; https://github.com/Doo-mon/RSS가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-203"></a>
## Paper 203. Exploring the Robustness of Vision-Language-Action Models against Sensor Attacks

- 출처/venue: X Lu, J Chen, S Xiao, Z Jin, R Zhou, X Ji… - Proceedings of the 2025 …, 2025 - dl.acm.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://dl.acm.org/doi/abs/10.1145/3733800.3763262
- PDF: https://dl.acm.org/doi/pdf/10.1145/3733800.3763262
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Exploring the Robustness of Vision-Language-Action Models against Sensor Attacks`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Exploring the Robustness of Vision-Language-Action Models against Sensor Attacks`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Exploring the Robustness of Vision-Language-Action Models against Sensor Attacks`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://dl.acm.org/doi/abs/10.1145/3733800.3763262; PDF: https://dl.acm.org/doi/pdf/10.1145/3733800.3763262가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-204"></a>
## Paper 204. NanoVLA: Routing Decoupled Vision-Language Understanding for Nano-sized Generalist Robotic Policies

- 출처/venue: J Chen, J Wang, L Chen, C Cai, J Lu - arXiv preprint arXiv:2510.25122, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2510.25122
- PDF: https://arxiv.org/pdf/2510.25122
- 로컬 PDF: 20251029_NanoVLA Routing Decoupled Vision-Language Understanding for Nano-sized Generalist Robotic Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `NanoVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `NanoVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `NanoVLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 98% less parameters while maintaining or surpassing their task accuracy and generalization라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.25122; PDF: https://arxiv.org/pdf/2510.25122가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-205"></a>
## Paper 205. Human centric general physical intelligence for agile manufacturing automation

- 출처/venue: S Kanta, M Tavassoli, VT Chirkuri, VA Kumar… - Advanced Engineering …, 2026 - Elsevier
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.sciencedirect.com/science/article/pii/S1474034626002077
- PDF: https://arxiv.org/pdf/2508.11960
- 로컬 PDF: 20250816_Human centric general physical intelligence for agile manufacturing automation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Human centric general physical intelligence for agile manufacturing automation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Human centric general physical intelligence for agile manufacturing automation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S1474034626002077; PDF: https://arxiv.org/pdf/2508.11960가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-206"></a>
## Paper 206. Mimic Intent, Not Just Trajectories

- 출처/venue: R Huang, C Zeng, W Tang, J Cai, C Lu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.08602
- PDF: https://arxiv.org/pdf/2602.08602
- 로컬 PDF: 20260209_Mimic Intent, Not Just Trajectories.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Mimic Intent, Not Just Trajectories`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Mimic Intent, Not Just Trajectories`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Mimic Intent, Not Just Trajectories`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.08602; PDF: https://arxiv.org/pdf/2602.08602; https://renming-huang.github.io/MINT가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-207"></a>
## Paper 207. Open-Loop Planning, Closed-Loop Verification: Speculative Verification for VLA

- 출처/venue: Z Wang, Z Lin, R Li, Y Zhang, X Yang, S Mi… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2604.02965
- PDF: https://arxiv.org/pdf/2604.02965
- 로컬 PDF: 20260403_Open-Loop Planning, Closed-Loop Verification Speculative Verification for VLA.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Open-Loop Planning, Closed-Loop Verification`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Open-Loop Planning, Closed-Loop Verification`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Open-Loop Planning, Closed-Loop Verification`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.02965; PDF: https://arxiv.org/pdf/2604.02965가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-208"></a>
## Paper 208. RT-Cache: Training-Free Retrieval for Real-Time Manipulation

- 출처/venue: O Kwon, A George, A Bartsch… - 2025 IEEE-RAS 24th …, 2025 - ieeexplore.ieee.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://ieeexplore.ieee.org/abstract/document/11203198/
- PDF: https://ieeexplore.ieee.org/iel8/11202977/11203009/11203198.pdf
- 로컬 PDF: 2025_RT-Cache Training-Free Retrieval for Real-Time Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RT-Cache`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RT-Cache`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RT-Cache`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11203198/; PDF: https://ieeexplore.ieee.org/iel8/11202977/11203009/11203198.pdf; https://rt-cache.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-209"></a>
## Paper 209. SVA: Towards Speech-Enabled Vision-Language-Action Model

- 출처/venue: L Li, J Fan, X Ni, S Qin, W Li, F Gao - Pattern Recognition, 2025 - Elsevier
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://www.sciencedirect.com/science/article/pii/S003132032501578X
- PDF: https://scholar.google.com/scholar?output=instlink&q=info:N1KJgNPiA_UJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=14990437867481589004&oi=lle
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `SVA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SVA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SVA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S003132032501578X; PDF: https://scholar.google.com/scholar?output=instlink&q=info:N1KJgNPiA_UJ:scholar.google.com/&hl=ko&as_sdt=2005&sciodt=0,5&scillfp=14990437867481589004&oi=lle가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-210"></a>
## Paper 210. BeSafe-Bench: Unveiling Behavioral Safety Risks of Situated Agents in Functional Environments

- 출처/venue: Y Li, Y Lin, P Wang, S Liu, X Wei - arXiv preprint arXiv:2603.25747, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.25747
- PDF: https://arxiv.org/pdf/2603.25747
- 로컬 PDF: 20260130_BeSafe-Bench Unveiling Behavioral Safety Risks of Situated Agents in Functional Environments.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `BeSafe-Bench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `BeSafe-Bench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `BeSafe-Bench`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 40% of tasks while fully adhering to safety con- straints, and strong task performance frequently coincides with severe saf라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.25747; PDF: https://arxiv.org/pdf/2603.25747가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-211"></a>
## Paper 211. SaiVLA-0: Cerebrum--Pons--Cerebellum Tripartite Architecture for Compute-Aware Vision-Language-Action

- 출처/venue: X Shi, W Huang, M Zou, X Sun - arXiv preprint arXiv:2603.08124, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.08124
- PDF: https://arxiv.org/pdf/2603.08124
- 로컬 PDF: 20260309_SaiVLA-0 Cerebrum--Pons--Cerebellum Tripartite Architecture for Compute-Aware Vision-Language-Action.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SaiVLA-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SaiVLA-0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SaiVLA-0`를 중심으로 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 86.5%→92라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.08124; PDF: https://arxiv.org/pdf/2603.08124가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-212"></a>
## Paper 212. MergeVLA: Cross-Skill Model Merging Toward a Generalist Vision-Language-Action Agent

- 출처/venue: Y Fu, Z Zhang, Y Zhang, Z Wang, Z Huang… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 9
- URL: https://arxiv.org/abs/2511.18810
- PDF: https://arxiv.org/pdf/2511.18810
- 로컬 PDF: 20251124_MergeVLA Cross-Skill Model Merging Toward a Generalist Vision-Language-Action Agent.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MergeVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `MergeVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `MergeVLA`를 중심으로 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.18810; PDF: https://arxiv.org/pdf/2511.18810; https://mergevla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-213"></a>
## Paper 213. Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling

- 출처/venue: H Li, S Yang, Y Chen, X Chen, X Yang, Y Tian… - Proceedings of the …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/38903
- PDF: https://ojs.aaai.org/index.php/AAAI/article/download/38903/42865
- 로컬 PDF: 2026_Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 70.9% success rate on SimplerEnv, a 26라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/38903; PDF: https://ojs.aaai.org/index.php/AAAI/article/download/38903/42865가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-214"></a>
## Paper 214. Generative Control as Optimization: Time Unconditional Flow Matching for Adaptive and Robust Robotic Control

- 출처/venue: Z Zhang, R Huang, Y Liu, S Zhu, L Mou… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.17834
- PDF: https://arxiv.org/pdf/2603.17834
- 로컬 PDF: 20260318_Generative Control as Optimization Time Unconditional Flow Matching for Adaptive and Robust Robotic Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Generative Control as Optimization`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Generative Control as Optimization`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Generative Control as Optimization`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.17834; PDF: https://arxiv.org/pdf/2603.17834; https://hrh6666.github.io/GeCO/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-215"></a>
## Paper 215. Any3D-VLA: Enhancing VLA Robustness via Diverse Point Clouds

- 출처/venue: X Fan, S Deng, X Wu, Y Lu, Z Li, M Yan… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.00807
- PDF: https://arxiv.org/pdf/2602.00807
- 로컬 PDF: 20260131_Any3D-VLA Enhancing VLA Robustness via Diverse Point Clouds.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Any3D-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Any3D-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Any3D-VLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.00807; PDF: https://arxiv.org/pdf/2602.00807; https://xianzhefan.github.io/Any3D-가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-216"></a>
## Paper 216. VLANeXt: Recipes for Building Strong VLA Models

- 출처/venue: XM Wu, B Fan, K Liao, JJ Jiang, R Yang, Y Luo… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.18532
- PDF: https://arxiv.org/pdf/2602.18532
- 로컬 PDF: 20260220_VLANeXt Recipes for Building Strong VLA Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLANeXt`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLANeXt`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLANeXt`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.18532; PDF: https://arxiv.org/pdf/2602.18532; https://dravenalg.github.io/VLANeXt/; https://github.com/DravenALG/awesome-vla가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-217"></a>
## Paper 217. Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning

- 출처/venue: A Wagenmaker, P Dong, R Tsao, C Finn… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2512.16911
- PDF: https://arxiv.org/pdf/2512.16911
- 로컬 PDF: 20251218_Posterior Behavioral Cloning Pretraining BC Policies for Efficient RL Finetuning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Posterior Behavioral Cloning`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Posterior Behavioral Cloning`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Posterior Behavioral Cloning`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.16911; PDF: https://arxiv.org/pdf/2512.16911가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-218"></a>
## Paper 218. MolmoAct2: Action Reasoning Models for Real-world Deployment

- 출처/venue: H Fang, J Duan, D Clay, S Wang, S Liu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.02881
- PDF: https://arxiv.org/pdf/2605.02881
- 로컬 PDF: 20260504_MolmoAct2 Action Reasoning Models for Real-world Deployment.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MolmoAct2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `MolmoAct2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `MolmoAct2`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.02881; PDF: https://arxiv.org/pdf/2605.02881가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-219"></a>
## Paper 219. StarVLA-: Reducing Complexity in Vision-Language-Action Systems

- 출처/venue: J Ye, N Gao, S Yang, J Zheng, Z Wang, Y Chen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.11757
- PDF: https://arxiv.org/pdf/2604.11757
- 로컬 PDF: 20260413_StarVLA- Reducing Complexity in Vision-Language-Action Systems.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `StarVLA-`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `StarVLA-`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `StarVLA-`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 20% on the public real- world RoboChallenge benchmark라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.11757; PDF: https://arxiv.org/pdf/2604.11757; https://github.com/starVLA/starVLA; https://starvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-220"></a>
## Paper 220. CronusVLA: Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling

- 출처/venue: H Li, S Yang, Y Chen, X Chen, X Yang, Y Tian… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2506.19816
- PDF: https://arxiv.org/pdf/2506.19816
- 로컬 PDF: 20250624_CronusVLA Towards Efficient and Robust Manipulation via Multi-Frame Vision-Language-Action Modeling.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CronusVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `CronusVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `CronusVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 70.9% success rate on SimplerEnv, a 26라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2506.19816; PDF: https://arxiv.org/pdf/2506.19816가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-221"></a>
## Paper 221. Audio-VLA: Adding Contact Audio Perception to Vision-Language-Action Model for Robotic Manipulation

- 출처/venue: X Wei, H Zhang, X Cao, S Xie, W Ge, Y Li… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2511.09958
- PDF: https://arxiv.org/pdf/2511.09958
- 로컬 PDF: 20251113_Audio-VLA Adding Contact Audio Perception to Vision-Language-Action Model for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Audio-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Audio-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Audio-VLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.09958; PDF: https://arxiv.org/pdf/2511.09958가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-222"></a>
## Paper 222. Inject Once Survive Later: Backdooring Vision-Language-Action Models to Persist Through Downstream Fine-tuning

- 출처/venue: J Zhou, Y Wei, R Zhen, B Zhao, X Xia, R Shao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2602.00500
- PDF: https://arxiv.org/pdf/2602.00500
- 로컬 PDF: 20260131_Inject Once Survive Later Backdooring Vision-Language-Action Models to Persist Through Downstream Fine-tuning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Inject Once Survive Later`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Inject Once Survive Later`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Inject Once Survive Later`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.00500; PDF: https://arxiv.org/pdf/2602.00500; https://jianyi2004.github.io/infuse-vla-backdoor/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-223"></a>
## Paper 223. Look Before Acting: Enhancing Vision Foundation Representations for Vision-Language-Action Models

- 출처/venue: Y Luo, H Chen, Z Wu, B Sui, J Liu, C Gu, Z Liu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.15618
- PDF: https://arxiv.org/pdf/2603.15618
- 로컬 PDF: 20260316_Look Before Acting Enhancing Vision Foundation Representations for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Look Before Acting`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Look Before Acting`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Look Before Acting`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 9.0% and 7라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.15618; PDF: https://arxiv.org/pdf/2603.15618; https://deepvision-vla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-224"></a>
## Paper 224. TCoT: Trajectory Chain-of-Thoughts for Robotic Manipulation with Failure Recovery in Vision-Language-Action Model

- 출처/venue: X Li, YL Li, Y Wang, H Wang, S Wang - Proceedings of the AAAI …, 2026 - ojs.aaai.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ojs.aaai.org/index.php/AAAI/article/view/37577
- PDF: https://ojs.aaai.org/index.php/AAAI/article/download/37577/41539
- 로컬 PDF: 2026_TCoT Trajectory Chain-of-Thoughts for Robotic Manipulation with Failure Recovery in Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TCoT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `TCoT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `TCoT`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ojs.aaai.org/index.php/AAAI/article/view/37577; PDF: https://ojs.aaai.org/index.php/AAAI/article/download/37577/41539가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-225"></a>
## Paper 225. World-Gymnast: Training Robots with Reinforcement Learning in a World Model

- 출처/venue: AK Sharma, Y Sun, N Lu, Y Zhang, J Liu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 6
- URL: https://arxiv.org/abs/2602.02454
- PDF: https://arxiv.org/pdf/2602.02454
- 로컬 PDF: 20260202_World-Gymnast Training Robots with Reinforcement Learning in a World Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World-Gymnast`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `World-Gymnast`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `World-Gymnast`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 18x and outperforms software simulator by as much as 2x라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.02454; PDF: https://arxiv.org/pdf/2602.02454가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-226"></a>
## Paper 226. Beyond Imitation: Reinforcement Learning-Based Sim-Real Co-Training for VLA Models

- 출처/venue: L Shi, S Chen, F Gao, Y Chen, K Chen, T Zhang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.12628
- PDF: https://arxiv.org/pdf/2602.12628
- 로컬 PDF: 20260213_Beyond Imitation Reinforcement Learning-Based Sim-Real Co-Training for VLA Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Beyond Imitation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Beyond Imitation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Beyond Imitation`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.12628; PDF: https://arxiv.org/pdf/2602.12628가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-227"></a>
## Paper 227. BFA++: Hierarchical Best-Feature-Aware Token Prune for Multi-View Vision Language Action Model

- 출처/venue: H Li, W Mao, Z Lan, H Xiong, H Wang… - IEEE Robotics and …, 2026 - ieeexplore.ieee.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ieeexplore.ieee.org/abstract/document/11433770/
- PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11433770.pdf
- 로컬 PDF: 2026_BFA++ Hierarchical Best-Feature-Aware Token Prune for Multi-View Vision Language Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `BFA++`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `BFA++`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `BFA++`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11433770/; PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11433770.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-228"></a>
## Paper 228. MM-ACT: Learn from Multimodal Parallel Generation to Act

- 출처/venue: H Liang, X Chen, B Wang, M Chen, Y Liu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2512.00975
- PDF: https://arxiv.org/pdf/2512.00975
- 로컬 PDF: 20251130_MM-ACT Learn from Multimodal Parallel Generation to Act.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MM-ACT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `MM-ACT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `MM-ACT`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin, Franka 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 Our approach achieves a success rate of 96.3%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.00975; PDF: https://arxiv.org/pdf/2512.00975; https://github.com/HHYHRHY/MM-ACT가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-229"></a>
## Paper 229. Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs

- 출처/venue: A Taherin, J Lin, A Akbari, A Akbari, P Zhao… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2509.11480
- PDF: https://arxiv.org/pdf/2509.11480
- 로컬 PDF: 20250915_Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.11480; PDF: https://arxiv.org/pdf/2509.11480가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-230"></a>
## Paper 230. UniT: Toward a Unified Physical Language for Human-to-Humanoid Policy Learning and World Modeling

- 출처/venue: B Chen, Y Chen, L Qiu, J Bai, Y Ge, Y Ge - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.19734
- PDF: https://arxiv.org/pdf/2604.19734
- 로컬 PDF: 20260421_UniT Toward a Unified Physical Language for Human-to-Humanoid Policy Learning and World Modeling.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `UniT`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `UniT`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `UniT`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.19734; PDF: https://arxiv.org/pdf/2604.19734; https://xpeng-robotics.github.io/unit/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-231"></a>
## Paper 231. TacMamba: A Tactile History Compression Adapter Bridging Fast Reflexes and Slow VLA Reasoning

- 출처/venue: Z Wang, Y Wang, M Ren, P Li, Y Liu, Y Nie… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.01700
- PDF: https://arxiv.org/pdf/2603.01700
- 로컬 PDF: 20260302_TacMamba A Tactile History Compression Adapter Bridging Fast Reflexes and Slow VLA Reasoning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TacMamba`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `TacMamba`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `TacMamba`를 중심으로 기존 VLA에 작은 어댑터를 붙여 학습 비용을 줄이는 모델 적응 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.01700; PDF: https://arxiv.org/pdf/2603.01700가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-232"></a>
## Paper 232. TempoFit: Plug-and-Play Layer-Wise Temporal KV Memory for Long-Horizon Vision-Language-Action Manipulation

- 출처/venue: J Sun, B Yang, J Zhang, N Ma, C Wu, S Zhang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2603.07647
- PDF: https://arxiv.org/pdf/2603.07647
- 로컬 PDF: 20260308_TempoFit Plug-and-Play Layer-Wise Temporal KV Memory for Long-Horizon Vision-Language-Action Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `TempoFit`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `TempoFit`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `TempoFit`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.07647; PDF: https://arxiv.org/pdf/2603.07647; https://github.com/LucioSunj/TempoFit가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-233"></a>
## Paper 233. Breaking Cross-modal Alignment in Embodied Intelligence: A Multimodal Adversarial Attack Framework for Vision-Language-Action Models

- 출처/venue: Z Zhao, X Dong, Y Zheng, X Chen, Y Ren… - Proceedings of the …, 2026 - dl.acm.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://dl.acm.org/doi/abs/10.1145/3774904.3792315
- PDF: https://dl.acm.org/doi/pdf/10.1145/3774904.3792315
- 로컬 PDF: 20260413_Breaking Cross-modal Alignment in Embodied Intelligence A Multimodal Adversarial Attack Framework for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Breaking Cross-modal Alignment in Embodied Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Breaking Cross-modal Alignment in Embodied Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Breaking Cross-modal Alignment in Embodied Intelligence`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 the task success rate of VLAs drops by about 70%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://dl.acm.org/doi/abs/10.1145/3774904.3792315; PDF: https://dl.acm.org/doi/pdf/10.1145/3774904.3792315; https://github.c가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-234"></a>
## Paper 234. Reshaping Action Error Distributions for Reliable Vision-Language-Action Models

- 출처/venue: S Bai, D Wang, C Chi, W Zhou, J Lyu, X Zhao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.04228
- PDF: https://arxiv.org/pdf/2602.04228
- 로컬 PDF: 20260204_Reshaping Action Error Distributions for Reliable Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Reshaping Action Error Distributions for Reliable Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Reshaping Action Error Distributions for Reliable Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Reshaping Action Error Distributions for Reliable Vision-Language-Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.04228; PDF: https://arxiv.org/pdf/2602.04228가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-235"></a>
## Paper 235. Tactile Modality Fusion for Vision-Language-Action Models

- 출처/venue: C Morissette, A Abyaneh, WD Chang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.14604
- PDF: https://arxiv.org/pdf/2603.14604
- 로컬 PDF: 20260315_Tactile Modality Fusion for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Tactile Modality Fusion for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Tactile Modality Fusion for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Tactile Modality Fusion for Vision-Language-Action Models`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.14604; PDF: https://arxiv.org/pdf/2603.14604가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-236"></a>
## Paper 236. FASTer: Toward Efficient Autoregressive Vision Language Action Modeling via Neural Action Tokenization

- 출처/venue: Y Liu, S Zhang, Z Dong, B Ye, T Yuan, X Yu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2512.04952
- PDF: https://arxiv.org/pdf/2512.04952
- 로컬 PDF: 20251204_FASTer Toward Efficient Autoregressive Vision Language Action Modeling via Neural Action Tokenization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FASTer`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `FASTer`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `FASTer`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.04952; PDF: https://arxiv.org/pdf/2512.04952가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-237"></a>
## Paper 237. [HTML] A systematic review of vision language models: Comprehensive analysis of architectures, applications, datasets and challenges towards robust multimodal …

- 출처/venue: A Rahman - Array, 2026 - Elsevier
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.sciencedirect.com/science/article/pii/S2590005626000627
- PDF: https://www.sciencedirect.com/science/article/pii/S2590005626000627
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `[HTML] A systematic review of vision language models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `[HTML] A systematic review of vision language models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S2590005626000627; PDF: https://www.sciencedirect.com/science/article/pii/S2590005626000627가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-238"></a>
## Paper 238. LaMP: Learning Vision-Language-Action Policies with 3D Scene Flow as Latent Motion Prior

- 출처/venue: X Wang, C Wang, Y Xu, M Ye, FC Zhang, J Tian… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.25399
- PDF: https://arxiv.org/pdf/2603.25399
- 로컬 PDF: 20260326_LaMP Learning Vision-Language-Action Policies with 3D Scene Flow as Latent Motion Prior.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LaMP`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `LaMP`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `LaMP`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.25399; PDF: https://arxiv.org/pdf/2603.25399; https://summerwxk.github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-239"></a>
## Paper 239. SilentDrift: Exploiting Action Chunking for Stealthy Backdoor Attacks on Vision-Language-Action Models

- 출처/venue: B Xu, Y Shang, B Wang, E Ferrara - arXiv preprint arXiv:2601.14323, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2601.14323
- PDF: https://arxiv.org/pdf/2601.14323
- 로컬 PDF: 20260120_SilentDrift Exploiting Action Chunking for Stealthy Backdoor Attacks on Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SilentDrift`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SilentDrift`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SilentDrift`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 93.2% Attack Suc- cess Rate with a poisoning rate under 2%, while maintaining a 95라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.14323; PDF: https://arxiv.org/pdf/2601.14323가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-240"></a>
## Paper 240. PRM-as-a-Judge: A Dense Evaluation Paradigm for Fine-Grained Robotic Auditing

- 출처/venue: Y Ji, Y Liu, H Tan, X Huang, F Huang, Y Xu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.21669
- PDF: https://arxiv.org/pdf/2603.21669
- 로컬 PDF: 20260323_PRM-as-a-Judge A Dense Evaluation Paradigm for Fine-Grained Robotic Auditing.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PRM-as-a-Judge`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PRM-as-a-Judge`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PRM-as-a-Judge`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.21669; PDF: https://arxiv.org/pdf/2603.21669; https://PRM-as-a-Judge.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-241"></a>
## Paper 241. Reinforcing VLAs in Task-Agnostic World Models

- 출처/venue: Y Wang, R Yu, F Zhang, J Lu, X Qin, T Zhang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.12334
- PDF: https://arxiv.org/pdf/2605.12334
- 로컬 PDF: 20260512_Reinforcing VLAs in Task-Agnostic World Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Reinforcing VLAs in Task-Agnostic World Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Reinforcing VLAs in Task-Agnostic World Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Reinforcing VLAs in Task-Agnostic World Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.12334; PDF: https://arxiv.org/pdf/2605.12334가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-242"></a>
## Paper 242. PokeVLA: Empowering Pocket-Sized Vision-Language-Action Model with Comprehensive World Knowledge Guidance

- 출처/venue: Y Zheng, X Li, S Gu, Y Zheng, S Tian, W Li… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.20834
- PDF: https://arxiv.org/pdf/2604.20834
- 로컬 PDF: 20260422_PokeVLA Empowering Pocket-Sized Vision-Language-Action Model with Comprehensive World Knowledge Guidance.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PokeVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PokeVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PokeVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.20834; PDF: https://arxiv.org/pdf/2604.20834; https://getterupper.github.io/PokeVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-243"></a>
## Paper 243. ProgressVLA: Progress-Guided Diffusion Policy for Vision-Language Robotic Manipulation

- 출처/venue: H Yan, Q Li, J Yang, Y Mu - arXiv preprint arXiv:2603.27670, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.27670
- PDF: https://arxiv.org/pdf/2603.27670
- 로컬 PDF: 20260329_ProgressVLA Progress-Guided Diffusion Policy for Vision-Language Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ProgressVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `ProgressVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `ProgressVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 Diffusion Policy, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.27670; PDF: https://arxiv.org/pdf/2603.27670가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-244"></a>
## Paper 244. When Robots Obey the Patch: Universal Transferable Patch Attacks on Vision-Language-Action Models

- 출처/venue: H Lu, Y Yu, Y Yang, C Yi, Q Zhang, B Shen… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2511.21192
- PDF: https://arxiv.org/pdf/2511.21192
- 로컬 PDF: 20251126_When Robots Obey the Patch Universal Transferable Patch Attacks on Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `When Robots Obey the Patch`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `When Robots Obey the Patch`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `When Robots Obey the Patch`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.21192; PDF: https://arxiv.org/pdf/2511.21192; https://github.com/yuyi-sd/UPA-RFAS가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-245"></a>
## Paper 245. CapVector: Learning Transferable Capability Vectors in Parametric Space for Vision-Language-Action Models

- 출처/venue: W Song, H Zhao, F Li, Z Zhou, X Wang, J Lyu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10903
- PDF: https://arxiv.org/pdf/2605.10903
- 로컬 PDF: 20260511_CapVector Learning Transferable Capability Vectors in Parametric Space for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CapVector`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CapVector`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CapVector`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10903; PDF: https://arxiv.org/pdf/2605.10903; https://github.com/OpenHelix-Team/CapVector; https://capvector.github.io; https://huggingface.co/haofuly/capvector_models_collection가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-246"></a>
## Paper 246. Action-Sketcher: From Reasoning to Action via Visual Sketches for Long-Horizon Robotic Manipulation

- 출처/venue: H Tan, P Co, Y Xu, S Rong, Y Ji, C Chi, X Chen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2601.01618
- PDF: https://arxiv.org/pdf/2601.01618
- 로컬 PDF: 20260104_Action-Sketcher From Reasoning to Action via Visual Sketches for Long-Horizon Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Action-Sketcher`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Action-Sketcher`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Action-Sketcher`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OXE 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.01618; PDF: https://arxiv.org/pdf/2601.01618; https://action-sketcher.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-247"></a>
## Paper 247. Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching

- 출처/venue: Y Wei, J Fan, J Guo, R Zhen, R Shao, X Su… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.00686
- PDF: https://arxiv.org/pdf/2602.00686
- 로컬 PDF: 20260131_Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Learning to Accelerate Vision-Language-Action Models through Adaptive Visual Token Caching`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 up while simultaneously improving the average success rate by 1.9라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.00686; PDF: https://arxiv.org/pdf/2602.00686가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-248"></a>
## Paper 248. VEGA: Visual Encoder Grounding Alignment for Spatially-Aware Vision-Language-Action Models

- 출처/venue: H Wang, X Wei, J He, C Bai, CK Fan, J Cao… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10485
- PDF: https://arxiv.org/pdf/2605.10485
- 로컬 PDF: 20260511_VEGA Visual Encoder Grounding Alignment for Spatially-Aware Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VEGA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VEGA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VEGA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10485; PDF: https://arxiv.org/pdf/2605.10485가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-249"></a>
## Paper 249. Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior

- 출처/venue: H Niu, K Zhang, S Yin, Q Guo, P Liu, F Wen - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.01570
- PDF: https://arxiv.org/pdf/2604.01570
- 로컬 PDF: 20260402_Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Boosting Vision-Language-Action Finetuning with Feasible Action Neighborhood Prior`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.01570; PDF: https://arxiv.org/pdf/2604.01570; https://huggingface.co/gen-; https://huggingface.co/openvla/openvla-7b가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-250"></a>
## Paper 250. HiVLA: A Visual-Grounded-Centric Hierarchical Embodied Manipulation System

- 출처/venue: T Yang, G Chen, Y Chen, Z Liang, Y Liu, Z Chen… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.14125
- PDF: https://arxiv.org/pdf/2604.14125
- 로컬 PDF: 20260415_HiVLA A Visual-Grounded-Centric Hierarchical Embodied Manipulation System.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HiVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `HiVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `HiVLA`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.14125; PDF: https://arxiv.org/pdf/2604.14125; https://tianshuoy.github.io/HiVLA-page/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-251"></a>
## Paper 251. Being-H0. 5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization

- 출처/venue: H Luo, Y Wang, W Zhang, S Zheng, Z Xi, C Xu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2601.12993
- PDF: https://arxiv.org/pdf/2601.12993
- 로컬 PDF: 20260119_Being-H0. 5 Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Being-H0. 5`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Being-H0. 5`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Being-H0. 5`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 98.9%) and RoboCasa (53라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.12993; PDF: https://arxiv.org/pdf/2601.12993가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-252"></a>
## Paper 252. AsyncVLA: Asynchronous Flow Matching for Vision-Language-Action Models

- 출처/venue: Y Jiang, S Cheng, Y Ding, F Gao, B Qi - arXiv preprint arXiv:2511.14148, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2511.14148
- PDF: https://arxiv.org/pdf/2511.14148
- 로컬 PDF: 20251118_AsyncVLA Asynchronous Flow Matching for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AsyncVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `AsyncVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `AsyncVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.14148; PDF: https://arxiv.org/pdf/2511.14148; https://github.com/YuhuaJiang2002/AsyncVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-253"></a>
## Paper 253. Mini-BEHAVIOR-Gran: Revealing U-Shaped Effects of Instruction Granularity on Language-Guided Embodied Agents

- 출처/venue: S Huang, C Zhang, F Ke, Z Cai, G Haffari, L Qu… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.17019
- PDF: https://arxiv.org/pdf/2604.17019
- 로컬 PDF: 20260418_Mini-BEHAVIOR-Gran Revealing U-Shaped Effects of Instruction Granularity on Language-Guided Embodied Agents.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Mini-BEHAVIOR-Gran`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Mini-BEHAVIOR-Gran`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Mini-BEHAVIOR-Gran`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.17019; PDF: https://arxiv.org/pdf/2604.17019가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-254"></a>
## Paper 254. Unified Noise Steering for Efficient Human-Guided VLA Adaptation

- 출처/venue: J Lu, X Qin, Y Jiang, K Wang, C Zhang, B Liang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10821
- PDF: https://arxiv.org/pdf/2605.10821
- 로컬 PDF: 20260511_Unified Noise Steering for Efficient Human-Guided VLA Adaptation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Unified Noise Steering for Efficient Human-Guided VLA Adaptation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Unified Noise Steering for Efficient Human-Guided VLA Adaptation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Unified Noise Steering for Efficient Human-Guided VLA Adaptation`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 improving the success rate from 20%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10821; PDF: https://arxiv.org/pdf/2605.10821가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-255"></a>
## Paper 255. ALAM: Algebraically Consistent Latent Transitions for Vision-Language-Action Models

- 출처/venue: Z Tang, H Liu, X Chang, C Wu, D Huo, Y Yang… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10819
- PDF: https://arxiv.org/pdf/2605.10819
- 로컬 PDF: 20260511_ALAM Algebraically Consistent Latent Transitions for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ALAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ALAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ALAM`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 47.9% to 85라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10819; PDF: https://arxiv.org/pdf/2605.10819가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-256"></a>
## Paper 256. R3D: Revisiting 3D Policy Learning

- 출처/venue: Z Hong, S Wu, H Cui, B Zhao, R Ji, Y He… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.15281
- PDF: https://arxiv.org/pdf/2604.15281
- 로컬 PDF: 20260416_R3D Revisiting 3D Policy Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `R3D`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `R3D`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `R3D`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.15281; PDF: https://arxiv.org/pdf/2604.15281; https://r3d-policy.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-257"></a>
## Paper 257. SwiftVLA: Unlocking Spatiotemporal Dynamics for Lightweight VLA Models at Minimal Overhead

- 출처/venue: C Ni, C Chen, X Wang, Z Zhu, W Zheng… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 9
- URL: https://arxiv.org/abs/2512.00903
- PDF: https://arxiv.org/pdf/2512.00903
- 로컬 PDF: 20251130_SwiftVLA Unlocking Spatiotemporal Dynamics for Lightweight VLA Models at Minimal Overhead.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SwiftVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SwiftVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SwiftVLA`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 achieving compa- rable performance on edge devices while being18라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.00903; PDF: https://arxiv.org/pdf/2512.00903; https://Swiftvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-258"></a>
## Paper 258. HarmoWAM: Harmonizing Generalizable and Precise Manipulation via Adaptive World Action Models

- 출처/venue: Q Feng, J Yu, J Liu, Y Jia, Z Wu, H Chen, Z Qian… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10942
- PDF: https://arxiv.org/pdf/2605.10942
- 로컬 PDF: 20260511_HarmoWAM Harmonizing Generalizable and Precise Manipulation via Adaptive World Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HarmoWAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `HarmoWAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `HarmoWAM`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 33% and 29%, respectively라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10942; PDF: https://arxiv.org/pdf/2605.10942; https://elbb-yu.github.io/HarmoWAM/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-259"></a>
## Paper 259. An Anatomy of Vision-Language-Action Models: From Modules to Milestones and Challenges

- 출처/venue: C Xu, S Zhang, Y Liu, B Sun, W Chen, B Xu… - arXiv preprint arXiv …, 2025 - arxiv.org
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2512.11362
- PDF: https://arxiv.org/pdf/2512.11362
- 로컬 PDF: 20251212_An Anatomy of Vision-Language-Action Models From Modules to Milestones and Challenges.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `An Anatomy of Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 자율주행 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `An Anatomy of Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `An Anatomy of Vision-Language-Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 자율주행 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.11362; PDF: https://arxiv.org/pdf/2512.11362가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-260"></a>
## Paper 260. Robotic Manipulation is Vision-to-Geometry Mapping (): Vision-Geometry Backbones over Language and Video Models

- 출처/venue: Z Song, Q Li, J Zhou, Z Yuan, T Chen, L Lin… - arXiv preprint arXiv …, 2026 - arxiv.org
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.12908
- PDF: https://arxiv.org/pdf/2604.12908
- 로컬 PDF: 20260414_Robotic Manipulation is Vision-to-Geometry Mapping () Vision-Geometry Backbones over Language and Video Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robotic Manipulation is Vision-to-Geometry Mapping ()`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Robotic Manipulation is Vision-to-Geometry Mapping ()`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Robotic Manipulation is Vision-to-Geometry Mapping ()`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.12908; PDF: https://arxiv.org/pdf/2604.12908; https://hcplabsysu.github.io/VisionGeometryAction/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-261"></a>
## Paper 261. BiCoord: A Bimanual Manipulation Benchmark towards Long-Horizon Spatial-Temporal Coordination

- 출처/venue: X Peng, ", L Jin, A Li, S Liu - arXiv preprint arXiv:2604.05831, 2026 - arxiv.org" Bimanual manipulation, ie, the coordinated use of two robotic arms to complete tasks, is essential for achieving human-level dexterity in robotics. Recent simulation benchmarks, eg … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.05831
- PDF: https://arxiv.org/pdf/2604.05831
- 로컬 PDF: 20260407_BiCoord A Bimanual Manipulation Benchmark towards Long-Horizon Spatial-Temporal Coordination.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `BiCoord`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `BiCoord`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `BiCoord`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 RoboTwin, RLBench, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, RDT, pi0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.05831; PDF: https://arxiv.org/pdf/2604.05831; https://buaa-colalab.github.io/BiCoord/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-262"></a>
## Paper 262. Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation

- 출처/venue: ", KY Ma, Q Lv, Y Lin, Z Bai, C Gao… - arXiv preprint arXiv …, 2026 - arxiv.org" While Vision-Language-Action (VLA) models offer broad general capabilities, deploying them on specific hardware requires real-world adaptation to bridge the embodiment gap … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.07381
- PDF: https://arxiv.org/pdf/2605.07381
- 로컬 PDF: 20260508_Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Escaping the Diversity Trap in Robotic Manipulation via Anchor-Centric Adaptation`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.07381; PDF: https://arxiv.org/pdf/2605.07381가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-263"></a>
## Paper 263. VAG: Dual-Stream Video-Action Generation for Embodied Data Synthesis

- 출처/venue: ", Y Wang," ", C Ni, K Li," ", T Liu… - arXiv preprint arXiv …, 2026 - arxiv.org" Recent advances in robot foundation models trained on large-scale human teleoperation data have enabled robots to perform increasingly complex real-world tasks. However … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.09330
- PDF: https://arxiv.org/pdf/2604.09330
- 로컬 PDF: 20260410_VAG Dual-Stream Video-Action Generation for Embodied Data Synthesis.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VAG`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VAG`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VAG`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.09330; PDF: https://arxiv.org/pdf/2604.09330가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-264"></a>
## Paper 264. Ask-to-Clarify: Resolving Instruction Ambiguity through Multi-turn Dialogue

- 출처/venue: X Lin, X Zhu, T Lu, S Xie, "," "," … - arXiv preprint arXiv …, 2025 - arxiv.org The ultimate goal of embodied agents is to create collaborators that can interact with humans, not mere executors that passively follow instructions. This requires agents to … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2509.15061
- PDF: https://arxiv.org/pdf/2509.15061
- 로컬 PDF: 20250918_Ask-to-Clarify Resolving Instruction Ambiguity through Multi-turn Dialogue.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Ask-to-Clarify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Ask-to-Clarify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Ask-to-Clarify`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.15061; PDF: https://arxiv.org/pdf/2509.15061가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-265"></a>
## Paper 265. MobileManiBench: Simplifying Model Verification for Mobile Manipulation

- 출처/venue: "," "," ", X Chen," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-language-action models have advanced robotic manipulation but remain constrained by reliance on the large, teleoperation-collected datasets dominated by the static, tabletop … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.05233
- PDF: https://arxiv.org/pdf/2602.05233
- 로컬 PDF: 20260205_MobileManiBench Simplifying Model Verification for Mobile Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MobileManiBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `MobileManiBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `MobileManiBench`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 Isaac에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.05233; PDF: https://arxiv.org/pdf/2602.05233; https://dexhand.github.io/MobileManiBench가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-266"></a>
## Paper 266. Contrastive Representation Regularization for Vision-Language-Action Models

- 출처/venue: "," "," "," "," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Vision-Language-Action (VLA) models have shown its capabilities in robot manipulation by leveraging rich representations from pre-trained Vision-Language Models (VLMs). However … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2510.01711
- PDF: https://arxiv.org/pdf/2510.01711
- 로컬 PDF: 20251002_Contrastive Representation Regularization for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Contrastive Representation Regularization for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Contrastive Representation Regularization for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Contrastive Representation Regularization for Vision-Language-Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 and boosts success rates from 45.0%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.01711; PDF: https://arxiv.org/pdf/2510.01711가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-267"></a>
## Paper 267. ACoT-VLA: Action Chain-of-Thought for Vision-Language-Action Models

- 출처/venue: "," ", Y Wei, Z Xiong, M Yao, S Liu… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models have emerged as essential generalist robot policies for diverse manipulation tasks, conventionally relying on directly translating multimodal … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2601.11404
- PDF: https://arxiv.org/pdf/2601.11404
- 로컬 PDF: 20260116_ACoT-VLA Action Chain-of-Thought for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ACoT-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ACoT-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ACoT-VLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.11404; PDF: https://arxiv.org/pdf/2601.11404; https://github.com/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-268"></a>
## Paper 268. CycleVLA: Proactive Self-Correcting Vision-Language-Action Models via Subtask Backtracking and Minimum Bayes Risk Decoding

- 출처/venue: "," "," ", S Xu," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Current work on robot failure detection and correction typically operate in a post hoc manner, analyzing errors and applying corrections only after failures occur. This work … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2601.02295
- PDF: https://arxiv.org/pdf/2601.02295
- 로컬 PDF: 20260105_CycleVLA Proactive Self-Correcting Vision-Language-Action Models via Subtask Backtracking and Minimum Bayes Risk Decoding.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CycleVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CycleVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CycleVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.02295; PDF: https://arxiv.org/pdf/2601.02295가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-269"></a>
## Paper 269. Libra-VLA: Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System

- 출처/venue: Y Wei, "," ", Y Lu, X He, M Yao… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models are a promising paradigm for generalist robotic manipulation by grounding high-level semantic instructions into executable physical actions … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.24921
- PDF: https://arxiv.org/pdf/2604.24921
- 로컬 PDF: 20260427_Libra-VLA Achieving Learning Equilibrium via Asynchronous Coarse-to-Fine Dual-System.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Libra-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Libra-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Libra-VLA`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.24921; PDF: https://arxiv.org/pdf/2604.24921가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-270"></a>
## Paper 270. See, Plan, Rewind: Progress-Aware Vision-Language-Action Models for Robust Robotic Manipulation

- 출처/venue: T Dai, ", T Du, Z Liu, Z Li, S Khan, J Yu… - arXiv preprint arXiv …, 2026 - arxiv.org" Measurement of task progress through explicit, actionable milestones is critical for robust robotic manipulation. This progress awareness enables a model to ground its current task … 저장 인용 "22" "23" "24" "25" "26" "28" "29" "30" "31"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.09292
- PDF: https://arxiv.org/pdf/2603.09292
- 로컬 PDF: 20260310_See, Plan, Rewind Progress-Aware Vision-Language-Action Models for Robust Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `See, Plan, Rewind`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `See, Plan, Rewind`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `See, Plan, Rewind`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 5% on the LIBERO benchmark라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.09292; PDF: https://arxiv.org/pdf/2603.09292; https://tingjundai.github.io/SPRVLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-271"></a>
## Paper 271. Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation

- 출처/venue: Y Zhang, "," "- arXiv preprint arXiv:2511.11298, 2025 - arxiv.org" "Foundation models applied in robotics, particularly\\textbf {Vision--Language--Action (VLA)}" models, hold great promise for achieving general-purpose manipulation. Yet, systematic real … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2511.11298
- PDF: https://arxiv.org/pdf/2511.11298
- 로컬 PDF: 20251114_Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Experiences from Benchmarking Vision-Language-Action Models for Robotic Manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 OpenVLA, ALOHA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT, RDT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.11298; PDF: https://arxiv.org/pdf/2511.11298가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-272"></a>
## Paper 272. DynamicVLA: A Vision-Language-Action Model for Dynamic Object Manipulation

- 출처/venue: "," ", J Zheng, Z Chen," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Manipulating dynamic objects remains an open challenge for Vision-Language-Action (VLA) models, which, despite strong generalization in static manipulation, struggle in dynamic … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 6
- URL: https://arxiv.org/abs/2601.22153
- PDF: https://arxiv.org/pdf/2601.22153
- 로컬 PDF: 20260129_DynamicVLA A Vision-Language-Action Model for Dynamic Object Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DynamicVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `DynamicVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `DynamicVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.22153; PDF: https://arxiv.org/pdf/2601.22153; https://haozhexie.com/project/dynamic-vla가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-273"></a>
## Paper 273. Beyond World-Frame Action Heads: Motion-Centric Action Frames for Vision-Language-Action Models

- 출처/venue: Vision-Language-Action (VLA) models have advanced rapidly with stronger backbones, broader pre-training, and larger demonstration datasets, yet their action heads remain … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.11809
- PDF: https://arxiv.org/pdf/2605.11809
- 로컬 PDF: 20260512_Beyond World-Frame Action Heads Motion-Centric Action Frames for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Beyond World-Frame Action Heads`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Beyond World-Frame Action Heads`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Beyond World-Frame Action Heads`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.11809; PDF: https://arxiv.org/pdf/2605.11809가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-274"></a>
## Paper 274. ForgeVLA: Federated Vision-Language-Action Learning without Language Annotations

- 출처/venue: Y Zhou, Y Zhu, Y Zhou, J Lyu, ", Z Wang… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models hold great promise for general-purpose robotic intelligence, yet scaling up such models is severely bottlenecked by the high cost of … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.07474
- PDF: https://arxiv.org/pdf/2605.07474
- 로컬 PDF: 20260508_ForgeVLA Federated Vision-Language-Action Learning without Language Annotations.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ForgeVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `ForgeVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `ForgeVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.07474; PDF: https://arxiv.org/pdf/2605.07474가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-275"></a>
## Paper 275. Intelligent Food Portioning System Using Vision-Language-Action (VLA) Models for Small-Scale Food Operations

- 출처/venue: "," "," "," "- Journal of Future Foods, 2026 - Elsevier" The food industry faces significant barriers to adopting automation, as most of the food service, retail, and processing operations are small businesses that lack the financial … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.sciencedirect.com/science/article/pii/S2772566926000169
- PDF: https://www.sciencedirect.com/science/article/pii/S2772566926000169
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Intelligent Food Portioning System Using Vision-Language-Action (VLA) Models for Small-Scale Food Operations`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Intelligent Food Portioning System Using Vision-Language-Action (VLA) Models for Small-Scale Food Operations`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Intelligent Food Portioning System Using Vision-Language-Action (VLA) Models for Small-Scale Food Operations`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.sciencedirect.com/science/article/pii/S2772566926000169; PDF: https://www.sciencedirect.com/science/article/pii/S2772566926000169가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-276"></a>
## Paper 276. Vision-and-Language Navigation for UAVs: Progress, Challenges, and a Research Roadmap

- 출처/venue: H Chen, J Zheng, S Yang, ", S Feng… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-and-Language Navigation for Unmanned Aerial Vehicles (UAV-VLN) represents a pivotal challenge in embodied artificial intelligence, focused on enabling UAVs to interpret … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.13654
- PDF: https://arxiv.org/pdf/2604.13654
- 로컬 PDF: 20260415_Vision-and-Language Navigation for UAVs Progress, Challenges, and a Research Roadmap.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-and-Language Navigation for UAVs`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 자율주행 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vision-and-Language Navigation for UAVs`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vision-and-Language Navigation for UAVs`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 자율주행 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.13654; PDF: https://arxiv.org/pdf/2604.13654가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-277"></a>
## Paper 277. Generation Models Know Space: Unleashing Implicit 3D Priors for Scene Understanding

- 출처/venue: "," "," ", K Xia, Y Zhang, X Li… - arXiv preprint arXiv …, 2026 - arxiv.org" While Multimodal Large Language Models demonstrate impressive semantic capabilities, they often suffer from spatial blindness, struggling with fine-grained geometric reasoning … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.19235
- PDF: https://arxiv.org/pdf/2603.19235
- 로컬 PDF: 20260319_Generation Models Know Space Unleashing Implicit 3D Priors for Scene Understanding.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Generation Models Know Space`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Generation Models Know Space`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Generation Models Know Space`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.19235; PDF: https://arxiv.org/pdf/2603.19235; https://github.com/H-EmbodVis/VEGA-3D가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-278"></a>
## Paper 278. Dynamic Maclaurin-Series-Based Vision-Language-Action Model

- 출처/venue: Motivated by the Maclaurin-series theorem, a dynamic Maclaurin-series-based Vision- Language-Action (DMS-VLA) model introduces a unified approximation framework that … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ieeexplore.ieee.org/abstract/document/11479850/
- PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11479850.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Dynamic Maclaurin-Series-Based Vision-Language-Action Model`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Dynamic Maclaurin-Series-Based Vision-Language-Action Model`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Dynamic Maclaurin-Series-Based Vision-Language-Action Model`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11479850/; PDF: https://ieeexplore.ieee.org/iel8/7083369/7339444/11479850.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-279"></a>
## Paper 279. LIBERO-Para: A Diagnostic Benchmark and Metrics for Paraphrase Robustness in VLA Models

- 출처/venue: ", M Kim, M Kang, H Kim," "- arXiv preprint arXiv:2603.28301, 2026 - arxiv.org" Vision-Language-Action (VLA) models achieve strong performance in robotic manipulation by leveraging pre-trained vision-language backbones. However, in downstream robotic … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.28301
- PDF: https://arxiv.org/pdf/2603.28301
- 로컬 PDF: 20260330_LIBERO-Para A Diagnostic Benchmark and Metrics for Paraphrase Robustness in VLA Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LIBERO-Para`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `LIBERO-Para`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `LIBERO-Para`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 we observe con- sistent performance degradation of 22라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.28301; PDF: https://arxiv.org/pdf/2603.28301가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-280"></a>
## Paper 280. SpecRLBench: A Benchmark for Generalization in Specification-Guided Reinforcement Learning

- 출처/venue: "," "," "," "- arXiv preprint arXiv:2604.24729, 2026 - arxiv.org" Specification-guided reinforcement learning (RL) provides a principled framework for encoding complex, temporally extended tasks using formal specifications such as linear … 저장 인용 "23" "24" "25" "26" "27" "29" "30" "31" "32"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.24729
- PDF: https://arxiv.org/pdf/2604.24729
- 로컬 PDF: 20260427_SpecRLBench A Benchmark for Generalization in Specification-Guided Reinforcement Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SpecRLBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `SpecRLBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `SpecRLBench`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 RLBench에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.24729; PDF: https://arxiv.org/pdf/2604.24729; https://github.com/BU-DEPEND-Lab/SpecRLBench가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-281"></a>
## Paper 281. CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation

- 출처/venue: ", Z Zhang," ", H Chen," … - arXiv preprint arXiv …, 2026 - arxiv.org Camera-controllable video generation aims to synthesize videos with flexible and physically plausible camera movements. However, existing methods either provide imprecise camera … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.09201
- PDF: https://arxiv.org/pdf/2604.09201
- 로컬 PDF: 20260410_CT-1 Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CT-1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `CT-1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `CT-1`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 controllablevideosandimprovingcamera control accuracy by 25.7%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.09201; PDF: https://arxiv.org/pdf/2604.09201; https://github.com/gulucaptain/Camera-Transformer-1; https://gulucaptain.github.io/Camera-Transformer-1/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-282"></a>
## Paper 282. Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation

- 출처/venue: ", D Li, Y Yang," ", T Lin," … - arXiv preprint arXiv …, 2026 - arxiv.org This paper tackles spatial perception and manipulation challenges in Vision-Language- Action (VLA) models. To address depth ambiguity from monocular input, we leverage a pre … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.11832
- PDF: https://arxiv.org/pdf/2605.11832
- 로컬 PDF: 20260512_Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.11832; PDF: https://arxiv.org/pdf/2605.11832; https://junjxiao.github.io/Multi-view-VLA.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-283"></a>
## Paper 283. Thinking in Text and Images: Interleaved Vision--Language Reasoning Traces for Long-Horizon Robot Manipulation

- 출처/venue: J Liu, H Chi, "," ", YA Wang, L Chen… - arXiv preprint arXiv …, 2026 - arxiv.org" Long-horizon robotic manipulation requires plans that are both logically coherent and geometrically grounded. Existing Vision-Language-Action policies usually hide planning in … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.00438
- PDF: https://arxiv.org/pdf/2605.00438
- 로컬 PDF: 20260501_Thinking in Text and Images Interleaved Vision--Language Reasoning Traces for Long-Horizon Robot Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Thinking in Text and Images`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Thinking in Text and Images`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Thinking in Text and Images`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 95.5% av- erage success on LIBERO, including 92라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.00438; PDF: https://arxiv.org/pdf/2605.00438가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-284"></a>
## Paper 284. VAMPO: Policy Optimization for Improving Visual Dynamics in Video Action Models

- 출처/venue: "," ", B Yin, Q Wang, Z Xie, Y Wang… - arXiv preprint arXiv …, 2026 - arxiv.org" Video action models are an appealing foundation for Vision--Language--Action systems because they can learn visual dynamics from large-scale video data and transfer this … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.19370
- PDF: https://arxiv.org/pdf/2603.19370
- 로컬 PDF: 20260319_VAMPO Policy Optimization for Improving Visual Dynamics in Video Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VAMPO`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VAMPO`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VAMPO`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.19370; PDF: https://arxiv.org/pdf/2603.19370; https://vampo-robot.github.io/V; https://huggingface.co/williammmgezju; https://github.com/OpenHelix-Team/V가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-285"></a>
## Paper 285. Beyond the Majority: Long-tail Imitation Learning for Robotic Manipulation

- 출처/venue: J Zhu, "," "," "," "- arXiv preprint arXiv:2602.06512, 2026 - arxiv.org" While generalist robot policies hold significant promise for learning diverse manipulation skills through imitation, their performance is often hindered by the long-tail distribution of … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.06512
- PDF: https://arxiv.org/pdf/2602.06512
- 로컬 PDF: 20260206_Beyond the Majority Long-tail Imitation Learning for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Beyond the Majority`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Beyond the Majority`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Beyond the Majority`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.06512; PDF: https://arxiv.org/pdf/2602.06512; https://mldxy.github.io/Project-VLA-long-tail/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-286"></a>
## Paper 286. vla-eval: A Unified Evaluation Harness for Vision-Language-Action Models

- 출처/venue: "," ", Y Park," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models are increasingly evaluated across multiple simulation benchmarks, yet adding each benchmark to an evaluation pipeline requires resolving … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.13966
- PDF: https://arxiv.org/pdf/2603.13966
- 로컬 PDF: 20260314_vla-eval A Unified Evaluation Harness for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `vla-eval`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `vla-eval`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `vla-eval`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.13966; PDF: https://arxiv.org/pdf/2603.13966; https://github.com/allenai/vla-evaluation-harness; https://allenai.github.io/vla-evaluation-harness/leaderboard가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-287"></a>
## Paper 287. World-VLA-Loop: Closed-Loop Learning of Video World Model and VLA Policy

- 출처/venue: "," "," "," "," "- arXiv preprint arXiv:2602.06508, 2026 - arxiv.org" Recent progress in robotic world models has leveraged video diffusion transformers to predict future observations conditioned on historical states and actions. While these models … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 7
- URL: https://arxiv.org/abs/2602.06508
- PDF: https://arxiv.org/pdf/2602.06508
- 로컬 PDF: 20260206_World-VLA-Loop Closed-Loop Learning of Video World Model and VLA Policy.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World-VLA-Loop`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `World-VLA-Loop`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `World-VLA-Loop`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.06508; PDF: https://arxiv.org/pdf/2602.06508; https://showlab.github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-288"></a>
## Paper 288. Pri4R: Learning World Dynamics for Vision-Language-Action Models with Privileged 4D Representation

- 출처/venue: "," "," "," "," ", G Lee, S Lee… - arXiv preprint arXiv …, 2026 - arxiv.org" Humans learn not only how their bodies move, but also how the surrounding world responds to their actions. In contrast, while recent Vision-Language-Action (VLA) models exhibit … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.01549
- PDF: https://arxiv.org/pdf/2603.01549
- 로컬 PDF: 20260302_Pri4R Learning World Dynamics for Vision-Language-Action Models with Privileged 4D Representation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Pri4R`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Pri4R`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Pri4R`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.01549; PDF: https://arxiv.org/pdf/2603.01549; https://jiiiisoo.github.io/Pri4R/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-289"></a>
## Paper 289. A Survey on Reinforcement Learning of Vision-Language-Action Models for Robotic Manipulation

- 출처/venue: H Deng, "," "," ", Y Xue," … - Authorea …, 2025 - techrxiv.org The vision of building generalist robotic systems capable of performing diverse manipulation tasks has been significantly advanced by Vision-Language-Action models (VLAs), which … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 8
- URL: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176531955.54563920
- PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176531955.54563920
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `A Survey on Reinforcement Learning of Vision-Language-Action Models for Robotic Manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `A Survey on Reinforcement Learning of Vision-Language-Action Models for Robotic Manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176531955.54563920; PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176531955.54563920가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-290"></a>
## Paper 290. Towards Generalizable Robotic Manipulation in Dynamic Environments

- 출처/venue: H Fang, S Li, S Wang, X Xi, "," "- arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models excel in static manipulation but struggle in dynamic environments with moving targets. This performance gap primarily stems from a scarcity of … 저장 인용 "24" "25" "26" "27" "28" "30" "31" "32" "33"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.15620
- PDF: https://arxiv.org/pdf/2603.15620
- 로컬 PDF: 20260316_Towards Generalizable Robotic Manipulation in Dynamic Environments.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Generalizable Robotic Manipulation in Dynamic Environments`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Towards Generalizable Robotic Manipulation in Dynamic Environments`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Towards Generalizable Robotic Manipulation in Dynamic Environments`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 6.3% absolute improvement in success rate over baselines라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.15620; PDF: https://arxiv.org/pdf/2603.15620; https://github.com/H-EmbodVis/DOMINO가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-291"></a>
## Paper 291. Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies

- 출처/venue: ", F Liang," "," ", S Zhao… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models have significant potential to enable general-purpose robotic systems for a range of vision-language tasks. However, the performance of VLA … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.12510
- PDF: https://arxiv.org/pdf/2603.12510
- 로컬 PDF: 20260312_Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Red-Teaming Vision-Language-Action Models via Quality Diversity Prompt Generation for Robust Robot Policies`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.12510; PDF: https://arxiv.org/pdf/2603.12510가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-292"></a>
## Paper 292. ComSim: Building Scalable Real-World Robot Data Generation via Compositional Simulation

- 출처/venue: Y Qin, J Ma, ", W Li, Y Jiao, X Wen… - arXiv preprint arXiv …, 2026 - arxiv.org" Recent advancements in foundational models, such as large language models and world models, have greatly enhanced the capabilities of robotics, enabling robots to autonomously … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.11386
- PDF: https://arxiv.org/pdf/2604.11386
- 로컬 PDF: 20260413_ComSim Building Scalable Real-World Robot Data Generation via Compositional Simulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ComSim`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `ComSim`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `ComSim`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.11386; PDF: https://arxiv.org/pdf/2604.11386가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-293"></a>
## Paper 293. VISTA: Enhancing Visual Conditioning via Track-Following Preference Optimization in Vision-Language-Action Models

- 출처/venue: "," "," ", S Cao," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models have demonstrated strong performance across a wide range of robotic manipulation tasks. Despite the success, extending large pretrained … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.05049
- PDF: https://arxiv.org/pdf/2602.05049
- 로컬 PDF: 20260204_VISTA Enhancing Visual Conditioning via Track-Following Preference Optimization in Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VISTA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VISTA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VISTA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.05049; PDF: https://arxiv.org/pdf/2602.05049; https://vista-vla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-294"></a>
## Paper 294. Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation

- 출처/venue: ", YA Wang, G Chen, J Liu, Y Sun… - arXiv preprint arXiv …, 2026 - arxiv.org" Human videos contain rich manipulation priors, but using them for robot learning remains difficult because raw observations entangle scene understanding, human motion, and … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.24681
- PDF: https://arxiv.org/pdf/2604.24681
- 로컬 PDF: 20260427_Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Learning Human-Intention Priors from Large-Scale Human Demonstrations for Robotic Manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.24681; PDF: https://arxiv.org/pdf/2604.24681가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-295"></a>
## Paper 295. Being-H0. 7: A Latent World-Action Model from Egocentric Videos

- 출처/venue: "," "," "," ", H Xu," … - arXiv preprint arXiv …, 2026 - arxiv.org Visual-Language-Action models (VLAs) have advanced generalist robot control by mapping multimodal observations and language instructions directly to actions, but sparse action … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.00078
- PDF: https://arxiv.org/pdf/2605.00078
- 로컬 PDF: 20260430_Being-H0. 7 A Latent World-Action Model from Egocentric Videos.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Being-H0. 7`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Being-H0. 7`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Being-H0. 7`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.00078; PDF: https://arxiv.org/pdf/2605.00078가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-296"></a>
## Paper 296. A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control

- 출처/venue: ", H Zhang," ", T Cai, Z Chen, Y Guo… - arXiv preprint arXiv …, 2026 - arxiv.org" Recent advances in embodied intelligence have leveraged massive scaling of data and model parameters to master natural-language command following and multi-task control. In … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2601.14628
- PDF: https://arxiv.org/pdf/2601.14628
- 로컬 PDF: 20260121_A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `A Brain-inspired Embodied Intelligence for Fluid and Fast Reflexive Robotics Control`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.14628; PDF: https://arxiv.org/pdf/2601.14628가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-297"></a>
## Paper 297. ForceVLA2: Unleashing Hybrid Force-Position Control with Force Awareness for Contact-Rich Manipulation

- 출처/venue: Y Li, H Jiang, J Xia, ", J Du," … - arXiv preprint arXiv …, 2026 - arxiv.org Embodied intelligence for contact-rich manipulation has predominantly relied on position control, while explicit awareness and regulation of interaction forces remain under-explored … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.15169
- PDF: https://arxiv.org/pdf/2603.15169
- 로컬 PDF: 20260316_ForceVLA2 Unleashing Hybrid Force-Position Control with Force Awareness for Contact-Rich Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ForceVLA2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ForceVLA2`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ForceVLA2`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.15169; PDF: https://arxiv.org/pdf/2603.15169가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-298"></a>
## Paper 298. 3D Generation for Embodied AI and Robotic Simulation: A Survey

- 출처/venue: "," ", M Liao," ", C Guo, D Du… - arXiv preprint arXiv …, 2026 - arxiv.org" Embodied AI and robotic systems increasingly depend on scalable, diverse, and physically grounded 3D content for simulation-based training and real-world deployment. While 3D … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.26509
- PDF: https://arxiv.org/pdf/2604.26509
- 로컬 PDF: 20260429_3D Generation for Embodied AI and Robotic Simulation A Survey.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `3D Generation for Embodied AI and Robotic Simulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `3D Generation for Embodied AI and Robotic Simulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.26509; PDF: https://arxiv.org/pdf/2604.26509; https://3dgen4robot.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-299"></a>
## Paper 299. RoboSSM: Scalable In-context Imitation Learning via State-Space Models

- 출처/venue: "," "," "," ", Q Liu," … - arXiv preprint arXiv …, 2025 - arxiv.org In-context imitation learning (ICIL) enables robots to learn tasks from prompts consisting of just a handful of demonstrations. By eliminating the need for parameter updates at … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2509.19658
- PDF: https://arxiv.org/pdf/2509.19658?
- 로컬 PDF: 20250924_RoboSSM Scalable In-context Imitation Learning via State-Space Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboSSM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RoboSSM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RoboSSM`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.19658; PDF: https://arxiv.org/pdf/2509.19658?; https://github.com/youngjuY/RoboSSM가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-300"></a>
## Paper 300. \\pi-StepNFT: Wider Space Needs Finer Steps in Online RL for Flow-based VLAs

- 출처/venue: "-StepNFT: Wider Space Needs Finer Steps in Online RL for Flow-based VLAs" ", X Wang," "," ", X Cui," … - arXiv preprint arXiv …, 2026 - arxiv.org Flow-based vision-language-action (VLA) models excel in embodied control but suffer from intractable likelihoods during multi-step sampling, hindering online reinforcement learning … 저장 인용 "25" "26" "27" "28" "29" "31" "32" "33" "34"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.02083
- PDF: https://arxiv.org/pdf/2603.02083
- 로컬 PDF: 20260302_pi-StepNFT Wider Space Needs Finer Steps in Online RL for Flow-based VLAs.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `\\pi-StepNFT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `\\pi-StepNFT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `\\pi-StepNFT`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, ManiSkill 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.02083; PDF: https://arxiv.org/pdf/2603.02083; https://wangst0181.github.io/pi-StepNFT/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-301"></a>
## Paper 301. DiscreteRTC: Discrete Diffusion Policies are Natural Asynchronous Executors

- 출처/venue: "," "," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Unlike chatbots, physical AI must act while the world keeps evolving. Therefore, the inter- chunk pause of synchronous executors are fatal for dynamic tasks regardless of how fast the … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.25050
- PDF: https://arxiv.org/pdf/2604.25050
- 로컬 PDF: 20260427_DiscreteRTC Discrete Diffusion Policies are Natural Asynchronous Executors.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DiscreteRTC`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `DiscreteRTC`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `DiscreteRTC`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 50%higher success rate in real-world dynamic pick task compared with flow-matching-based RTC라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.25050; PDF: https://arxiv.org/pdf/2604.25050가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-302"></a>
## Paper 302. BayesianVLA: Bayesian Decomposition of Vision Language Action Models via Latent Action Queries

- 출처/venue: ", B Yu," ", LT Yang," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models have shown promise in robot manipulation but often struggle to generalize to new instructions or complex multi-task scenarios. We identify a … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2601.15197
- PDF: https://arxiv.org/pdf/2601.15197
- 로컬 PDF: 20260121_BayesianVLA Bayesian Decomposition of Vision Language Action Models via Latent Action Queries.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `BayesianVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `BayesianVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `BayesianVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 11.3%im- provement on the challenging OOD SimplerEnv benchmark, validating the ability of LangForce to robustly ground langua라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.15197; PDF: https://arxiv.org/pdf/2601.15197가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-303"></a>
## Paper 303. Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge

- 출처/venue: "," "," ", R Li, BNY Chen… - arXiv preprint arXiv …, 2026 - arxiv.org" Recent advancements in multimodal large language models and vision-languageaction models have significantly driven progress in Embodied AI. As the field transitions toward … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2601.18733
- PDF: https://arxiv.org/pdf/2601.18733
- 로컬 PDF: 20260126_Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.18733; PDF: https://arxiv.org/pdf/2601.18733; https://mars-eai.github.io/MARS-Challenge-Webpage/; https://space-in-vision-language-embodied-ai.github.io/; https://github.com/MARS-EAI/VIKI-R/tree/MARS-Challenge-2025; https://github.com/MARS-EAI/RoboFactory/tree/MARS-Challenge-2025가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-304"></a>
## Paper 304. One Token Per Frame: Reconsidering Visual Bandwidth in World Models for VLA Policy

- 출처/venue: Vision-language-action (VLA) models increasingly rely on auxiliary world modules to plan over long horizons, yet how such modules should be parameterized on top of a pretrained … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.07931
- PDF: https://arxiv.org/pdf/2605.07931
- 로컬 PDF: 20260508_One Token Per Frame Reconsidering Visual Bandwidth in World Models for VLA Policy.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `One Token Per Frame`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `One Token Per Frame`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `One Token Per Frame`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 OneWM-VLA improves the average success rate from 47.9%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.07931; PDF: https://arxiv.org/pdf/2605.07931가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-305"></a>
## Paper 305. Latent Reasoning VLA: Latent Thinking and Prediction for Vision-Language-Action Models

- 출처/venue: "," "," ", Z Li, D Wang, L Xing… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models benefit from chain-of-thought (CoT) reasoning, but existing approaches incur high inference overhead and rely on discrete reasoning … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2602.01166
- PDF: https://arxiv.org/pdf/2602.01166
- 로컬 PDF: 20260201_Latent Reasoning VLA Latent Thinking and Prediction for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Latent Reasoning VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Latent Reasoning VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Latent Reasoning VLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.01166; PDF: https://arxiv.org/pdf/2602.01166가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-306"></a>
## Paper 306. ActionFlow: A Pipelined Action Acceleration for Vision Language Models on Edge

- 출처/venue: Y Dai, H Gu, T Wang, ", Y Zheng, Z Qiu… - arXiv preprint arXiv …, 2025 - arxiv.org" Vision-Language-Action (VLA) models have emerged as a unified paradigm for robotic perception and control, enabling emergent generalization and long-horizon task execution … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2512.20276
- PDF: https://arxiv.org/pdf/2512.20276
- 로컬 PDF: 20251223_ActionFlow A Pipelined Action Acceleration for Vision Language Models on Edge.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ActionFlow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ActionFlow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ActionFlow`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.20276; PDF: https://arxiv.org/pdf/2512.20276가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-307"></a>
## Paper 307. MoE-ACT: Improving Surgical Imitation Learning Policies through Supervised Mixture-of-Experts

- 출처/venue: "," "," ", M Lelis… - arXiv preprint arXiv …, 2026 - arxiv.org" Imitation learning has achieved remarkable success in robotic manipulation, yet its application to surgical robotics remains challenging due to data scarcity, constrained … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2601.21971
- PDF: https://arxiv.org/pdf/2601.21971
- 로컬 PDF: 20260129_MoE-ACT Improving Surgical Imitation Learning Policies through Supervised Mixture-of-Experts.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MoE-ACT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `MoE-ACT`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `MoE-ACT`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.21971; PDF: https://arxiv.org/pdf/2601.21971; https://surgical-moe-project.github.io/rss-paper/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-308"></a>
## Paper 308. Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models

- 출처/venue: Y Huang, ", Z Tang," ", J Deng," … - arXiv preprint arXiv …, 2026 - arxiv.org While Vision-Language-Action (VLA) models hold promise in embodied intelligence, their large parameter counts lead to substantial inference latency that hinders real-time … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.00780
- PDF: https://arxiv.org/pdf/2602.00780
- 로컬 PDF: 20260131_Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Environment-Aware Adaptive Pruning with Interleaved Inference Orchestration for Vision-Language-Action Models`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 0.4% drop in success rate, and further reaches 2라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.00780; PDF: https://arxiv.org/pdf/2602.00780가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-309"></a>
## Paper 309. Predictive but Not Plannable: RC-aux for Latent World Models

- 출처/venue: W Li, "," "," "," "- arXiv preprint arXiv …, 2026 - arxiv.org" A latent world model may achieve accurate short-horizon prediction while still inducing a latent space that is poorly aligned with planning. A key issue is spatiotemporal mismatch … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.07278
- PDF: https://arxiv.org/pdf/2605.07278
- 로컬 PDF: 20260508_Predictive but Not Plannable RC-aux for Latent World Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Predictive but Not Plannable`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Predictive but Not Plannable`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Predictive but Not Plannable`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.07278; PDF: https://arxiv.org/pdf/2605.07278; https://github.com/Guang000/RC-aux가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-310"></a>
## Paper 310. HiMaCon: Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data

- 출처/venue: ", P Zhou," ", L Sun," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Effective generalization in robotic manipulation requires representations that capture invariant patterns of interaction across environments and tasks. We present a self … 저장 인용 "26" "27" "28" "29" "30" "32" "33" "34" "35"
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2510.11321
- PDF: https://arxiv.org/pdf/2510.11321
- 로컬 PDF: 20251013_HiMaCon Discovering Hierarchical Manipulation Concepts from Unlabeled Multi-Modal Data.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `HiMaCon`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `HiMaCon`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `HiMaCon`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.11321; PDF: https://arxiv.org/pdf/2510.11321; https://github.com/zrllrz/HiMaCon가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-311"></a>
## Paper 311. Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models

- 출처/venue: "," "," ", L Jing, H Du, Z Wan… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action models (VLAs) support generalist robotic control by enabling end- to-end decision policies directly from multi-modal inputs. As trained VLAs are increasingly … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.09005
- PDF: https://arxiv.org/pdf/2605.09005
- 로컬 PDF: 20260509_Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Towards Backdoor-Based Ownership Verification for Vision-Language-Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.09005; PDF: https://arxiv.org/pdf/2605.09005가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-312"></a>
## Paper 312. Tex3D: Objects as Attack Surfaces via Adversarial 3D Textures for Vision-Language-Action Models

- 출처/venue: ", S Huang, J Du," "," ", M Wei… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-language-action (VLA) models have shown strong performance in robotic manipulation, yet their robustness to physically realizable adversarial attacks remains … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.01618
- PDF: https://arxiv.org/pdf/2604.01618
- 로컬 PDF: 20260402_Tex3D Objects as Attack Surfaces via Adversarial 3D Textures for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Tex3D`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Tex3D`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Tex3D`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 96.7%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.01618; PDF: https://arxiv.org/pdf/2604.01618; https://vla-attack.github.io/tex3d가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-313"></a>
## Paper 313. CRL-VLA: Continual Vision-Language-Action Learning

- 출처/venue: Q Zeng, S Zhang, H Zhang, R Wang, … - arXiv preprint arXiv …, 2026 - arxiv.org Lifelong learning is critical for embodied agents in open-world environments, where reinforcement learning fine-tuning has emerged as an important paradigm to enable Vision … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.03445
- PDF: https://arxiv.org/pdf/2602.03445
- 로컬 PDF: 20260203_CRL-VLA Continual Vision-Language-Action Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CRL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `CRL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `CRL-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.03445; PDF: https://arxiv.org/pdf/2602.03445가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-314"></a>
## Paper 314. Mirage2Matter: A Physically Grounded Gaussian World Model from Video

- 출처/venue: Z Gao, Z Li, X Wang, ", Z Ren, M Shao… - arXiv preprint arXiv …, 2026 - arxiv.org" The scalability of embodied intelligence is fundamentally constrained by the scarcity of real- world interaction data. While simulation platforms provide a promising alternative, existing … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.00096
- PDF: https://arxiv.org/pdf/2602.00096
- 로컬 PDF: 20260124_Mirage2Matter A Physically Grounded Gaussian World Model from Video.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Mirage2Matter`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Mirage2Matter`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Mirage2Matter`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.00096; PDF: https://arxiv.org/pdf/2602.00096가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-315"></a>
## Paper 315. LoopVLA: Learning Sufficiency in Recurrent Refinement for Vision-Language-Action Models

- 출처/venue: B Shen, ", H Wang, Q Yu, Q Xie, Q Li… - arXiv preprint arXiv …, 2026 - arxiv.org" Current Vision-Language-Action (VLA) models typically treat the deepest representation of a vision-language backbone as universally optimal for action prediction. However, robotic … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.09948
- PDF: https://arxiv.org/pdf/2605.09948
- 로컬 PDF: 20260511_LoopVLA Learning Sufficiency in Recurrent Refinement for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LoopVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `LoopVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `LoopVLA`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 and improving inference throughput by up to 1.7라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.09948; PDF: https://arxiv.org/pdf/2605.09948가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-316"></a>
## Paper 316. DIAL: Decoupling Intent and Action via Latent World Modeling for End-to-End VLA

- 출처/venue: "," ", H Zhou," "," "," "- arXiv preprint arXiv …, 2026 - arxiv.org" The development of Vision-Language-Action (VLA) models has been significantly accelerated by pre-trained Vision-Language Models (VLMs). However, most existing end-to … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.29844
- PDF: https://arxiv.org/pdf/2603.29844
- 로컬 PDF: 20260331_DIAL Decoupling Intent and Action via Latent World Modeling for End-to-End VLA.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DIAL`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `DIAL`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `DIAL`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 achieving superior performance with 10라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.29844; PDF: https://arxiv.org/pdf/2603.29844; https://xpeng-robotics.github.io/dial가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-317"></a>
## Paper 317. Grounding Sim-to-Real Generalization in Dexterous Manipulation: An Empirical Study with Vision-Language-Action Models

- 출처/venue: R Jin, Z Zhu, "," ", B Yue, Z Wu… - arXiv preprint arXiv …, 2026 - arxiv.org" Learning a generalist control policy for dexterous manipulation typically relies on large-scale datasets. Given the high cost of real-world data collection, a practical alternative is to … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.22876
- PDF: https://arxiv.org/pdf/2603.22876
- 로컬 PDF: 20260324_Grounding Sim-to-Real Generalization in Dexterous Manipulation An Empirical Study with Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Grounding Sim-to-Real Generalization in Dexterous Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Grounding Sim-to-Real Generalization in Dexterous Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Grounding Sim-to-Real Generalization in Dexterous Manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.22876; PDF: https://arxiv.org/pdf/2603.22876가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-318"></a>
## Paper 318. Vision-Language-Action Models for Selective Robotic Disassembly: A Case Study on Critical Component Extraction from Desktops

- 출처/venue: "," "," "," "," "- arXiv preprint arXiv …, 2025 - arxiv.org" Automating disassembly of critical components from end-of-life (EoL) desktops, such as high- value items like RAM modules and CPUs, as well as sensitive parts like hard disk drives … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2512.04446
- PDF: https://arxiv.org/pdf/2512.04446
- 로컬 PDF: 20251204_Vision-Language-Action Models for Selective Robotic Disassembly A Case Study on Critical Component Extraction from Desktops.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-Language-Action Models for Selective Robotic Disassembly`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Vision-Language-Action Models for Selective Robotic Disassembly`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Vision-Language-Action Models for Selective Robotic Disassembly`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.04446; PDF: https://arxiv.org/pdf/2512.04446가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-319"></a>
## Paper 319. Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets

- 출처/venue: "," "," "," "- arXiv preprint arXiv:2602.18025, 2026 - arxiv.org" Scalable robot policy pre-training has been hindered by the high cost of collecting high- quality demonstrations for each platform. In this study, we address this issue by uniting … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.18025
- PDF: https://arxiv.org/pdf/2602.18025
- 로컬 PDF: 20260220_Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Cross-Embodiment Offline Reinforcement Learning for Heterogeneous Robot Datasets`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 같은 데이터셋이나 과제 정의 아래 여러 로봇 정책을 놓고 평가하는 방식이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.18025; PDF: https://arxiv.org/pdf/2602.18025가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-320"></a>
## Paper 320. Robotic Assistant: Completing Collaborative Tasks with Dexterous Vision-Language-Action Models

- 출처/venue: ", C Yang," "- arXiv preprint arXiv:2510.25713, 2025 - arxiv.org" We adapt a pre-trained Vision-Language-Action (VLA) model (Open-VLA) for dexterous human-robot collaboration with minimal language prompting. Our approach adds (i) FiLM … 저장 인용 "27" "28" "29" "30" "31" "33" "34" "35" "36"
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2510.25713
- PDF: https://arxiv.org/pdf/2510.25713
- 로컬 PDF: 20251029_Robotic Assistant Completing Collaborative Tasks with Dexterous Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Robotic Assistant`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Robotic Assistant`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Robotic Assistant`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.25713; PDF: https://arxiv.org/pdf/2510.25713가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-321"></a>
## Paper 321. World-Value-Action Model: Implicit Planning for Vision-Language-Action Systems

- 출처/venue: ", H Zhang, J Jin, Q Zeng," ", Y Tang… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models have emerged as a promising paradigm for building embodied agents that ground perception and language into action. However, most existing … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.14732
- PDF: https://arxiv.org/pdf/2604.14732
- 로컬 PDF: 20260416_World-Value-Action Model Implicit Planning for Vision-Language-Action Systems.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `World-Value-Action Model`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `World-Value-Action Model`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `World-Value-Action Model`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.14732; PDF: https://arxiv.org/pdf/2604.14732; https://win-commit.github.io/wavpage/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-322"></a>
## Paper 322. OA-WAM: Object-Addressable World Action Model for Robust Robot Manipulation

- 출처/venue: "," ", S Li," "," ", X Chao… - arXiv preprint arXiv …, 2026 - arxiv.org" World Action Models (WAMs) enhance Vision-Language-Action policies by jointly predicting scene evolution and robot actions, but existing methods usually represent the predicted … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.06481
- PDF: https://arxiv.org/pdf/2605.06481
- 로컬 PDF: 20260507_OA-WAM Object-Addressable World Action Model for Robust Robot Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `OA-WAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `OA-WAM`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `OA-WAM`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 97.8%) and SimplerEnv (79라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.06481; PDF: https://arxiv.org/pdf/2605.06481가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-323"></a>
## Paper 323. Recursive Belief Vision Language Action Models

- 출처/venue: "," ", NK Patel - arXiv preprint arXiv:2602.20659, 2026 - arxiv.org" Vision-language-action models must enable agents to execute long-horizon tasks under partial observability. However, most existing approaches remain observation-driven, relying … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.20659
- PDF: https://arxiv.org/pdf/2602.20659
- 로컬 PDF: 20260224_Recursive Belief Vision Language Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Recursive Belief Vision Language Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Recursive Belief Vision Language Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Recursive Belief Vision Language Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.20659; PDF: https://arxiv.org/pdf/2602.20659가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-324"></a>
## Paper 324. Eq. Bot: Enhance Robotic Manipulation Learning via Group Equivariant Canonicalization

- 출처/venue: J Deng, Y Wang, ", T Feng, T Wo… - arXiv preprint arXiv …, 2025 - arxiv.org" Robotic manipulation systems are increasingly deployed across diverse domains. Yet existing multi-modal learning frameworks lack inherent guarantees of geometric … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2511.15194
- PDF: https://arxiv.org/pdf/2511.15194
- 로컬 PDF: 20251119_Eq. Bot Enhance Robotic Manipulation Learning via Group Equivariant Canonicalization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Eq. Bot`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Eq. Bot`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Eq. Bot`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 50.0%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.15194; PDF: https://arxiv.org/pdf/2511.15194가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-325"></a>
## Paper 325. Recipe for Vision-Language-Action Models in Robotic Manipulation: A Survey

- 출처/venue: "," ", R Nakajo," "," … - Authorea …, 2025 - techrxiv.org This survey provides an in-depth analysis of recent advancements in foundational models that leverage large and diverse datasets to enable flexible and general-purpose … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://www.techrxiv.org/doi/full/10.36227/techrxiv.175624610.06665789
- PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175624610.06665789
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Recipe for Vision-Language-Action Models in Robotic Manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Recipe for Vision-Language-Action Models in Robotic Manipulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.techrxiv.org/doi/full/10.36227/techrxiv.175624610.06665789; PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175624610.06665789가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-326"></a>
## Paper 326. ReconVLA: An Uncertainty-Guided and Failure-Aware Vision-Language-Action Framework for Robotic Control

- 출처/venue: L Chen, "," "- arXiv preprint arXiv:2604.16677, 2026 - arxiv.org" Vision-language-action (VLA) models have emerged as generalist robotic controllers capable of mapping visual observations and natural language instructions to continuous … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.16677
- PDF: https://arxiv.org/pdf/2604.16677
- 로컬 PDF: 20260417_ReconVLA An Uncertainty-Guided and Failure-Aware Vision-Language-Action Framework for Robotic Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ReconVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ReconVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ReconVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.16677; PDF: https://arxiv.org/pdf/2604.16677; https://robotic-vision-lab.github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-327"></a>
## Paper 327. DA-PTQ: Drift-Aware Post-Training Quantization for Efficient Vision-Language-Action Models

- 출처/venue: S Xu, "," "," "," "- arXiv preprint arXiv:2604.11572, 2026 - arxiv.org" Vision-Language-Action models (VLAs) have demonstrated strong potential for embodied AI, yet their deployment on resource-limited robots remains challenging due to high memory … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.11572
- PDF: https://arxiv.org/pdf/2604.11572
- 로컬 PDF: 20260413_DA-PTQ Drift-Aware Post-Training Quantization for Efficient Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `DA-PTQ`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `DA-PTQ`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `DA-PTQ`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.11572; PDF: https://arxiv.org/pdf/2604.11572가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-328"></a>
## Paper 328. ATA: Bridging Implicit Reasoning with Attention-Guided and Action-Guided Inference for Vision-Language Action Models

- 출처/venue: ", J Jiao," "," "," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models rely on current observations, including images, language instructions, and robot states, to predict actions and complete tasks. While … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.01490
- PDF: https://arxiv.org/pdf/2603.01490
- 로컬 PDF: 20260302_ATA Bridging Implicit Reasoning with Attention-Guided and Action-Guided Inference for Vision-Language Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ATA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `ATA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `ATA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.01490; PDF: https://arxiv.org/pdf/2603.01490가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-329"></a>
## Paper 329. VLA-ATTC: Adaptive Test-Time Compute for VLA Models with Relative Action Critic Model

- 출처/venue: W Li, ", D Niu," ", H Xu, Z Qu, L Fan… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models have demonstrated remarkable capabilities and generalization in embodied manipulation. However, their decision-making relies on a fast … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.01194
- PDF: https://arxiv.org/pdf/2605.01194
- 로컬 PDF: 20260502_VLA-ATTC Adaptive Test-Time Compute for VLA Models with Relative Action Critic Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-ATTC`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-ATTC`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-ATTC`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 50%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, pi0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.01194; PDF: https://arxiv.org/pdf/2605.01194가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-330"></a>
## Paper 330. RC-NF: Robot-Conditioned Normalizing Flow for Real-Time Anomaly Detection in Robotic Manipulation

- 출처/venue: "," "," "," ", J Chen… - arXiv preprint arXiv …, 2026 - arxiv.org" Recent advances in Vision-Language-Action (VLA) models have enabled robots to execute increasingly complex tasks. However, VLA models trained through imitation learning … 저장 인용 "28" "29" "30" "31" "32" "34" "35" "36" "37"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.11106
- PDF: https://arxiv.org/pdf/2603.11106
- 로컬 PDF: 20260311_RC-NF Robot-Conditioned Normalizing Flow for Real-Time Anomaly Detection in Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RC-NF`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `RC-NF`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `RC-NF`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 with a response latency under 100라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.11106; PDF: https://arxiv.org/pdf/2603.11106; https://heikaishuizz.github.io/RC-NF/{zhousj24가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-331"></a>
## Paper 331. See What Matters: Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model

- 출처/venue: Y Feng, Z Zhao, Y Ma, C Xia, C Du, … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models have shown remarkable promise in robotics manipulation, yet their high computational cost hinders real-time deployment. Existing token … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.11817
- PDF: https://arxiv.org/pdf/2605.11817
- 로컬 PDF: 20260512_See What Matters Differentiable Grid Sample Pruning for Generalizable Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `See What Matters`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `See What Matters`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `See What Matters`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 10% original visual tokens)라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.11817; PDF: https://arxiv.org/pdf/2605.11817가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-332"></a>
## Paper 332. Agentic Scene Policies: Unifying Space, Semantics, and Affordances for Robot Action

- 출처/venue: "," "," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Executing open-ended natural language queries is a core problem in robotics. While recent advances in imitation learning and vision-language-actions models (VLAs) have enabled … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2509.19571
- PDF: https://arxiv.org/pdf/2509.19571?
- 로컬 PDF: 20250923_Agentic Scene Policies Unifying Space, Semantics, and Affordances for Robot Action.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Agentic Scene Policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Agentic Scene Policies`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Agentic Scene Policies`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.19571; PDF: https://arxiv.org/pdf/2509.19571?가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-333"></a>
## Paper 333. VUDA: Breaking CUDA-Vulkan Isolation for Spatial Sharing of Compute and Graphics on the Same GPU

- 출처/venue: ", P Hu, W Zheng," ", H Chen - arXiv preprint arXiv:2605.01352, 2026 - arxiv.org" GPU-based simulation environments for embodied AI interleave physics simulation (CUDA) and photorealistic rendering (Vulkan) on a single device. We observe that two foundational … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.01352
- PDF: https://arxiv.org/pdf/2605.01352
- 로컬 PDF: 20260502_VUDA Breaking CUDA-Vulkan Isolation for Spatial Sharing of Compute and Graphics on the Same GPU.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VUDA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VUDA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VUDA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 85% higher throughput than temporal-sharing baselines, while improving GPU utilization and reducing end-to-end latency라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.01352; PDF: https://arxiv.org/pdf/2605.01352가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-334"></a>
## Paper 334. StreamVLA: Breaking the Reason-Act Cycle via Completion-State Gating

- 출처/venue: T Chen, ", J Wang, X Li, L Fang - arXiv preprint arXiv:2602.01100, 2026 - arxiv.org" Long-horizon robotic manipulation requires bridging the gap between high-level planning (System 2) and low-level control (System 1). Current Vision-Language-Action (VLA) models … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.01100
- PDF: https://arxiv.org/pdf/2602.01100
- 로컬 PDF: 20260201_StreamVLA Breaking the Reason-Act Cycle via Completion-State Gating.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `StreamVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `StreamVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `StreamVLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.01100; PDF: https://arxiv.org/pdf/2602.01100가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-335"></a>
## Paper 335. ElasticFlow: One-Step Physics-Consistent Policy with Elastic Time Horizons for Language-Guided Manipulation

- 출처/venue: K Chen, Y Long, S Li, "- arXiv preprint arXiv:2605.08799, 2026 - arxiv.org" Diffusion policies have demonstrated exceptional performance in embodied AI. However, their iterative denoising process results in high latency, and existing acceleration methods … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.08799
- PDF: https://arxiv.org/pdf/2605.08799
- 로컬 PDF: 20260509_ElasticFlow One-Step Physics-Consistent Policy with Elastic Time Horizons for Language-Guided Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ElasticFlow`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `ElasticFlow`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `ElasticFlow`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin, CALVIN, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.08799; PDF: https://arxiv.org/pdf/2605.08799가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-336"></a>
## Paper 336. Nautilus: From One Prompt to Plug-and-Play Robot Learning

- 출처/venue: ", J Guo, X Jia," ", Z Li, H Liu, W Liao… - arXiv preprint arXiv …, 2026 - arxiv.org" Robot learning research is fragmented across policy families, benchmark suites, and real robots; each implementation is entangled with the others in a complex combination matrix … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.11665
- PDF: https://arxiv.org/pdf/2605.11665
- 로컬 PDF: 20260512_Nautilus From One Prompt to Plug-and-Play Robot Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Nautilus`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Nautilus`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Nautilus`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.11665; PDF: https://arxiv.org/pdf/2605.11665가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-337"></a>
## Paper 337. Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning

- 출처/venue: "," "," ", Y Qin, Y Wan, W Liu… - arXiv preprint arXiv …, 2026 - arxiv.org" Expressive generative models have advanced robotic manipulation by capturing complex, multi-modal action distributions over temporally extended trajectories. However, fine-tuning … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.01860
- PDF: https://arxiv.org/pdf/2604.01860
- 로컬 PDF: 20260402_Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Posterior Optimization with Clipped Objective for Bridging Efficiency and Stability in Generative Policy Learning`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT, CLIP 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.01860; PDF: https://arxiv.org/pdf/2604.01860; https://cccedric.github.io/poco/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-338"></a>
## Paper 338. Test-Time Training for Visual Foresight Vision-Language-Action Models

- 출처/venue: "," "," "," "," "," "- arXiv preprint arXiv …, 2026 - arxiv.org" Visual Foresight VLA (VF-VLA) has become a prominent architectural choice in the recent VLA due to its impressive performance. Nevertheless, the inherent design of VF-VLA makes … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.08215
- PDF: https://arxiv.org/pdf/2605.08215
- 로컬 PDF: 20260506_Test-Time Training for Visual Foresight Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Test-Time Training for Visual Foresight Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Test-Time Training for Visual Foresight Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.08215; PDF: https://arxiv.org/pdf/2605.08215가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-339"></a>
## Paper 339. CrowdVLA: Embodied Vision-Language-Action Agents for Context-Aware Crowd Simulation

- 출처/venue: "," "," "," ", G Nam… - arXiv preprint arXiv …, 2026 - arxiv.org" "Crowds do not merely move; they decide. Human navigation is inherently contextual: people" interpret the meaning of space, social norms, and potential consequences before acting … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.05525
- PDF: https://arxiv.org/pdf/2604.05525
- 로컬 PDF: 20260407_CrowdVLA Embodied Vision-Language-Action Agents for Context-Aware Crowd Simulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CrowdVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CrowdVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CrowdVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.05525; PDF: https://arxiv.org/pdf/2604.05525가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-340"></a>
## Paper 340. VLA-InfoEntropy: A Training-Free Vision-Attention Information Entropy Approach for Vision-Language-Action Models Inference Acceleration and Success

- 출처/venue: Vision-Language-Action (VLA) models integrate visual perception, language understanding, and action decision-making for cross-modal semantic alignment, exhibiting broad … 저장 인용 "29" "30" "31" "32" "33" "35" "36" "37" "38"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.05323
- PDF: https://arxiv.org/pdf/2604.05323
- 로컬 PDF: 20260407_VLA-InfoEntropy A Training-Free Vision-Attention Information Entropy Approach for Vision-Language-Action Models Inference Acceleration and Success.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-InfoEntropy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `VLA-InfoEntropy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `VLA-InfoEntropy`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.05323; PDF: https://arxiv.org/pdf/2604.05323가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-341"></a>
## Paper 341. Anticipation-VLA: Solving Long-Horizon Embodied Tasks via Anticipation-based Subgoal Generation

- 출처/venue: Vision-Language-Action (VLA) models have emerged as a powerful paradigm for embodied intelligence, enabling robots to perform tasks based on natural language instructions and … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.01772
- PDF: https://arxiv.org/pdf/2605.01772
- 로컬 PDF: 20260503_Anticipation-VLA Solving Long-Horizon Embodied Tasks via Anticipation-based Subgoal Generation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Anticipation-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Anticipation-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Anticipation-VLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.01772; PDF: https://arxiv.org/pdf/2605.01772가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-342"></a>
## Paper 342. From Noise to Intent: Anchoring Generative VLA Policies with Residual Bridges

- 출처/venue: "," ", Z Yang, P Tian, Y Huang… - arXiv preprint arXiv …, 2026 - arxiv.org" Bridging high-level semantic understanding with low-level physical control remains a persistent challenge in embodied intelligence, stemming from the fundamental … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.21391
- PDF: https://arxiv.org/pdf/2604.21391
- 로컬 PDF: 20260423_From Noise to Intent Anchoring Generative VLA Policies with Residual Bridges.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `From Noise to Intent`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `From Noise to Intent`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `From Noise to Intent`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.21391; PDF: https://arxiv.org/pdf/2604.21391; https://res-vla.github.io/ResVLA/; https://github.com/4DVLab/ResVLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-343"></a>
## Paper 343. Learning to See and Act: Task-Aware Virtual View Exploration for Robotic Manipulation

- 출처/venue: "," "," ", K Luo, Y Wen, M Dai… - arXiv preprint arXiv …, 2025 - arxiv.org" Recent vision-language-action (VLA) models for multi-task robotic manipulation commonly rely on static viewpoints and shared visual encoders, which limit 3D perception and cause … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2508.05186
- PDF: https://arxiv.org/pdf/2508.05186
- 로컬 PDF: 20250807_Learning to See and Act Task-Aware Virtual View Exploration for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning to See and Act`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Learning to See and Act`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Learning to See and Act`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 RLBench에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2508.05186; PDF: https://arxiv.org/pdf/2508.05186가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-344"></a>
## Paper 344. LaST-R1: Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models

- 출처/venue: ", J Liu," ", N Han, R Zhang," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-Language-Action (VLA) models have increasingly incorporated reasoning mechanisms for complex robotic manipulation. However, existing approaches share a … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.28192
- PDF: https://arxiv.org/pdf/2604.28192
- 로컬 PDF: 20260430_LaST-R1 Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LaST-R1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `LaST-R1`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `LaST-R1`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 99.9% average success rate on the LIBERO benchmark with only one-shot supervised warm-up, significantly improving convergence라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.28192; PDF: https://arxiv.org/pdf/2604.28192; https://siriyep.github.io/last-r1/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-345"></a>
## Paper 345. EveryDayVLA: A Vision-Language-Action Model for Affordable Robotic Manipulation

- 출처/venue: "," ", B Carnovale, E Sokolson… - arXiv preprint arXiv …, 2025 - arxiv.org" While Vision-Language-Action (VLA) models map visual inputs and language instructions directly to robot actions, they often rely on costly hardware and struggle in novel or cluttered … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2511.05397
- PDF: https://arxiv.org/pdf/2511.05397
- 로컬 PDF: 20251107_EveryDayVLA A Vision-Language-Action Model for Affordable Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `EveryDayVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `EveryDayVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `EveryDayVLA`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.05397; PDF: https://arxiv.org/pdf/2511.05397; https://everydayvla.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-346"></a>
## Paper 346. Adaptive Action Chunking via Multi-Chunk Q Value Estimation

- 출처/venue: "," ", S Kim, J Park," "- arXiv preprint arXiv:2605.10044, 2026 - arxiv.org" Action chunking emerged as a pivotal technique in imitation learning, enabling policies to predict cohesive action sequences rather than single actions. Recently, this approach has … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.10044
- PDF: https://arxiv.org/pdf/2605.10044
- 로컬 PDF: 20260511_Adaptive Action Chunking via Multi-Chunk Q Value Estimation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Adaptive Action Chunking via Multi-Chunk Q Value Estimation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Adaptive Action Chunking via Multi-Chunk Q Value Estimation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Adaptive Action Chunking via Multi-Chunk Q Value Estimation`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.10044; PDF: https://arxiv.org/pdf/2605.10044가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-347"></a>
## Paper 347. Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models

- 출처/venue: "," ", F Sun, X Xu, L Lium, J Zhou… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action models (VLAs) achieve remarkable performance in sequential decision-making but remain fragile to subtle environmental shifts, such as small changes in … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.18107
- PDF: https://arxiv.org/pdf/2604.18107
- 로컬 PDF: 20260420_Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Test-Time Perturbation Learning with Delayed Feedback for Vision-Language-Action Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 7.4% success rate) and Atari (+10라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.18107; PDF: https://arxiv.org/pdf/2604.18107; https://github.com/zhoujiahuan1991/CVPR2026-PDF가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-348"></a>
## Paper 348. AVA-VLA: Improving Vision-Language-Action models with Active Visual Attention

- 출처/venue: L Xiao, J Li, J Gao, ", Y Jin," ", J Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org" Vision-Language-Action (VLA) models have demonstrated remarkable capabilities in embodied AI tasks. However, existing VLA models, often built upon Vision-Language … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2511.18960
- PDF: https://arxiv.org/pdf/2511.18960
- 로컬 PDF: 20251124_AVA-VLA Improving Vision-Language-Action models with Active Visual Attention.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AVA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `AVA-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `AVA-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.18960; PDF: https://arxiv.org/pdf/2511.18960가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-349"></a>
## Paper 349. Altered Thoughts, Altered Actions: Probing Chain-of-Thought Vulnerabilities in VLA Robotic Manipulation

- 출처/venue: "," "," "- arXiv preprint arXiv:2603.12717, 2026 - arxiv.org" Recent Vision-Language-Action (VLA) models increasingly adopt chain-of-thought (CoT) reasoning, generating a natural-language plan before decoding motor commands. This … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.12717
- PDF: https://arxiv.org/pdf/2603.12717
- 로컬 PDF: 20260313_Altered Thoughts, Altered Actions Probing Chain-of-Thought Vulnerabilities in VLA Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Altered Thoughts, Altered Actions`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Altered Thoughts, Altered Actions`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Altered Thoughts, Altered Actions`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.12717; PDF: https://arxiv.org/pdf/2603.12717가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-350"></a>
## Paper 350. ProGAL-VLA: Grounded Alignment through Prospective Reasoning in Vision-Language-Action Models

- 출처/venue: "," "- arXiv preprint arXiv:2604.09824, 2026 - arxiv.org" Vision language action (VLA) models enable generalist robotic agents but often exhibit language ignorance, relying on visual shortcuts and remaining insensitive to instruction … 저장 인용 "30" "31" "32" "33" "34" "36" "37" "38" "39"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.09824
- PDF: https://arxiv.org/pdf/2604.09824
- 로컬 PDF: 20260410_ProGAL-VLA Grounded Alignment through Prospective Reasoning in Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ProGAL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `ProGAL-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `ProGAL-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.09824; PDF: https://arxiv.org/pdf/2604.09824; https://nstrndrbi.github.io/ProGAL가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-351"></a>
## Paper 351. LIBERO-X: Robustness Litmus for Vision-Language-Action Models

- 출처/venue: ", C Zhang, Q Liu," ", J Cai," … - arXiv preprint arXiv …, 2026 - arxiv.org Reliable benchmarking is critical for advancing Vision-Language-Action (VLA) models, as it reveals their generalization, robustness, and alignment of perception with language-driven … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 5
- URL: https://arxiv.org/abs/2602.06556
- PDF: https://arxiv.org/pdf/2602.06556
- 로컬 PDF: 20260206_LIBERO-X Robustness Litmus for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LIBERO-X`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `LIBERO-X`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `LIBERO-X`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.06556; PDF: https://arxiv.org/pdf/2602.06556; https://zackhxn.github.io/LIBERO-X/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-352"></a>
## Paper 352. AnyCamVLA: Zero-Shot Camera Adaptation for Viewpoint Robust Vision-Language-Action Models

- 출처/venue: ", S Woo, SM Kim, J Kim, J Lee," … - arXiv preprint arXiv …, 2026 - arxiv.org Despite remarkable progress in Vision-Language-Action models (VLAs) for robot manipulation, these large pre-trained models require fine-tuning to be deployed in specific … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.05868
- PDF: https://arxiv.org/pdf/2603.05868
- 로컬 PDF: 20260306_AnyCamVLA Zero-Shot Camera Adaptation for Viewpoint Robust Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `AnyCamVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `AnyCamVLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `AnyCamVLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.05868; PDF: https://arxiv.org/pdf/2603.05868가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-353"></a>
## Paper 353. VLA-4D: Embedding 4D Awareness into Vision-Language-Action Models for SpatioTemporally Coherent Robotic Manipulation

- 출처/venue: "," "," "- arXiv preprint arXiv:2511.17199, 2025 - arxiv.org" Vision-language-action (VLA) models show potential for general robotic tasks, but remain challenging in spatiotemporally coherent manipulation, which requires fine-grained … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2511.17199
- PDF: https://arxiv.org/pdf/2511.17199
- 로컬 PDF: 20251121_VLA-4D Embedding 4D Awareness into Vision-Language-Action Models for SpatioTemporally Coherent Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-4D`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-4D`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-4D`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.17199; PDF: https://arxiv.org/pdf/2511.17199가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-354"></a>
## Paper 354. Data Scaling for Navigation in Unknown Environments

- 출처/venue: ", N Takahata," … - arXiv preprint arXiv …, 2026 - arxiv.org Generalization of imitation-learned navigation policies to environments unseen in training remains a major challenge. We address this by conducting the first large-scale study of how … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2601.09444
- PDF: https://arxiv.org/pdf/2601.09444
- 로컬 PDF: 20260114_Data Scaling for Navigation in Unknown Environments.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Data Scaling for Navigation in Unknown Environments`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Data Scaling for Navigation in Unknown Environments`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Data Scaling for Navigation in Unknown Environments`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.09444; PDF: https://arxiv.org/pdf/2601.09444가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-355"></a>
## Paper 355. StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing

- 출처/venue: Building generalist embodied agents requires integrating perception, language understanding, and action, which are core capabilities addressed by Vision-Language … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.05014
- PDF: https://arxiv.org/pdf/2604.05014
- 로컬 PDF: 20260406_StarVLA A Lego-like Codebase for Vision-Language-Action Model Developing.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `StarVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `StarVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `StarVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, RoboTwin에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.05014; PDF: https://arxiv.org/pdf/2604.05014; https://starvla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-356"></a>
## Paper 356. Redefining End-of-Life: Intelligent Automation for Electronics Remanufacturing Systems

- 출처/venue: "," "," "," "- arXiv preprint arXiv:2604.03066, 2026 - arxiv.org" Remanufacturing is fundamentally more challenging than traditional manufacturing due to the significant uncertainty, variability, and incompleteness inherent in end-of-life (EoL) … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.03066
- PDF: https://arxiv.org/pdf/2604.03066
- 로컬 PDF: 20260403_Redefining End-of-Life Intelligent Automation for Electronics Remanufacturing Systems.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Redefining End-of-Life`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Redefining End-of-Life`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Redefining End-of-Life`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.03066; PDF: https://arxiv.org/pdf/2604.03066가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-357"></a>
## Paper 357. Hierarchical Vision Language Action Model Using Success and Failure Demonstrations

- 출처/venue: "," "," ", J Park," ", N Cho… - arXiv preprint arXiv …, 2025 - arxiv.org" Prior Vision-Language-Action (VLA) models are typically trained on teleoperated successful demonstrations, while discarding numerous failed attempts that occur naturally during data … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2512.03913
- PDF: https://arxiv.org/pdf/2512.03913
- 로컬 PDF: 20251203_Hierarchical Vision Language Action Model Using Success and Failure Demonstrations.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Hierarchical Vision Language Action Model Using Success and Failure Demonstrations`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Hierarchical Vision Language Action Model Using Success and Failure Demonstrations`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Hierarchical Vision Language Action Model Using Success and Failure Demonstrations`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.03913; PDF: https://arxiv.org/pdf/2512.03913가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-358"></a>
## Paper 358. RoboNeuron: A Modular Framework Linking Foundation Models and ROS for Embodied AI

- 출처/venue: ", H Xi," ", A Li," "," "- arXiv preprint arXiv …, 2025 - arxiv.org" Current embodied AI systems face severe engineering impediments, primarily characterized by poor cross-scenario adaptability, rigid inter-module coupling, and fragmented inference … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2512.10394
- PDF: https://arxiv.org/pdf/2512.10394
- 로컬 PDF: 20251211_RoboNeuron A Modular Framework Linking Foundation Models and ROS for Embodied AI.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboNeuron`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RoboNeuron`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RoboNeuron`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.10394; PDF: https://arxiv.org/pdf/2512.10394가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-359"></a>
## Paper 359. Learning to Manipulate Anything: Revealing Data Scaling Laws in Bounding-Box Guided Policies

- 출처/venue: Y Wu, ", J Tan, Y Yu, S Li, M Zhou, D Xiang… - arXiv preprint arXiv …, 2026 - arxiv.org" Diffusion-based policies show limited generalization in semantic manipulation, posing a key obstacle to the deployment of real-world robots. This limitation arises because relying solely … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.11885
- PDF: https://arxiv.org/pdf/2602.11885
- 로컬 PDF: 20260212_Learning to Manipulate Anything Revealing Data Scaling Laws in Bounding-Box Guided Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning to Manipulate Anything`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Learning to Manipulate Anything`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Learning to Manipulate Anything`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.11885; PDF: https://arxiv.org/pdf/2602.11885가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-360"></a>
## Paper 360. Unifying Perception and Action: A Hybrid-Modality Pipeline with Implicit Visual Chain-of-Thought for Robotic Action Generation

- 출처/venue: ", L Xing," ", W Li, S Lu - arXiv preprint arXiv:2511.19859, 2025 - arxiv.org" Vision-Language-Action (VLA) models built upon Chain-of-Thought (CoT) have achieved remarkable success in advancing general-purpose robotic agents, owing to its significant … 저장 인용 "31" "32" "33" "34" "35" "37" "38" "39" "40"
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2511.19859
- PDF: https://arxiv.org/pdf/2511.19859
- 로컬 PDF: 20251125_Unifying Perception and Action A Hybrid-Modality Pipeline with Implicit Visual Chain-of-Thought for Robotic Action Generation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Unifying Perception and Action`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Unifying Perception and Action`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Unifying Perception and Action`를 중심으로 연속적인 로봇 행동을 더 잘 다룰 수 있도록 행동 표현이나 토큰화를 바꾸는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 VITA attains an average success rate of 80.5%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.19859; PDF: https://arxiv.org/pdf/2511.19859; https://vita-cvpr26.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-361"></a>
## Paper 361. Review of Reinforcement Learning for Large Language Models: Formulations, Algorithms, and Opportunities

- 출처/venue: "," "," "," "," ", Y Yu - 2025 - liziniu.org" Large Language Models (LLMs) represent significant milestones in artificial intelligence development. While pre-training on vast text corpora and subsequent supervised fine-tuning … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: http://www.liziniu.org/docs/RL4LLM_Survey.pdf
- PDF: http://www.liziniu.org/docs/RL4LLM_Survey.pdf
- 로컬 PDF: 2025_Review of Reinforcement Learning for Large Language Models Formulations, Algorithms, and Opportunities.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Review of Reinforcement Learning for Large Language Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Review of Reinforcement Learning for Large Language Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: http://www.liziniu.org/docs/RL4LLM_Survey.pdf; PDF: http://www.liziniu.org/docs/RL4LLM_Survey.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-362"></a>
## Paper 362. SAM2Grasp: Resolve Multi-modal Grasping via Prompt-conditioned Temporal Action Prediction

- 출처/venue: "," ", W Luo, L Gao, C Shang, M Zhi… - arXiv preprint arXiv …, 2025 - arxiv.org" "Imitation learning for robotic grasping is often plagued by the multimodal problem: when a" scene contains multiple valid targets, demonstrations of grasping different objects create … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2512.02609
- PDF: https://arxiv.org/pdf/2512.02609
- 로컬 PDF: 20251202_SAM2Grasp Resolve Multi-modal Grasping via Prompt-conditioned Temporal Action Prediction.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SAM2Grasp`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SAM2Grasp`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SAM2Grasp`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.02609; PDF: https://arxiv.org/pdf/2512.02609가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-363"></a>
## Paper 363. \\mathcal{E}_0: Enhancing Generalization and Fine-Grained Control in VLA Models via Continuized Discrete Diffusion

- 출처/venue: ": Enhancing Generalization and Fine-Grained Control in VLA Models via Continuized Discrete Diffusion" ", J Zhou," ", Q Lv, H Liu, J Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org" Vision-Language-Action (VLA) models offer a unified framework for robotic manipulation by integrating visual perception, language understanding, and control generation. Yet existing … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2511.21542
- PDF: https://arxiv.org/pdf/2511.21542
- 로컬 PDF: 20251126_mathcal{E}_0 Enhancing Generalization and Fine-Grained Control in VLA Models via Continuized Discrete Diffusion.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `\\mathcal{E}_0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `\\mathcal{E}_0`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `\\mathcal{E}_0`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.21542; PDF: https://arxiv.org/pdf/2511.21542; https://doo-mon.github.io/e0web가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-364"></a>
## Paper 364. Integrating World Models into Vision Language Action and Navigation: A Comprehensive Survey

- 출처/venue: J Sun, ", Z Liu," "," "," "," … - Authorea …, 2025 - techrxiv.org World models are a transformative paradigm in embodied AI, enabling agents to learn efficiently and plan by simulating environmental dynamics. As vision-language action and … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176531987.77979037
- PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176531987.77979037
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Integrating World Models into Vision Language Action and Navigation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Integrating World Models into Vision Language Action and Navigation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176531987.77979037; PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176531987.77979037가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-365"></a>
## Paper 365. D2E: Scaling Vision-Action Pretraining on Desktop Data for Transfer to Embodied AI

- 출처/venue: "," "," "," "," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Large language models leverage internet-scale text data, yet embodied AI remains constrained by the prohibitive costs of physical trajectory collection. Desktop environments … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2510.05684
- PDF: https://arxiv.org/pdf/2510.05684
- 로컬 PDF: 20251007_D2E Scaling Vision-Action Pretraining on Desktop Data for Transfer to Embodied AI.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `D2E`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 내비게이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `D2E`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `D2E`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과에는 96.6% success on LIBERO manipulation and 83라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 내비게이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.05684; PDF: https://arxiv.org/pdf/2510.05684; https://worv-ai.github.io/d2e/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-366"></a>
## Paper 366. FocusVLA: Focused Visual Utilization for Vision-Language-Action Models

- 출처/venue: Y Zhang, ", Y Zhang, X Zhang, J Wan - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models improve action generation by conditioning policies on rich vision-language information. However, current auto-regressive policies are … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.28740
- PDF: https://arxiv.org/pdf/2603.28740
- 로컬 PDF: 20260330_FocusVLA Focused Visual Utilization for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FocusVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `FocusVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `FocusVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.28740; PDF: https://arxiv.org/pdf/2603.28740가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-367"></a>
## Paper 367. From Imagined Futures to Executable Actions: Mixture of Latent Actions for Robot Manipulation

- 출처/venue: Y Li, ", C Gu, Z Ma, J Zhang, J Deng… - arXiv preprint arXiv …, 2026 - arxiv.org" Video generation models offer a promising imagination mechanism for robot manipulation by predicting long-horizon future observations, but effectively exploiting these imagined … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.12167
- PDF: https://arxiv.org/pdf/2605.12167
- 로컬 PDF: 20260512_From Imagined Futures to Executable Actions Mixture of Latent Actions for Robot Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `From Imagined Futures to Executable Actions`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `From Imagined Futures to Executable Actions`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `From Imagined Futures to Executable Actions`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.12167; PDF: https://arxiv.org/pdf/2605.12167; https://logosroboticsgroup.github.io/MoLA가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-368"></a>
## Paper 368. VLingNav: Embodied Navigation with Adaptive Reasoning and Visual-Assisted Linguistic Memory

- 출처/venue: ", Y Luo, X Chen," ", D Li, C Liu… - arXiv preprint arXiv …, 2026 - arxiv.org" VLA models have shown promising potential in embodied navigation by unifying perception and planning while inheriting the strong generalization abilities of large VLMs. However … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2601.08665
- PDF: https://arxiv.org/pdf/2601.08665
- 로컬 PDF: 20260113_VLingNav Embodied Navigation with Adaptive Reasoning and Visual-Assisted Linguistic Memory.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLingNav`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLingNav`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLingNav`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.08665; PDF: https://arxiv.org/pdf/2601.08665; https://wsakobe.github.io/VLingNav-web/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-369"></a>
## Paper 369. Fine-Tuning Integrity for Modern Neural Networks: Structured Drift Proofs via Norm, Rank, and Sparsity Certificates

- 출처/venue: ", K Chen - arXiv preprint arXiv:2604.04738, 2026 - arxiv.org" Fine-tuning is now the primary method for adapting large neural networks, but it also introduces new integrity risks. An untrusted party can insert backdoors, change safety … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.04738
- PDF: https://arxiv.org/pdf/2604.04738
- 로컬 PDF: 20260406_Fine-Tuning Integrity for Modern Neural Networks Structured Drift Proofs via Norm, Rank, and Sparsity Certificates.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Fine-Tuning Integrity for Modern Neural Networks`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Fine-Tuning Integrity for Modern Neural Networks`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Fine-Tuning Integrity for Modern Neural Networks`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.04738; PDF: https://arxiv.org/pdf/2604.04738가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-370"></a>
## Paper 370. Causal World Modeling for Robot Control

- 출처/venue: "," "," "," "," ", F Han… - arXiv preprint arXiv …, 2026 - arxiv.org" This work highlights that video world modeling, alongside vision-language pre-training, establishes a fresh and independent foundation for robot learning. Intuitively, video world … 저장 인용 "32" "33" "34" "35" "36" "38" "39" "40" "41"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 42
- URL: https://arxiv.org/abs/2601.21998
- PDF: https://arxiv.org/pdf/2601.21998
- 로컬 PDF: 20260129_Causal World Modeling for Robot Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Causal World Modeling for Robot Control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Causal World Modeling for Robot Control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Causal World Modeling for Robot Control`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.21998; PDF: https://arxiv.org/pdf/2601.21998; https://github.com/robbyant/lingbot-va; https://huggingface.co/robbyant/lingbot-va가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-371"></a>
## Paper 371. \\pi_\\texttt{RL}: Online RL Fine-tuning for Flow-based Vision-Language-Action Models

- 출처/venue: ": Online RL Fine-tuning for Flow-based Vision-Language-Action Models" "," "," ", Z Guo, S Xu, H Lin… - arXiv preprint arXiv …, 2025 - arxiv.org" Vision-Language-Action (VLA) models enable robots to understand and perform complex tasks from multimodal input. Although recent work explores using reinforcement learning … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2510.25889
- PDF: https://arxiv.org/pdf/2510.25889
- 로컬 PDF: 20251029_pi_ texttt{RL} Online RL Fine-tuning for Flow-based Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `\\pi_\\texttt{RL}`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `\\pi_\\texttt{RL}`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `\\pi_\\texttt{RL}`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT, π0 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.25889; PDF: https://arxiv.org/pdf/2510.25889; https://github.com/RLinf/RLinf; https://huggingface.co/RLinf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-372"></a>
## Paper 372. Sliding-Cache VLA: Training-Free Acceleration of Vision Language Action Models via Foreground-Background Decoupling

- 출처/venue: Vision Language Action (VLA) models have demonstrated remarkable potential in robotic applications, yet they encounter substantial latency issues when deployed in real-time … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ieeexplore.ieee.org/abstract/document/11464271/
- PDF: https://ieeexplore.ieee.org/iel8/11460365/11460314/11464271.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Sliding-Cache VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Sliding-Cache VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Sliding-Cache VLA`를 중심으로 추론 시간과 계산량을 줄이기 위해 VLA 내부 표현이나 디코딩 절차를 경량화하는 방법을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11464271/; PDF: https://ieeexplore.ieee.org/iel8/11460365/11460314/11464271.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-373"></a>
## Paper 373. Act, Sense, Act: Learning Non-Markovian Active Perception Strategies from Large-Scale Egocentric Human Data

- 출처/venue: "," ", Y Guo, C Chen," "- arXiv preprint arXiv:2602.04600, 2026 - arxiv.org" Achieving generalizable manipulation in unconstrained environments requires the robot to proactively resolve information uncertainty, ie, the capability of active perception. However … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2602.04600
- PDF: https://arxiv.org/pdf/2602.04600
- 로컬 PDF: 20260204_Act, Sense, Act Learning Non-Markovian Active Perception Strategies from Large-Scale Egocentric Human Data.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Act, Sense, Act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Act, Sense, Act`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Act, Sense, Act`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.04600; PDF: https://arxiv.org/pdf/2602.04600가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-374"></a>
## Paper 374. L1 Sample Flow for Efficient Visuomotor Learning

- 출처/venue: "," ", T Xu," "," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Denoising-based models, such as diffusion and flow matching, have been a critical component of robotic manipulation for their strong distribution-fitting and scaling capacity … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2511.17898
- PDF: https://arxiv.org/pdf/2511.17898
- 로컬 PDF: 20251122_L1 Sample Flow for Efficient Visuomotor Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `L1 Sample Flow for Efficient Visuomotor Learning`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `L1 Sample Flow for Efficient Visuomotor Learning`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `L1 Sample Flow for Efficient Visuomotor Learning`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.17898; PDF: https://arxiv.org/pdf/2511.17898가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-375"></a>
## Paper 375. Differentiate-and-Inject: Enhancing VLAs via Functional Differentiation Induced by In-Parameter Structural Reasoning

- 출처/venue: ", L Zhou, C Jing, J Yang, X Yu, W He - arXiv preprint arXiv …, 2026 - arxiv.org" As robots are expected to perform increasingly diverse tasks, they must understand not only low-level actions but also the higher-level structure that determines how a task should … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2602.07541
- PDF: https://arxiv.org/pdf/2602.07541
- 로컬 PDF: 20260207_Differentiate-and-Inject Enhancing VLAs via Functional Differentiation Induced by In-Parameter Structural Reasoning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Differentiate-and-Inject`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Differentiate-and-Inject`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Differentiate-and-Inject`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.07541; PDF: https://arxiv.org/pdf/2602.07541; https://github.com/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-376"></a>
## Paper 376. Landmark-Based Goal Recognition for Shared Autonomy: A Framework for Enhanced Teleoperation

- 출처/venue: G Lorthioir, … - 2025 IEEE/RSJ …, 2025 - ieeexplore.ieee.org Shared autonomy is the future of teleoperation as it reduces the teleoperator's burden, enhances capabilities, and improves embodiment by offering seamless control of the robot … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ieeexplore.ieee.org/abstract/document/11245815/
- PDF: https://ieeexplore.ieee.org/iel8/11245651/11245652/11245815.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Landmark-Based Goal Recognition for Shared Autonomy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 추론 및 계획 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Landmark-Based Goal Recognition for Shared Autonomy`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Landmark-Based Goal Recognition for Shared Autonomy`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 추론 및 계획 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11245815/; PDF: https://ieeexplore.ieee.org/iel8/11245651/11245652/11245815.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-377"></a>
## Paper 377. VLA-GSE: Boosting Parameter-Efficient Fine-Tuning in VLA with Generalized and Specialized Experts

- 출처/venue: ", J Lu, X Qin, X Chen, K Wang," … - arXiv preprint arXiv …, 2026 - arxiv.org Vision-language-action (VLA) models inherit rich visual-semantic priors from pre-trained vision-language backbones, but adapting them to robotic control remains challenging. Full … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.06175
- PDF: https://arxiv.org/pdf/2605.06175
- 로컬 PDF: 20260507_VLA-GSE Boosting Parameter-Efficient Fine-Tuning in VLA with Generalized and Specialized Experts.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-GSE`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-GSE`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-GSE`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 2.51% of full model pa- rameters and consistently outperforms strong FFT and PEFT baselines라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.06175; PDF: https://arxiv.org/pdf/2605.06175; https://github.com/YuhuaJiang2002/VLA-GSE가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-378"></a>
## Paper 378. MoS-VLA: A Vision-Language-Action Model with One-Shot Skill Adaptation

- 출처/venue: "," "," "," "- arXiv preprint arXiv …, 2025 - arxiv.org" Vision-Language-Action (VLA) models trained on large robot datasets promise general- purpose, robust control across diverse domains and embodiments. However, existing … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2510.16617
- PDF: https://arxiv.org/pdf/2510.16617
- 로컬 PDF: 20251018_MoS-VLA A Vision-Language-Action Model with One-Shot Skill Adaptation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MoS-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `MoS-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `MoS-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 Open X-Embodiment에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.16617; PDF: https://arxiv.org/pdf/2510.16617가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-379"></a>
## Paper 379. Action Draft and Verify: A Self-Verifying Framework for Vision-Language-Action Model

- 출처/venue: C Zhao, Z Wang, ", S Bao, G Li, Y Feng, Y Li… - arXiv preprint arXiv …, 2026 - arxiv.org" Vision-Language-Action (VLA) models have recently demonstrated strong performance across embodied tasks. Modern VLAs commonly employ diffusion action experts to … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.18091
- PDF: https://arxiv.org/pdf/2603.18091
- 로컬 PDF: 20260318_Action Draft and Verify A Self-Verifying Framework for Vision-Language-Action Model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Action Draft and Verify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Action Draft and Verify`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Action Draft and Verify`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.18091; PDF: https://arxiv.org/pdf/2603.18091가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-380"></a>
## Paper 380. CARE: Multi-Task Pretraining for Latent Continuous Action Representation in Robot Control

- 출처/venue: Recent advances in Vision-Language-Action (VLA) models have shown promise for robot control, but their dependence on action supervision limits scalability and generalization. To … 저장 인용 "33" "34" "35" "36" "37" "39" "40" "41" "42"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2601.22467
- PDF: https://arxiv.org/pdf/2601.22467
- 로컬 PDF: 20260130_CARE Multi-Task Pretraining for Latent Continuous Action Representation in Robot Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CARE`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CARE`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CARE`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.22467; PDF: https://arxiv.org/pdf/2601.22467가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-381"></a>
## Paper 381. Fast Visuomotor Policy for Robotic Manipulation

- 출처/venue: J Jia, ", X Chen, C Liu, W Zhang - arXiv preprint arXiv:2510.12483, 2025 - arxiv.org" We present a fast and effective policy framework for robotic manipulation, named Energy Policy, designed for high-frequency robotic tasks and resource-constrained systems. Unlike … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2510.12483
- PDF: https://arxiv.org/pdf/2510.12483?
- 로컬 PDF: 20251014_Fast Visuomotor Policy for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Fast Visuomotor Policy for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Fast Visuomotor Policy for Robotic Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Fast Visuomotor Policy for Robotic Manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2510.12483; PDF: https://arxiv.org/pdf/2510.12483?가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-382"></a>
## Paper 382. SuperSuit: An Isomorphic Bimodal Interface for Scalable Mobile Manipulation

- 출처/venue: T Chen, ", J Wang, X Li, Z Jin, L Fang - arXiv preprint arXiv …, 2026 - arxiv.org" High-quality, long-horizon demonstrations are essential for embodied AI, yet acquiring such data for tightly coupled wheeled mobile manipulators remains a fundamental bottleneck … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.06280
- PDF: https://arxiv.org/pdf/2603.06280
- 로컬 PDF: 20260306_SuperSuit An Isomorphic Bimodal Interface for Scalable Mobile Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `SuperSuit`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `SuperSuit`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `SuperSuit`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.06280; PDF: https://arxiv.org/pdf/2603.06280가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-383"></a>
## Paper 383. Learning to Feel the Future: DreamTacVLA for Contact-Rich Manipulation

- 출처/venue: ", Z Zhang," ", S Wu," "," … - arXiv preprint arXiv …, 2025 - arxiv.org Vision-Language-Action (VLA) models have shown remarkable generalization by mapping web-scale knowledge to robotic control, yet they remain blind to physical contact … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 2
- URL: https://arxiv.org/abs/2512.23864
- PDF: https://arxiv.org/pdf/2512.23864
- 로컬 PDF: 20251229_Learning to Feel the Future DreamTacVLA for Contact-Rich Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning to Feel the Future`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Learning to Feel the Future`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Learning to Feel the Future`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 95% success, highlighting the importance of under- standing physical contact for robust, touch-aware robotic agents라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.23864; PDF: https://arxiv.org/pdf/2512.23864; https://michaelyeah7.github가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-384"></a>
## Paper 384. Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation

- 출처/venue: Y Wu, H Wang, ", G Yuan, D Xu - arXiv preprint arXiv:2604.10170, 2026 - arxiv.org" The growing complexity of visuomotor policies poses significant challenges for deployment with heterogeneous robotic hardware constraints. However, most existing model-efficient … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.10170
- PDF: https://arxiv.org/pdf/2604.10170
- 로컬 PDF: 20260411_Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Device-Conditioned Neural Architecture Search for Efficient Robotic Manipulation`를 중심으로 행동 생성을 diffusion 또는 flow 기반 정책으로 다루는 제어 모델을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 OpenVLA 같은 환경 또는 데이터셋을 중심으로 수행된 것으로 확인된다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 OpenVLA, ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.10170; PDF: https://arxiv.org/pdf/2604.10170가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-385"></a>
## Paper 385. CoRAL: Contact-Rich Adaptive LLM-based Control for Robotic Manipulation

- 출처/venue: ", MK Er, ÖS Öğüz - arXiv preprint arXiv:2605.02600, 2026 - arxiv.org" While Large Language Models (LLMs) and Vision-Language Models (VLMs) demonstrate remarkable capabilities in high-level reasoning and semantic understanding, applying them … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.02600
- PDF: https://arxiv.org/pdf/2605.02600
- 로컬 PDF: 20260504_CoRAL Contact-Rich Adaptive LLM-based Control for Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CoRAL`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CoRAL`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CoRAL`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.02600; PDF: https://arxiv.org/pdf/2605.02600가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-386"></a>
## Paper 386. Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation

- 출처/venue: ", Y Yan, Y Zhao, H Wang," "- arXiv preprint arXiv:2604.10055, 2026 - arxiv.org" Despite their strong performance in embodied tasks, recent Vision-Language-Action (VLA) models remain highly fragile under multimodal perturbations, where visual corruption and … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.10055
- PDF: https://arxiv.org/pdf/2604.10055
- 로컬 PDF: 20260411_Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Vision-Language-Action Model, Robustness, Multi-modal Learning, Robot Manipulation`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, OpenVLA에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 12.60% under seen perturbations and 7라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 OpenVLA, ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.10055; PDF: https://arxiv.org/pdf/2604.10055가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-387"></a>
## Paper 387. Closing the Motion Execution Gap: From Semantic Motion Task Constraints to Kinematic Control

- 출처/venue: S Stelter, ", M Huerkamp… - arXiv preprint arXiv …, 2026 - arxiv.org" This paper addresses the Motion Execution Gap, the disconnect between high-level symbolic task descriptions using semantic constraints and executable robot motions. Motion … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.12053
- PDF: https://arxiv.org/pdf/2605.12053
- 로컬 PDF: 20260512_Closing the Motion Execution Gap From Semantic Motion Task Constraints to Kinematic Control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Closing the Motion Execution Gap`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 월드모델과 시뮬레이션 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Closing the Motion Execution Gap`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Closing the Motion Execution Gap`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 월드모델과 시뮬레이션 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.12053; PDF: https://arxiv.org/pdf/2605.12053; https://github.com/cram2/cognitive가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-388"></a>
## Paper 388. From Pixels to Tokens: A Systematic Study of Latent Action Supervision for Vision-Language-Action Models

- 출처/venue: Latent actions serve as an intermediate representation that enables consistent modeling of vision-language-action (VLA) models across heterogeneous datasets. However … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2605.04678
- PDF: https://arxiv.org/pdf/2605.04678
- 로컬 PDF: 20260506_From Pixels to Tokens A Systematic Study of Latent Action Supervision for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `From Pixels to Tokens`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `From Pixels to Tokens`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `From Pixels to Tokens`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2605.04678; PDF: https://arxiv.org/pdf/2605.04678가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-389"></a>
## Paper 389. VLA-LPAF: Lightweight Perspective-Adaptive Fusion for Vision-Language-Action to Enable More Unconstrained Robotic Manipulation

- 출처/venue: J Bian, ", Z Liang, S Zheng, S Zhang… - arXiv preprint arXiv …, 2025 - arxiv.org" The Visual-Language-Action (VLA) models can follow text instructions according to visual observations of the surrounding environment. This ability to map multimodal inputs to … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2509.18183
- PDF: https://arxiv.org/pdf/2509.18183?
- 로컬 PDF: 20250918_VLA-LPAF Lightweight Perspective-Adaptive Fusion for Vision-Language-Action to Enable More Unconstrained Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `VLA-LPAF`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `VLA-LPAF`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `VLA-LPAF`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO, CALVIN에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 8%task success rate improvement on CALVIN,15%on LIBERO, and30%on a custom simulation benchmark라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2509.18183; PDF: https://arxiv.org/pdf/2509.18183?가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-390"></a>
## Paper 390. A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation

- 출처/venue: The generalization ability of visuomotor policy is crucial, as a good policy should be deployable across diverse scenarios. Some methods can collect large amounts of trajectory … 저장 인용 "34" "35" "36" "37" "38" "40" "41" "42" "43"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2511.09932
- PDF: https://arxiv.org/pdf/2511.09932
- 로컬 PDF: 20251113_A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `A Study on Enhancing the Generalization Ability of Visuomotor Policies via Data Augmentation`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.09932; PDF: https://arxiv.org/pdf/2511.09932가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-391"></a>
## Paper 391. Compressor-VLA: Instruction-Guided Visual Token Compression for Efficient Robotic Manipulation

- 출처/venue: J Gao, ", J Zhang, W Qian - arXiv preprint arXiv:2511.18950, 2025 - arxiv.org" Vision-Language-Action (VLA) models have emerged as a powerful paradigm in Embodied AI. However, the significant computational overhead of processing redundant visual tokens … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 3
- URL: https://arxiv.org/abs/2511.18950
- PDF: https://arxiv.org/pdf/2511.18950
- 로컬 PDF: 20251124_Compressor-VLA Instruction-Guided Visual Token Compression for Efficient Robotic Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Compressor-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `Compressor-VLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `Compressor-VLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 LIBERO에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 59% and the visual token count by over 3x compared to its baseline라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2511.18950; PDF: https://arxiv.org/pdf/2511.18950가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-392"></a>
## Paper 392. Sigma: The Key for Vision-Language-Action Models toward Telepathic Alignment

- 출처/venue: "- arXiv preprint arXiv:2512.00783, 2025 - arxiv.org" To address the gap in humanoid robot cognitive systems regarding the lack of a time- updable mediating thought space between semantics and continuous control, this study … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 1
- URL: https://arxiv.org/abs/2512.00783
- PDF: https://arxiv.org/pdf/2512.00783
- 로컬 PDF: 20251130_Sigma The Key for Vision-Language-Action Models toward Telepathic Alignment.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Sigma`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Sigma`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Sigma`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2512.00783; PDF: https://arxiv.org/pdf/2512.00783가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-393"></a>
## Paper 393. Efficient Architectures and Learning Strategies for Large Vision Language Models

- 출처/venue: Abstract Large Vision-Language Models (LVLMs) have emerged as a powerful paradigm for multimodal artificial intelligence, enabling unified reasoning over visual and textual inputs … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176827296.68744162
- PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176827296.68744162
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Efficient Architectures and Learning Strategies for Large Vision Language Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Efficient Architectures and Learning Strategies for Large Vision Language Models`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Efficient Architectures and Learning Strategies for Large Vision Language Models`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176827296.68744162; PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176827296.68744162가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-394"></a>
## Paper 394. CORAL: Scalable Multi-Task Robot Learning via LoRA Experts

- 출처/venue: ", W Chen, T Liang, Z Li - arXiv preprint arXiv:2603.09298, 2026 - arxiv.org" Deploying Vision-Language-Action (VLA) models in real-world robotics exposes a core multi- "task learning challenge: reconciling task interference in multi-task robotic learning. When …" 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.09298
- PDF: https://arxiv.org/pdf/2603.09298
- 로컬 PDF: 20260310_CORAL Scalable Multi-Task Robot Learning via LoRA Experts.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CORAL`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CORAL`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CORAL`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.09298; PDF: https://arxiv.org/pdf/2603.09298; https://frontierrobo.github.io/CORAL가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-395"></a>
## Paper 395. Towards Computationally Efficient Large Vision Language Models for Scalable Multimodal Intelligence

- 출처/venue: Large Vision-Language Models (LVLMs) have emerged as a powerful paradigm for multimodal artificial intelligence, enabling unified systems that jointly process visual and … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176827212.22653010
- PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176827212.22653010
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Towards Computationally Efficient Large Vision Language Models for Scalable Multimodal Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Towards Computationally Efficient Large Vision Language Models for Scalable Multimodal Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Towards Computationally Efficient Large Vision Language Models for Scalable Multimodal Intelligence`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.techrxiv.org/doi/full/10.36227/techrxiv.176827212.22653010; PDF: https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176827212.22653010가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-396"></a>
## Paper 396. Embodied Multimedia: When Multimedia Meets Embodied Intelligence

- 출처/venue: W Zuo, ", W Yang, F Wu," ", J Liu… - Available at SSRN …, 2026 - papers.ssrn.com" Multimedia technology has historically focused on optimizing sensory experiences for human observers. However, with the paradigm shift from conventional Artificial Intelligence … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6456578
- PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=6456578
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Embodied Multimedia`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Embodied Multimedia`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Embodied Multimedia`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6456578; PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=6456578가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-397"></a>
## Paper 397. PhysiFlow: Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching and Robust Tracking

- 출처/venue: W Qin, S Wu, ", M Liu, L Feng, X Cui… - arXiv preprint arXiv …, 2026 - arxiv.org" In the domain of humanoid robot control, the fusion of Vision-Language-Action (VLA) with whole-body control is essential for semantically guided execution of real-world tasks … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2603.05410
- PDF: https://arxiv.org/pdf/2603.05410
- 로컬 PDF: 20260305_PhysiFlow Physics-Aware Humanoid Whole-Body VLA via Multi-Brain Latent Flow Matching and Robust Tracking.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PhysiFlow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PhysiFlow`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PhysiFlow`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2603.05410; PDF: https://arxiv.org/pdf/2603.05410가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-398"></a>
## Paper 398. Box-Chain VLA: Explicit Reasoning-to-Action Interfaces for Generalizable Robotic Manipulation

- 출처/venue: Vision-Language-Action (VLA) models have recently demonstrated strong capabilities in mapping multimodal inputs to robotic control. However, a critical limitation persists … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://ieeexplore.ieee.org/abstract/document/11464640/
- PDF: https://ieeexplore.ieee.org/iel8/11460365/11460314/11464640.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Box-Chain VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Box-Chain VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Box-Chain VLA`를 중심으로 지각 결과와 언어 지시를 장기 의사결정 또는 계획 표현으로 연결하는 구조을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://ieeexplore.ieee.org/abstract/document/11464640/; PDF: https://ieeexplore.ieee.org/iel8/11460365/11460314/11464640.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-399"></a>
## Paper 399. RL-VLA^3: Reinforcement Learning VLA Accelerating via Full Asynchronism

- 출처/venue: RL-VLA ": Reinforcement Learning VLA Accelerating via Full Asynchronism" "," "," ", S Di, X Bai, J Long… - arXiv preprint arXiv …, 2026 - arxiv.org" In recent years, Vision-Language-Action (VLA) models have emerged as a crucial pathway towards general embodied intelligence, yet their training efficiency has become a key … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 4
- URL: https://arxiv.org/abs/2602.05765
- PDF: https://arxiv.org/pdf/2602.05765
- 로컬 PDF: 20260205_RL-VLA^3 Reinforcement Learning VLA Accelerating via Full Asynchronism.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RL-VLA^3`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `RL-VLA^3`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `RL-VLA^3`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 algorithms demonstrate that RL-VLA3 achieves throughput improvements of up to 85.2%라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2602.05765; PDF: https://arxiv.org/pdf/2602.05765가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-400"></a>
## Paper 400. PyBatchRender: A Python Library for Batched 3D Rendering at Up to One Million FPS

- 출처/venue: "," "," "- arXiv preprint arXiv:2601.01288, 2026 - arxiv.org" Reinforcement learning from pixels is often bottlenecked by the performance and complexity of 3D rendered environments. Researchers face a trade-off between high-speed, low-level … 저장 인용 "34" "35" "36" "37" "38" "39" "41" "42" "43"
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2601.01288
- PDF: https://arxiv.org/pdf/2601.01288
- 로컬 PDF: 20260103_PyBatchRender A Python Library for Batched 3D Rendering at Up to One Million FPS.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PyBatchRender`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PyBatchRender`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PyBatchRender`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과에는 ning from pixels is often bottlenecked by the performance and complexity of 3라는 정량 신호가 포함되어 있어 성능 또는 효율 개선을 주장하지만, 전체 비교표의 맥락은 원문 확인이 필요하다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2601.01288; PDF: https://arxiv.org/pdf/2601.01288; https://github.com/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-401"></a>
## Paper 401. LongBench: Evaluating Robotic Manipulation Policies on Real-World Long-Horizon Tasks

- 출처/venue: Robotic manipulation policies often degrade over extended horizons, yet existing benchmarks provide limited insight into why such failures occur. Most prior benchmarks are … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://arxiv.org/abs/2604.16788
- PDF: https://arxiv.org/pdf/2604.16788
- 로컬 PDF: 20260418_LongBench Evaluating Robotic Manipulation Policies on Real-World Long-Horizon Tasks.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `LongBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `LongBench`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `LongBench`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://arxiv.org/abs/2604.16788; PDF: https://arxiv.org/pdf/2604.16788; https://cxy0103.github.io/LongBench_Website/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-402"></a>
## Paper 402. Safety of Vision-Language-Action Models: A Survey from Lifecycle Perspectives

- 출처/venue: ", F Liu, R Wei, Z Wang," ", H Huang… - Authorea …, 2026 - authorea.com" Vision-Language-Action (VLA) models have recently emerged as a promising paradigm for embodied intelligence, enabling robots to perform complex actions over multimodal … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.authorea.com/doi/full/10.22541/au.177524426.60806944
- PDF: https://www.authorea.com/doi/pdf/10.22541/au.177524426.60806944
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Safety of Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Safety of Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 Scholar 메타데이터와 확인된 URL 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.authorea.com/doi/full/10.22541/au.177524426.60806944; PDF: https://www.authorea.com/doi/pdf/10.22541/au.177524426.60806944가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-403"></a>
## Paper 403. Vision-Language-Action Instruction Tuning: From Understanding to Manipulation

- 출처/venue: ", H Li," "," ", Y Tian," … - … Conference on Learning … - openreview.net To operate effectively in the real world, robots should integrate multimodal reasoning with precise action generation. However, existing vision-language-action (VLA) models often … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=tsxwloasw5
- PDF: https://openreview.net/pdf?id=tsxwloasw5
- 로컬 PDF: undated_Vision-Language-Action Instruction Tuning From Understanding to Manipulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Vision-Language-Action Instruction Tuning`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Vision-Language-Action Instruction Tuning`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=tsxwloasw5; PDF: https://openreview.net/pdf?id=tsxwloasw5가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-404"></a>
## Paper 404. FASTer: Toward Powerful and Efficient Autoregressive Vision–Language–Action Models with Learnable Action Tokenizer and Block-wise Decoding

- 출처/venue: Y Liu, "," "," "," "," … - … Conference on Learning … - openreview.net Autoregressive vision-language-action (VLA) models have recently demonstrated strong capabilities in robotic manipulation. However, their core process of action tokenization often … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=k6nTUFoqeT
- PDF: https://openreview.net/pdf?id=k6nTUFoqeT
- 로컬 PDF: undated_FASTer Toward Powerful and Efficient Autoregressive Vision–Language–Action Models with Learnable Action Tokenizer and Block-wise Decoding.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FASTer`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `FASTer`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=k6nTUFoqeT; PDF: https://openreview.net/pdf?id=k6nTUFoqeT가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-405"></a>
## Paper 405. Robots That Last: Long-Horizon Robotics Should Optimize Persistent Autonomy

- 출처/venue: ", X Zhou, D Wang, H Xu, W Liu," "- 2026 - preprints.org" This position paper argues that long-horizon robotics should optimize persistent autonomy, not only longer reset-based episodes. Real deployments require robots that remain safely … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.preprints.org/manuscript/202604.2037
- PDF: https://www.preprints.org/frontend/manuscript/61b1f05b6f51fd9f3828d25a89d47a2e/download_pub
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Robots That Last`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Robots That Last`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Robots That Last`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.preprints.org/manuscript/202604.2037; PDF: https://www.preprints.org/frontend/manuscript/61b1f05b6f51fd9f3828d25a89d47a2e/download_pub가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-406"></a>
## Paper 406. Toward Efficient Large Vision Language Models for Scalable Multimodal Intelligence

- 출처/venue: Abstract Large Vision-Language Models (LVLMs) have recently emerged as a powerful paradigm for multimodal artificial intelligence, enabling unified understanding and … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6055374
- PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=6055374
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Toward Efficient Large Vision Language Models for Scalable Multimodal Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Toward Efficient Large Vision Language Models for Scalable Multimodal Intelligence`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Toward Efficient Large Vision Language Models for Scalable Multimodal Intelligence`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6055374; PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=6055374가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-407"></a>
## Paper 407. Interleave-VLA: Enhancing Robot Manipulation with Image-Text Interleaved Instructions

- 출처/venue: C Fan, ", Y Sun, Y Wang," "," … - … Conference on Learning … - openreview.net The rise of foundation models paves the way for generalist robot policies in the physical world. Existing methods relying on text-only instructions often struggle to generalize to … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=ULTWUuGhC3
- PDF: https://openreview.net/pdf?id=ULTWUuGhC3
- 로컬 PDF: undated_Interleave-VLA Enhancing Robot Manipulation with Image-Text Interleaved Instructions.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Interleave-VLA`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Interleave-VLA`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=ULTWUuGhC3; PDF: https://openreview.net/pdf?id=ULTWUuGhC3가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-408"></a>
## Paper 408. ELMUR: External Layer Memory with Update/Rewrite for Long-Horizon RL Problems

- 출처/venue: ", A Kovalev," "- The Fourteenth International … - openreview.net" Real-world robotic agents must act under partial observability and long horizons, where key cues may appear long before they affect decision making. However, most modern … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=bm3rbtEMFj
- PDF: https://openreview.net/pdf?id=bm3rbtEMFj
- 로컬 PDF: undated_ELMUR External Layer Memory with Update Rewrite for Long-Horizon RL Problems.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ELMUR`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `ELMUR`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=bm3rbtEMFj; PDF: https://openreview.net/pdf?id=bm3rbtEMFj; https://elmur-paper.github.io/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-409"></a>
## Paper 409. Unified Vision-Language-Action Model

- 출처/venue: Vision-language-action models (VLAs) have garnered significant attention for their potential in advancing robotic manipulation. However, previous approaches predominantly rely on … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=PklMD8PwUy
- PDF: https://openreview.net/pdf?id=PklMD8PwUy
- 로컬 PDF: 20250624_Unified vision-language-action model.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Unified Vision-Language-Action Model`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Unified Vision-Language-Action Model`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=PklMD8PwUy; PDF: https://openreview.net/pdf?id=PklMD8PwUy; https://robertwyq.github.io/univla.github.io가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-410"></a>
## Paper 410. ManipEvalAgent: Promptable and Efficient Evaluation Framework for Robotic Manipulation Policies

- 출처/venue: "," ", S Wang," "," "- The Fourteenth International … - openreview.net" In recent years, robotic manipulation policies have made substantial progress. However, evaluating these policies typically requires large-scale sampling in simulation benchmarks … 저장 인용 "34" "35" "36" "37" "38" "39" "40" "42" "43"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=3u6AkbWEls
- PDF: https://openreview.net/pdf?id=3u6AkbWEls
- 로컬 PDF: undated_ManipEvalAgent Promptable and Efficient Evaluation Framework for Robotic Manipulation Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ManipEvalAgent`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `ManipEvalAgent`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=3u6AkbWEls; PDF: https://openreview.net/pdf?id=3u6AkbWEls가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-411"></a>
## Paper 411. Scenario Generation as a Tool for Robust Intelligent Agents

- 출처/venue: "- 2026 - search.proquest.com" With advances in artificial intelligence (AI), the capabilities of AI systems have been increasing, along with the difficulty in thoroughly evaluating those systems. We have seen AI … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://search.proquest.com/openview/50fb4cf9d5749a609c784fc8bf1a30b1/1?pq-origsite=gscholar&cbl=18750&diss=y
- PDF: 확인되지 않음
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Scenario Generation as a Tool for Robust Intelligent Agents`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 안전성과 강건성 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Scenario Generation as a Tool for Robust Intelligent Agents`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Scenario Generation as a Tool for Robust Intelligent Agents`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 안전성과 강건성 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://search.proquest.com/openview/50fb4cf9d5749a609c784fc8bf1a30b1/1?pq-origsite=gscholar&cbl=18750&diss=y가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-412"></a>
## Paper 412. 面向具身操作的视觉− 语言− 动作模型综述

- 출처/venue: 面向具身操作的视觉−语言−动作模型综述 E-mail Alert RSS 中文核心 EI 中国科技核心 Scopus CSCD 英国科学文摘 首页 期刊介绍 1.基本信息 2.收录与获奖 3.近年指标 期刊在线 1.优先发表 … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 3
- URL: https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c250394
- PDF: https://www.sciengine.com/parse/pdf/0254-4156/1C7F8ED77BA740019B2DF047B4508E20.pdf?attname=Survey+of+Vision-Language-Action+Models+for+Embodied+Manipulation.pdf
- 로컬 PDF: undated_面向具身操作的视觉− 语言− 动作模型综述.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `面向具身操作的视觉− 语言− 动作模型综述`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `面向具身操作的视觉− 语言− 动作模型综述`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c250394; PDF: https://www.sciengine.com/parse/pdf/0254-4156/1C7F8ED77BA740019B2DF047B4508E20.pdf?attname=Survey+of+Vision-Language-Action+Models+for+Embodied+Manipulation.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-413"></a>
## Paper 413. PI-VLA: A Symmetry-Aware Predictive and Interactive Vision--Language--Action Framework for Robust Robotic Manipulation

- 출처/venue: ", T Di, ZY Wei, CW Liang, MJS Wang - 2026 - preprints.org" Abstract Vision–language–action (VLA) models often suffer from limited robustness in long- horizon manipulation tasks due to their inability to explicitly exploit structural symmetries and … 저장 인용
- 연도: 2026
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.preprints.org/manuscript/202601.0682
- PDF: https://www.preprints.org/frontend/manuscript/45c61dc96f8e563d46797b0706cf6205/download_pub
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `PI-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `PI-VLA`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `PI-VLA`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.preprints.org/manuscript/202601.0682; PDF: https://www.preprints.org/frontend/manuscript/45c61dc96f8e563d46797b0706cf6205/download_pub가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-414"></a>
## Paper 414. Towards Generalist Embodied Agents via Representation Learning

- 출처/venue: "- 2025 - search.proquest.com" In our dynamic and ever-evolving world, embodied agents for sequential decision-making (SDM) lie at the heart of intelligent behavior in machine learning systems. Just as foundation … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://search.proquest.com/openview/8006686c6f9c1c487f64e59ba2ed429b/1?pq-origsite=gscholar&cbl=18750&diss=y
- PDF: https://drum.lib.umd.edu/bitstreams/c40bd6ca-52de-449a-a938-6d034fd32422/download
- 로컬 PDF: 2025_Towards Generalist Embodied Agents via Representation Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Towards Generalist Embodied Agents via Representation Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Towards Generalist Embodied Agents via Representation Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Towards Generalist Embodied Agents via Representation Learning`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://search.proquest.com/openview/8006686c6f9c1c487f64e59ba2ed429b/1?pq-origsite=gscholar&cbl=18750&diss=y; PDF: https://drum.lib.umd.edu/bitstreams/c40bd6ca-52de-449a-a938-6d034fd32422/download가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-415"></a>
## Paper 415. How Data Drives ML Models Performance

- 출처/venue: "- 2025 - dspace.mit.edu" Data has been been playing an increasingly more important role in the machine learning (ML) pipeline. This thesis deepens the understanding of the effect of the data on model … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://dspace.mit.edu/handle/1721.1/164640
- PDF: https://dspace.mit.edu/bitstream/handle/1721.1/164640/khaddaj-alaakh-phd-eecs-2025-thesis.pdf?sequence=1&isAllowed=y
- 로컬 PDF: 2025_How Data Drives ML Models Performance.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `How Data Drives ML Models Performance`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `How Data Drives ML Models Performance`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `How Data Drives ML Models Performance`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://dspace.mit.edu/handle/1721.1/164640; PDF: https://dspace.mit.edu/bitstream/handle/1721.1/164640/khaddaj-alaakh-phd-eecs-2025-thesis.pdf?sequence=1&isAllowed=y가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-416"></a>
## Paper 416. Rethinking Efficiency in Large Vision Language Models for Deployment Oriented Multimodal AI

- 출처/venue: Abstract Large Vision-Language Models (LVLMs) have emerged as a powerful paradigm for multimodal artificial intelligence, enabling unified perception, reasoning, and generation … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5979754
- PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=5979754
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Rethinking Efficiency in Large Vision Language Models for Deployment Oriented Multimodal AI`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA 효율화 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Rethinking Efficiency in Large Vision Language Models for Deployment Oriented Multimodal AI`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Rethinking Efficiency in Large Vision Language Models for Deployment Oriented Multimodal AI`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA 효율화 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5979754; PDF: https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=5979754가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-417"></a>
## Paper 417. Development of Imitation Learning and Large Language Model-based Assembly Algorithm

- 출처/venue: Development of Imitation Learning and Large Language Model-based Assembly Algorithm 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 1
- URL: 확인되지 않음
- PDF: 확인되지 않음
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Development of Imitation Learning and Large Language Model-based Assembly Algorithm`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Development of Imitation Learning and Large Language Model-based Assembly Algorithm`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Development of Imitation Learning and Large Language Model-based Assembly Algorithm`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: 공개 코드·데이터·프로젝트 링크는 자동 확인 범위에서 확인되지 않았으며, 별도 원문 확인이 필요하다.

<a id="paper-418"></a>
## Paper 418. Object-Centric Agentic Robot Policies

- 출처/venue: "," "," "," … - NeurIPS 2025 Workshop … - openreview.net Executing open-ended natural language queries in previously unseen environments is a core problem in robotics. While recent advances in imitation learning and vision-language … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=ze5SVsXsmq
- PDF: https://openreview.net/pdf?id=ze5SVsXsmq
- 로컬 PDF: 2025_Object-Centric Agentic Robot Policies.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Object-Centric Agentic Robot Policies`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Object-Centric Agentic Robot Policies`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=ze5SVsXsmq; PDF: https://openreview.net/pdf?id=ze5SVsXsmq가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-419"></a>
## Paper 419. Combining foundation models and numerical solvers for physics-informed motion control

- 출처/venue: Multi-modal foundation models for robotics control is a rapidly evolving field. Models are trained on large amounts of robot trajectory data and, in some cases, additional web data … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.diva-portal.org/smash/record.jsf?pid=diva2:1969028
- PDF: https://www.diva-portal.org/smash/get/diva2:1969028/FULLTEXT01.pdf
- 로컬 PDF: undated_Combining foundation models and numerical solvers for physics-informed motion control.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Combining foundation models and numerical solvers for physics-informed motion control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Combining foundation models and numerical solvers for physics-informed motion control`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Combining foundation models and numerical solvers for physics-informed motion control`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 PDF 앞부분과 초록에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.diva-portal.org/smash/record.jsf?pid=diva2:1969028; PDF: https://www.diva-portal.org/smash/get/diva2:1969028/FULLTEXT01.pdf가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-420"></a>
## Paper 420. MVP: Memory-enhanced Vision-Language-Action Policy with Feedback Learning

- 출처/venue: "," "," "," ", Y Su, H Zhang," … - openreview.net Recent advances in Vision-Language-Action (VLA) models have enabled robots to perform a wide range of manipulation tasks conditioned on language instructions, offering strong … 저장 인용 "34" "35" "36" "37" "38" "39" "40" "41" "43"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=Yz2DnYBJXd
- PDF: https://openreview.net/pdf?id=Yz2DnYBJXd
- 로컬 PDF: undated_MVP Memory-enhanced Vision-Language-Action Policy with Feedback Learning.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `MVP`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `MVP`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=Yz2DnYBJXd; PDF: https://openreview.net/pdf?id=Yz2DnYBJXd가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-421"></a>
## Paper 421. RoboMonster: Compositional Generalization of Heterogeneous Multi-End Effector Embodied Agents

- 출처/venue: Y Qin, "," ", L Kang, BNY Chen, X Meng… - openreview.net" The rapid growth of robotics has been driven by advances in both hardware and algorithms, yet a fundamental gap remains between real-world decision making and virtual simulations … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 1
- URL: https://openreview.net/forum?id=cY5BXtkI9F
- PDF: https://openreview.net/pdf?id=cY5BXtkI9F
- 로컬 PDF: undated_RoboMonster Compositional Generalization of Heterogeneous Multi-End Effector Embodied Agents.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `RoboMonster`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `RoboMonster`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=cY5BXtkI9F; PDF: https://openreview.net/pdf?id=cY5BXtkI9F가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-422"></a>
## Paper 422. FlashDrive: Flash Vision-Language-Action Inference for Autonomous Driving

- 출처/venue: ", Y Liang, H Zhang, J Chen, Z Liu - The First Workshop on Efficient … - openreview.net" While the recent Alpamayo1 model sets a new baseline for Vision-Language-Action (VLA) models in autonomous driving, its significant inference latency precludes deployment on … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=kuZrNI5oZM
- PDF: https://openreview.net/pdf?id=kuZrNI5oZM
- 로컬 PDF: undated_FlashDrive Flash Vision-Language-Action Inference for Autonomous Driving.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `FlashDrive`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `FlashDrive`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=kuZrNI5oZM; PDF: https://openreview.net/pdf?id=kuZrNI5oZM; https://z-lab.ai/projects/flashdrive가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-423"></a>
## Paper 423. Building Scalable Real-World Robot Data Generation via Compositional Simulation

- 출처/venue: Y Qin, J Ma, L Kang, W Li, "," ", J Yu," … - openreview.net Recent advancements in foundational models, such as large language models and world models, have greatly enhanced the capabilities of robotics, enabling robots to autonomously … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=27mRzKDpAE
- PDF: https://openreview.net/pdf?id=27mRzKDpAE
- 로컬 PDF: undated_Building Scalable Real-World Robot Data Generation via Compositional Simulation.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Building Scalable Real-World Robot Data Generation via Compositional Simulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Building Scalable Real-World Robot Data Generation via Compositional Simulation`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=27mRzKDpAE; PDF: https://openreview.net/pdf?id=27mRzKDpAE가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-424"></a>
## Paper 424. Stable-FAST: Stabilizing Inference of Autoregressive Vision-Language-Action Models

- 출처/venue: X Luo, X Yin, H Wu, "," "- openreview.net" Autoregressive Vision-Language-Action (VLA) models are a promising path toward generalist robot policies, yet their performance is critically dependent on action tokenization … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=0XQSa9CjR7
- PDF: https://openreview.net/pdf?id=0XQSa9CjR7
- 로컬 PDF: undated_Stable-FAST Stabilizing Inference of Autoregressive Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Stable-FAST`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Stable-FAST`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=0XQSa9CjR7; PDF: https://openreview.net/pdf?id=0XQSa9CjR7가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-425"></a>
## Paper 425. GateFlow: Mitigating Shortcut Learning in VLA Models via Gated Flow Matching

- 출처/venue: ", Y Wang, H Luo," "," "," … - openreview.net Vision-Language-Action (VLA) models promise general-purpose robotic intelligence by leveraging pretrained vision-language representations. However, these models suffer from … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=qOSy2PX4xS
- PDF: https://openreview.net/pdf?id=qOSy2PX4xS
- 로컬 PDF: undated_GateFlow Mitigating Shortcut Learning in VLA Models via Gated Flow Matching.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `GateFlow`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `GateFlow`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=qOSy2PX4xS; PDF: https://openreview.net/pdf?id=qOSy2PX4xS가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-426"></a>
## Paper 426. On the Representation Degradation in Vision-Language-Action Models

- 출처/venue: Z Zhang, XH Chen, Y Wang, Y Sun, W Luo, … - openreview.net Vision-Language-Action (VLA) models have become a promising paradigm for robotic decision-making, yet their application remains limited by generalization bottlenecks. In this … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=qR2TjMZ10B
- PDF: https://openreview.net/pdf?id=qR2TjMZ10B
- 로컬 PDF: undated_On the Representation Degradation in Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `On the Representation Degradation in Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `On the Representation Degradation in Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=qR2TjMZ10B; PDF: https://openreview.net/pdf?id=qR2TjMZ10B가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-427"></a>
## Paper 427. Learning Feasibility from Failure Data in Vision–Language–Action Models

- 출처/venue: J Park, "," ", J Park, N Cho," … - 2nd Workshop on Safe … - openreview.net In this paper, we study how to improve the robustness of Vision–Language–Action (VLA) models by leveraging failure data. Existing VLAs are often trained on successful … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=tKRTU90TT3
- PDF: https://openreview.net/pdf?id=tKRTU90TT3
- 로컬 PDF: undated_Learning Feasibility from Failure Data in Vision–Language–Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Learning Feasibility from Failure Data in Vision–Language–Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Learning Feasibility from Failure Data in Vision–Language–Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=tKRTU90TT3; PDF: https://openreview.net/pdf?id=tKRTU90TT3가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-428"></a>
## Paper 428. PIXELVLA: ADVANCING PIXEL-LEVEL UNDER-STANDING IN VISION-LANGUAGE-ACTION MODEL

- 출처/venue: Vision-Language-Action models (VLAs) are emerging as powerful tools for learning generalizable visuomotor control policies. However, current VLAs are mostly trained on … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=7M6ryCABIc
- PDF: https://openreview.net/pdf?id=7M6ryCABIc
- 로컬 PDF: undated_PIXELVLA ADVANCING PIXEL-LEVEL UNDER-STANDING IN VISION-LANGUAGE-ACTION MODEL.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `PIXELVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `PIXELVLA`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `PIXELVLA`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 ts show that Pix- elVLA improves manipulation success rates by10.1%라는 정량 신호를 포함하지만, 자동 추출 범위에서는 전체 표의 세부 수치를 모두 확정하지는 못했다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=7M6ryCABIc; PDF: https://openreview.net/pdf?id=7M6ryCABIc; https://wenqiliang.github.io/PixelVLA/가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-429"></a>
## Paper 429. 大模型参数高效微调方法综述: 技术, 趋势与挑战

- 출처/venue: 大规模预训练模型已经在自然语言处理等领域展现出强大的能力. 为更好地适配下游任务, 微调预训练模型是一个常用的方法. 然而, 大模型的全参数微调面临计算成本高昂 … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c250451
- PDF: 확인되지 않음
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `大模型参数高效微调方法综述`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `大模型参数高效微调方法综述`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `大模型参数高效微调方法综述`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c250451가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-430"></a>
## Paper 430. In-depth Robustness Analysis for Vision-Language-Action Models

- 출처/venue: ", S Wang, J Shi, Z Dai, J Cai, P Qian, L Ji, X He… - openreview.net" Visual–Language–Action (VLA) models report impressive success rates on robotic manipulation benchmarks, yet these results may mask fundamental weaknesses in … 저장 인용 "34" "35" "36" "37" "38" "39" "40" "41" "42"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 1
- URL: https://openreview.net/forum?id=6mEfYoMRpF
- PDF: https://openreview.net/pdf?id=6mEfYoMRpF
- 로컬 PDF: undated_In-depth Robustness Analysis for Vision-Language-Action Models.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `In-depth Robustness Analysis for Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `In-depth Robustness Analysis for Vision-Language-Action Models`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=6mEfYoMRpF; PDF: https://openreview.net/pdf?id=6mEfYoMRpF가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-431"></a>
## Paper 431. CSO: Refining Robotic Policies via Skill Distribution Alignment and Skill-Grained Optimization

- 출처/venue: Z Xiang, X Deng, ", L Nie - openreview.net" Discretizing continuous actions into skills using methods like VQ-VAE has emerged as a powerful paradigm for robotic manipulation. However, the quantization errors in discretizing … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=oBpxNjcu8R
- PDF: https://openreview.net/pdf?id=oBpxNjcu8R
- 로컬 PDF: undated_CSO Refining Robotic Policies via Skill Distribution Alignment and Skill-Grained Optimization.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `CSO`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `CSO`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=oBpxNjcu8R; PDF: https://openreview.net/pdf?id=oBpxNjcu8R가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-432"></a>
## Paper 432. Leveraging Language Representations for Vision-Language-Action Models with Flipped Auxiliary Learning

- 출처/venue: Vision-Language-Action (VLA) models hold significant promise for robotic control by seamlessly integrating visual perception, linguistic understanding, and motor execution … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://s-space.snu.ac.kr/bitstream/10371/228917/1/000000190390.pdf
- PDF: https://s-space.snu.ac.kr/bitstream/10371/228917/1/000000190390.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Leveraging Language Representations for Vision-Language-Action Models with Flipped Auxiliary Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Leveraging Language Representations for Vision-Language-Action Models with Flipped Auxiliary Learning`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Leveraging Language Representations for Vision-Language-Action Models with Flipped Auxiliary Learning`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://s-space.snu.ac.kr/bitstream/10371/228917/1/000000190390.pdf; PDF: https://s-space.snu.ac.kr/bitstream/10371/228917/1/000000190390.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-433"></a>
## Paper 433. ROBOTWIN 2.0: AScalable DATA GENERATOR AND BENCHMARK WITH STRONG DOMAIN RANDOMIZA-TION FOR ROBUST BIMANUAL ROBOTIC MANIPULA

- 출처/venue: Synthetic data generation via simulation represents a promising approach for enhancing robotic manipulation. However, current synthetic datasets remain insufficient for robust … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=vAPIIscwc7
- PDF: https://openreview.net/pdf?id=vAPIIscwc7
- 로컬 PDF: undated_ROBOTWIN 2.0 AScalable DATA GENERATOR AND BENCHMARK WITH STRONG DOMAIN RANDOMIZA-TION FOR ROBUST BIMANUAL ROBOTIC MANIPULA.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `ROBOTWIN 2.0`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `ROBOTWIN 2.0`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=vAPIIscwc7; PDF: https://openreview.net/pdf?id=vAPIIscwc7가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-434"></a>
## Paper 434. 모방학습 및 언어모델 기반 조립기술 개발

- 출처/venue: Assembly is widely used in many different manufacturing applications. However, assembly is a challenging task for robot manipulators as it involves complex manipulation and … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003234304
- PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12317518
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `모방학습 및 언어모델 기반 조립기술 개발`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `모방학습 및 언어모델 기반 조립기술 개발`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `모방학습 및 언어모델 기반 조립기술 개발`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003234304; PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12317518가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-435"></a>
## Paper 435. CrossVLA-Attack: Universal Transferable Adversarial Patches for Vision-Language-Action Robotics

- 출처/venue: Robotic systems relying on Vision-Language-Action (VLA) models enable flexible real-world manipulation, yet their security is compromised by adversarial patches that lack universal … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.researchgate.net/profile/Zihang-Yang-8/publication/398356281_CrossVLA-Attack_Universal_Transferable_Adversarial_Patches_for_Vision-Language-Action_Robotics/links/69323504a1fd01798904f3b1/CrossVLA-Attack-Universal-Transferable-Adversarial-Patches-for-Vision-Language-Action-Robotics.pdf
- PDF: https://www.researchgate.net/profile/Zihang-Yang-8/publication/398356281_CrossVLA-Attack_Universal_Transferable_Adversarial_Patches_for_Vision-Language-Action_Robotics/links/69323504a1fd01798904f3b1/CrossVLA-Attack-Universal-Transferable-Adversarial-Patches-for-Vision-Language-Action-Robotics.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `CrossVLA-Attack`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `CrossVLA-Attack`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `CrossVLA-Attack`를 중심으로 VLA가 실패하거나 악용될 수 있는 조건을 분석하고 강건성을 평가하는 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.researchgate.net/profile/Zihang-Yang-8/publication/398356281_CrossVLA-Attack_Universal_Transferable_Adversarial_Patches_for_Vision-Language-Action_Robotics/links/69323504a1fd01798904f3b1/CrossVLA-Attack-Universal-Transferable-Adversarial-Patches-for-Vision-Language-Action-Robotics.pdf; PDF: https://www.researchgate.net/profile/Zihang-Yang-8/publication/398356281_CrossVLA-Attack_Universal_Transferable_Adversarial_Patches_for_Vision-Language-Action_Robotics/links/69323504a1fd01798904f3b1/CrossVLA-Attack-Universal-Transferable-Adversarial-Patches-for-Vision-Language-Action-Robotics.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-436"></a>
## Paper 436. Task Robustness via Re-Labelling Vision-Action Robot Data

- 출처/venue: "," "," "," "- … on Making Sense of Data in … - openreview.net" The recent trend in scaling models for robot learning has resulted in impressive policies that can perform various manipulation tasks and generalize to novel scenarios. However, these … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://openreview.net/forum?id=M6M5W0lmaY
- PDF: https://openreview.net/pdf?id=M6M5W0lmaY
- 로컬 PDF: undated_Task Robustness via Re-Labelling Vision-Action Robot Data.pdf
- 요약 근거: PDF 앞부분과 초록
- 한 줄 이해: `Task Robustness via Re-Labelling Vision-Action Robot Data`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.

1. **배경**: 이 논문은 VLA가 비전 인식, 언어 이해, 로봇 행동 생성을 하나의 정책으로 묶으려는 흐름 속에서 왜 중요한지를 정리하는 서베이다.
2. **문제**: `Task Robustness via Re-Labelling Vision-Action Robot Data`는 빠르게 늘어난 VLA 연구를 개념, 모델 구조, 응용, 평가 쟁점으로 나누어 이해할 수 있게 만드는 문제를 다룬다.
3. **기존 한계**: 기존 연구는 개별 모델이나 벤치마크 성능 중심으로 흩어져 있어, 실제 로봇 적용에 필요한 데이터, 추론, 일반화, 안전성 쟁점을 한눈에 비교하기 어렵다.
4. **목표**: 목표는 VLA 연구의 계보와 설계 선택지를 정리하고, 실제 로봇 적용을 가로막는 병목을 독자가 비교 가능한 형태로 보여주는 것이다.
5. **방법**: 방법은 관련 논문을 수집해 모델 입력, 행동 표현, 학습 방식, 평가 환경, 공개 자원, 응용 영역별로 분류하는 문헌 조사 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 VLA를 단순한 멀티모달 모델이 아니라 perception-language-action을 이어 주는 로봇 정책 계열로 보고 공통 축을 세우는 데 있다.
7. **검증**: 검증은 새로운 로봇 실험보다는 PDF 앞부분과 초록 기준으로 기존 논문, 벤치마크, 응용 사례를 비교 정리하는 방식이다.
8. **결과**: 결과는 특정 하나의 수치 성능보다 VLA 연구가 어떤 방향으로 발전했고 어디에 병목이 남았는지를 구조화한 지도로 제시된다.
9. **비교**: 비교는 개별 baseline 대결이 아니라 OpenVLA, RT 계열, diffusion policy 계열처럼 대표 연구들의 설계 차이를 축별로 대비하는 방식이다.
10. **의의**: 의의는 서베이 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://openreview.net/forum?id=M6M5W0lmaY; PDF: https://openreview.net/pdf?id=M6M5W0lmaY; https://akuramshin.github.io/tread가 확인되었고, 로컬 PDF를 확보해 요약 근거로 사용했다.

<a id="paper-437"></a>
## Paper 437. Modelos VLA para robótica autónoma en computación de borde

- 출처/venue: Los modelos visión-lenguaje-acción (VLA) han pasado, en apenas tres años, de ser una prueba de concepto orientada a transferir conocimiento semántico desde modelos … 저장 인용
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.researchgate.net/profile/Andres-Gutierrez-Escobar-3/publication/404362477_Modelos_VLA_para_robotica_autonoma_en_computacion_de_borde_VLA/links/69f52441964b1d1df98d561e/Modelos-VLA-para-robotica-autonoma-en-computacion-de-borde-VLA.pdf
- PDF: https://www.researchgate.net/profile/Andres-Gutierrez-Escobar-3/publication/404362477_Modelos_VLA_para_robotica_autonoma_en_computacion_de_borde_VLA/links/69f52441964b1d1df98d561e/Modelos-VLA-para-robotica-autonoma-en-computacion-de-borde-VLA.pdf
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Modelos VLA para robótica autónoma en computación de borde`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 VLA와 embodied AI 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Modelos VLA para robótica autónoma en computación de borde`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Modelos VLA para robótica autónoma en computación de borde`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 기존 VLA나 로봇 정책 baseline 대비 제안 방식의 장점을 보이는 구조이지만, 자동 추출 범위에서 모든 baseline 이름은 확인되지 않았다.
10. **의의**: 의의는 VLA와 embodied AI 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.researchgate.net/profile/Andres-Gutierrez-Escobar-3/publication/404362477_Modelos_VLA_para_robotica_autonoma_en_computacion_de_borde_VLA/links/69f52441964b1d1df98d561e/Modelos-VLA-para-robotica-autonoma-en-computacion-de-borde-VLA.pdf; PDF: https://www.researchgate.net/profile/Andres-Gutierrez-Escobar-3/publication/404362477_Modelos_VLA_para_robotica_autonoma_en_computacion_de_borde_VLA/links/69f52441964b1d1df98d561e/Modelos-VLA-para-robotica-autonoma-en-computacion-de-borde-VLA.pdf가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-438"></a>
## Paper 438. Scaling Language-Conditioned Policies with Fast and Lightweight Architectures

- 출처/venue: J Kim, GC Kang, ", NS Kim, JK Lee… - 한국정보과학회 학술발표 …, 2025 - dbpia.co.kr" We present a lightweight and efficient vision-language-action (VLA) model designed for real- time robotic manipulation. While recent VLA models have demonstrated strong performance … 저장 인용
- 연도: 2025
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12318427
- PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12318427
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `Scaling Language-Conditioned Policies with Fast and Lightweight Architectures`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.

1. **배경**: 이 논문은 로봇 조작 맥락에서 VLA가 언어 지시를 실제 로봇 행동으로 바꾸는 능력을 더 빠르고 안정적으로 만들려는 흐름에 놓여 있다.
2. **문제**: `Scaling Language-Conditioned Policies with Fast and Lightweight Architectures`가 다루는 핵심 문제는 비전 입력과 자연어 지시를 받아 로봇이 수행할 행동을 더 정확하거나 효율적으로 생성하게 만드는 것이다.
3. **기존 한계**: 기존 VLA 접근은 큰 모델과 대규모 데이터에 의존하기 쉬워 추론 속도, 데이터 효율, 실제 로봇 일반화, 실패 복구 측면에서 병목이 남는다.
4. **목표**: 목표는 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 통해 기존 VLA의 성능, 속도, 일반화 또는 재현성 중 하나 이상의 약점을 줄이는 것이다.
5. **방법**: 방법은 `Scaling Language-Conditioned Policies with Fast and Lightweight Architectures`를 중심으로 비전 입력, 언어 지시, 로봇 행동 출력을 연결하는 VLA 학습 또는 추론 절차을 구성하고, 이를 VLA 학습 또는 추론 파이프라인에 결합하는 방식이다.
6. **핵심 아이디어**: 핵심 아이디어는 언어와 시각 정보가 바로 행동으로 이어지는 지점에서 표현, 디코딩, 정책 구조, 데이터 사용 방식을 바꾸어 병목을 줄이는 데 있다.
7. **검증**: 검증은 Scholar 메타데이터와 확인된 URL에서 확인 가능한 실험 설명을 근거로 하며, 구체적 로봇 플랫폼과 전체 시나리오는 원문 표·실험 절 추가 확인이 필요하다.
8. **결과**: 결과는 제안 방법이 성능, 성공률, 속도 또는 안정성 개선을 목표로 함을 보여 주지만, 자동 추출 범위에서 확정 가능한 대표 수치는 제한적이다.
9. **비교**: 비교는 ACT 같은 기존 VLA·로봇 정책과의 차이를 중심으로 해석할 수 있다.
10. **의의**: 의의는 로봇 조작 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12318427; PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12318427가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.

<a id="paper-439"></a>
## Paper 439. 모바일 매니퓰레이터를 이용한 가사물체 조작 데이터 수집 시스템

- 출처/venue: Various robot task datasets are being provided for Vision-Language-Action (VLA), reinforcement learning, and imitation learning, enabling robots to perform tasks … 저장 인용 "34" "35" "36" "37" "38" "39" "40" "41" "42" "43"
- 연도: 확인되지 않음
- 인용수(Google Scholar 수집 당시): 확인되지 않음
- URL: https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12331986
- PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12331986
- 로컬 PDF: 미확보
- 요약 근거: Scholar 메타데이터와 확인된 URL
- 한 줄 이해: `모바일 매니퓰레이터를 이용한 가사물체 조작 데이터 수집 시스템`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.

1. **배경**: 이 논문은 VLA와 로봇 학습 모델이 실제로 좋아졌는지 판단하려면 재현 가능한 데이터셋과 벤치마크가 필요하다는 문제의식에서 출발한다.
2. **문제**: `모바일 매니퓰레이터를 이용한 가사물체 조작 데이터 수집 시스템`는 로봇 과제, 장면, embodiment, 평가 절차가 충분히 표준화되지 않아 모델 비교가 흔들리는 문제를 다룬다.
3. **기존 한계**: 기존 평가는 과제 수, 환경 다양성, 실제 로봇과의 간극, 데이터 수집 비용 때문에 모델의 일반화 능력을 일관되게 측정하기 어렵다.
4. **목표**: 목표는 VLA 또는 로봇 정책을 같은 조건에서 비교할 수 있는 데이터 생성, 수집, 평가 절차를 제공하는 것이다.
5. **방법**: 방법은 `모바일 매니퓰레이터를 이용한 가사물체 조작 데이터 수집 시스템`를 중심으로 과제 구성, 데이터 수집 또는 시뮬레이션 절차, 평가 지표를 묶어 벤치마크 형태로 정리하는 것이다.
6. **핵심 아이디어**: 핵심 아이디어는 모델 자체보다 평가 환경과 데이터 분포를 명시적으로 통제해, 서로 다른 VLA 정책의 강점과 약점을 비교 가능하게 만드는 데 있다.
7. **검증**: 검증은 논문에 제시된 과제와 환경에서 모델이나 정책을 실행해 성공률, 일반화, 강건성을 비교하는 방식으로 해석된다.
8. **결과**: 결과는 벤치마크가 모델 간 성능 차이와 실패 양상을 드러낼 수 있음을 보이는 데 초점이 있으며, 세부 수치는 원문 표 확인이 필요하다.
9. **비교**: 비교는 ACT 같은 대표 정책을 포함해 같은 과제에서 평가하는 방식이다.
10. **의의**: 의의는 데이터셋과 벤치마크 연구에서 VLA를 단순 데모가 아니라 실제 과제에 배치 가능한 정책, 평가 체계, 또는 분석 도구로 다루게 만든다는 점이다.
11. **한계**: 논문이 명시한 한계와 별개로, 자동 요약 기준에서는 데이터 편향, 실제 로봇 일반화, 긴 horizon 안정성, 공개 자원 재현성 여부를 추가로 조심해서 봐야 한다.
12. **향후 과제**: 향후 과제는 더 다양한 embodiment, 장기 과제, 실제 환경 배포, 강한 baseline, 공개 코드·데이터 재현성 검증으로 확장하는 것이다.
13. **자원 공개**: paper: https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12331986; PDF: https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12331986가 확인되었고, 로컬 PDF는 확보하지 못해 확인된 웹 링크 중심으로 정리했다.
