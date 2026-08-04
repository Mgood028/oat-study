window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.ochem = {
  id: 'ochem',
  name: 'Organic Chemistry',
  short: 'Org Chem',
  icon: '🔗',
  blurb: '30 questions in the Survey of Natural Sciences. Functional groups, nomenclature, stereochemistry, reaction mechanisms, and spectroscopy basics.',
  review: [
    {
      id: 'groups',
      title: 'Functional Groups & Nomenclature',
      html: `
        <h3>Know these on sight</h3>
        <ul>
          <li><strong>Alkane / alkene / alkyne</strong> — C–C, C=C, C≡C. Suffixes -ane, -ene, -yne.</li>
          <li><strong>Alcohol</strong> (–OH, "-ol") — polar, hydrogen-bonds, elevated boiling point.</li>
          <li><strong>Aldehyde</strong> (–CHO, "-al") — carbonyl at the end of a chain.</li>
          <li><strong>Ketone</strong> (C=O internal, "-one").</li>
          <li><strong>Carboxylic acid</strong> (–COOH, "-oic acid") — acidic; strong hydrogen bonding gives the highest boiling points in the group.</li>
          <li><strong>Ester</strong> (–COO–, "-oate"), <strong>amide</strong> (–CONH₂), <strong>amine</strong> (–NH₂, basic), <strong>ether</strong> (R–O–R).</li>
        </ul>
        <div class="callout"><strong>Boiling point ranking</strong> (similar size): carboxylic acid &gt; alcohol &gt; ketone/aldehyde &gt; ether &gt; alkane. More hydrogen bonding → higher boiling point.</div>
        <h3>IUPAC basics</h3>
        <ul>
          <li>Find the longest carbon chain containing the principal functional group; number to give that group the lowest locant.</li>
          <li>Name and number substituents alphabetically.</li>
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
      `
    },
    {
      id: 'redoxorg',
      title: 'Oxidation, Reduction & Acidity',
      html: `
        <h3>Alcohol oxidation</h3>
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
    { id:'oc8', topic:'Addition', stem:'When HBr adds to propene (CH₃–CH=CH₂) without peroxides, the major product is:', options:['1-bromopropane','2-bromopropane','1,2-dibromopropane','propan-2-ol'], answer:1, explanation:'By Markovnikov\'s rule, H adds to the terminal CH₂ (more hydrogens) and Br to the central carbon (forming the more stable secondary carbocation), giving 2-bromopropane as the major product.' },
    { id:'oc9', topic:'Addition', stem:'Adding HBr to an alkene in the presence of peroxides gives anti-Markovnikov product because the reaction proceeds through:', options:['A carbocation intermediate','A free-radical mechanism','A concerted transition state','An enol intermediate'], answer:1, explanation:'Peroxides initiate a free-radical chain mechanism. The bromine radical adds first to the less hindered carbon, forming the more stable radical, which reverses the regiochemistry (anti-Markovnikov).' },
    { id:'oc10', topic:'Oxidation', stem:'Oxidation of a secondary alcohol yields a:', options:['Carboxylic acid','Aldehyde','Ketone','Ester'], answer:2, explanation:'Secondary alcohols oxidize to ketones. Primary alcohols can go to aldehydes then carboxylic acids, and tertiary alcohols do not oxidize (no hydrogen on the carbinol carbon).' },
    { id:'oc11', topic:'Oxidation', stem:'Which reagent oxidizes a primary alcohol to an aldehyde but stops before the carboxylic acid?', options:['KMnO₄','PCC','CrO₃/H₂SO₄','Hot HNO₃'], answer:1, explanation:'PCC (pyridinium chlorochromate) is a mild, anhydrous oxidant that converts primary alcohols to aldehydes without over-oxidizing to the carboxylic acid. Stronger aqueous oxidants like KMnO₄ go all the way to the acid.' },
    { id:'oc12', topic:'Acidity', stem:'Why is a carboxylic acid more acidic than a comparable alcohol?', options:['It has a higher molecular weight','Its conjugate base is resonance-stabilized','It cannot hydrogen bond','It has a smaller pKa due to sterics'], answer:1, explanation:'The carboxylate conjugate base spreads its negative charge over two equivalent oxygens by resonance, stabilizing it. An alkoxide (from an alcohol) has no such resonance, so alcohols are far weaker acids.' },
    { id:'oc13', topic:'Elimination', stem:'An E2 reaction requires:', options:['A weak nucleophile and polar protic solvent','A strong base and anti-periplanar geometry','A tertiary carbocation intermediate','Peroxide initiation'], answer:1, explanation:'E2 is a concerted, one-step elimination requiring a strong base and an anti-periplanar arrangement of the leaving group and the β-hydrogen. It typically follows Zaitsev\'s rule for the major product.' },
    { id:'oc14', topic:'Reactions', stem:'Carbocation stability follows which order?', options:['Methyl > 1° > 2° > 3°','3° > 2° > 1° > methyl','1° > 2° > 3° > methyl','2° > 3° > methyl > 1°'], answer:1, explanation:'Alkyl groups donate electron density and stabilize positive charge, so carbocation stability increases with substitution: 3° > 2° > 1° > methyl. This underlies SN1/E1 reactivity.' },
    { id:'oc15', topic:'Spectroscopy', stem:'A strong absorption near 1700 cm⁻¹ in an IR spectrum most likely indicates the presence of a:', options:['O–H bond','C=O bond','C–H bond','N–H bond'], answer:1, explanation:'A carbonyl (C=O) stretch appears as a strong band around 1700 cm⁻¹. A broad O–H stretch appears higher, around 3200–3550 cm⁻¹.' },
    { id:'oc16', topic:'Spectroscopy', stem:'In ¹H NMR, a proton with two equivalent neighboring hydrogens will appear as a:', options:['Singlet','Doublet','Triplet','Quartet'], answer:2, explanation:'By the n+1 rule, a proton with 2 equivalent neighbors is split into 2+1 = 3 peaks, a triplet.' }
  ]
};
