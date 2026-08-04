window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.genchem = {
  id: 'genchem',
  name: 'General Chemistry',
  short: 'Gen Chem',
  icon: '⚗️',
  blurb: '30 questions in the Survey of Natural Sciences. Stoichiometry, periodicity, bonding, gases, solutions, acids/bases, equilibrium, thermodynamics, kinetics, and redox.',
  review: [
    {
      id: 'atomic',
      title: 'Atomic Structure & Periodicity',
      html: `
        <h3>Electron configuration</h3>
        <ul>
          <li><strong>Aufbau principle</strong> — fill lowest-energy orbitals first: 1s 2s 2p 3s 3p 4s 3d 4p…</li>
          <li><strong>Hund's rule</strong> — singly fill degenerate orbitals before pairing.</li>
          <li><strong>Pauli exclusion</strong> — no two electrons share all four quantum numbers.</li>
        </ul>
        <h3>Periodic trends</h3>
        <ul>
          <li><strong>Atomic radius</strong> — decreases across a period (rising effective nuclear charge), increases down a group.</li>
          <li><strong>Ionization energy & electronegativity</strong> — increase across a period, decrease down a group. Fluorine is the most electronegative element.</li>
          <li>Cations are smaller than their parent atoms; anions are larger.</li>
        </ul>
        <div class="callout"><strong>Quantum numbers:</strong> n (shell), ℓ (subshell: s=0, p=1, d=2), mℓ (orbital orientation), and mₛ (spin ±½).</div>
      `
    },
    {
      id: 'bonding',
      title: 'Bonding & Molecular Geometry (VSEPR)',
      html: `
        <h3>Bond type by electronegativity difference (ΔEN)</h3>
        <ul>
          <li>ΔEN &lt; 0.5 — nonpolar covalent</li>
          <li>0.5 ≤ ΔEN &lt; 1.7 — polar covalent</li>
          <li>ΔEN ≥ 1.7 — largely ionic</li>
        </ul>
        <h3>VSEPR shapes</h3>
        <ul>
          <li>2 electron domains → <strong>linear</strong>, 180° (sp)</li>
          <li>3 domains → <strong>trigonal planar</strong>, 120° (sp²)</li>
          <li>4 domains → <strong>tetrahedral</strong>, 109.5° (sp³)</li>
          <li>Lone pairs push bonds closer (e.g., water is bent ~104.5°, ammonia is trigonal pyramidal ~107°).</li>
        </ul>
        <div class="callout"><strong>Polarity:</strong> a molecule is polar if it has polar bonds that do <em>not</em> cancel by symmetry. CO₂ is nonpolar (linear, dipoles cancel); H₂O is polar (bent).</div>
      `
    },
    {
      id: 'stoich',
      title: 'Stoichiometry & Gases',
      html: `
        <h3>The mole</h3>
        <ul>
          <li>1 mole = 6.022 × 10²³ particles (Avogadro's number).</li>
          <li>Moles = mass ÷ molar mass. Use mole ratios from the balanced equation to relate reactants and products.</li>
          <li>The <strong>limiting reagent</strong> is fully consumed first and determines the maximum product yield.</li>
        </ul>
        <h3>Gas laws</h3>
        <div class="formula">PV = nRT&nbsp;&nbsp;(R = 0.0821 L·atm/mol·K)</div>
        <ul>
          <li>At STP (0 °C, 1 atm) one mole of ideal gas occupies <strong>22.4 L</strong>.</li>
          <li>Boyle's law: P ∝ 1/V (constant T). Charles's law: V ∝ T (constant P).</li>
          <li>Real gases deviate from ideal behavior at <strong>high pressure and low temperature</strong>.</li>
        </ul>
      `
    },
    {
      id: 'acidbase',
      title: 'Solutions, Acids & Bases',
      html: `
        <h3>Acids and bases</h3>
        <ul>
          <li><strong>Arrhenius</strong>: acids release H⁺, bases release OH⁻. <strong>Brønsted–Lowry</strong>: acids donate protons, bases accept them. <strong>Lewis</strong>: acids accept electron pairs, bases donate them.</li>
          <li>pH = −log[H⁺]; pOH = −log[OH⁻]; <strong>pH + pOH = 14</strong> at 25 °C.</li>
          <li>Strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄) dissociate completely.</li>
        </ul>
        <h3>Buffers</h3>
        <div class="formula">pH = pKₐ + log([A⁻]/[HA])&nbsp;&nbsp;(Henderson–Hasselbalch)</div>
        <p>A buffer resists pH change and consists of a weak acid and its conjugate base (or a weak base and its conjugate acid). Buffer capacity is greatest when [HA] = [A⁻], i.e., at pH = pKₐ.</p>
      `
    },
    {
      id: 'equilibrium',
      title: 'Equilibrium, Kinetics & Thermodynamics',
      html: `
        <h3>Equilibrium</h3>
        <ul>
          <li>A large K favors products; a small K favors reactants.</li>
          <li><strong>Le Chatelier's principle:</strong> a system at equilibrium shifts to counteract an applied stress (concentration, pressure, temperature).</li>
          <li>Adding heat shifts an endothermic reaction forward; increasing pressure shifts toward the side with fewer moles of gas.</li>
        </ul>
        <h3>Thermodynamics</h3>
        <div class="formula">ΔG = ΔH − TΔS</div>
        <ul>
          <li>ΔG &lt; 0 → spontaneous; ΔG &gt; 0 → nonspontaneous; ΔG = 0 → at equilibrium.</li>
          <li>Exothermic: ΔH &lt; 0. Increasing disorder: ΔS &gt; 0.</li>
        </ul>
        <h3>Kinetics</h3>
        <p>A <strong>catalyst</strong> speeds a reaction by lowering activation energy without being consumed and without changing K or ΔG. Rate laws must be determined experimentally, not from stoichiometry.</p>
      `
    },
    {
      id: 'redox',
      title: 'Redox & Electrochemistry',
      html: `
        <ul>
          <li><strong>OIL RIG:</strong> Oxidation Is Loss of electrons, Reduction Is Gain.</li>
          <li>The species that is oxidized is the reducing agent; the species reduced is the oxidizing agent.</li>
          <li>Assign oxidation states: O is usually −2, H is +1, group 1 metals +1, the sum equals the overall charge.</li>
          <li>In a galvanic (voltaic) cell, oxidation occurs at the <strong>anode</strong> and reduction at the <strong>cathode</strong>; electrons flow from anode to cathode. A positive cell potential (E°cell &gt; 0) means the reaction is spontaneous.</li>
        </ul>
        <div class="callout"><strong>Mnemonic:</strong> "An Ox, Red Cat" — Anode = Oxidation, Reduction = Cathode.</div>
      `
    }
  ],
  questions: [
    { id:'gc1', topic:'Periodicity', stem:'Which of the following elements has the smallest atomic radius?', options:['Na','Mg','Cl','K'], answer:2, explanation:'Atomic radius decreases left-to-right across a period due to increasing effective nuclear charge. Cl is furthest right among these and in the same period as Na and Mg, so it has the smallest radius. K is in the next period down and is larger.' },
    { id:'gc2', topic:'Periodicity', stem:'Which element has the highest electronegativity?', options:['Oxygen','Fluorine','Chlorine','Nitrogen'], answer:1, explanation:'Fluorine is the most electronegative element (3.98 on the Pauling scale). Electronegativity increases toward the top-right of the periodic table (excluding noble gases).' },
    { id:'gc3', topic:'Bonding', stem:'What is the molecular geometry of a molecule with four bonding domains and no lone pairs on the central atom?', options:['Trigonal planar','Bent','Tetrahedral','Linear'], answer:2, explanation:'Four bonding domains and no lone pairs gives a tetrahedral geometry with bond angles of about 109.5° (sp³ hybridization), as in CH₄.' },
    { id:'gc4', topic:'Bonding', stem:'Which molecule is nonpolar despite containing polar bonds?', options:['H₂O','NH₃','CO₂','HF'], answer:2, explanation:'CO₂ is linear and symmetric, so its two C=O bond dipoles point in opposite directions and cancel, making the molecule nonpolar. Water and ammonia are bent/pyramidal, so their dipoles do not cancel.' },
    { id:'gc5', topic:'Stoichiometry', stem:'How many moles are in 44.0 g of CO₂ (molar mass ≈ 44 g/mol)?', options:['0.5 mol','1 mol','2 mol','44 mol'], answer:1, explanation:'Moles = mass ÷ molar mass = 44.0 g ÷ 44 g/mol = 1 mol.' },
    { id:'gc6', topic:'Gases', stem:'What volume does 2 moles of an ideal gas occupy at STP?', options:['11.2 L','22.4 L','44.8 L','2 L'], answer:2, explanation:'At STP one mole of ideal gas occupies 22.4 L, so 2 moles occupy 44.8 L.' },
    { id:'gc7', topic:'Gases', stem:'According to Boyle\'s law, if the volume of a fixed amount of gas at constant temperature is halved, the pressure will:', options:['Halve','Double','Stay the same','Quadruple'], answer:1, explanation:'Boyle\'s law states P ∝ 1/V at constant temperature. Halving the volume doubles the pressure.' },
    { id:'gc8', topic:'Acids & Bases', stem:'A solution has [H⁺] = 1 × 10⁻⁴ M. What is its pH?', options:['4','10','−4','7'], answer:0, explanation:'pH = −log[H⁺] = −log(1 × 10⁻⁴) = 4. Since pH < 7, the solution is acidic.' },
    { id:'gc9', topic:'Acids & Bases', stem:'Which of the following is a strong acid?', options:['CH₃COOH','HF','HNO₃','H₂CO₃'], answer:2, explanation:'HNO₃ (nitric acid) is a strong acid that fully dissociates. Acetic acid, hydrofluoric acid, and carbonic acid are all weak acids.' },
    { id:'gc10', topic:'Acids & Bases', stem:'A buffer has maximum buffering capacity when:', options:['pH is far below pKa','pH equals pKa','the acid is fully dissociated','no conjugate base is present'], answer:1, explanation:'From Henderson–Hasselbalch, when [A⁻] = [HA] the log term is zero and pH = pKa. At this point the buffer resists change most effectively in both directions.' },
    { id:'gc11', topic:'Equilibrium', stem:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing the total pressure will shift the equilibrium:', options:['Toward the reactants','Toward the products','Not at all','Toward whichever side is exothermic'], answer:1, explanation:'Increasing pressure shifts equilibrium toward the side with fewer moles of gas. The reactant side has 4 moles of gas and the product side has 2, so the equilibrium shifts toward products.' },
    { id:'gc12', topic:'Equilibrium', stem:'Adding a catalyst to a reaction at equilibrium will:', options:['Shift equilibrium toward products','Increase the value of K','Speed the forward and reverse rates equally','Increase the yield of product'], answer:2, explanation:'A catalyst lowers activation energy for both the forward and reverse reactions equally, so it speeds the approach to equilibrium but does not change K or the equilibrium position.' },
    { id:'gc13', topic:'Thermodynamics', stem:'A reaction has ΔH > 0 and ΔS > 0. This reaction is spontaneous:', options:['At all temperatures','At no temperature','Only at high temperatures','Only at low temperatures'], answer:2, explanation:'ΔG = ΔH − TΔS. With ΔH positive and ΔS positive, ΔG becomes negative only when TΔS outweighs ΔH — that is, at sufficiently high temperature.' },
    { id:'gc14', topic:'Thermodynamics', stem:'Which combination guarantees a spontaneous reaction at all temperatures?', options:['ΔH > 0, ΔS > 0','ΔH < 0, ΔS > 0','ΔH < 0, ΔS < 0','ΔH > 0, ΔS < 0'], answer:1, explanation:'With ΔH < 0 (exothermic) and ΔS > 0 (increasing disorder), ΔG = ΔH − TΔS is negative at every temperature, so the reaction is always spontaneous.' },
    { id:'gc15', topic:'Redox', stem:'What is the oxidation state of manganese in KMnO₄?', options:['+2','+4','+6','+7'], answer:3, explanation:'K is +1 and each O is −2 (×4 = −8). For a neutral compound: +1 + Mn + (−8) = 0, so Mn = +7.' },
    { id:'gc16', topic:'Redox', stem:'In a galvanic cell, oxidation occurs at the ___ and electrons flow toward the ___.', options:['cathode; anode','anode; cathode','anode; anode','cathode; cathode'], answer:1, explanation:'Oxidation always occurs at the anode. Electrons released there flow through the external circuit to the cathode, where reduction occurs. "An Ox, Red Cat."' },
    { id:'gc17', topic:'Atomic Structure', stem:'The ground-state electron configuration of a neutral oxygen atom (Z = 8) is:', options:['1s² 2s² 2p²','1s² 2s² 2p⁴','1s² 2s² 2p⁶','1s² 2s⁴ 2p²'], answer:1, explanation:'Oxygen has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p → 1s² 2s² 2p⁴.' }
  ]
};
