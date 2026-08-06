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
        <h3>Gene linkage & epistasis</h3>
        <ul>
          <li><strong>Linked genes</strong> (on the same chromosome, close together) don't assort independently — they're inherited together more often than not. <strong>Recombination frequency</strong> (the % of offspring with a non-parental combination) approximates the map distance between them in map units: genes 20 map units apart show ~20% recombinant offspring.</li>
          <li><strong>Epistasis</strong> — one gene masks or modifies the phenotypic expression of another. Example: in Labrador retrievers, the E/e gene controls whether pigment deposits in the coat at all; ee individuals are yellow <em>regardless</em> of their B/b (black/brown) genotype.</li>
        </ul>
        <h3>Reading a pedigree</h3>
        <p>Work from what's <em>ruled out</em>. If two unaffected parents have an affected child, the trait is recessive (both parents are unaffected carriers). If a daughter is affected but her father is unaffected, the trait cannot be X-linked recessive — she would need a recessive allele from <em>both</em> parents, and getting one from her father would require him to be affected (males are hemizygous for X). That combination points to autosomal recessive instead.</p>
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
        <h3>Immune system</h3>
        <ul>
          <li><strong>Innate (non-specific) immunity</strong> — the first, fast-acting line of defense: physical barriers (skin, mucous membranes), phagocytes (macrophages, neutrophils), natural killer cells, the complement system, and inflammation. It responds the same way to any pathogen and has no memory.</li>
          <li><strong>Adaptive (specific) immunity</strong> — slower to start, but targeted and long-lasting. <strong>B lymphocytes</strong> that encounter their matching antigen differentiate into <strong>plasma cells</strong> (which secrete large quantities of antigen-specific antibodies) and memory cells. <strong>T lymphocytes</strong> include helper T cells (coordinate the response) and cytotoxic T cells (directly kill infected cells).</li>
          <li><strong>Immunological memory</strong> — memory B and T cells persist after an infection (or vaccination), enabling a faster, stronger response on re-exposure. This is the basis of vaccination.</li>
        </ul>
      `
    },
    {
      id: 'evolution',
      title: 'Evolution & Population Genetics',
      html: `
        <h3>Mechanisms of evolution</h3>
        <ul>
          <li><strong>Natural selection</strong> acts on heritable variation; fitness = reproductive success.</li>
          <li><strong>Directional selection</strong> favors one phenotypic extreme, shifting the population mean. <strong>Stabilizing selection</strong> favors the intermediate phenotype and selects against both extremes (e.g., human birth weight — both very low and very high birth weights carry higher mortality risk). <strong>Disruptive selection</strong> favors both extremes over the intermediate, which can drive speciation.</li>
          <li>Other mechanisms: genetic drift (random, strongest in small populations — bottleneck & founder effects), gene flow (migration moving alleles between populations), and mutation (the ultimate source of new variation).</li>
          <li><strong>Speciation</strong> often requires reproductive isolation (allopatric = geographic separation; sympatric = same geographic area, e.g. via polyploidy).</li>
        </ul>
        <h3>Hardy–Weinberg equilibrium</h3>
        <p>A population stays in H-W equilibrium only if: no mutation, no migration, random mating, no natural selection, and an <em>infinitely large</em> population (so genetic drift is negligible). A small population — where drift can meaningfully shift allele frequencies by chance — is the classic way this equilibrium breaks down.</p>
        <h3>Phylogenetics</h3>
        <p>A cladogram is a branching diagram of evolutionary relationships. Each branch point (node) represents the <strong>most recent common ancestor</strong> of the lineages that split from it — it is not a mutation event or an extinction, just a hypothesized ancestral population.</p>
      `
    },
    {
      id: 'behavior',
      title: 'Animal Behavior',
      html: `
        <h3>Innate vs. learned behavior</h3>
        <ul>
          <li><strong>Innate behavior</strong> is genetically programmed, present without prior experience (fixed action patterns).</li>
          <li><strong>Imprinting</strong> — a form of innate learning restricted to a critical developmental period; young animals bond with (and follow) the first suitable moving stimulus they see, even if it isn't their actual parent.</li>
          <li><strong>Habituation</strong> — an animal learns to stop responding to a repeated, harmless stimulus.</li>
          <li><strong>Classical conditioning</strong> — an animal learns to associate a neutral stimulus with a meaningful one (Pavlov's dogs: bell → paired with food → salivation to the bell alone).</li>
          <li><strong>Operant conditioning</strong> — an animal learns to associate its own behavior with a consequence (reward or punishment), changing how often it repeats that behavior.</li>
        </ul>
        <h3>Social behavior & kin selection</h3>
        <p>Altruistic behavior (helping others at a cost to oneself) can still be favored by evolution through <strong>kin selection</strong>: helping a genetic relative reproduce still propagates shared genes, even if the helper itself doesn't reproduce directly. Sterile worker bees helping raise their queen's offspring is the textbook example — they share genes with their siblings, so raising siblings still spreads their own genetic material (formalized as Hamilton's rule: the behavior is favored when the benefit to relatives, weighted by relatedness, exceeds the cost to the individual).</p>
      `
    },
    {
      id: 'development',
      title: 'Developmental Biology',
      html: `
        <h3>Early development, in order</h3>
        <p><strong>Fertilization</strong> (sperm + egg → diploid zygote) → <strong>cleavage</strong> (rapid cell division without growth, packing the zygote into many smaller cells) → <strong>blastula formation</strong> (a hollow ball of cells) → <strong>gastrulation</strong> (cells rearrange into the three primary germ layers).</p>
        <h3>The three germ layers</h3>
        <ul>
          <li><strong>Ectoderm</strong> (outer layer) → epidermis of the skin, hair, nails, and the entire nervous system (including the brain).</li>
          <li><strong>Mesoderm</strong> (middle layer) → skeletal and muscular systems, the circulatory system, and the gonads/kidneys.</li>
          <li><strong>Endoderm</strong> (inner layer) → the lining of the digestive tract and the lungs, and associated organs like the liver and pancreas.</li>
        </ul>
        <h3>Later development</h3>
        <ul>
          <li><strong>Induction</strong> — one group of cells signals a neighboring group, directing its differentiation (e.g., the notochord inducing overlying ectoderm to form the neural tube in neurulation).</li>
          <li><strong>Homeotic (Hox) genes</strong> control positional identity along the body axis — which structures form <em>where</em>, not whether they form at all. A classic Hox mutation (Drosophila's Antennapedia) produces a normally-formed leg growing out of the head where an antenna should be: the structure itself is intact, just built in the wrong location.</li>
          <li><strong>Totipotent</strong> cells (like the early zygote) can become any cell type, including extra-embryonic tissue. <strong>Pluripotent</strong> cells (like embryonic stem cells) can become nearly any cell type but not extra-embryonic tissue. Differentiation progressively restricts a cell's potential.</li>
        </ul>
      `
    },
    {
      id: 'diversity',
      title: 'Diversity of Life',
      html: `
        <h3>Taxonomy</h3>
        <p>Three-domain system: <strong>Bacteria, Archaea, Eukarya</strong>. Order of classification, broadest to most specific: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Two organisms sharing a Family but placed in different Genera are guaranteed to share classification only down to that Family level — Genus and Species are, by definition, different.</p>
        <h3>Animal phyla — recognize the defining traits</h3>
        <ul>
          <li><strong>Porifera</strong> (sponges) — no true tissues, filter feeders.</li>
          <li><strong>Cnidaria</strong> (jellyfish, coral) — radial symmetry, a single opening serving as both mouth and anus, and stinging cnidocytes.</li>
          <li><strong>Platyhelminthes</strong> (flatworms) — bilateral symmetry, no body cavity, often parasitic.</li>
          <li><strong>Nematoda</strong> (roundworms) — a complete digestive tract (separate mouth and anus), pseudocoelomate.</li>
          <li><strong>Annelida</strong> (segmented worms) — true segmentation, coelomate.</li>
          <li><strong>Mollusca</strong> (snails, clams, octopi) — soft body, muscular foot, and mantle (which often secretes a shell).</li>
          <li><strong>Arthropoda</strong> (insects, crustaceans, arachnids) — segmented body, jointed appendages, chitinous exoskeleton. The most species-rich animal phylum by far.</li>
          <li><strong>Echinodermata</strong> (sea stars, urchins) — spiny skin and a unique water vascular system for movement.</li>
          <li><strong>Chordata</strong> — a notochord, dorsal hollow nerve cord, and pharyngeal slits present at some life stage (vertebrates are the chordates with a backbone).</li>
        </ul>
        <h3>Plants: alternation of generations</h3>
        <p>Plant life cycles alternate between a diploid, spore-producing <strong>sporophyte</strong> generation and a haploid, gamete-producing <strong>gametophyte</strong> generation. Major plant groups (bryophytes/mosses → seedless vascular plants/ferns → gymnosperms → angiosperms) trace an evolutionary trend of the sporophyte becoming dominant and the gametophyte shrinking, alongside the acquisition of vascular tissue, seeds, and eventually flowers/fruit.</p>
      `
    }
  ],
  questions: [
    { id:'bio1', topic:'Cell Biology', stem:'Which organelle is directly responsible for the post-translational modification and packaging of proteins for secretion?', options:['Golgi apparatus','Rough endoplasmic reticulum','Lysosome','Smooth endoplasmic reticulum'], answer:0, explanation:'The Golgi apparatus receives proteins from the rough ER, modifies them (e.g., glycosylation), and sorts and packages them into vesicles for secretion. The rough ER synthesizes and begins folding these proteins but does not do the final packaging.' },
    { id:'bio2', topic:'Cell Biology', stem:'A cell placed in a hypotonic solution will most likely:', options:['Shrink as water leaves the cell','Swell as water enters the cell','Remain unchanged','Actively pump water out'], answer:1, explanation:'A hypotonic solution has a lower solute concentration than the cell, so water moves into the cell by osmosis (down its concentration gradient), causing it to swell and potentially lyse.' },
    { id:'bio3', topic:'Respiration', stem:'What is the net ATP yield and the location of glycolysis?', options:['2 ATP; mitochondrial matrix','36 ATP; cytoplasm','2 ATP; cytoplasm','4 ATP; inner mitochondrial membrane'], answer:2, explanation:'Glycolysis occurs in the cytoplasm and produces a net of 2 ATP (4 made, 2 consumed) along with 2 NADH and 2 pyruvate. It does not require oxygen.' },
    { id:'bio4', topic:'Respiration', stem:'In aerobic respiration, what serves as the final electron acceptor in the electron transport chain?', options:['NAD⁺','Pyruvate','Carbon dioxide','Oxygen'], answer:3, explanation:'Molecular oxygen (O₂) is the final electron acceptor, combining with electrons and protons to form water. Without O₂, the chain backs up and oxidative phosphorylation halts.' },
    { id:'bio5', topic:'Genetics', stem:'A woman who is a carrier for an X-linked recessive disorder has children with an unaffected man. What fraction of their sons are expected to be affected?', options:['1/2','0','1/4','All'], answer:0, explanation:'Sons inherit their single X from the mother. A carrier mother (Xᴬ Xᵃ) passes the affected allele to half her sons, so 1/2 of sons are expected to be affected. Daughters would need an affected allele from both parents.' },
    { id:'bio6', topic:'Genetics', stem:'Crossing two pink flowers (incomplete dominance, RR = red, WW = white, RW = pink) yields what phenotypic ratio?<table class="punnett"><tr><th></th><th>R</th><th>W</th></tr><tr><th>R</th><td>RR</td><td>RW</td></tr><tr><th>W</th><td>RW</td><td>WW</td></tr></table>', options:['3 red : 1 white','1 red : 2 pink : 1 white','All pink','9:3:3:1'], answer:1, explanation:'RW × RW gives 1 RR (red) : 2 RW (pink) : 1 WW (white). With incomplete dominance the heterozygote has its own intermediate phenotype, so genotype and phenotype ratios match: 1:2:1.' },
    { id:'bio7', topic:'Genetics', stem:'During which process is the enzyme RNA polymerase directly required?', options:['DNA replication','Translation','Transcription','Splicing'], answer:2, explanation:'RNA polymerase synthesizes RNA from a DNA template during transcription. DNA replication uses DNA polymerase, and translation uses ribosomes and tRNA.' },
    { id:'bio8', topic:'Cell Division', stem:'Homologous chromosomes separate during which stage?', options:['Mitotic anaphase','Anaphase II of meiosis','Metaphase of mitosis','Anaphase I of meiosis'], answer:3, explanation:'Homologous chromosomes separate in anaphase I of meiosis (the reductional division). Sister chromatids separate in anaphase II and in mitotic anaphase.' },
    { id:'bio9', topic:'Cell Division', stem:'Meiosis produces which of the following?', options:['Four haploid genetically unique cells','Two diploid identical cells','Two haploid identical cells','Four diploid unique cells'], answer:0, explanation:'Meiosis is two divisions producing four haploid cells, each genetically unique due to crossing over and independent assortment.' },
    { id:'bio10', topic:'Physiology', stem:'Which hormone lowers blood glucose by promoting cellular uptake of glucose?', options:['Glucagon','Insulin','Cortisol','Epinephrine'], answer:1, explanation:'Insulin, secreted by pancreatic β-cells, lowers blood glucose by promoting uptake into cells and glycogen storage. Glucagon does the opposite, raising blood glucose.' },
    { id:'bio11', topic:'Physiology', stem:'During the depolarization phase of a neuronal action potential, which ion primarily flows into the cell?', options:['K⁺','Cl⁻','Na⁺','Ca²⁺'], answer:2, explanation:'Depolarization is driven by voltage-gated Na⁺ channels opening, allowing Na⁺ to rush in and drive the membrane potential toward positive values. Repolarization is driven by K⁺ leaving.' },
    { id:'bio12', topic:'Physiology', stem:'Blood leaving the left ventricle enters which vessel?', options:['Pulmonary artery','Vena cava','Pulmonary vein','Aorta'], answer:3, explanation:'The left ventricle pumps oxygenated blood into the aorta for systemic circulation. The right ventricle pumps to the pulmonary artery toward the lungs.' },
    { id:'bio13', topic:'Evolution', stem:'A random change in allele frequencies that has a pronounced effect in small populations is called:', options:['Genetic drift','Natural selection','Gene flow','Directional selection'], answer:0, explanation:'Genetic drift is random change in allele frequency; its effects are magnified in small populations (e.g., bottleneck and founder effects). Selection, by contrast, is non-random with respect to fitness.' },
    { id:'bio14', topic:'Evolution', stem:'Two populations of a species become separated by a mountain range and eventually can no longer interbreed. This is an example of:', options:['Sympatric speciation','Allopatric speciation','Convergent evolution','Genetic drift'], answer:1, explanation:'Allopatric speciation results from geographic isolation. Sympatric speciation occurs without physical separation (e.g., via polyploidy or niche differentiation).' },
    { id:'bio15', topic:'Ecology', stem:'Approximately what percentage of energy is transferred from one trophic level to the next?', options:['1%','50%','10%','90%'], answer:2, explanation:'Roughly 10% of energy passes to the next trophic level; the rest is lost mainly as heat through metabolism. This is why food chains rarely exceed four or five levels.' },
    { id:'bio16', topic:'Genetics', stem:'In a population at Hardy–Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What fraction of the population is expected to be heterozygous?', options:['0.09','0.21','0.49','0.42'], answer:3, explanation:'Heterozygote frequency is 2pq. With q = 0.3, p = 0.7, so 2pq = 2(0.7)(0.3) = 0.42.' },
    { id:'bio17', topic:'Cell Biology', stem:'Which structure is found in prokaryotic but NOT eukaryotic cells?', options:['A single circular chromosome','Membrane-bound nucleus','80S ribosomes','Mitochondria'], answer:0, explanation:'Prokaryotes have a single circular chromosome and lack a membrane-bound nucleus, mitochondria, and 80S ribosomes (they use smaller 70S ribosomes).' },
    { id:'bio18', topic:'Respiration', stem:'Under anaerobic conditions in human muscle, pyruvate is converted to lactate. The primary purpose of this step is to:', options:['Generate additional ATP directly','Regenerate NAD⁺ so glycolysis can continue','Produce oxygen','Synthesize glucose'], answer:1, explanation:'Lactic acid fermentation regenerates NAD⁺ from NADH, allowing glycolysis (which requires NAD⁺) to keep producing ATP when oxygen is unavailable. The fermentation step itself makes no additional ATP.' },
    { id:'bio19', topic:'Evolution', stem:'Which of the following would cause a population to violate Hardy–Weinberg equilibrium?', options:['Random mating throughout the population','No mutation occurring','A very small population size, subject to genetic drift','No migration into or out of the population'], answer:2, explanation:'<strong>Step 1:</strong> H-W equilibrium requires: no mutation, no migration, random mating, no selection, and an infinitely large population.<br><strong>Step 2:</strong> A small population allows genetic drift — random, chance-driven shifts in allele frequency — to meaningfully move the population away from equilibrium. The other three options listed are the actual required conditions, not violations.' },
    { id:'bio20', topic:'Evolution', stem:'Human birth weight shows higher mortality at both very low and very high values, with the best outcomes at intermediate weights. This is an example of:', options:['Stabilizing selection','Disruptive selection','Sexual selection','Directional selection'], answer:3, explanation:'<strong>Step 1:</strong> Selection against both phenotypic extremes, favoring the intermediate, defines stabilizing selection.<br><strong>Step 2:</strong> This is the classic textbook example — it narrows the range of the trait in the population over time rather than shifting its average.' },
    { id:'bio21', topic:'Evolution', stem:'On the cladogram shown, what does a branch point (node) represent?<div class="mech-diagram"><svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg"><line class="mech-bond" x1="40" y1="50" x2="40" y2="150"/><line class="mech-bond" x1="40" y1="50" x2="250" y2="50"/><line class="mech-bond" x1="40" y1="150" x2="120" y2="150"/><circle cx="40" cy="100" r="4" fill="var(--primary)"/><text class="mech-lbl-sm" x="10" y="118">Node 1</text><line class="mech-bond" x1="120" y1="125" x2="120" y2="175"/><line class="mech-bond" x1="120" y1="125" x2="250" y2="125"/><line class="mech-bond" x1="120" y1="175" x2="250" y2="175"/><circle cx="120" cy="150" r="4" fill="var(--primary)"/><text class="mech-lbl-sm" x="92" y="168">Node 2</text><text class="mech-lbl" x="255" y="54">Species A</text><text class="mech-lbl" x="255" y="129">Species B</text><text class="mech-lbl" x="255" y="179">Species C</text></svg><div class="mech-cap">Node 1 is ancestral to A, B, and C; Node 2 is ancestral to just B and C.</div></div>', options:['The extinction of one of the lineages','The most recent common ancestor of the descendant lineages','A single specific mutation event','The present-day time point'], answer:0, explanation:'<strong>Step 1:</strong> A cladogram maps hypothesized evolutionary relationships based on shared derived traits.<br><strong>Step 2:</strong> Each node marks a hypothesized ancestral population — the most recent common ancestor — from which the branching lineages diverged.' },
    { id:'bio22', topic:'Ecology', stem:'A population grows logistically with r = 0.5/year, a current size N = 200, and carrying capacity K = 1000. What is its current growth rate (dN/dt)?', options:['80 individuals/year','500 individuals/year','100 individuals/year','20 individuals/year'], answer:1, explanation:'<strong>Step 1:</strong> Logistic growth: dN/dt = rN(1 − N/K).<br><strong>Step 2:</strong> dN/dt = 0.5 × 200 × (1 − 200/1000) = 0.5 × 200 × 0.8 = 80 individuals/year.' },
    { id:'bio23', topic:'Ecology', stem:'A meadow\'s producers fix 100,000 kcal of energy. Using the standard 10% rule, approximately how much energy is available to the tertiary consumers (three trophic transfers above producers)?', options:['1,000 kcal','10,000 kcal','100 kcal','10 kcal'], answer:2, explanation:'<strong>Step 1:</strong> Each trophic transfer keeps roughly 10% of the energy from the level below.<br><strong>Step 2:</strong> Producers (100,000) → primary consumers (10,000) → secondary consumers (1,000) → tertiary consumers (100 kcal), after three 10% transfers.' },
    { id:'bio24', topic:'Ecology', stem:'Cattle egrets follow grazing cattle and eat the insects stirred up by their movement, with no measurable effect on the cattle themselves. This relationship is best classified as:', options:['Mutualism','Parasitism','Competition','Commensalism'], answer:3, explanation:'<strong>Step 1:</strong> The egret clearly benefits (easier access to food).<br><strong>Step 2:</strong> The cattle are neither helped nor harmed in any measurable way — a (+/0) relationship, the definition of commensalism.' },
    { id:'bio25', topic:'Behavior', stem:'Newly hatched geese follow the first moving object they see, even if it isn\'t their mother, but only during a brief critical period after hatching. This is an example of:', options:['Imprinting','Habituation','Classical conditioning','Operant conditioning'], answer:0, explanation:'<strong>Step 1:</strong> This is a form of innate learning restricted to a specific critical developmental window.<br><strong>Step 2:</strong> That combination — innate, time-limited, bonding to the first suitable moving stimulus — defines imprinting (first described by Konrad Lorenz).' },
    { id:'bio26', topic:'Behavior', stem:'A dog learns to salivate at the sound of a bell after the bell was repeatedly paired with the presentation of food. This is an example of:', options:['Operant conditioning','Classical conditioning','Habituation','Imprinting'], answer:1, explanation:'<strong>Step 1:</strong> The dog is learning to associate a previously neutral stimulus (the bell) with a meaningful one (food).<br><strong>Step 2:</strong> That pairing of two stimuli — not a behavior-and-consequence pairing — is classical (Pavlovian) conditioning.' },
    { id:'bio27', topic:'Behavior', stem:'Sterile worker bees help raise their queen\'s offspring instead of reproducing themselves. This behavior is best explained by:', options:['Group selection acting for the good of the species','Reciprocal altruism','Kin selection (inclusive fitness)','Random genetic drift'], answer:2, explanation:'<strong>Step 1:</strong> Worker bees share genes with their siblings (the queen\'s offspring).<br><strong>Step 2:</strong> By helping raise related individuals, workers still propagate copies of their own genes indirectly — this is kin selection, formalized in Hamilton\'s rule: the behavior is favored when the relatedness-weighted benefit to relatives exceeds the cost to the individual.' },
    { id:'bio28', topic:'Genetics', stem:'In Labrador retrievers, the E/e gene is epistatic to the B/b (black/brown) gene: ee individuals are yellow regardless of B/b genotype. A BbEe × BbEe cross is performed. What fraction of offspring are expected to be yellow?', options:['3/16','9/16','1/16','1/4'], answer:3, explanation:'<strong>Step 1:</strong> Yellow coat depends only on being ee — the B/b genotype doesn\'t matter once a dog is ee.<br><strong>Step 2:</strong> For Ee × Ee, each parent passes e with probability 1/2, so P(ee) = 1/2 × 1/2 = 1/4, regardless of what happens at the B/b locus.' },
    { id:'bio29', topic:'Genetics', stem:'Two genes are located 20 map units apart on the same chromosome. What percentage of offspring are expected to show a recombinant (non-parental) combination of these genes?', options:['20%','50%','80%','10%'], answer:0, explanation:'<strong>Step 1:</strong> Recombination frequency is approximately equal to the map distance between two linked genes, in map units.<br><strong>Step 2:</strong> 20 map units apart → approximately 20% recombinant offspring (the rest are parental combinations, since the genes are linked rather than assorting independently).' },
    { id:'bio30', topic:'Genetics', stem:'The pedigree below shows two unaffected parents with an affected daughter. What is the most likely mode of inheritance?<div class="mech-diagram"><svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg"><rect class="ped-unaffected" x="80" y="30" width="26" height="26"/><text class="mech-lbl-sm" x="93" y="72" text-anchor="middle">Father</text><circle class="ped-unaffected" cx="180" cy="43" r="13"/><text class="mech-lbl-sm" x="180" y="72" text-anchor="middle">Mother</text><line class="ped-line" x1="106" y1="43" x2="167" y2="43"/><line class="ped-line" x1="136" y1="43" x2="136" y2="90"/><line class="ped-line" x1="60" y1="90" x2="220" y2="90"/><line class="ped-line" x1="60" y1="90" x2="60" y2="105"/><line class="ped-line" x1="140" y1="90" x2="140" y2="105"/><line class="ped-line" x1="220" y1="90" x2="220" y2="105"/><rect class="ped-unaffected" x="47" y="105" width="26" height="26"/><text class="mech-lbl-sm" x="60" y="147" text-anchor="middle">Son</text><circle class="ped-affected" cx="140" cy="118" r="13"/><text class="mech-lbl-sm" x="140" y="147" text-anchor="middle">Daughter</text><rect class="ped-unaffected" x="207" y="105" width="26" height="26"/><text class="mech-lbl-sm" x="220" y="147" text-anchor="middle">Son</text><rect class="ped-unaffected" x="10" y="160" width="12" height="12"/><text class="mech-lbl-sm" x="28" y="170">Unaffected</text><circle class="ped-affected" cx="146" cy="166" r="6"/><text class="mech-lbl-sm" x="158" y="170">Affected</text></svg><div class="mech-cap">Squares = male, circles = female, filled = affected.</div></div>', options:['X-linked recessive','Autosomal recessive','X-linked dominant','Autosomal dominant'], answer:1, explanation:'<strong>Step 1:</strong> X-linked recessive can be ruled out: for a daughter to be affected, she would need a recessive allele from <em>both</em> parents, and since males are hemizygous for X, her father would have to be affected himself to supply one — but he\'s stated as unaffected.<br><strong>Step 2:</strong> Two unaffected parents having an affected child (of either sex) is the signature of autosomal recessive inheritance — both parents are unaffected heterozygous carriers.' },
    { id:'bio31', topic:'Genetics', stem:'In a population at Hardy–Weinberg equilibrium, 16% of individuals show a recessive phenotype. What percentage of the population is expected to be heterozygous carriers?', options:['16%','40%','48%','36%'], answer:2, explanation:'<strong>Step 1:</strong> The recessive phenotype frequency is q²: q² = 0.16 → q = 0.4, so p = 1 − 0.4 = 0.6.<br><strong>Step 2:</strong> Heterozygote frequency is 2pq = 2(0.6)(0.4) = 0.48 = 48%.' },
    { id:'bio32', topic:'Developmental Biology', stem:'The nervous system and the epidermis of the skin both develop from which primary germ layer?', options:['Mesoderm','Endoderm','All three germ layers equally','Ectoderm'], answer:3, explanation:'<strong>Step 1:</strong> Ectoderm is the outermost of the three primary germ layers formed during gastrulation.<br><strong>Step 2:</strong> It gives rise to both the epidermis (outer skin) and the entire nervous system, including the brain — two structures that seem unrelated but share this developmental origin.' },
    { id:'bio33', topic:'Developmental Biology', stem:'Which pair of structures develops from the mesoderm?', options:['Skeletal muscle and the circulatory system','The epidermis and nervous system','The lining of the digestive tract and lungs','The lens of the eye'], answer:0, explanation:'<strong>Step 1:</strong> Mesoderm (the middle germ layer) gives rise to muscle, the skeleton, the circulatory system, and the gonads/kidneys.<br><strong>Step 2:</strong> The other options are ectoderm derivatives (epidermis, nervous system, lens) or endoderm derivatives (gut and lung lining).' },
    { id:'bio34', topic:'Developmental Biology', stem:'Place the following stages of early animal development in the correct order.', options:['Fertilization → Gastrulation → Cleavage → Blastula formation','Fertilization → Cleavage → Blastula formation → Gastrulation','Cleavage → Fertilization → Blastula formation → Gastrulation','Fertilization → Blastula formation → Cleavage → Gastrulation'], answer:1, explanation:'<strong>Step 1:</strong> Development begins with fertilization, forming a diploid zygote.<br><strong>Step 2:</strong> Cleavage rapidly divides the zygote into many smaller cells without overall growth, forming a hollow blastula.<br><strong>Step 3:</strong> Gastrulation then rearranges those cells into the three primary germ layers.' },
    { id:'bio35', topic:'Developmental Biology', stem:'Mutations in Hox (homeotic) genes typically result in:', options:['Complete failure of the embryo to form any structures','Random point mutations with no developmental effect','Body structures developing normally in form, but in the wrong location along the body axis','Only cosmetic skin color changes'], answer:2, explanation:'<strong>Step 1:</strong> Hox genes control positional identity along the body axis — <em>where</em> a structure forms, not whether it forms or how it\'s built.<br><strong>Step 2:</strong> The classic example is Drosophila\'s Antennapedia mutation: a completely normal, well-formed leg grows out of the head where an antenna should be.' },
    { id:'bio36', topic:'Diversity of Life', stem:'An organism has radial symmetry, a single opening that serves as both mouth and anus, and specialized stinging cells. This organism belongs to which phylum?', options:['Porifera','Platyhelminthes','Echinodermata','Cnidaria'], answer:3, explanation:'<strong>Step 1:</strong> Radial symmetry plus a single gastrovascular opening rules out the bilaterally symmetric, complete-digestive-tract phyla.<br><strong>Step 2:</strong> Stinging cells (cnidocytes) are the phylum-defining feature of Cnidaria (jellyfish, coral, sea anemones).' },
    { id:'bio37', topic:'Diversity of Life', stem:'Which combination of features is most characteristic of phylum Arthropoda?', options:['Segmented body, jointed appendages, and a chitinous exoskeleton','A single muscular foot and a mantle','A water vascular system and spiny skin','A notochord present at some life stage'], answer:0, explanation:'<strong>Step 1:</strong> The other three options describe Mollusca (foot/mantle), Echinodermata (water vascular system/spiny skin), and Chordata (notochord).<br><strong>Step 2:</strong> Arthropoda — the most species-rich animal phylum — is defined by body segmentation, jointed appendages, and a chitinous exoskeleton.' },
    { id:'bio38', topic:'Diversity of Life', stem:'In the plant life cycle known as alternation of generations, the diploid, spore-producing stage is called the:', options:['Gametophyte','Sporophyte','Zygote','Spore'], answer:1, explanation:'<strong>Step 1:</strong> Plant life cycles alternate between a diploid and a haploid multicellular stage.<br><strong>Step 2:</strong> The diploid stage, which produces spores via meiosis, is the sporophyte. The haploid stage that produces gametes is the gametophyte.' },
    { id:'bio39', topic:'Diversity of Life', stem:'Two organisms are classified in the same Family but different Genera. What is the most specific taxonomic level at which they are guaranteed to share classification?', options:['Order','Genus','Family','Species'], answer:2, explanation:'<strong>Step 1:</strong> The taxonomic hierarchy runs Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species, from broadest to most specific.<br><strong>Step 2:</strong> Sharing Family guarantees agreement at Family and every broader rank (Order, Class, etc.), but since their Genus already differs, nothing more specific than Family is guaranteed.' },
    { id:'bio40', topic:'Cell Biology', stem:'A competitive enzyme inhibitor is added to a reaction. How does this affect Km and Vmax, and how can its effect be overcome?', options:['Vmax decreases, Km unchanged; cannot be overcome by adding substrate','Both Km and Vmax decrease; overcome by adding more enzyme','Neither Km nor Vmax changes; the inhibitor has no measurable effect','Km increases (apparent), Vmax unchanged; overcome by adding excess substrate'], answer:3, explanation:'<strong>Step 1:</strong> A competitive inhibitor competes with substrate for the same active site, effectively lowering the enzyme\'s apparent affinity for substrate — this raises the apparent Km.<br><strong>Step 2:</strong> Because the inhibitor and substrate are just competing for the same site, adding enough excess substrate can out-compete the inhibitor and still reach the same Vmax — Vmax itself is unchanged.' },
    { id:'bio41', topic:'Cell Biology', stem:'A protein destined for secretion out of the cell is synthesized on a ribosome. What is the correct order of its subsequent path?', options:['Rough ER → Golgi apparatus → secretory vesicle → exocytosis','Golgi apparatus → rough ER → secretory vesicle → exocytosis','Rough ER → lysosome → Golgi apparatus → exocytosis','Smooth ER → Golgi apparatus → nucleus → exocytosis'], answer:0, explanation:'<strong>Step 1:</strong> Secreted proteins are synthesized by ribosomes on the rough ER and folded/processed in its lumen.<br><strong>Step 2:</strong> Vesicles shuttle the protein to the Golgi apparatus (entering the <em>cis</em> face) for further modification, then bud off as secretory vesicles from the <em>trans</em> face.<br><strong>Step 3:</strong> Those vesicles fuse with the plasma membrane, releasing the protein by exocytosis.' },
    { id:'bio42', topic:'Physiology', stem:'Which of the following is a component of the innate (non-specific) immune system rather than the adaptive immune system?', options:['B lymphocytes producing antigen-specific antibodies','Macrophages and the complement system','Cytotoxic T cells','Immunological memory from a prior vaccination'], answer:1, explanation:'<strong>Step 1:</strong> Innate immunity is fast and non-specific: physical barriers, phagocytes (like macrophages), natural killer cells, complement, and inflammation.<br><strong>Step 2:</strong> The other three options — antibody-producing B cells, cytotoxic T cells, and immunological memory — are all hallmarks of the adaptive (specific) immune system.' },
    { id:'bio43', topic:'Physiology', stem:'B lymphocytes that encounter their matching antigen differentiate into plasma cells and memory cells. What is the primary function of a plasma cell?', options:['Directly kill infected cells by inducing apoptosis','Present antigen fragments to helper T cells','Secrete large quantities of antigen-specific antibodies','Engulf and digest pathogens via phagocytosis'], answer:2, explanation:'<strong>Step 1:</strong> Plasma cells are terminally differentiated B cells dedicated to antibody production.<br><strong>Step 2:</strong> They secrete large quantities of antibody specific to the antigen that activated the parent B cell — the effector arm of humoral (antibody-mediated) immunity. Killing infected cells directly is a cytotoxic T cell function, and phagocytosis is innate immunity.' }
  ]
};
