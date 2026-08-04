window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.biology = {
  id: 'biology',
  name: 'Biology',
  short: 'Bio',
  icon: '🧬',
  blurb: '40 questions in the Survey of Natural Sciences. Cell & molecular biology, genetics, physiology, evolution, and diversity of life.',
  review: [
    {
      id: 'cell',
      title: 'Cell & Molecular Biology',
      html: `
        <p>The cell is the highest-yield topic in OAT biology. Know organelle function cold, and be able to trace a protein from gene to secretion.</p>
        <h3>Organelles</h3>
        <ul>
          <li><strong>Nucleus</strong> — houses DNA; the nucleolus assembles ribosomal subunits. The nuclear envelope is a double membrane with pores that regulate RNA/protein traffic.</li>
          <li><strong>Rough ER</strong> — studded with ribosomes; synthesizes and folds membrane-bound and secreted proteins.</li>
          <li><strong>Smooth ER</strong> — lipid and steroid synthesis, detoxification, and Ca²⁺ storage (sarcoplasmic reticulum in muscle).</li>
          <li><strong>Golgi apparatus</strong> — modifies (glycosylation), sorts, and packages proteins. <em>cis</em> face receives from the ER; <em>trans</em> face ships out.</li>
          <li><strong>Mitochondria</strong> — aerobic ATP production; has its own circular DNA and double membrane (cristae increase surface area for the electron transport chain).</li>
          <li><strong>Lysosomes</strong> — acidic (pH ~5) compartments full of hydrolytic enzymes for intracellular digestion and autophagy.</li>
          <li><strong>Peroxisomes</strong> — break down fatty acids (β-oxidation) and neutralize H₂O₂ via catalase.</li>
        </ul>
        <div class="callout"><strong>Prokaryote vs eukaryote:</strong> prokaryotes lack a membrane-bound nucleus and organelles, have 70S ribosomes (vs 80S), and a single circular chromosome. This distinction is a common test point.</div>
        <h3>Membrane transport</h3>
        <ul>
          <li><strong>Passive</strong> (no ATP): simple diffusion, facilitated diffusion (via channels/carriers), and osmosis (water down its gradient).</li>
          <li><strong>Active</strong> (ATP): pumps like the Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in) move solutes against their gradient.</li>
          <li>Tonicity: cells shrink in <strong>hypertonic</strong> solutions (water leaves) and swell/lyse in <strong>hypotonic</strong> solutions (water enters).</li>
        </ul>
        <h3>Cellular respiration</h3>
        <ul>
          <li><strong>Glycolysis</strong> (cytoplasm): glucose → 2 pyruvate; net 2 ATP + 2 NADH. Anaerobic.</li>
          <li><strong>Pyruvate oxidation + Krebs cycle</strong> (mitochondrial matrix): produces NADH, FADH₂, and 2 ATP (GTP) per glucose, releasing CO₂.</li>
          <li><strong>Oxidative phosphorylation</strong> (inner membrane): the electron transport chain pumps H⁺ to build a gradient; ATP synthase makes ~26–28 ATP. O₂ is the final electron acceptor.</li>
          <li>Fermentation regenerates NAD⁺ without O₂ — lactic acid (muscle) or ethanol (yeast).</li>
        </ul>
      `
    },
    {
      id: 'genetics',
      title: 'Genetics & Molecular Genetics',
      html: `
        <h3>DNA → RNA → protein</h3>
        <ul>
          <li><strong>Replication</strong> is semi-conservative. Leading strand is synthesized continuously; the lagging strand in Okazaki fragments joined by DNA ligase. DNA polymerase works 5'→3'.</li>
          <li><strong>Transcription</strong> (nucleus): RNA polymerase reads DNA 3'→5' to build mRNA 5'→3'. Eukaryotic pre-mRNA is processed — 5' cap, poly-A tail, and splicing out introns.</li>
          <li><strong>Translation</strong> (ribosome): tRNA anticodons pair with mRNA codons; peptide bonds form in the P site. Start codon AUG (Met); stop codons UAA, UAG, UGA.</li>
        </ul>
        <h3>Mendelian genetics</h3>
        <ul>
          <li><strong>Law of Segregation</strong> — allele pairs separate during gamete formation.</li>
          <li><strong>Law of Independent Assortment</strong> — genes on different chromosomes assort independently.</li>
          <li>A monohybrid cross of two heterozygotes (Aa × Aa) gives a <strong>3:1</strong> phenotypic and <strong>1:2:1</strong> genotypic ratio.</li>
          <li>A dihybrid cross (AaBb × AaBb) gives a <strong>9:3:3:1</strong> ratio.</li>
        </ul>
        <h3>Non-Mendelian patterns</h3>
        <ul>
          <li><strong>Incomplete dominance</strong> — heterozygote is a blend (red × white → pink).</li>
          <li><strong>Codominance</strong> — both alleles fully expressed (AB blood type).</li>
          <li><strong>X-linked recessive</strong> — far more common in males (they have one X). Carrier mothers pass to ~50% of sons.</li>
        </ul>
        <div class="callout"><strong>Hardy–Weinberg:</strong> p + q = 1 and p² + 2pq + q² = 1. Use it to find allele/genotype frequencies in a population at equilibrium. 2pq is the heterozygote frequency.</div>
      `
    },
    {
      id: 'division',
      title: 'Mitosis & Meiosis',
      html: `
        <h3>Mitosis</h3>
        <p>One division producing two genetically identical diploid daughter cells. Phases: <strong>P</strong>rophase → <strong>M</strong>etaphase (chromosomes align at the metaphase plate) → <strong>A</strong>naphase (sister chromatids separate) → <strong>T</strong>elophase → cytokinesis.</p>
        <h3>Meiosis</h3>
        <ul>
          <li><strong>Meiosis I</strong> is the reductional division — homologous chromosomes separate, halving ploidy (2n → n). <strong>Crossing over</strong> occurs in prophase I, and independent assortment happens at metaphase I — the two big sources of genetic variation.</li>
          <li><strong>Meiosis II</strong> resembles mitosis — sister chromatids separate. The end result is four haploid, genetically unique gametes.</li>
        </ul>
        <div class="callout"><strong>Common trap:</strong> homologs separate in Meiosis I; sister chromatids separate in Meiosis II (and in mitotic anaphase). Nondisjunction in meiosis produces aneuploidy (e.g., trisomy 21).</div>
      `
    },
    {
      id: 'physiology',
      title: 'Structure & Function of Systems',
      html: `
        <h3>Circulatory</h3>
        <ul>
          <li>Path: body → vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body.</li>
          <li>Arteries carry blood <em>away</em> from the heart (usually oxygenated — except the pulmonary artery). <strong>Cardiac output = stroke volume × heart rate.</strong></li>
        </ul>
        <h3>Nervous</h3>
        <ul>
          <li><strong>Action potential:</strong> resting ~ −70 mV → depolarization (Na⁺ in) → repolarization (K⁺ out) → brief hyperpolarization. The Na⁺/K⁺ pump restores the gradient.</li>
          <li><strong>Sympathetic</strong> = fight-or-flight (↑HR, dilated pupils, bronchodilation). <strong>Parasympathetic</strong> = rest-and-digest (↓HR, constricted pupils).</li>
        </ul>
        <h3>Endocrine (high-yield hormones)</h3>
        <ul>
          <li><strong>Insulin</strong> (β-cells) lowers blood glucose; <strong>glucagon</strong> (α-cells) raises it.</li>
          <li><strong>ADH</strong> promotes water reabsorption in the kidney; <strong>aldosterone</strong> promotes Na⁺ (and thus water) retention.</li>
          <li>Steroid hormones are lipid-soluble and act on intracellular receptors; peptide hormones bind surface receptors and use second messengers (cAMP).</li>
        </ul>
        <h3>Renal</h3>
        <p>The nephron filters blood (glomerulus), then reabsorbs water/solutes and secretes wastes. It's central to fluid, electrolyte, and pH balance.</p>
      `
    },
    {
      id: 'evolution',
      title: 'Evolution, Ecology & Diversity',
      html: `
        <h3>Evolution</h3>
        <ul>
          <li><strong>Natural selection</strong> acts on heritable variation; fitness = reproductive success. Selection can be directional, stabilizing, or disruptive.</li>
          <li>Other mechanisms: genetic drift (random, strong in small populations — bottleneck & founder effects), gene flow, and mutation (the ultimate source of variation).</li>
          <li><strong>Speciation</strong> often requires reproductive isolation (allopatric = geographic; sympatric = same area).</li>
        </ul>
        <h3>Taxonomy</h3>
        <p>Three-domain system: <strong>Bacteria, Archaea, Eukarya</strong>. Order of classification: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species.</p>
        <h3>Ecology</h3>
        <ul>
          <li>Energy flows through trophic levels; only ~10% transfers between levels.</li>
          <li>Population growth: exponential (J-curve) vs logistic (S-curve, limited by carrying capacity K).</li>
          <li>Symbiosis: mutualism (+/+), commensalism (+/0), parasitism (+/−).</li>
        </ul>
      `
    }
  ],
  questions: [
    { id:'bio1', topic:'Cell Biology', stem:'Which organelle is directly responsible for the post-translational modification and packaging of proteins for secretion?', options:['Rough endoplasmic reticulum','Golgi apparatus','Lysosome','Smooth endoplasmic reticulum'], answer:1, explanation:'The Golgi apparatus receives proteins from the rough ER, modifies them (e.g., glycosylation), and sorts and packages them into vesicles for secretion. The rough ER synthesizes and begins folding these proteins but does not do the final packaging.' },
    { id:'bio2', topic:'Cell Biology', stem:'A cell placed in a hypotonic solution will most likely:', options:['Shrink as water leaves the cell','Swell as water enters the cell','Remain unchanged','Actively pump water out'], answer:1, explanation:'A hypotonic solution has a lower solute concentration than the cell, so water moves into the cell by osmosis (down its concentration gradient), causing it to swell and potentially lyse.' },
    { id:'bio3', topic:'Respiration', stem:'What is the net ATP yield and the location of glycolysis?', options:['2 ATP; cytoplasm','2 ATP; mitochondrial matrix','36 ATP; cytoplasm','4 ATP; inner mitochondrial membrane'], answer:0, explanation:'Glycolysis occurs in the cytoplasm and produces a net of 2 ATP (4 made, 2 consumed) along with 2 NADH and 2 pyruvate. It does not require oxygen.' },
    { id:'bio4', topic:'Respiration', stem:'In aerobic respiration, what serves as the final electron acceptor in the electron transport chain?', options:['NAD⁺','Pyruvate','Oxygen','Carbon dioxide'], answer:2, explanation:'Molecular oxygen (O₂) is the final electron acceptor, combining with electrons and protons to form water. Without O₂, the chain backs up and oxidative phosphorylation halts.' },
    { id:'bio5', topic:'Genetics', stem:'A woman who is a carrier for an X-linked recessive disorder has children with an unaffected man. What fraction of their sons are expected to be affected?', options:['0','1/4','1/2','All'], answer:2, explanation:'Sons inherit their single X from the mother. A carrier mother (Xᴬ Xᵃ) passes the affected allele to half her sons, so 1/2 of sons are expected to be affected. Daughters would need an affected allele from both parents.' },
    { id:'bio6', topic:'Genetics', stem:'Crossing two pink flowers (incomplete dominance, RR = red, WW = white, RW = pink) yields what phenotypic ratio?', options:['3 red : 1 white','1 red : 2 pink : 1 white','All pink','9:3:3:1'], answer:1, explanation:'RW × RW gives 1 RR (red) : 2 RW (pink) : 1 WW (white). With incomplete dominance the heterozygote has its own intermediate phenotype, so genotype and phenotype ratios match: 1:2:1.' },
    { id:'bio7', topic:'Genetics', stem:'During which process is the enzyme RNA polymerase directly required?', options:['DNA replication','Transcription','Translation','Splicing'], answer:1, explanation:'RNA polymerase synthesizes RNA from a DNA template during transcription. DNA replication uses DNA polymerase, and translation uses ribosomes and tRNA.' },
    { id:'bio8', topic:'Cell Division', stem:'Homologous chromosomes separate during which stage?', options:['Mitotic anaphase','Anaphase I of meiosis','Anaphase II of meiosis','Metaphase of mitosis'], answer:1, explanation:'Homologous chromosomes separate in anaphase I of meiosis (the reductional division). Sister chromatids separate in anaphase II and in mitotic anaphase.' },
    { id:'bio9', topic:'Cell Division', stem:'Meiosis produces which of the following?', options:['Two diploid identical cells','Four haploid genetically unique cells','Two haploid identical cells','Four diploid unique cells'], answer:1, explanation:'Meiosis is two divisions producing four haploid cells, each genetically unique due to crossing over and independent assortment.' },
    { id:'bio10', topic:'Physiology', stem:'Which hormone lowers blood glucose by promoting cellular uptake of glucose?', options:['Glucagon','Insulin','Cortisol','Epinephrine'], answer:1, explanation:'Insulin, secreted by pancreatic β-cells, lowers blood glucose by promoting uptake into cells and glycogen storage. Glucagon does the opposite, raising blood glucose.' },
    { id:'bio11', topic:'Physiology', stem:'During the depolarization phase of a neuronal action potential, which ion primarily flows into the cell?', options:['K⁺','Cl⁻','Na⁺','Ca²⁺'], answer:2, explanation:'Depolarization is driven by voltage-gated Na⁺ channels opening, allowing Na⁺ to rush in and drive the membrane potential toward positive values. Repolarization is driven by K⁺ leaving.' },
    { id:'bio12', topic:'Physiology', stem:'Blood leaving the left ventricle enters which vessel?', options:['Pulmonary artery','Aorta','Vena cava','Pulmonary vein'], answer:1, explanation:'The left ventricle pumps oxygenated blood into the aorta for systemic circulation. The right ventricle pumps to the pulmonary artery toward the lungs.' },
    { id:'bio13', topic:'Evolution', stem:'A random change in allele frequencies that has a pronounced effect in small populations is called:', options:['Natural selection','Gene flow','Genetic drift','Directional selection'], answer:2, explanation:'Genetic drift is random change in allele frequency; its effects are magnified in small populations (e.g., bottleneck and founder effects). Selection, by contrast, is non-random with respect to fitness.' },
    { id:'bio14', topic:'Evolution', stem:'Two populations of a species become separated by a mountain range and eventually can no longer interbreed. This is an example of:', options:['Sympatric speciation','Allopatric speciation','Convergent evolution','Genetic drift'], answer:1, explanation:'Allopatric speciation results from geographic isolation. Sympatric speciation occurs without physical separation (e.g., via polyploidy or niche differentiation).' },
    { id:'bio15', topic:'Ecology', stem:'Approximately what percentage of energy is transferred from one trophic level to the next?', options:['1%','10%','50%','90%'], answer:1, explanation:'Roughly 10% of energy passes to the next trophic level; the rest is lost mainly as heat through metabolism. This is why food chains rarely exceed four or five levels.' },
    { id:'bio16', topic:'Genetics', stem:'In a population at Hardy–Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What fraction of the population is expected to be heterozygous?', options:['0.09','0.21','0.42','0.49'], answer:2, explanation:'Heterozygote frequency is 2pq. With q = 0.3, p = 0.7, so 2pq = 2(0.7)(0.3) = 0.42.' },
    { id:'bio17', topic:'Cell Biology', stem:'Which structure is found in prokaryotic but NOT eukaryotic cells?', options:['Membrane-bound nucleus','80S ribosomes','A single circular chromosome','Mitochondria'], answer:2, explanation:'Prokaryotes have a single circular chromosome and lack a membrane-bound nucleus, mitochondria, and 80S ribosomes (they use smaller 70S ribosomes).' },
    { id:'bio18', topic:'Respiration', stem:'Under anaerobic conditions in human muscle, pyruvate is converted to lactate. The primary purpose of this step is to:', options:['Generate additional ATP directly','Regenerate NAD⁺ so glycolysis can continue','Produce oxygen','Synthesize glucose'], answer:1, explanation:'Lactic acid fermentation regenerates NAD⁺ from NADH, allowing glycolysis (which requires NAD⁺) to keep producing ATP when oxygen is unavailable. The fermentation step itself makes no additional ATP.' }
  ]
};
