window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.reading = {
  id: 'reading',
  name: 'Reading Comprehension',
  short: 'Reading',
  icon: '📖',
  blurb: '50 questions across 3 science passages in 60 minutes. No outside knowledge is required — every answer is supported by the text. The skill is locating and reasoning, not recall.',
  review: [
    {
      id: 'strategy',
      title: 'Passage Strategy',
      html: `
        <p>The OAT reading section uses dense, science-style passages, but you are <strong>never</strong> expected to know the topic beforehand. Every correct answer is defensible from the text alone. Bring evidence, not opinion.</p>
        <h3>How to read</h3>
        <ul>
          <li>Don't memorize details on the first pass. Read for <strong>structure</strong>: what is each paragraph doing, and where is each kind of information located?</li>
          <li>Note the main idea (usually early), the author's purpose, and any shift words ("however," "in contrast," "therefore").</li>
          <li>When a question asks about a detail, <strong>go back and find it</strong>. Do not answer from memory — the wrong answers are built to sound plausible.</li>
        </ul>
        <div class="callout"><strong>Search-and-destroy vs. read-first:</strong> Many high scorers skim the passage for structure (1–2 min), then attack questions, returning to the text for each detail. Try both approaches on practice passages and keep whichever gives you better accuracy within the time limit.</div>
      `
    },
    {
      id: 'qtypes',
      title: 'Question Types & Traps',
      html: `
        <h3>Common question types</h3>
        <ul>
          <li><strong>Main idea / purpose</strong> — the answer covers the whole passage, not one paragraph. Eliminate choices that are too narrow or too broad.</li>
          <li><strong>Detail / fact</strong> — directly stated; scan for keywords from the question.</li>
          <li><strong>Inference</strong> — not stated outright but strongly supported. If you must assume information not in the passage, it's wrong.</li>
          <li><strong>Tone / attitude</strong> — driven by the author's word choices. Look for evaluative language.</li>
          <li><strong>Function</strong> — why did the author include this sentence or example?</li>
        </ul>
        <h3>Wrong-answer patterns to recognize</h3>
        <ul>
          <li><strong>Too extreme</strong> — absolute words like "always," "never," "proves" often signal a trap.</li>
          <li><strong>Half-right</strong> — one clause matches the passage, the other contradicts it. Read the whole choice.</li>
          <li><strong>Out of scope</strong> — true in the real world but never mentioned in the passage.</li>
          <li><strong>Reversed</strong> — states the opposite of what the passage says.</li>
        </ul>
      `
    },
    {
      id: 'timing',
      title: 'Timing',
      html: `
        <ul>
          <li>Three passages in 60 minutes → about <strong>20 minutes per passage</strong>, including its questions.</li>
          <li>Answer the questions you're confident about first; flag and return to the hard ones.</li>
          <li>There is no penalty for guessing — never leave a question blank, even if you have to guess in the final seconds.</li>
          <li>Don't over-invest in a single stubborn question; the 12th question is worth as much as the 1st.</li>
        </ul>
      `
    }
  ],
  passages: [
    {
      id: 'p1',
      title: 'Passage I — The Aging Lens',
      html: `
        <p><span class="pnum">[1]</span> The human eye focuses light through a transparent, flexible structure called the crystalline lens. In a young eye, the lens is pliable, and tiny muscles surrounding it can change its shape to bring objects at different distances into sharp focus, a process known as accommodation. When the eye views a nearby object, the ciliary muscle contracts, the lens thickens, and its focusing power increases. For distant objects, the muscle relaxes and the lens flattens.</p>
        <p><span class="pnum">[2]</span> With age, the lens gradually loses its flexibility. Proteins within the lens, called crystallins, become progressively cross-linked and less soluble over the decades. The consequence is a steady decline in the lens's ability to change shape. This condition, presbyopia, typically becomes noticeable in the mid-forties, when many people find they must hold reading material at arm's length. Presbyopia is not a disease but an essentially universal feature of aging; corrective reading lenses compensate for the lost focusing range rather than reversing the underlying change.</p>
        <p><span class="pnum">[3]</span> The same crystallin proteins are implicated in a distinct age-related problem: cataract. Whereas presbyopia reflects a loss of flexibility, a cataract is a loss of transparency. As damaged crystallins clump together, they scatter incoming light, and vision becomes cloudy or hazy. Unlike presbyopia, cataracts can be treated surgically by replacing the clouded natural lens with a clear artificial one. Notably, an artificial lens implant is rigid; it restores clarity but not the eye's youthful ability to accommodate, so many patients still require reading glasses afterward.</p>
        <p><span class="pnum">[4]</span> Researchers continue to investigate why crystallins deteriorate. Ultraviolet exposure, oxidative stress, and simple accumulated time all appear to contribute. Because the lens produces very few new proteins across a lifetime, the crystallins present in old age are, remarkably, largely the same molecules formed before birth. This longevity leaves them uniquely vulnerable to a lifetime of gradual chemical damage that other, more frequently replaced proteins in the body escape.</p>
      `,
      questions: [
        { id:'rd1', topic:'Detail', stem:'According to the passage, accommodation for viewing a nearby object involves:', options:['Relaxation of the ciliary muscle and flattening of the lens','Contraction of the ciliary muscle and thickening of the lens','Replacement of crystallin proteins','Scattering of light by the lens'], answer:1, explanation:'Paragraph 1 states that for a nearby object the ciliary muscle contracts, the lens thickens, and focusing power increases. The relaxation/flattening description applies to distant objects.' },
        { id:'rd2', topic:'Main Idea', stem:'Which statement best captures the central distinction the passage draws?', options:['Presbyopia and cataract are the same condition at different stages','Presbyopia is a loss of lens flexibility while cataract is a loss of lens transparency','Both conditions can be reversed with reading glasses','Cataracts occur only in people who have presbyopia'], answer:1, explanation:'The passage explicitly contrasts the two: presbyopia is a loss of flexibility (paragraph 2) and cataract is a loss of transparency (paragraph 3). The other options overstate or misstate the relationship.' },
        { id:'rd3', topic:'Inference', stem:'The passage suggests that a patient who receives an artificial lens implant will most likely:', options:['Regain full youthful accommodation','No longer need any corrective lenses','Still need reading glasses for near vision','Develop presbyopia for the first time'], answer:2, explanation:'Paragraph 3 states the implant is rigid and restores clarity but not accommodation, so "many patients still require reading glasses afterward." This supports the inference that near vision correction is still needed.' },
        { id:'rd4', topic:'Detail', stem:'The passage describes crystallin proteins as remarkable because:', options:['They are replaced every few years','They are largely the same molecules present since before birth','They cannot be damaged by ultraviolet light','They dissolve easily throughout life'], answer:1, explanation:'Paragraph 4 notes the lens makes very few new proteins, so the crystallins in old age are largely the same molecules formed before birth — making them uniquely vulnerable to lifelong damage.' },
        { id:'rd5', topic:'Function', stem:'The author most likely mentions that presbyopia "is not a disease but an essentially universal feature of aging" in order to:', options:['Argue that presbyopia should not be corrected','Distinguish a normal aging process from a pathological condition','Prove that cataracts are more serious than presbyopia','Suggest presbyopia can be prevented'], answer:1, explanation:'The clause frames presbyopia as a normal, universal aging change, setting up the contrast with cataract, which the passage treats as a treatable disorder. It is not making a claim about prevention or about withholding correction.' }
      ]
    },
    {
      id: 'p2',
      title: 'Passage II — Antibiotic Resistance',
      html: `
        <p><span class="pnum">[1]</span> When antibiotics were introduced in the mid-twentieth century, they transformed medicine, turning once-lethal infections into routine, treatable conditions. Yet within years of each new drug's release, bacteria capable of surviving it began to appear. This pattern is not a coincidence but a direct consequence of natural selection operating on enormous bacterial populations.</p>
        <p><span class="pnum">[2]</span> A single bacterial colony may contain billions of cells, and random mutations arise constantly during replication. Most mutations are harmful or neutral, but occasionally one confers the ability to survive a particular antibiotic. When the drug is applied, susceptible cells die while the rare resistant cell survives and multiplies. In a short time, the descendants of that single survivor can dominate the population. The antibiotic does not create resistance; it merely selects for resistance that variation had already produced.</p>
        <p><span class="pnum">[3]</span> Bacteria have an additional advantage that most organisms lack. Through a process called horizontal gene transfer, they can share genetic material directly with unrelated cells, sometimes even across species. A gene for resistance that arises in one type of bacterium can therefore spread to others without inheritance through reproduction. This capacity accelerates the diffusion of resistance far beyond what ordinary descent would allow.</p>
        <p><span class="pnum">[4]</span> Human practices have intensified the problem. The incomplete use of prescribed courses, the use of antibiotics to treat viral illnesses they cannot affect, and their routine addition to livestock feed all expose bacteria to drugs under conditions that favor resistant strains. Some researchers warn of a future in which common infections again become difficult to treat. Others counter that new strategies, from narrowly targeted drugs to therapies using viruses that infect bacteria, may yet shift the balance. What both sides accept is that resistance cannot be eliminated, only managed, because the evolutionary pressure that produces it is inseparable from the use of the drugs themselves.</p>
      `,
      questions: [
        { id:'rd6', topic:'Main Idea', stem:'The primary purpose of the passage is to:', options:['Argue that antibiotics should no longer be used','Explain how antibiotic resistance arises and spreads','Prove that horizontal gene transfer is harmful','Describe the discovery of the first antibiotic'], answer:1, explanation:'The passage as a whole explains the mechanism of resistance (natural selection plus horizontal gene transfer) and how human practices worsen it. It does not argue for abandoning antibiotics or focus on the discovery narrative.' },
        { id:'rd7', topic:'Detail', stem:'According to the passage, when an antibiotic is applied to a bacterial population, it:', options:['Creates new resistance mutations','Selects for resistant cells that already existed','Prevents any mutations from occurring','Eliminates horizontal gene transfer'], answer:1, explanation:'Paragraph 2 states plainly that the antibiotic "does not create resistance; it merely selects for resistance that variation had already produced."' },
        { id:'rd8', topic:'Detail', stem:'Horizontal gene transfer is significant because it allows bacteria to:', options:['Reproduce more quickly','Acquire resistance genes without inheriting them through reproduction','Become immune to all antibiotics permanently','Survive without mutations'], answer:1, explanation:'Paragraph 3 defines horizontal gene transfer as sharing genetic material directly with unrelated cells, so resistance can spread "without inheritance through reproduction."' },
        { id:'rd9', topic:'Inference', stem:'The passage implies that using antibiotics to treat a viral illness is counterproductive because:', options:['Viruses are larger than bacteria','It exposes bacteria to the drug without treating the actual infection','It cures the virus too slowly','It causes horizontal gene transfer in viruses'], answer:1, explanation:'Paragraph 4 lists treating viral illnesses as a practice that exposes bacteria to drugs under conditions favoring resistance. Since antibiotics cannot affect viruses, the exposure selects for resistant bacteria without any therapeutic benefit against the virus.' },
        { id:'rd10', topic:'Tone', stem:'The author\'s treatment of the future of antibiotic resistance can best be described as:', options:['Certain that infections will become untreatable','Dismissive of any concern','Balanced, presenting both warning and possible solutions','Indifferent to the outcome'], answer:2, explanation:'Paragraph 4 presents one group of researchers warning of danger and another pointing to new strategies, then notes a shared conclusion. The even-handed presentation of both views is best described as balanced.' }
      ]
    }
  ],
  // flattened for the test engine; each carries its passage reference
  questions: []
};

// Flatten passage questions into a single list, tagging each with its passage id/title.
(function () {
  var r = window.OAT_CONTENT.reading;
  r.passages.forEach(function (p) {
    p.questions.forEach(function (q) {
      var copy = Object.assign({}, q);
      copy.passageId = p.id;
      copy.passageTitle = p.title;
      r.questions.push(copy);
    });
  });
})();
