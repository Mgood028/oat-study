window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.ochem = {
  id: 'ochem',
  name: 'Organic Chemistry',
  short: 'Org Chem',
  icon: '🔗',
  blurb: '30 questions in the Survey of Natural Sciences. Functional groups, nomenclature, stereochemistry, reaction mechanisms, resonance/aromaticity, carbonyl chemistry, and spectroscopy basics. This section is heavily visual — learn to read the structures and the arrow-pushing.',
  review: [
    {
      id: 'groups',
      title: 'Functional Groups & Nomenclature',
      html: `
        <p>The single most useful orgo skill is recognizing functional groups on sight. Study the structures below until you can name each one instantly — most of the section builds on this.</p>
        <div class="mol-gallery">
          <div class="mol" data-smiles="CC" data-w="150" data-h="110"><div class="mol-cap">Alkane<span class="sub">C–C single bonds</span></div></div>
          <div class="mol" data-smiles="C=C" data-w="150" data-h="110"><div class="mol-cap">Alkene<span class="sub">C=C double bond</span></div></div>
          <div class="mol" data-smiles="C#C" data-w="150" data-h="110"><div class="mol-cap">Alkyne<span class="sub">C≡C triple bond</span></div></div>
          <div class="mol" data-smiles="c1ccccc1" data-w="150" data-h="110"><div class="mol-cap">Aromatic<span class="sub">benzene ring</span></div></div>
          <div class="mol" data-smiles="CCO" data-w="150" data-h="110"><div class="mol-cap">Alcohol<span class="sub">–OH · ethanol</span></div></div>
          <div class="mol" data-smiles="CC=O" data-w="150" data-h="110"><div class="mol-cap">Aldehyde<span class="sub">–CHO · terminal C=O</span></div></div>
          <div class="mol" data-smiles="CC(=O)C" data-w="150" data-h="110"><div class="mol-cap">Ketone<span class="sub">internal C=O</span></div></div>
          <div class="mol" data-smiles="CC(=O)O" data-w="150" data-h="110"><div class="mol-cap">Carboxylic acid<span class="sub">–COOH</span></div></div>
          <div class="mol" data-smiles="CC(=O)OC" data-w="150" data-h="110"><div class="mol-cap">Ester<span class="sub">–COO– · methyl acetate</span></div></div>
          <div class="mol" data-smiles="CC(=O)N" data-w="150" data-h="110"><div class="mol-cap">Amide<span class="sub">–C(=O)N</span></div></div>
          <div class="mol" data-smiles="CCN" data-w="150" data-h="110"><div class="mol-cap">Amine<span class="sub">–NH₂ · basic</span></div></div>
          <div class="mol" data-smiles="CCOCC" data-w="150" data-h="110"><div class="mol-cap">Ether<span class="sub">R–O–R</span></div></div>
        </div>
        <div class="callout"><strong>Boiling point ranking</strong> (similar size): carboxylic acid &gt; alcohol &gt; ketone/aldehyde &gt; ether &gt; alkane. More hydrogen bonding → higher boiling point.</div>
        <h3>IUPAC basics</h3>
        <ul>
          <li>Find the longest carbon chain containing the principal functional group; number to give that group the lowest locant.</li>
          <li>Name and number substituents alphabetically. Suffixes: -ane, -ene, -yne, -ol, -al, -one, -oic acid.</li>
        </ul>
      `
    },
    {
      id: 'stereo',
      title: 'Stereochemistry',
      html: `
        <h3>Isomer types</h3>
        <ul>
          <li><strong>Structural (constitutional) isomers</strong> — same formula, different connectivity.</li>
          <li><strong>Enantiomers</strong> — non-superimposable mirror images. Identical physical properties except they rotate plane-polarized light in opposite directions.</li>
          <li><strong>Diastereomers</strong> — stereoisomers that are <em>not</em> mirror images (includes cis/trans). Different physical properties.</li>
          <li><strong>Meso compound</strong> — has stereocenters but an internal plane of symmetry, so it is achiral overall.</li>
        </ul>
        <h3>Chirality & R/S</h3>
        <div class="mol-gallery">
          <div class="mol" data-smiles="FC(Cl)Br" data-w="180" data-h="140"><div class="mol-cap">A chiral carbon<span class="sub">4 different groups (F, Cl, Br, H) → 1 stereocenter</span></div></div>
          <div class="mol" data-smiles="N[C@@H](C)C(=O)O" data-w="180" data-h="140"><div class="mol-cap">Alanine<span class="sub">one enantiomer of a chiral amino acid</span></div></div>
        </div>
        <ul>
          <li>A <strong>stereocenter</strong> (chiral carbon) has four different groups attached.</li>
          <li>Assign R/S by Cahn–Ingold–Prelog priority (highest atomic number = highest priority). With the lowest priority pointing away, clockwise = R, counterclockwise = S.</li>
          <li>A molecule with <em>n</em> stereocenters has up to 2ⁿ stereoisomers.</li>
        </ul>
      `
    },
    {
      id: 'substitution',
      title: 'Substitution & Elimination',
      html: `
        <h3>SN1 vs SN2</h3>
        <ul>
          <li><strong>SN2</strong> — one concerted step, backside attack, <strong>inversion</strong> of configuration. Favored by primary substrates, strong nucleophiles, and polar aprotic solvents. Rate depends on both substrate and nucleophile.</li>
          <li><strong>SN1</strong> — two steps through a carbocation, gives <strong>racemization</strong>. Favored by tertiary substrates (stable carbocation) and polar protic solvents. Rate depends only on the substrate.</li>
        </ul>
        <div class="mech-diagram">
          <svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="sn2-head" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--primary)"/></marker>
            </defs>
            <text class="mech-lbl" x="18" y="80">Nu</text>
            <text class="mech-lbl-sm" x="18" y="56">: :</text>
            <path class="mech-arrow" d="M42,60 Q95,38 148,72" marker-end="url(#sn2-head)"/>
            <line class="mech-bond" x1="148" y1="45" x2="170" y2="75"/>
            <text class="mech-lbl-sm" x="140" y="38">R</text>
            <line class="mech-bond" x1="170" y1="75" x2="148" y2="105"/>
            <text class="mech-lbl-sm" x="140" y="120">R</text>
            <line class="mech-bond" x1="170" y1="75" x2="250" y2="75"/>
            <text class="mech-lbl" x="258" y="80">LG</text>
            <path class="mech-arrow" d="M215,75 Q230,50 248,62" marker-end="url(#sn2-head)"/>
            <line class="mech-bond" x1="278" y1="75" x2="312" y2="75"/>
            <path class="mech-bond" d="M312,75 L303,70 M312,75 L303,80"/>
            <text class="mech-lbl" x="330" y="80">Nu</text>
            <line class="mech-bond" x1="352" y1="75" x2="374" y2="75"/>
            <line class="mech-bond" x1="374" y1="75" x2="396" y2="105"/>
            <text class="mech-lbl-sm" x="388" y="122">R</text>
            <line class="mech-bond" x1="374" y1="75" x2="396" y2="45"/>
            <text class="mech-lbl-sm" x="388" y="38">R</text>
            <text class="mech-lbl" x="420" y="80">LG</text>
            <text class="mech-charge" x="450" y="70">–</text>
          </svg>
          <div class="mech-cap">S<sub>N</sub>2: backside attack and bond-breaking happen in one concerted step — the nucleophile ends up inverted (umbrella flip) opposite where the leaving group departed.</div>
        </div>
        <div class="mol-gallery">
          <div class="mol" data-smiles="CCCCBr" data-w="180" data-h="130"><div class="mol-cap">Primary substrate<span class="sub">1-bromobutane · favors S<sub>N</sub>2</span></div></div>
          <div class="mol" data-smiles="CC(C)(C)Br" data-w="180" data-h="130"><div class="mol-cap">Tertiary substrate<span class="sub">tert-butyl bromide · favors S<sub>N</sub>1 / E1</span></div></div>
        </div>
        <h3>E1 vs E2</h3>
        <ul>
          <li><strong>E2</strong> — concerted, requires a strong base and anti-periplanar geometry; follows Zaitsev's rule (more substituted, more stable alkene favored).</li>
          <li><strong>E1</strong> — stepwise through a carbocation, like SN1's cousin.</li>
        </ul>
        <div class="callout"><strong>Carbocation stability:</strong> 3° &gt; 2° &gt; 1° &gt; methyl (more alkyl groups donate electron density). This drives SN1/E1 preferences.</div>
      `
    },
    {
      id: 'addition',
      title: 'Addition Reactions & Alkenes',
      html: `
        <ul>
          <li><strong>Markovnikov's rule</strong> — in electrophilic addition of HX to an alkene, H adds to the carbon with more hydrogens, placing the halide/OH on the more substituted carbon (via the more stable carbocation).</li>
          <li><strong>Anti-Markovnikov</strong> — HBr with peroxides (radical mechanism) reverses the regiochemistry.</li>
          <li><strong>Hydrogenation</strong> — H₂ with a metal catalyst (Pd, Pt, Ni) reduces C=C to C–C.</li>
          <li><strong>Halogenation</strong> — Br₂/Cl₂ add across a double bond with <em>anti</em> addition, giving a vicinal dihalide.</li>
        </ul>
        <div class="mol-gallery">
          <div class="mol" data-smiles="CC=C" data-w="170" data-h="120"><div class="mol-cap">Propene<span class="sub">+ HBr (no peroxides) →</span></div></div>
          <div class="mol" data-smiles="CC(C)Br" data-w="170" data-h="120"><div class="mol-cap">2-bromopropane<span class="sub">Markovnikov major product</span></div></div>
          <div class="mol" data-smiles="CCCBr" data-w="170" data-h="120"><div class="mol-cap">1-bromopropane<span class="sub">anti-Markovnikov (with peroxides)</span></div></div>
        </div>
      `
    },
    {
      id: 'aromatic',
      title: 'Resonance & Aromaticity',
      html: `
        <p>Resonance structures are different ways of pushing electrons to depict the <em>same</em> molecule or ion — the real structure is a hybrid of all of them, not a mixture that flips back and forth. The two structures below are connected by a resonance arrow (↔), not a reaction arrow.</p>
        <div class="resonance-row">
          <div class="mol" data-smiles="[CH2+]C=C" data-w="150" data-h="115"><div class="mol-cap">Allyl cation<span class="sub">contributor A</span></div></div>
          <div class="res-arrow">&harr;</div>
          <div class="mol" data-smiles="C=C[CH2+]" data-w="150" data-h="115"><div class="mol-cap">Allyl cation<span class="sub">contributor B</span></div></div>
        </div>
        <div class="callout"><strong>Why it matters:</strong> delocalizing a charge over more atoms lowers energy. This is exactly why the carboxylate anion (–COO⁻) is so much more stable — and carboxylic acids so much more acidic — than an alkoxide.</div>
        <h3>Aromaticity (Hückel's rule)</h3>
        <ul>
          <li>The ring must be <strong>cyclic</strong>, <strong>planar</strong>, and <strong>fully conjugated</strong> (every ring atom has a p-orbital).</li>
          <li>It must have <strong>4n + 2</strong> π electrons in that ring system (n = 0, 1, 2…) — 2, 6, 10… electrons.</li>
          <li>A ring meeting the first three criteria with <strong>4n</strong> π electrons instead is <strong>antiaromatic</strong> (destabilized). Fail any structural criterion and it's simply <strong>nonaromatic</strong>.</li>
        </ul>
        <div class="mol-gallery">
          <div class="mol" data-smiles="c1ccccc1" data-w="150" data-h="115"><div class="mol-cap">Benzene<span class="sub">aromatic · 6 π e⁻</span></div></div>
          <div class="mol" data-smiles="c1ccc2ccccc2c1" data-w="170" data-h="120"><div class="mol-cap">Naphthalene<span class="sub">aromatic · fused rings</span></div></div>
          <div class="mol" data-smiles="C1=CC=CC=CC=C1" data-w="170" data-h="120"><div class="mol-cap">Cyclooctatetraene<span class="sub">nonaromatic · tub-shaped, not planar</span></div></div>
        </div>
        <h3>Electrophilic aromatic substitution (EAS)</h3>
        <div class="mech-diagram">
          <svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="eas-head" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--primary)"/></marker>
            </defs>
            <polygon class="mech-bond" points="75,52 99,66 99,94 75,108 51,94 51,66"/>
            <circle class="mech-bond" cx="75" cy="80" r="15"/>
            <text class="mech-lbl" x="130" y="42">E<tspan font-size="9" dy="-4">+</tspan></text>
            <path class="mech-arrow" d="M99,66 Q115,50 128,48" marker-end="url(#eas-head)"/>
            <text class="mech-lbl" x="168" y="85">&rarr;</text>
            <polygon class="mech-bond" points="250,52 274,66 274,94 250,108 226,94 226,66"/>
            <path class="mech-bond" d="M226,94 Q250,116 274,94" stroke-dasharray="2,2"/>
            <text class="mech-charge" x="245" y="85">+</text>
            <line class="mech-bond" x1="250" y1="52" x2="230" y2="30"/>
            <text class="mech-lbl-sm" x="205" y="24">H</text>
            <line class="mech-bond" x1="250" y1="52" x2="270" y2="30"/>
            <text class="mech-lbl-sm" x="272" y="24">E</text>
            <path class="mech-arrow" d="M238,38 Q212,20 198,22" marker-end="url(#eas-head)"/>
            <text class="mech-lbl-sm" x="170" y="18">H&#8314;</text>
            <text class="mech-lbl" x="343" y="85">&rarr;</text>
            <polygon class="mech-bond" points="430,52 454,66 454,94 430,108 406,94 406,66"/>
            <circle class="mech-bond" cx="430" cy="80" r="15"/>
            <line class="mech-bond" x1="430" y1="52" x2="430" y2="30"/>
            <text class="mech-lbl-sm" x="426" y="22">E</text>
          </svg>
          <div class="mech-cap">The electrophile adds to give a resonance-stabilized <strong>arenium ion</strong> (cyclohexadienyl cation), then loses H⁺ to restore full aromaticity.</div>
        </div>
        <p>Existing ring substituents change both the <strong>rate</strong> (activating vs. deactivating) and the <strong>position</strong> (director) of the next substitution:</p>
        <table class="eas-table">
          <tr><th>Substituent</th><th>Effect on rate</th><th>Director</th><th>Why</th></tr>
          <tr><td>–OH, –OR, –NH₂</td><td><span class="tag activate">activates</span></td><td>ortho / para</td><td>lone pair donates into the ring by resonance</td></tr>
          <tr><td>–CH₃, alkyl groups</td><td><span class="tag activate">activates</span></td><td>ortho / para</td><td>weak electron donation (hyperconjugation)</td></tr>
          <tr><td>–F, –Cl, –Br, –I</td><td><span class="tag deactivate">deactivates</span></td><td>ortho / para</td><td>inductive withdrawal, but lone pair can still donate (exception case)</td></tr>
          <tr><td>–NO₂, –C(=O)R, –COOH, –CN, –SO₃H</td><td><span class="tag deactivate">deactivates</span></td><td>meta</td><td>withdraw density and destabilize the ortho/para arenium forms</td></tr>
        </table>
      `
    },
    {
      id: 'carbonyl',
      title: 'Carbonyl Chemistry',
      html: `
        <p>The carbonyl carbon is electrophilic — oxygen pulls electron density away from it — so nucleophiles attack there directly. Aldehydes react faster than ketones (less steric hindrance, less electron donation from only one alkyl group).</p>
        <div class="mech-diagram">
          <svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="carb-head" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--primary)"/></marker>
            </defs>
            <text class="mech-lbl" x="18" y="82">Nu</text>
            <text class="mech-lbl-sm" x="18" y="60">: :</text>
            <path class="mech-arrow" d="M42,64 Q95,42 148,72" marker-end="url(#carb-head)"/>
            <line class="mech-bond" x1="147" y1="75" x2="147" y2="34"/>
            <line class="mech-bond" x1="153" y1="75" x2="153" y2="34"/>
            <text class="mech-lbl" x="146" y="24">O</text>
            <path class="mech-arrow" d="M150,55 Q172,42 178,24" marker-end="url(#carb-head)"/>
            <line class="mech-bond" x1="150" y1="75" x2="115" y2="105"/>
            <text class="mech-lbl-sm" x="96" y="120">R</text>
            <line class="mech-bond" x1="150" y1="75" x2="185" y2="105"/>
            <text class="mech-lbl-sm" x="190" y="120">R/H</text>
            <text class="mech-lbl" x="235" y="80">&rarr;</text>
            <line class="mech-bond" x1="300" y1="58" x2="330" y2="75"/>
            <text class="mech-lbl" x="278" y="50">Nu</text>
            <line class="mech-bond" x1="330" y1="75" x2="330" y2="30"/>
            <text class="mech-lbl" x="322" y="20">O</text>
            <text class="mech-charge" x="345" y="20">–</text>
            <line class="mech-bond" x1="330" y1="75" x2="300" y2="105"/>
            <text class="mech-lbl-sm" x="282" y="120">R</text>
            <line class="mech-bond" x1="330" y1="75" x2="360" y2="105"/>
            <text class="mech-lbl-sm" x="365" y="120">R/H</text>
          </svg>
          <div class="mech-cap">Nucleophilic addition: the nucleophile attacks the carbonyl carbon while the C=O π electrons move onto oxygen, giving a tetrahedral alkoxide intermediate (protonated on workup).</div>
        </div>
        <h3>Grignard reactions</h3>
        <div class="rxn-row">
          <div class="mol" data-smiles="CC(=O)C" data-w="150" data-h="115"><div class="mol-cap">Acetone<span class="sub">a ketone</span></div></div>
          <div class="rxn-arrow"><span class="rxn-top">1. CH₃MgBr</span><svg viewBox="0 0 70 14"><line x1="2" y1="7" x2="60" y2="7" stroke-width="1.6"/><path d="M60,7 L52,3 M60,7 L52,11" stroke-width="1.6"/></svg><span class="rxn-bottom">2. H₃O⁺</span></div>
          <div class="mol" data-smiles="CC(C)(C)O" data-w="150" data-h="115"><div class="mol-cap">tert-Butanol<span class="sub">3° alcohol</span></div></div>
        </div>
        <div class="callout"><strong>Grignard reagents (R–MgBr)</strong> are powerful carbon nucleophiles and very strong bases. They react instantly and destructively with water and with any acidic proton (–OH, –NH, –COOH) — reactions must run in anhydrous, aprotic solvent.</div>
        <h3>Fischer esterification</h3>
        <div class="rxn-row">
          <div class="mol" data-smiles="CC(=O)O" data-w="140" data-h="110"><div class="mol-cap">Acetic acid</div></div>
          <span class="mech-lbl" style="font-size:1.1rem;color:var(--ink-soft);">+</span>
          <div class="mol" data-smiles="CCO" data-w="140" data-h="110"><div class="mol-cap">Ethanol</div></div>
          <div class="rxn-arrow"><span class="rxn-top">H⁺, &#8652;</span><svg viewBox="0 0 70 14"><line x1="2" y1="7" x2="60" y2="7" stroke-width="1.6"/><path d="M60,7 L52,3 M60,7 L52,11" stroke-width="1.6"/></svg><span class="rxn-bottom">catalyst</span></div>
          <div class="mol" data-smiles="CC(=O)OCC" data-w="140" data-h="110"><div class="mol-cap">Ethyl acetate<span class="sub">+ H₂O</span></div></div>
        </div>
        <p>Fischer esterification is an acid-catalyzed <strong>equilibrium</strong>. Run it in reverse (excess water, acid or base catalyst) and it's <strong>ester hydrolysis</strong> — base-catalyzed hydrolysis (saponification) is irreversible because the carboxylate product is unreactive toward further attack.</p>
      `
    },
    {
      id: 'redoxorg',
      title: 'Oxidation, Reduction & Acidity',
      html: `
        <h3>Alcohol oxidation</h3>
        <div class="mol-gallery">
          <div class="mol" data-smiles="CCO" data-w="160" data-h="115"><div class="mol-cap">1° alcohol<span class="sub">ethanol</span></div></div>
          <div class="mol" data-smiles="CC=O" data-w="160" data-h="115"><div class="mol-cap">→ aldehyde<span class="sub">(PCC stops here)</span></div></div>
          <div class="mol" data-smiles="CC(=O)O" data-w="160" data-h="115"><div class="mol-cap">→ carboxylic acid<span class="sub">(strong oxidant)</span></div></div>
        </div>
        <ul>
          <li>Primary alcohol → aldehyde → carboxylic acid (strong oxidants like KMnO₄, CrO₃). <strong>PCC</strong> stops at the aldehyde.</li>
          <li>Secondary alcohol → ketone.</li>
          <li>Tertiary alcohol → no reaction (no H on the carbinol carbon).</li>
        </ul>
        <h3>Acidity of organic compounds</h3>
        <p>Carboxylic acids are far more acidic than alcohols because the carboxylate anion is <strong>resonance-stabilized</strong> over two oxygens. Electron-withdrawing groups (like halogens) near the acid increase acidity by stabilizing the negative charge.</p>
        <div class="callout"><strong>Rule of thumb:</strong> anything that stabilizes the conjugate base (resonance, electronegativity, induction) makes the acid stronger.</div>
      `
    },
    {
      id: 'spectro',
      title: 'Spectroscopy & Lab Basics',
      html: `
        <ul>
          <li><strong>IR spectroscopy</strong> identifies functional groups: broad O–H (~3200–3550 cm⁻¹), sharp C=O (~1700 cm⁻¹).</li>
          <li><strong>¹H NMR</strong> reveals the hydrogen environments: chemical shift (environment), integration (number of H), and splitting (n+1 rule for neighboring H).</li>
          <li><strong>Distillation</strong> separates liquids by boiling point; <strong>chromatography</strong> separates by polarity/affinity; <strong>extraction</strong> separates by solubility.</li>
        </ul>
        <div class="mol-gallery">
          <div class="mol" data-smiles="O=Cc1ccccc1" data-w="190" data-h="140"><div class="mol-cap">Benzaldehyde<span class="sub">strong C=O ~1700 cm⁻¹ + aromatic signals</span></div></div>
        </div>
      `
    },
    {
      id: 'roadmap',
      title: 'Reaction Roadmap',
      html: `
        <p>Zoom out and every reaction above fits into one map of functional-group interconversions. Reagents above each arrow drive it forward; reagents below run it in reverse. Trace a path and you can plan (or reverse-engineer) a synthesis.</p>
        <div class="roadmap-diagram">
          <svg viewBox="0 0 1030 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="rmap-head" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--ink-soft)"/></marker>
            </defs>

            <rect class="rmap-node" x="30" y="77" width="120" height="46" rx="6"/>
            <text class="rmap-node-lbl" x="90" y="105">Alkyl Halide</text>

            <rect class="rmap-node" x="200" y="77" width="120" height="46" rx="6"/>
            <text class="rmap-node-lbl" x="260" y="105">Alkene</text>

            <rect class="rmap-node" x="370" y="77" width="120" height="46" rx="6"/>
            <text class="rmap-node-lbl" x="430" y="105">Alcohol</text>

            <rect class="rmap-node" x="540" y="70" width="120" height="60" rx="6"/>
            <text class="rmap-node-lbl" x="600" y="97">Aldehyde /</text>
            <text class="rmap-node-lbl" x="600" y="113">Ketone</text>

            <rect class="rmap-node" x="710" y="77" width="120" height="46" rx="6"/>
            <text class="rmap-node-lbl" x="770" y="98">Carboxylic</text>
            <text class="rmap-node-lbl" x="770" y="112">Acid</text>

            <rect class="rmap-node" x="880" y="77" width="120" height="46" rx="6"/>
            <text class="rmap-node-lbl" x="940" y="105">Ester</text>

            <line class="rmap-arrow" x1="150" y1="92" x2="196" y2="92" marker-end="url(#rmap-head)"/>
            <line class="rmap-arrow" x1="200" y1="108" x2="154" y2="108" marker-end="url(#rmap-head)"/>
            <text class="rmap-reagent" x="175" y="66">strong base (E2)</text>
            <text class="rmap-reagent" x="175" y="140">HX</text>

            <line class="rmap-arrow" x1="320" y1="92" x2="366" y2="92" marker-end="url(#rmap-head)"/>
            <line class="rmap-arrow" x1="370" y1="108" x2="324" y2="108" marker-end="url(#rmap-head)"/>
            <text class="rmap-reagent" x="345" y="66">H₂O, H⁺</text>
            <text class="rmap-reagent" x="345" y="140">H₂SO₄, &Delta;</text>

            <line class="rmap-arrow" x1="490" y1="92" x2="536" y2="92" marker-end="url(#rmap-head)"/>
            <line class="rmap-arrow" x1="540" y1="108" x2="494" y2="108" marker-end="url(#rmap-head)"/>
            <text class="rmap-reagent" x="515" y="66">PCC / CrO₃</text>
            <text class="rmap-reagent" x="515" y="140">NaBH₄</text>

            <line class="rmap-arrow" x1="660" y1="92" x2="706" y2="92" marker-end="url(#rmap-head)"/>
            <line class="rmap-arrow" x1="710" y1="108" x2="664" y2="108" marker-end="url(#rmap-head)"/>
            <text class="rmap-reagent" x="685" y="66">KMnO₄ (ald. only)</text>
            <text class="rmap-reagent" x="685" y="140">LiAlH₄</text>

            <line class="rmap-arrow" x1="830" y1="92" x2="876" y2="92" marker-end="url(#rmap-head)"/>
            <line class="rmap-arrow" x1="880" y1="108" x2="834" y2="108" marker-end="url(#rmap-head)"/>
            <text class="rmap-reagent" x="855" y="66">ROH, H⁺ (Fischer)</text>
            <text class="rmap-reagent" x="855" y="140">H₂O, H⁺</text>
          </svg>
        </div>
        <div class="callout"><strong>Reading it:</strong> ketones can't oxidize further (no H left on the carbonyl carbon) — only aldehydes continue on to carboxylic acids. Every other step shown is reversible with the right reagent.</div>
      `
    }
  ],
  questions: [
    { id:'oc1', topic:'Functional Groups', stem:'Which functional group is characterized by a carbonyl carbon bonded to a hydroxyl group?', options:['Ketone','Aldehyde','Carboxylic acid','Ester'], answer:2, explanation:'A carboxylic acid (–COOH) has a carbonyl (C=O) carbon also bonded to a hydroxyl (–OH). A ketone has the carbonyl between two carbons and an aldehyde has it at the end of a chain.' },
    { id:'oc2', topic:'Functional Groups', stem:'Which compound would have the highest boiling point, assuming similar molecular weights?', options:['Butane','Diethyl ether','1-Butanol','Butanal'], answer:2, explanation:'1-Butanol is an alcohol capable of hydrogen bonding, giving it the highest boiling point among these. The ether and aldehyde cannot donate hydrogen bonds, and butane is nonpolar.' },
    { id:'oc3', topic:'Substitution', stem:'Which mechanism proceeds with inversion of stereochemical configuration at the reacting carbon?', options:['SN1','SN2','E1','Both SN1 and E1'], answer:1, explanation:'SN2 involves backside attack by the nucleophile, inverting the configuration (Walden inversion). SN1 goes through a planar carbocation and produces racemization.' },
    { id:'oc4', topic:'Substitution', stem:'Which substrate reacts fastest by an SN1 mechanism?', options:['1-bromobutane (primary)','2-bromobutane (secondary)','2-bromo-2-methylpropane (tertiary)','bromomethane'], answer:2, explanation:'SN1 rate depends on carbocation stability. Tertiary substrates form the most stable carbocations, so 2-bromo-2-methylpropane (tert-butyl bromide) reacts fastest by SN1.' },
    { id:'oc5', topic:'Stereochemistry', stem:'Two compounds are non-superimposable mirror images of each other. They are:', options:['Structural isomers','Enantiomers','Diastereomers','Conformational isomers'], answer:1, explanation:'Non-superimposable mirror images are enantiomers. They share identical physical properties except for the direction they rotate plane-polarized light.' },
    { id:'oc6', topic:'Stereochemistry', stem:'A molecule that contains stereocenters but is achiral due to an internal plane of symmetry is called a:', options:['Racemic mixture','Meso compound','Diastereomer','Geometric isomer'], answer:1, explanation:'A meso compound has stereocenters but an internal mirror plane, making the molecule superimposable on its mirror image — therefore achiral and optically inactive.' },
    { id:'oc7', topic:'Stereochemistry', stem:'How many stereoisomers are theoretically possible for a molecule with 3 stereocenters?', options:['3','6','8','9'], answer:2, explanation:'The maximum number of stereoisomers is 2ⁿ, where n is the number of stereocenters. With 3 stereocenters, 2³ = 8 (though meso forms can reduce the actual number).' },
    { id:'oc8', topic:'Addition', smiles:'CC=C', smilesW:220, smilesH:150, stem:'When HBr adds to propene (shown) without peroxides, the major product is:', options:['1-bromopropane','2-bromopropane','1,2-dibromopropane','propan-2-ol'], answer:1, explanation:'By Markovnikov\'s rule, H adds to the terminal CH₂ (more hydrogens) and Br to the central carbon (forming the more stable secondary carbocation), giving 2-bromopropane as the major product.' },
    { id:'oc9', topic:'Addition', stem:'Adding HBr to an alkene in the presence of peroxides gives anti-Markovnikov product because the reaction proceeds through:', options:['A carbocation intermediate','A free-radical mechanism','A concerted transition state','An enol intermediate'], answer:1, explanation:'Peroxides initiate a free-radical chain mechanism. The bromine radical adds first to the less hindered carbon, forming the more stable radical, which reverses the regiochemistry (anti-Markovnikov).' },
    { id:'oc10', topic:'Oxidation', stem:'Oxidation of a secondary alcohol yields a:', options:['Carboxylic acid','Aldehyde','Ketone','Ester'], answer:2, explanation:'Secondary alcohols oxidize to ketones. Primary alcohols can go to aldehydes then carboxylic acids, and tertiary alcohols do not oxidize (no hydrogen on the carbinol carbon).' },
    { id:'oc11', topic:'Oxidation', stem:'Which reagent oxidizes a primary alcohol to an aldehyde but stops before the carboxylic acid?', options:['KMnO₄','PCC','CrO₃/H₂SO₄','Hot HNO₃'], answer:1, explanation:'PCC (pyridinium chlorochromate) is a mild, anhydrous oxidant that converts primary alcohols to aldehydes without over-oxidizing to the carboxylic acid. Stronger aqueous oxidants like KMnO₄ go all the way to the acid.' },
    { id:'oc12', topic:'Acidity', stem:'Why is a carboxylic acid more acidic than a comparable alcohol?', options:['It has a higher molecular weight','Its conjugate base is resonance-stabilized','It cannot hydrogen bond','It has a smaller pKa due to sterics'], answer:1, explanation:'The carboxylate conjugate base spreads its negative charge over two equivalent oxygens by resonance, stabilizing it. An alkoxide (from an alcohol) has no such resonance, so alcohols are far weaker acids.' },
    { id:'oc13', topic:'Elimination', stem:'An E2 reaction requires:', options:['A weak nucleophile and polar protic solvent','A strong base and anti-periplanar geometry','A tertiary carbocation intermediate','Peroxide initiation'], answer:1, explanation:'E2 is a concerted, one-step elimination requiring a strong base and an anti-periplanar arrangement of the leaving group and the β-hydrogen. It typically follows Zaitsev\'s rule for the major product.' },
    { id:'oc14', topic:'Reactions', stem:'Carbocation stability follows which order?', options:['Methyl > 1° > 2° > 3°','3° > 2° > 1° > methyl','1° > 2° > 3° > methyl','2° > 3° > methyl > 1°'], answer:1, explanation:'Alkyl groups donate electron density and stabilize positive charge, so carbocation stability increases with substitution: 3° > 2° > 1° > methyl. This underlies SN1/E1 reactivity.' },
    { id:'oc15', topic:'Spectroscopy', stem:'A strong absorption near 1700 cm⁻¹ in an IR spectrum most likely indicates the presence of a:', options:['O–H bond','C=O bond','C–H bond','N–H bond'], answer:1, explanation:'A carbonyl (C=O) stretch appears as a strong band around 1700 cm⁻¹. A broad O–H stretch appears higher, around 3200–3550 cm⁻¹.' },
    { id:'oc16', topic:'Spectroscopy', stem:'In ¹H NMR, a proton with two equivalent neighboring hydrogens will appear as a:', options:['Singlet','Doublet','Triplet','Quartet'], answer:2, explanation:'By the n+1 rule, a proton with 2 equivalent neighbors is split into 2+1 = 3 peaks, a triplet.' },

    { id:'oc17', topic:'Functional Groups', smiles:'CC(=O)O', stem:'Identify the functional group present in the structure shown.', options:['Ester','Ketone','Carboxylic acid','Aldehyde'], answer:2, explanation:'The structure shows a carbonyl carbon (C=O) also bonded to a hydroxyl (–OH) — the –COOH carboxylic acid group. This is acetic acid.' },
    { id:'oc18', topic:'Functional Groups', stem:'Which of the structures shown is a ketone?', options:['Propanal','Acetone','Ethanol','Diethyl ether'], optionSmiles:['CCC=O','CC(=O)C','CCO','CCOCC'], answer:1, explanation:'A ketone has a carbonyl carbon bonded to two other carbons. Acetone (CH₃COCH₃) fits. Propanal is an aldehyde (terminal C=O), ethanol is an alcohol, and diethyl ether has an R–O–R linkage.' },
    { id:'oc19', topic:'Addition', smiles:'CC=C', stem:'Propene (shown) reacts with HBr in the absence of peroxides. Which structure is the major product?', options:['1-bromopropane','2-bromopropane','allyl bromide','1,3-dibromopropane'], optionSmiles:['CCCBr','CC(C)Br','C=CCBr','BrCCCBr'], answer:1, explanation:'Markovnikov addition places Br on the more substituted carbon (via the more stable secondary carbocation), giving 2-bromopropane.' },
    { id:'oc20', topic:'Stereochemistry', smiles:'FC(Cl)Br', stem:'How many stereocenters (chiral carbons) does the molecule shown contain?', options:['0','1','2','3'], answer:1, explanation:'The central carbon is bonded to four different groups — F, Cl, Br, and H — so it is a single stereocenter, making the molecule chiral.' },
    { id:'oc21', topic:'Functional Groups', stem:'Which of the structures shown is an ester?', options:['Acetic acid','Methyl acetate','Acetamide','Ethanol'], optionSmiles:['CC(=O)O','CC(=O)OC','CC(=O)N','CCO'], answer:1, explanation:'An ester has the –C(=O)O–C linkage (a carbonyl bonded to an oxygen that connects to another carbon). Methyl acetate fits. Acetic acid is a carboxylic acid, acetamide is an amide, and ethanol is an alcohol.' },
    { id:'oc22', topic:'Oxidation', smiles:'CC(O)C', stem:'Isopropyl alcohol (shown) is treated with a strong oxidizing agent. What is the product?', options:['Acetone (a ketone)','A carboxylic acid','No reaction — the carbon is tertiary','An aldehyde'], answer:0, explanation:'Isopropyl alcohol is a secondary alcohol (the –OH carbon bears one H and two carbons). Secondary alcohols oxidize to ketones, giving acetone. Only primary alcohols reach aldehydes/acids, and tertiary alcohols do not oxidize.' },

    { id:'oc23', topic:'Aromaticity', smiles:'c1ccccc1', stem:'For the ring shown to be aromatic by Hückel\'s rule, it must be cyclic, fully conjugated, planar, and have how many π electrons?', options:['4n','4n + 2','2n','n + 2'], answer:1, explanation:'Hückel\'s rule requires 4n+2 π electrons (n = 0, 1, 2…) in a cyclic, planar, fully conjugated ring — benzene has 6 (n=1). A 4n count in an otherwise-qualifying ring is antiaromatic instead.' },
    { id:'oc24', topic:'Aromaticity', stem:'1,3,5,7-Cyclooctatetraene has 8 π electrons and a fully conjugated ring, yet it is not aromatic. Why not?', options:['It has too few carbons','It adopts a non-planar, tub-shaped conformation','It is not cyclic','It has no p-orbitals on ring carbons'], answer:1, explanation:'Cyclooctatetraene twists into a tub shape to avoid the destabilizing antiaromaticity it would have if planar (8 = 4n π electrons). Because it is not planar, it fails the aromaticity criteria outright and behaves like a normal polyene.' },
    { id:'oc25', topic:'Resonance', stem:'Which statement about resonance structures is correct?', options:['They are different molecules in rapid equilibrium','They are different ways of drawing electron placement in the same molecule; the real structure is a hybrid','Only the structure with the most bonds is real','They interconvert by breaking and re-forming sigma bonds'], answer:1, explanation:'Resonance structures are not separate, interconverting species — they are alternate electron-pushing depictions of one molecule or ion. The true structure is a weighted hybrid of all valid contributors.' },
    { id:'oc26', topic:'Resonance', stem:'The carboxylate anion (–COO⁻) is a much stronger conjugate base stabilizer than an alkoxide (–O⁻) primarily because:', options:['It has a lower molecular weight','Its negative charge is delocalized by resonance over two oxygens','It is less polar','It contains more hydrogen atoms for hydrogen bonding'], answer:1, explanation:'Resonance spreads the carboxylate\'s negative charge over two equivalent, electronegative oxygens, lowering its energy substantially. An alkoxide has no comparable resonance stabilization, which is why carboxylic acids are far more acidic than alcohols.' },
    { id:'oc27', topic:'EAS', stem:'An electrophilic aromatic substitution mechanism proceeds through which key intermediate?', options:['A carbanion','A resonance-stabilized arenium (cyclohexadienyl) cation','A free radical','A tetrahedral alkoxide'], answer:1, explanation:'The electrophile adds to the ring to form a resonance-stabilized arenium ion, which then loses H⁺ from the same carbon to restore full aromaticity.' },
    { id:'oc28', topic:'EAS', stem:'Which substituent is an ortho/para director that also deactivates the ring toward further electrophilic substitution?', options:['–OH','–CH₃','–Cl','–NO₂'], answer:2, explanation:'Halogens are the classic exception: their inductive electron withdrawal deactivates the ring overall, but a lone pair can still donate into the ring by resonance from the ortho/para positions, so they direct there.' },
    { id:'oc29', topic:'EAS', stem:'A benzene ring bearing a nitro group (–NO₂) undergoes further electrophilic substitution. Where does the next group add, and how does the rate compare to benzene itself?', options:['Ortho/para; faster than benzene','Meta; faster than benzene','Meta; slower than benzene','Ortho/para; slower than benzene'], answer:2, explanation:'–NO₂ is a strong electron-withdrawing group. It deactivates the ring (slower reaction than unsubstituted benzene) and is a meta director, since substitution ortho/para to it would place positive charge on the already electron-poor carbon bearing the nitro group.' },
    { id:'oc30', topic:'Carbonyl Chemistry', stem:'In nucleophilic addition to a carbonyl, what happens to the C=O π electrons as the nucleophile attacks the carbonyl carbon?', options:['They are pushed onto the nucleophile','They shift onto the oxygen, forming an alkoxide intermediate','They remain unchanged','They form a new π bond to an adjacent carbon'], answer:1, explanation:'As the nucleophile\'s electron pair attacks the electrophilic carbonyl carbon, the C=O π bond breaks and those electrons move onto oxygen, generating a tetrahedral alkoxide intermediate that is protonated on workup.' },
    { id:'oc31', topic:'Carbonyl Chemistry', stem:'Why do Grignard reactions have to be run in anhydrous, aprotic solvent?', options:['Water speeds up the reaction too much to control','Grignard reagents are strong bases/nucleophiles that are destroyed instantly by acidic protons like water\'s O–H','Grignard reagents are insoluble in water','Protic solvents cause racemization of the product'], answer:1, explanation:'A Grignard reagent (R–MgBr) is both a powerful nucleophile and a very strong base. Trace water (or any –OH/–NH/–COOH) protonates it immediately, quenching the reagent (giving R–H) before it can react with the intended electrophile.' },
    { id:'oc32', topic:'Carbonyl Chemistry', smiles:'CC(=O)C', stem:'Acetone (shown) is treated with CH₃MgBr, then aqueous acid workup. What is the product?', options:['A primary alcohol','A secondary alcohol','tert-Butanol, a tertiary alcohol','A carboxylic acid'], answer:2, explanation:'The Grignard carbanion attacks the ketone carbonyl carbon; aqueous acid workup protonates the resulting alkoxide. Adding one carbon nucleophile to a ketone gives a tertiary alcohol — here, tert-butanol.' },
    { id:'oc33', topic:'Carbonyl Chemistry', stem:'Fischer esterification of a carboxylic acid with an alcohol under acid catalysis is best described as:', options:['An irreversible substitution','A reversible equilibrium that can be run backward as ester hydrolysis','An oxidation reaction','A free-radical chain reaction'], answer:1, explanation:'Fischer esterification (RCOOH + R\'OH ⇌ RCOOR\' + H₂O, H⁺ catalyst) is a reversible equilibrium. Adding excess water and acid (or base, for irreversible saponification) drives it back toward hydrolysis.' },
    { id:'oc34', topic:'Reaction Roadmap', stem:'A chemist wants to convert a ketone into a secondary alcohol. Which reagent accomplishes this reduction?', options:['PCC','KMnO₄','NaBH₄','H₂SO₄, heat'], answer:2, explanation:'NaBH₄ (or LiAlH₄) reduces a ketone\'s carbonyl to a C–OH, giving a secondary alcohol — the reverse of PCC/CrO₃ oxidation of that same alcohol.' },
    { id:'oc35', topic:'Reaction Roadmap', stem:'Which single reagent converts an alcohol directly into an alkene?', options:['H₂SO₄, heat (dehydration)','NaBH₄','CH₃MgBr','PCC'], answer:0, explanation:'Acid-catalyzed dehydration (e.g., hot H₂SO₄) eliminates water from an alcohol to form an alkene — the reverse of the Markovnikov hydration (H₂O, H⁺) that would add water back across the double bond.' },
    { id:'oc36', topic:'Reaction Roadmap', stem:'Along the alcohol → aldehyde → carboxylic acid oxidation pathway, why can a ketone never be pushed on to a carboxylic acid the way an aldehyde can?', options:['Ketones are already fully oxidized', 'The carbonyl carbon of a ketone has no remaining H for the oxidant to remove', 'Ketones do not react with oxidizing agents at all', 'Only primary alcohols can be oxidized further'], answer:1, explanation:'Further oxidation to a carboxylic acid requires an H on the carbonyl carbon for the oxidant to abstract, as in an aldehyde. A ketone\'s carbonyl carbon is bonded to two other carbons with no such H, so the chain stops there.' }
  ]
};
