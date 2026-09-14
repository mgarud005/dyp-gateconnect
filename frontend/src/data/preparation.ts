export type PreparationSection = {
  title: string
  content: string[]
}

export type SubjectPreparation = {
  subject: string
  sections: PreparationSection[]
}

export const preparationData: Record<string, SubjectPreparation> = {
  'Engineering Mathematics': {
    subject: 'Engineering Mathematics',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Build the basic concepts before starting numerical problem practice.',
          'Study one topic at a time and solve questions immediately after learning the concept.',
          'Maintain a separate formula and concept revision sheet.',
          'Focus on understanding the method instead of memorising individual solutions.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Start with Discrete Mathematics.',
          'Continue with Linear Algebra.',
          'Study Calculus after completing the required mathematical basics.',
          'Finish with Probability and Statistics.',
          'After completing all sections, begin mixed-topic practice.',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Discrete Mathematics: Focus on logic, sets, relations, functions, partial orders, lattices, monoids, groups, graphs and combinatorics.',
          'Linear Algebra: Practice matrices, determinants, systems of linear equations, eigenvalues, eigenvectors and LU decomposition.',
          'Calculus: Focus on limits, continuity, differentiability, maxima and minima, mean value theorem and integration.',
          'Probability and Statistics: Practice random variables, standard distributions, statistical measures, conditional probability and Bayes theorem.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Solve concept-based questions immediately after completing each topic.',
          'Move gradually from individual-topic questions to mixed-topic questions.',
          'Use previous year questions to understand the type and level of questions asked.',
          'Record mistakes and revisit the underlying concept.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Revise formulas and important concepts regularly.',
          'Maintain a short revision sheet for frequently used results and methods.',
          'Re-solve questions that were previously answered incorrectly.',
          'Use mixed-topic practice during later revision cycles.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Read each question carefully before selecting a method.',
          'Avoid spending excessive time on a single difficult numerical problem.',
          'Use elimination and estimation only when mathematically valid.',
          'Review calculation-heavy questions when time permits.',
        ],
      },
    ],
  },

  'Digital Logic': {
    subject: 'Digital Logic',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Start with Boolean algebra and learn the basic laws and identities clearly.',
          'Practice Boolean expression simplification before moving to minimization methods.',
          'Study combinational and sequential circuit design separately.',
          'Practice number representation and arithmetic through numerical problems.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Boolean algebra',
          'Algebraic minimization',
          'Karnaugh map',
          'Tabular method',
          'Combinational circuit design',
          'Sequential circuit design',
          'Fixed-point representation and arithmetic',
          'Floating-point representation and arithmetic',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Boolean Algebra: Learn the fundamental Boolean laws and practise systematic simplification.',
          'Minimization: Practise algebraic technique, Karnaugh map and tabular method.',
          'Combinational Circuits: Learn to translate a requirement into a logical circuit and verify its output.',
          'Sequential Circuits: Understand state-dependent behaviour and practise design problems.',
          'Number Representation: Practise fixed-point and floating-point representation and arithmetic.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Solve small Boolean simplification problems before attempting larger circuit-design questions.',
          'Practise Karnaugh-map problems until grouping becomes systematic.',
          'Solve circuit-design questions independently before checking the solution.',
          'Use previous year questions to identify recurring problem patterns.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a concise sheet of important Boolean laws and minimization techniques.',
          'Regularly revise the steps used in circuit design.',
          'Re-solve previously incorrect problems.',
          'Use mixed questions during later revision.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Read the given Boolean expression or circuit carefully before calculating.',
          'Choose a minimization method that gives a clear and reliable solution.',
          'Check intermediate circuit values when multiple logic stages are involved.',
          'Verify number representation and arithmetic before submitting the answer.',
        ],
      },
    ],
  },

  'Computer Organization': {
    subject: 'Computer Organization',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Understand the role of each major computer organization component before solving numerical problems.',
          'Study instruction sets and addressing modes with examples.',
          'Understand the relationship between ALU, control unit, memory and I/O.',
          'Give special attention to cache performance and pipeline behaviour.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Instruction set and addressing modes',
          'Arithmetic and Logic Unit',
          'Hardwired and microprogrammed control',
          'Memory interfacing and memory hierarchy',
          'Cache memory mapping and performance',
          'I/O interface, interrupt and DMA',
          'Instruction pipelining and pipeline hazards',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Instruction Set: Practise identifying the effect of different addressing modes.',
          'ALU: Understand the operations performed and practise related design and numerical questions.',
          'Control Unit: Compare hardwired and microprogrammed control clearly.',
          'Memory: Focus on hierarchy, performance and cache mapping relationships.',
          'I/O: Understand interrupt and DMA operation and their role in data transfer.',
          'Pipelining: Practise timing and pipeline-hazard problems carefully.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Solve numerical questions after learning each concept.',
          'Draw suitable diagrams when analysing memory, I/O or pipeline problems.',
          'Track units and intermediate values carefully in performance calculations.',
          'Use previous year questions to identify common calculation patterns.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain short comparison tables for related concepts such as hardwired and microprogrammed control.',
          'Revise cache and pipeline concepts using worked examples.',
          'Re-solve calculation-heavy questions after a gap.',
          'Review common mistakes in addressing, memory and pipeline calculations.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Identify exactly what the question is asking before starting a calculation.',
          'Draw a small diagram when it reduces confusion.',
          'Check assumptions and units in performance-related questions.',
          'Do not rush pipeline and cache questions because one incorrect assumption can change the result.',
        ],
      },
    ],
  },

  'Programming & Data Structures': {
    subject: 'Programming & Data Structures',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Build strong C programming fundamentals before moving deeply into data structures.',
          'Understand recursion by tracing function calls and return values.',
          'Learn each data structure through operations, implementation and complexity.',
          'Practise both conceptual and code-tracing questions.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Programming in C',
          'Recursion',
          'Arrays',
          'Stacks and queues',
          'Linked lists',
          'Trees',
          'Binary search trees',
          'Binary heaps',
          'Graphs',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'C Programming: Focus on understanding program execution and behaviour.',
          'Recursion: Trace recursive calls carefully and identify base and recursive cases.',
          'Linear Data Structures: Understand operations, implementation and their costs.',
          'Trees: Practise traversal and structural properties.',
          'Binary Search Trees: Understand ordering and operations.',
          'Binary Heaps: Practise heap structure and operations.',
          'Graphs: Learn representations and basic graph traversal concepts.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Trace C programs manually instead of relying only on execution.',
          'Solve recursion questions using call-stack tracing.',
          'Practise data-structure operations with small examples.',
          'Solve previous year questions after completing each data structure.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain complexity and operation tables for major data structures.',
          'Revisit confusing pointer, recursion and tree problems.',
          'Practise mixed code-tracing questions regularly.',
          'Re-solve questions that previously caused mistakes.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Trace program execution step by step rather than guessing the output.',
          'For data-structure questions, identify the operation being tested before calculating.',
          'Check boundary conditions and special cases.',
          'Use complexity reasoning to eliminate clearly incorrect options when possible.',
        ],
      },
    ],
  },

  Algorithms: {
    subject: 'Algorithms',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Build a strong understanding of asymptotic time and space complexity first.',
          'Learn searching, sorting and hashing before moving to larger algorithmic techniques.',
          'Understand why an algorithm works, not only its steps.',
          'Practise graph algorithms through diagrams and small examples.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Asymptotic worst-case time and space complexity',
          'Searching',
          'Sorting',
          'Hashing',
          'Divide-and-conquer',
          'Greedy algorithms',
          'Dynamic programming',
          'Graph traversals',
          'Minimum spanning trees',
          'Shortest paths',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Complexity: Compare algorithms using asymptotic worst-case bounds.',
          'Searching and Sorting: Understand the working process and complexity of standard methods.',
          'Hashing: Practise collision-related reasoning and performance analysis.',
          'Divide-and-Conquer: Identify the recursive structure and recurrence.',
          'Greedy: Understand the choice made at each step and why it is valid.',
          'Dynamic Programming: Identify states, transitions and base cases.',
          'Graph Algorithms: Practise traversals, minimum spanning trees and shortest paths systematically.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Solve complexity questions regularly.',
          'Trace algorithms on small input examples before attempting larger problems.',
          'Compare similar algorithms and identify when each is appropriate.',
          'Use previous year questions to practise algorithm selection and analysis.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a complexity table for important algorithms.',
          'Keep short notes for algorithm conditions and key ideas.',
          'Re-solve graph and dynamic programming problems periodically.',
          'Review mistakes by identifying the incorrect reasoning step.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Determine whether the question asks for correctness, complexity, output or algorithm selection.',
          'Use small examples to validate reasoning.',
          'For graph questions, draw the graph whenever useful.',
          'Avoid memorising complexity values without understanding the algorithm behaviour.',
        ],
      },
    ],
  },

  'Theory of Computation': {
    subject: 'Theory of Computation',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Build the concepts of regular expressions and finite automata first.',
          'Understand the relationship between different language and machine models.',
          'Practise construction and tracing problems rather than studying definitions alone.',
          'Keep the conditions and limitations of each model clearly separated.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Regular expressions',
          'Finite automata',
          'Context-free grammars',
          'Push-down automata',
          'Regular and context-free languages',
          'Pumping lemma',
          'Turing machines',
          'Undecidability',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Regular Expressions and Finite Automata: Practise language recognition and machine construction.',
          'Context-Free Grammars: Learn derivations and grammar-based reasoning.',
          'Push-Down Automata: Understand how the stack changes the computational model.',
          'Language Classes: Compare regular and context-free languages carefully.',
          'Pumping Lemma: Practise identifying suitable decompositions and contradiction arguments.',
          'Turing Machines and Undecidability: Focus on the computational model and reasoning about what can or cannot be decided.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Draw automata and derivations instead of relying only on mental reasoning.',
          'Practise converting between equivalent representations when required.',
          'Solve language-classification questions systematically.',
          'Use previous year questions to identify common reasoning patterns.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a comparison sheet for regular and context-free language concepts.',
          'Revisit automata construction problems regularly.',
          'Practise pumping-lemma reasoning instead of memorising one fixed pattern.',
          'Review incorrect questions by identifying the exact conceptual error.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Identify the language or machine model involved before solving.',
          'Use diagrams for automata-based questions whenever possible.',
          'Check whether a claimed language property actually follows from the given conditions.',
          'Read quantifiers and conditions carefully in theoretical questions.',
        ],
      },
    ],
  },

  'Compiler Design': {
    subject: 'Compiler Design',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Understand the overall flow from source program to intermediate representation before studying individual compiler stages.',
          'Study lexical analysis and parsing carefully because they form the foundation of the front end.',
          'Practise syntax-directed translation and intermediate code generation using examples.',
          'Study optimisation and data-flow analysis through small code fragments.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Lexical analysis',
          'Parsing',
          'Syntax-directed translation',
          'Runtime environments',
          'Intermediate code generation',
          'Local optimisation',
          'Data-flow analysis',
          'Constant propagation',
          'Liveness analysis',
          'Common sub-expression elimination',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Lexical Analysis: Practise identifying tokens and lexical behaviour.',
          'Parsing: Work through grammar and parsing problems step by step.',
          'Syntax-directed Translation: Understand how syntax information is used during translation.',
          'Runtime Environments: Understand how program execution is supported at runtime.',
          'Intermediate Code Generation: Practise generating intermediate representations from simple statements.',
          'Optimisation and Data Flow: Trace how program information changes across statements and blocks.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Solve grammar and parsing questions on paper.',
          'Generate intermediate code for small programs.',
          'Trace optimisation steps manually.',
          'Practise data-flow questions using small control-flow examples.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a compact map of compiler phases and their responsibilities.',
          'Revisit parsing and intermediate-code problems regularly.',
          'Practise optimisation questions by comparing the original and transformed code.',
          'Review common errors in data-flow reasoning.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Identify the compiler phase involved before solving.',
          'For grammar questions, follow the given production rules exactly.',
          'For code-generation questions, track each statement systematically.',
          'For optimisation questions, verify that the transformation preserves program behaviour.',
        ],
      },
    ],
  },

  'Operating Systems': {
    subject: 'Operating Systems',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Build a clear understanding of processes, threads and system calls before studying scheduling and synchronization.',
          'Use state diagrams and timelines for process and scheduling problems.',
          'Study memory management through address translation and memory-organisation examples.',
          'Connect file-system concepts with how the operating system manages persistent data.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'System calls, processes and threads',
          'Inter-process communication',
          'Concurrency and synchronization',
          'Deadlock',
          'CPU scheduling',
          'I/O scheduling',
          'Memory management',
          'Virtual memory',
          'File systems',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Processes and Threads: Understand states, creation and execution behaviour.',
          'Inter-process Communication: Compare mechanisms and understand how processes exchange information.',
          'Concurrency and Synchronization: Practise reasoning about shared resources and synchronization.',
          'Deadlock: Understand the conditions and solve related reasoning problems.',
          'Scheduling: Practise scheduling timelines and performance calculations.',
          'Memory Management: Work through memory-allocation and virtual-memory problems carefully.',
          'File Systems: Understand the organisation and management of files and related operations.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Draw process-state or scheduling timelines when solving problems.',
          'Solve numerical scheduling and memory questions repeatedly.',
          'Use small examples to understand synchronization behaviour.',
          'Practise previous year questions topic by topic before attempting mixed sets.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain comparison tables for scheduling and memory-management concepts.',
          'Re-solve scheduling and numerical memory problems periodically.',
          'Review synchronization and deadlock conditions regularly.',
          'Keep a mistake log for calculation and state-transition errors.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Draw a timeline or state diagram when it reduces ambiguity.',
          'For scheduling questions, carefully identify arrival, burst and scheduling assumptions.',
          'For synchronization questions, follow the execution order exactly.',
          'Check every numerical result against the conditions given in the question.',
        ],
      },
    ],
  },

  Databases: {
    subject: 'Databases',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Start with the ER model and relational model before moving to relational operations and SQL.',
          'Practise relational algebra and SQL side by side to understand their relationship.',
          'Study integrity constraints and normal forms through examples.',
          'Understand indexing, transactions and concurrency using practical scenarios.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'ER model',
          'Relational model',
          'Relational algebra',
          'Tuple calculus',
          'SQL',
          'Integrity constraints',
          'Normal forms',
          'File organization',
          'Indexing',
          'B and B+ trees',
          'Transactions',
          'Concurrency control',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'ER and Relational Models: Practise representing entities, relationships and relational structures.',
          'Relational Algebra and Tuple Calculus: Understand the operations and logical conditions used to formulate queries.',
          'SQL: Practise writing and evaluating queries carefully.',
          'Integrity and Normal Forms: Understand why constraints and decomposition rules are required.',
          'Indexing: Practise reasoning about B and B+ tree structures and operations.',
          'Transactions: Understand transaction behaviour and concurrency-control reasoning.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Write SQL queries by hand before checking the result.',
          'Practise relational algebra expressions using small relations.',
          'Solve normalization and dependency-based questions systematically.',
          'Draw B and B+ tree structures when solving indexing problems.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a compact sheet of relational operations and SQL patterns.',
          'Regularly practise SQL and relational algebra questions.',
          'Revisit normalization and indexing problems.',
          'Review transaction and concurrency questions through schedules and examples.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Read database schemas and query conditions carefully.',
          'For SQL questions, evaluate joins, conditions and grouping step by step.',
          'Draw tree structures for indexing questions when useful.',
          'For transaction schedules, track read/write operations in order.',
        ],
      },
    ],
  },

  'Computer Networks': {
    subject: 'Computer Networks',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Understand the purpose of layering before studying individual networking mechanisms.',
          'Use diagrams for switching, routing and protocol behaviour.',
          'Practise networking numericals involving performance and addressing.',
          'Connect protocol behaviour with the specific layer where it operates.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Principles of layering',
          'Circuit, packet and virtual circuit switching',
          'Performance metrics',
          'Data link layer',
          'Error detection',
          'Medium Access Control',
          'Ethernet',
          'Distance vector and link state routing',
          'IPv4 fragmentation, CIDR and NAT',
          'TCP flow and congestion control',
          'Socket API',
          'DNS and HTTP',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Layering and Switching: Understand the purpose of layers and compare switching approaches.',
          'Data Link Layer: Practise error detection, medium access and Ethernet-related questions.',
          'Routing: Compare distance-vector and link-state approaches and solve routing problems.',
          'IPv4: Practise fragmentation, CIDR notation and NAT using numerical examples.',
          'TCP: Understand flow control, congestion control and socket-related concepts.',
          'Application Layer: Understand the roles of DNS and HTTP.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Draw network diagrams for routing and switching problems.',
          'Practise IPv4 and CIDR calculations regularly.',
          'Solve TCP flow and congestion questions using step-by-step reasoning.',
          'Use previous year questions to identify protocol-specific problem patterns.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Maintain a layer-wise summary of the syllabus topics.',
          'Keep a compact sheet for addressing and numerical concepts.',
          'Revisit routing and TCP problems periodically.',
          'Review protocol behaviour rather than memorising isolated facts.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Identify the networking layer involved before solving.',
          'Draw a simple diagram when it clarifies the problem.',
          'For numerical questions, write the given values before calculating.',
          'Check addressing boundaries and protocol assumptions carefully.',
        ],
      },
    ],
  },

  'General Aptitude': {
    subject: 'General Aptitude',
    sections: [
      {
        title: 'How to Study',
        content: [
          'Practise General Aptitude consistently instead of leaving it entirely for the final stage.',
          'Build basic accuracy first and then work on speed.',
          'Separate verbal, quantitative, analytical and spatial practice.',
          'Review mistakes and identify whether they came from concepts, calculation or reading.',
        ],
      },
      {
        title: 'Recommended Study Order',
        content: [
          'Basic English grammar',
          'Basic vocabulary and reading comprehension',
          'Numerical computation and estimation',
          'Data interpretation',
          'Analytical aptitude',
          'Spatial aptitude',
        ],
      },
      {
        title: 'Topic-wise Strategy',
        content: [
          'Verbal Aptitude: Practise grammar, vocabulary, comprehension and narrative sequencing.',
          'Quantitative Aptitude: Practise ratios, percentages, powers, exponents, logarithms, permutations and combinations, series, mensuration, geometry, statistics and probability.',
          'Data Interpretation: Practise graphs, plots, maps and tables with emphasis on accurate reading.',
          'Analytical Aptitude: Practise deduction, induction, analogy, numerical relations and reasoning.',
          'Spatial Aptitude: Practise transformations, folding, cutting, assembling, grouping and 2D/3D patterns.',
        ],
      },
      {
        title: 'Practice Strategy',
        content: [
          'Practise a small set of aptitude questions regularly.',
          'Use timed practice to improve calculation and reading speed.',
          'Mix different question types after building topic-level confidence.',
          'Maintain a mistake log for repeated errors.',
        ],
      },
      {
        title: 'Revision Strategy',
        content: [
          'Revise frequently used formulas and calculation methods.',
          'Revisit vocabulary and grammar mistakes.',
          'Practise data interpretation and reasoning sets periodically.',
          'Use mixed timed sets during later revision.',
        ],
      },
      {
        title: 'GATE Exam Strategy',
        content: [
          'Read verbal and data-based questions carefully before calculating.',
          'Avoid spending too much time on one lengthy aptitude question.',
          'Use estimation when it is sufficient and mathematically safe.',
          'Prioritise accuracy because avoidable mistakes can reduce the benefit of easy questions.',
        ],
      },
    ],
  },
}