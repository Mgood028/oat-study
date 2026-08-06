window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.genchem = {
  id: 'genchem',
  name: 'General Chemistry',
  short: 'Gen Chem',
  icon: '⚗️',
  blurb: '30 questions in the Survey of Natural Sciences. Atomic structure, bonding, liquids/solids, stoichiometry, gases, solutions, acids/bases, equilibrium, thermochemistry, kinetics, electrochemistry, and nuclear chemistry.',
  review: [
    {
      id: 'atomic',
      title: 'Atomic Structure & Periodic Properties',
      html: `
        <h3>Electron configuration</h3>
        <ul>
          <li><strong>Aufbau principle</strong> — fill lowest-energy orbitals first: 1s 2s 2p 3s 3p 4s 3d 4p…</li>
          <li><strong>Hund's rule</strong> — singly fill degenerate orbitals before pairing.</li>
          <li><strong>Pauli exclusion</strong> — no two electrons share all four quantum numbers.</li>
          <li><strong>Transition metal cations:</strong> remove electrons from the highest-n s-orbital <em>before</em> the d-orbital, even though s fills first going in. Fe ([Ar]4s²3d⁶) loses both 4s electrons before any 3d electron, so Fe²⁺ = [Ar]3d⁶ and Fe³⁺ = [Ar]3d⁵.</li>
        </ul>
        <h3>Periodic trends</h3>
        <ul>
          <li><strong>Atomic radius</strong> — decreases across a period (rising effective nuclear charge), increases down a group.</li>
          <li><strong>Ionization energy & electronegativity</strong> — increase across a period, decrease down a group. Fluorine is the most electronegative element.</li>
          <li>Cations are smaller than their parent atoms; anions are larger.</li>
          <li><strong>Isoelectronic species</strong> (same electron count, different nuclear charge): more protons pull the same electron cloud in tighter, so radius <em>decreases</em> as atomic number increases. Among O²⁻, F⁻, Na⁺, Mg²⁺ (all 10 electrons), O²⁻ is largest and Mg²⁺ is smallest.</li>
        </ul>
        <div class="callout"><strong>Quantum numbers:</strong> n (shell), ℓ (subshell: s=0, p=1, d=2, f=3), mℓ (orbital orientation, ranges −ℓ to +ℓ), and mₛ (spin ±½). A d subshell (ℓ=2) has 5 possible mℓ values (−2,−1,0,1,2), meaning 5 orbitals and room for 10 electrons.</div>
      `
    },
    {
      id: 'bonding',
      title: 'Bonding, Molecular Geometry & Formal Charge',
      html: `
        <h3>Bond type by electronegativity difference (ΔEN)</h3>
        <ul>
          <li>ΔEN &lt; 0.5 — nonpolar covalent</li>
          <li>0.5 ≤ ΔEN &lt; 1.7 — polar covalent</li>
          <li>ΔEN ≥ 1.7 — largely ionic</li>
        </ul>
        <h3>VSEPR shapes & hybridization</h3>
        <ul>
          <li>2 electron domains → <strong>linear</strong>, 180° (sp)</li>
          <li>3 domains → <strong>trigonal planar</strong>, 120° (sp²)</li>
          <li>4 domains → <strong>tetrahedral</strong>, 109.5° (sp³)</li>
          <li>5 domains → <strong>trigonal bipyramidal</strong> (sp³d); 6 domains → <strong>octahedral</strong> (sp³d²), as in SF₆.</li>
          <li>Lone pairs push bonds closer (e.g., water is bent ~104.5°, ammonia is trigonal pyramidal ~107°).</li>
        </ul>
        <h3>Formal charge</h3>
        <div class="formula">FC = (valence e⁻) − (nonbonding e⁻) − (bonding e⁻)/2</div>
        <p>Use formal charge to judge which Lewis structure (or resonance form) is most reasonable: the best structure minimizes formal charges and places any negative formal charge on the more electronegative atom. In CO₂ (O=C=O), every atom has a formal charge of 0 — a sign it's a stable, favored structure.</p>
        <div class="callout"><strong>Polarity:</strong> a molecule is polar if it has polar bonds that do <em>not</em> cancel by symmetry. CO₂ is nonpolar (linear, dipoles cancel); H₂O is polar (bent).</div>
      `
    },
    {
      id: 'liquids-solids',
      title: 'Liquids, Solids & Intermolecular Forces',
      html: `
        <h3>Intermolecular forces (IMFs), weakest to strongest</h3>
        <ul>
          <li><strong>London dispersion:</strong> present in all molecules; grows stronger with more electrons/larger surface area. The only IMF in nonpolar species like CH₄ or noble gases.</li>
          <li><strong>Dipole-dipole:</strong> between polar molecules.</li>
          <li><strong>Hydrogen bonding:</strong> a special, extra-strong dipole-dipole interaction when H is bonded directly to N, O, or F.</li>
          <li><strong>Ion-dipole:</strong> strongest of these, between an ion and a polar molecule (e.g., Na⁺ surrounded by water).</li>
        </ul>
        <div class="callout"><strong>Stronger IMFs → higher boiling/melting point and lower vapor pressure.</strong> A liquid with weak IMFs evaporates more readily (higher vapor pressure) and boils at a lower temperature.</div>
        <h3>Phase changes</h3>
        <div class="formula">q = mcΔT &nbsp;(heating within a phase)&nbsp;&nbsp;|&nbsp;&nbsp;q = nΔH<sub>fus</sub> or nΔH<sub>vap</sub> &nbsp;(phase change, constant T)</div>
        <p>Temperature stays flat during a phase change — all the added energy breaks intermolecular attractions rather than raising kinetic energy. This is exactly the same heating-curve idea as in physics, just phrased with molar heats of fusion/vaporization instead of mass-based latent heat.</p>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> How much energy is needed to melt 2 moles of ice at 0°C? (ΔH<sub>fus</sub> of water = 6.01 kJ/mol.)</p>
        <p><strong>Step:</strong> q = nΔH<sub>fus</sub> = 2 × 6.01 = 12.02 kJ.</p>
      `
    },
    {
      id: 'stoich',
      title: 'Stoichiometry: Moles, Limiting Reagent & Yield',
      html: `
        <h3>The mole</h3>
        <ul>
          <li>1 mole = 6.022 × 10²³ particles (Avogadro's number). Moles = mass ÷ molar mass.</li>
          <li>Use mole ratios from the balanced equation to relate reactants and products.</li>
        </ul>
        <h3>Limiting reagent</h3>
        <p>The reagent that runs out first — it caps the maximum product possible. To find it: calculate how much of one reactant is <em>needed</em> to fully react with the other, and compare to what's actually available.</p>
        <p><strong>Example:</strong> For 2H₂ + O₂ → 2H₂O, starting with 4 mol H₂ and 1 mol O₂: the 2:1 ratio means 1 mol O₂ needs only 2 mol H₂ to react completely. Since 4 mol H₂ is available (more than needed), <strong>O₂ is limiting</strong>, and it produces 1 mol O₂ × (2 mol H₂O / 1 mol O₂) = 2 mol H₂O.</p>
        <h3>Percent yield</h3>
        <div class="formula">% yield = (actual yield ÷ theoretical yield) × 100%</div>
        <h3>Empirical formula from percent composition</h3>
        <p>Assume a 100 g sample so percentages become grams. Convert each to moles, then divide every mole value by the smallest one to get the simplest whole-number ratio.</p>
        <p><strong>Example:</strong> 40.0% C, 6.7% H, 53.3% O → 3.33 mol C, 6.65 mol H, 3.33 mol O → divide by 3.33 → C₁H₂O₁ → empirical formula <strong>CH₂O</strong>.</p>
      `
    },
    {
      id: 'gases',
      title: 'Gas Laws',
      html: `
        <div class="formula">PV = nRT &nbsp;(R = 0.0821 L·atm/mol·K)</div>
        <ul>
          <li>At STP (0 °C, 1 atm) one mole of ideal gas occupies <strong>22.4 L</strong>.</li>
          <li>Boyle's law: P ∝ 1/V (constant T). Charles's law: V ∝ T (constant P). These combine into the <strong>combined gas law</strong>: P₁V₁/T₁ = P₂V₂/T₂ (moles fixed).</li>
          <li><strong>Dalton's law of partial pressures:</strong> P<sub>total</sub> = P₁ + P₂ + P₃ + … — each gas in a mixture contributes independently.</li>
          <li><strong>Graham's law of effusion:</strong> rate₁/rate₂ = √(M₂/M₁) — lighter gases effuse (and diffuse) faster. Note it's an inverse relationship with the <em>square root</em> of molar mass.</li>
          <li>Real gases deviate from ideal behavior at <strong>high pressure and low temperature</strong>, where intermolecular attractions and molecular volume actually start to matter.</li>
        </ul>
        <h3>Worked example (combined gas law)</h3>
        <p><strong>Setup:</strong> A gas occupies 4.0 L at 300 K and 2.0 atm. What volume will it occupy at 600 K and 1.0 atm?</p>
        <p><strong>Step 1:</strong> P₁V₁/T₁ = P₂V₂/T₂ → (2.0)(4.0)/300 = (1.0)V₂/600.</p>
        <p><strong>Step 2:</strong> 8/300 = V₂/600 → V₂ = 8 × 600/300 = 16 L.</p>
      `
    },
    {
      id: 'solutions',
      title: 'Solutions, Concentration & Colligative Properties',
      html: `
        <h3>Concentration units</h3>
        <div class="formula">Molarity (M) = mol solute / L solution&nbsp;&nbsp;|&nbsp;&nbsp;Molality (m) = mol solute / kg solvent</div>
        <ul>
          <li><strong>Dilution:</strong> M₁V₁ = M₂V₂ — the moles of solute don't change, only the concentration and volume.</li>
          <li>Molality (not molarity) is used for colligative property formulas because it doesn't change with temperature (mass doesn't expand/contract the way volume does).</li>
        </ul>
        <h3>Colligative properties</h3>
        <div class="formula">ΔT<sub>f</sub> = iK<sub>f</sub>m &nbsp;(freezing point depression)&nbsp;&nbsp;|&nbsp;&nbsp;ΔT<sub>b</sub> = iK<sub>b</sub>m &nbsp;(boiling point elevation)</div>
        <ul>
          <li>These depend only on the <em>number</em> of dissolved particles, not their identity — that's why they're called "colligative."</li>
          <li><strong>Van't Hoff factor (i)</strong> = number of particles a formula unit breaks into. Nonelectrolytes (like glucose): i = 1. NaCl: i = 2 (Na⁺ + Cl⁻). CaCl₂: i = 3.</li>
        </ul>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> What is the boiling point elevation for a 1.0 m NaCl solution (K<sub>b</sub> = 0.512 °C/m)?</p>
        <p><strong>Step 1:</strong> NaCl dissociates into 2 ions, so i = 2.</p>
        <p><strong>Step 2:</strong> ΔT<sub>b</sub> = iK<sub>b</sub>m = 2 × 0.512 × 1.0 = 1.024 °C.</p>
      `
    },
    {
      id: 'acidbase',
      title: 'Acids, Bases & Buffers',
      html: `
        <h3>Acids and bases</h3>
        <ul>
          <li><strong>Arrhenius</strong>: acids release H⁺, bases release OH⁻. <strong>Brønsted–Lowry</strong>: acids donate protons, bases accept them. <strong>Lewis</strong>: acids accept electron pairs, bases donate them.</li>
          <li>pH = −log[H⁺]; pOH = −log[OH⁻]; <strong>pH + pOH = 14</strong> at 25 °C.</li>
          <li>Strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄) dissociate completely.</li>
        </ul>
        <h3>Weak acid equilibrium (ICE tables)</h3>
        <p>For a weak acid HA with initial concentration C₀, set up: HA ⇌ H⁺ + A⁻, and approximate Ka ≈ x²/C₀ when the acid is weak (x is small compared to C₀). Solve for x = [H⁺].</p>
        <p><strong>Example:</strong> Ka = 1.0×10⁻⁵, C₀ = 0.10 M → x² = (1.0×10⁻⁵)(0.10) = 1.0×10⁻⁶ → x = 1.0×10⁻³ M. Percent ionization = x/C₀ × 100% = 1%.</p>
        <h3>Buffers & titrations</h3>
        <div class="formula">pH = pKₐ + log([A⁻]/[HA])&nbsp;&nbsp;(Henderson–Hasselbalch)</div>
        <ul>
          <li>A buffer resists pH change and consists of a weak acid and its conjugate base (or a weak base and its conjugate acid). Buffer capacity is greatest when [HA] = [A⁻], i.e., at pH = pKₐ.</li>
          <li>At the equivalence point of a <strong>weak acid + strong base</strong> titration, the solution is <em>basic</em> (pH &gt; 7) — the leftover conjugate base reacts with water. The reverse (weak base + strong acid) gives an acidic equivalence point.</li>
        </ul>
      `
    },
    {
      id: 'equilibrium',
      title: 'Chemical Equilibrium',
      html: `
        <h3>Writing equilibrium expressions</h3>
        <p>For aA + bB ⇌ cC + dD: K<sub>eq</sub> = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ. Pure solids and liquids are omitted (their "concentration" doesn't change).</p>
        <p><strong>Example:</strong> 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) → K<sub>eq</sub> = [SO₃]² / ([SO₂]²[O₂]).</p>
        <h3>Q vs. K — predicting reaction direction</h3>
        <ul>
          <li>Q has the same form as K, but uses <em>current</em> (non-equilibrium) concentrations.</li>
          <li>Q &lt; K → reaction proceeds forward (toward products) to increase Q up to K.</li>
          <li>Q &gt; K → reaction proceeds in reverse (toward reactants).</li>
          <li>Q = K → already at equilibrium, no net change.</li>
        </ul>
        <h3>ICE tables for equilibrium concentrations</h3>
        <p>Set up Initial, Change, Equilibrium rows for each species, express the changes in terms of a single variable x (scaled by stoichiometric coefficients), then substitute into the K<sub>eq</sub> expression and solve for x.</p>
        <h3>Le Chatelier's principle</h3>
        <ul>
          <li>A system at equilibrium shifts to counteract an applied stress (concentration, pressure, temperature).</li>
          <li>Adding heat shifts an endothermic reaction forward; increasing pressure shifts toward the side with fewer moles of gas.</li>
          <li>A large K favors products; a small K favors reactants — but K itself only changes with temperature, never with concentration, pressure, or a catalyst.</li>
        </ul>
      `
    },
    {
      id: 'thermo',
      title: 'Thermochemistry & Thermodynamics',
      html: `
        <h3>Hess's law</h3>
        <p>Enthalpy is a state function, so you can add (or reverse and add) known reactions to build a target reaction, and add their ΔH values the same way.</p>
        <p><strong>Example:</strong> Given C + O₂ → CO₂ (ΔH = −393.5 kJ) and CO + ½O₂ → CO₂ (ΔH = −283.0 kJ), find ΔH for C + ½O₂ → CO. Reverse the second reaction (ΔH becomes +283.0) and add to the first: ΔH = −393.5 + 283.0 = −110.5 kJ.</p>
        <h3>Bond enthalpies</h3>
        <div class="formula">ΔH<sub>rxn</sub> ≈ Σ(bonds broken) − Σ(bonds formed)</div>
        <p>Breaking bonds always costs energy (positive); forming bonds always releases energy (subtracted). This is an estimate — it assumes gas-phase, average bond energies.</p>
        <h3>Free energy & spontaneity</h3>
        <div class="formula">ΔG = ΔH − TΔS</div>
        <ul>
          <li>ΔG &lt; 0 → spontaneous; ΔG &gt; 0 → nonspontaneous; ΔG = 0 → at equilibrium (this defines the crossover temperature: T = ΔH/ΔS).</li>
          <li>Exothermic: ΔH &lt; 0. Increasing disorder: ΔS &gt; 0.</li>
        </ul>
        <div class="callout"><strong>Unit trap:</strong> ΔH is usually given in kJ and ΔS in J/K — convert to matching units before combining them in ΔG = ΔH − TΔS.</div>
      `
    },
    {
      id: 'kinetics',
      title: 'Chemical Kinetics',
      html: `
        <h3>Rate laws</h3>
        <div class="formula">rate = k[A]ᵐ[B]ⁿ</div>
        <ul>
          <li>The exponents m and n (the "order" with respect to each reactant) must be determined <strong>experimentally</strong> — they are not simply the reaction's stoichiometric coefficients.</li>
          <li>To find an order from data: see how the rate changes when one concentration doubles while others are held constant. If rate doubles → 1st order in that reactant; if it quadruples → 2nd order (since 2ⁿ = 4 → n = 2).</li>
          <li>Overall order = sum of all the individual orders.</li>
        </ul>
        <h3>Half-life (first-order reactions)</h3>
        <div class="formula">t<sub>1/2</sub> = 0.693 / k</div>
        <p>For a first-order reaction, the half-life is constant — it doesn't depend on the starting concentration (unlike zero- or second-order reactions).</p>
        <h3>What speeds up a reaction</h3>
        <ul>
          <li>Higher temperature: more molecules collide with enough kinetic energy to exceed the activation energy (per the Arrhenius equation) — this is the primary reason rate increases with temperature, not a change in ΔH or K.</li>
          <li>A catalyst: lowers the activation energy pathway without being consumed, without changing K, ΔG, or ΔH.</li>
          <li>Higher concentration or surface area: more effective collisions per unit time.</li>
        </ul>
      `
    },
    {
      id: 'redox',
      title: 'Redox & Electrochemistry',
      html: `
        <ul>
          <li><strong>OIL RIG:</strong> Oxidation Is Loss of electrons, Reduction Is Gain.</li>
          <li>The species that is oxidized is the reducing agent (it "reduces" something else by giving up electrons); the species reduced is the oxidizing agent.</li>
          <li>Assign oxidation states: O is usually −2, H is +1, group 1 metals +1, the sum equals the overall charge.</li>
          <li>In a galvanic (voltaic) cell, oxidation occurs at the <strong>anode</strong> and reduction at the <strong>cathode</strong>; electrons flow from anode to cathode. "An Ox, Red Cat."</li>
        </ul>
        <h3>Standard cell potential</h3>
        <div class="formula">E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub></div>
        <p>The half-reaction with the more positive (less negative) reduction potential is the cathode (reduction happens there); the other runs in reverse as the anode. A positive E°<sub>cell</sub> means the reaction is spontaneous as written.</p>
        <h3>Linking electrochemistry to thermodynamics</h3>
        <div class="formula">ΔG° = −nFE°<sub>cell</sub> &nbsp;(F = 96,485 C/mol e⁻)</div>
        <p>A positive E°<sub>cell</sub> gives a negative ΔG° — consistent with the reaction being spontaneous. This is the bridge between electrochemistry and the ΔG spontaneity rules from thermodynamics.</p>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> A cell is built from Zn/Zn²⁺ (E° = −0.76 V) and Cu/Cu²⁺ (E° = +0.34 V). Find E°<sub>cell</sub>.</p>
        <p><strong>Step:</strong> Cu²⁺ has the more positive potential, so it's the cathode; Zn is the anode. E°<sub>cell</sub> = 0.34 − (−0.76) = +1.10 V.</p>
      `
    },
    {
      id: 'nuclear',
      title: 'Nuclear Chemistry',
      html: `
        <h3>Types of radioactive decay</h3>
        <ul>
          <li><strong>Alpha (α) decay:</strong> emits a helium nucleus (mass 4, charge +2). Mass number drops by 4, atomic number drops by 2.</li>
          <li><strong>Beta-minus (β⁻) decay:</strong> a neutron converts to a proton, emitting an electron. Mass number stays the same, atomic number increases by 1.</li>
          <li><strong>Gamma (γ) decay:</strong> emission of a high-energy photon; no change in mass number or atomic number, just a drop from an excited nuclear state.</li>
        </ul>
        <p>In every nuclear equation, mass numbers (top) must balance on both sides, and atomic numbers (bottom) must balance on both sides.</p>
        <p><strong>Example:</strong> Uranium-238 (Z=92) undergoes alpha decay: mass 238−4=234, atomic number 92−2=90 (Thorium) → produces Thorium-234.</p>
        <h3>Half-life</h3>
        <div class="formula">N = N₀ (1/2)^(t / t<sub>1/2</sub>)</div>
        <p><strong>Example:</strong> Starting with 80 g of an isotope with an 8-day half-life, after 24 days (= 3 half-lives): remaining = 80 × (1/2)³ = 80/8 = 10 g.</p>
        <h3>Fission vs. fusion</h3>
        <p><strong>Fission:</strong> a heavy nucleus splits into smaller nuclei (releases energy; basis of nuclear reactors). <strong>Fusion:</strong> light nuclei combine into a heavier one (releases even more energy per mass; powers the sun).</p>
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
    { id:'gc17', topic:'Atomic Structure', stem:'The ground-state electron configuration of a neutral oxygen atom (Z = 8) is:', options:['1s² 2s² 2p²','1s² 2s² 2p⁴','1s² 2s² 2p⁶','1s² 2s⁴ 2p²'], answer:1, explanation:'Oxygen has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p → 1s² 2s² 2p⁴.' },
    { id:'gc18', topic:'Periodicity', stem:'Rank the following in order of increasing first ionization energy: Na, Mg, Si, Cl.', options:['Cl < Si < Mg < Na','Na < Si < Mg < Cl','Na < Mg < Si < Cl','Mg < Na < Si < Cl'], answer:2, explanation:'<strong>Step 1:</strong> Ionization energy generally increases left to right across a period as effective nuclear charge rises.<br><strong>Step 2:</strong> All four are period 3 elements in this order across the table: Na, Mg, (Al), Si, (P), S, Cl — so ionization energy rises in that same order: Na (496) < Mg (738) < Si (786) < Cl (1251 kJ/mol).' },
    { id:'gc19', topic:'Periodicity', stem:'O²⁻, F⁻, Na⁺, and Mg²⁺ are all isoelectronic (10 electrons each). Which has the largest ionic radius?', options:['O²⁻','F⁻','Na⁺','Mg²⁺'], answer:0, explanation:'<strong>Step 1:</strong> With the same electron count, radius is controlled entirely by nuclear charge — more protons pull the electron cloud in tighter.<br><strong>Step 2:</strong> Proton counts: O (8) < F (9) < Na (11) < Mg (12). The fewest protons (O²⁻) gives the weakest pull and the largest radius.' },
    { id:'gc20', topic:'Atomic Structure', stem:'What are the possible mℓ values for an electron in a 3d subshell?', options:['−1, 0, 1','0, 1, 2, 3','−3, −2, −1, 0, 1, 2, 3','−2, −1, 0, 1, 2'], answer:3, explanation:'<strong>Step 1:</strong> For a d subshell, ℓ = 2.<br><strong>Step 2:</strong> mℓ ranges from −ℓ to +ℓ in integer steps: −2, −1, 0, 1, 2 — five values, matching the 5 d-orbitals.' },
    { id:'gc21', topic:'Atomic Structure', stem:'What is the ground-state electron configuration of Fe³⁺ (Fe, Z = 26)?', options:['[Ar]4s²3d³','[Ar]3d⁵','[Ar]3d⁸','[Ar]4s²3d¹'], answer:1, explanation:'<strong>Step 1:</strong> Neutral Fe is [Ar]4s²3d⁶.<br><strong>Step 2:</strong> Transition metal cations lose s-electrons before d-electrons: removing 3 electrons takes both 4s electrons first, then one 3d electron.<br><strong>Step 3:</strong> Fe³⁺ = [Ar]3d⁵ — a stable, half-filled d-subshell.' },
    { id:'gc22', topic:'Bonding', stem:'What is the hybridization of the central atom in SF₆, which has six bonding domains and no lone pairs?', options:['sp³d','sp³','sp³d²','dsp²'], answer:2, explanation:'<strong>Step 1:</strong> Six electron domains correspond to an octahedral arrangement.<br><strong>Step 2:</strong> Octahedral geometry requires sp³d² hybridization (one s, three p, and two d orbitals).' },
    { id:'gc23', topic:'Bonding', smiles:'O=C=O', stem:'In the Lewis structure of CO₂ shown, what is the formal charge on each oxygen atom?', options:['0','−1','+1','+2'], answer:0, explanation:'<strong>Step 1:</strong> FC = valence electrons − nonbonding electrons − (bonding electrons)/2.<br><strong>Step 2:</strong> Each O has 6 valence electrons, 2 lone pairs (4 nonbonding electrons), and one double bond (4 bonding electrons, so 4/2 = 2 counted).<br><strong>Step 3:</strong> FC = 6 − 4 − 2 = 0. A formal charge of zero on every atom is a strong signal this is a favorable Lewis structure.' },
    { id:'gc24', topic:'Liquids & Solids', stem:'Rank the following in order of increasing boiling point: He, CH₄, CH₃OH.', options:['CH₄ < He < CH₃OH','CH₃OH < CH₄ < He','He < CH₃OH < CH₄','He < CH₄ < CH₃OH'], answer:3, explanation:'<strong>Step 1:</strong> He has only very weak London dispersion forces (fewest electrons). CH₄ is nonpolar too (only London dispersion) but has more electrons than He, so slightly stronger forces.<br><strong>Step 2:</strong> CH₃OH can hydrogen bond (O−H), by far the strongest of the three.<br><strong>Step 3:</strong> Stronger IMFs mean higher boiling point, so: He < CH₄ < CH₃OH.' },
    { id:'gc25', topic:'Liquids & Solids', stem:'How much energy is required to melt 2 moles of ice at 0°C? (ΔH_fus of water = 6.01 kJ/mol)', options:['6.01 kJ','12.02 kJ','3.01 kJ','24.04 kJ'], answer:1, explanation:'<strong>Step 1:</strong> Melting is a phase change: q = nΔH_fus.<br><strong>Step 2:</strong> q = 2 mol × 6.01 kJ/mol = 12.02 kJ.' },
    { id:'gc26', topic:'Liquids & Solids', stem:'Compared to a liquid with strong intermolecular forces, a liquid with weak intermolecular forces will have a ___ vapor pressure and a ___ boiling point.', options:['Lower vapor pressure; higher boiling point','Higher vapor pressure; higher boiling point','Higher vapor pressure; lower boiling point','Lower vapor pressure; lower boiling point'], answer:2, explanation:'<strong>Step 1:</strong> Weak IMFs mean molecules escape into the vapor phase more easily, raising vapor pressure.<br><strong>Step 2:</strong> Weak IMFs also mean less energy (lower temperature) is needed to fully overcome them and boil, so the boiling point is lower.' },
    { id:'gc27', topic:'Stoichiometry', stem:'For 2H₂(g) + O₂(g) → 2H₂O(g), a reaction starts with 4 mol H₂ and 1 mol O₂. Which reagent is limiting, and how much H₂O forms?', options:['O₂ is limiting; 2 mol H₂O forms','H₂ is limiting; 4 mol H₂O forms','O₂ is limiting; 1 mol H₂O forms','H₂ is limiting; 2 mol H₂O forms'], answer:0, explanation:'<strong>Step 1:</strong> The 2:1 ratio means 1 mol O₂ needs only 2 mol H₂ to react completely — and 4 mol H₂ is available, more than enough.<br><strong>Step 2:</strong> So O₂ runs out first: it\'s limiting.<br><strong>Step 3:</strong> 1 mol O₂ produces 2 mol H₂O (matching the 1:2 ratio of O₂:H₂O).' },
    { id:'gc28', topic:'Stoichiometry', stem:'A reaction has a theoretical yield of 25.0 g. If 21.3 g is actually obtained, what is the percent yield?', options:['82.5%','117.4%','25.0%','85.2%'], answer:3, explanation:'<strong>Step 1:</strong> % yield = (actual ÷ theoretical) × 100%.<br><strong>Step 2:</strong> = (21.3 ÷ 25.0) × 100% = 85.2%.' },
    { id:'gc29', topic:'Stoichiometry', stem:'A compound is 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula?', options:['C₂H₄O₂','CH₂O','CHO','C₂H₆O'], answer:1, explanation:'<strong>Step 1:</strong> Assume 100 g: 40.0 g C ÷ 12.01 = 3.33 mol; 6.7 g H ÷ 1.008 = 6.65 mol; 53.3 g O ÷ 16.00 = 3.33 mol.<br><strong>Step 2:</strong> Divide each by the smallest (3.33): C = 1.00, H ≈ 2.00, O = 1.00.<br><strong>Step 3:</strong> Empirical formula: CH₂O.' },
    { id:'gc30', topic:'Gases', stem:'A gas occupies 4.0 L at 300 K and 2.0 atm. What volume will it occupy at 600 K and 1.0 atm?', options:['8 L','4 L','16 L','2 L'], answer:2, explanation:'<strong>Step 1:</strong> Combined gas law: P₁V₁/T₁ = P₂V₂/T₂.<br><strong>Step 2:</strong> (2.0)(4.0)/300 = (1.0)V₂/600 → 8/300 = V₂/600.<br><strong>Step 3:</strong> V₂ = 8 × 600/300 = 16 L.' },
    { id:'gc31', topic:'Gases', stem:'A gas mixture has partial pressures: N₂ = 2.0 atm, O₂ = 0.5 atm, CO₂ = 0.3 atm. What is the total pressure?', options:['2.8 atm','2.5 atm','2.0 atm','3.0 atm'], answer:0, explanation:'<strong>Step 1:</strong> Dalton\'s law: total pressure is the sum of the partial pressures.<br><strong>Step 2:</strong> 2.0 + 0.5 + 0.3 = 2.8 atm.' },
    { id:'gc32', topic:'Gases', stem:'Gas A effuses twice as fast as gas B (molar mass 32 g/mol). What is the molar mass of gas A?', options:['16 g/mol','64 g/mol','128 g/mol','8 g/mol'], answer:3, explanation:'<strong>Step 1:</strong> Graham\'s law: rate_A/rate_B = √(M_B/M_A).<br><strong>Step 2:</strong> 2 = √(32/M_A) → squaring both sides: 4 = 32/M_A.<br><strong>Step 3:</strong> M_A = 32/4 = 8 g/mol — lighter than B, consistent with effusing faster.' },
    { id:'gc33', topic:'Solutions', stem:'How many mL of a 6.0 M HCl stock solution are needed to prepare 500 mL of a 1.5 M HCl solution?', options:['250 mL','125 mL','83.3 mL','500 mL'], answer:1, explanation:'<strong>Step 1:</strong> Dilution equation: M₁V₁ = M₂V₂.<br><strong>Step 2:</strong> (6.0)V₁ = (1.5)(500) = 750.<br><strong>Step 3:</strong> V₁ = 750/6.0 = 125 mL.' },
    { id:'gc34', topic:'Solutions', stem:'A solution contains 2 mol of a nonvolatile, nonelectrolyte solute in 4 kg of water. What is the freezing point depression? (Kf = 1.86 °C/m)', options:['1.86°C','3.72°C','0.93°C','0.465°C'], answer:2, explanation:'<strong>Step 1:</strong> Molality = mol solute / kg solvent = 2/4 = 0.5 m.<br><strong>Step 2:</strong> ΔTf = iKfm, and since it\'s a nonelectrolyte, i = 1: ΔTf = 1(1.86)(0.5) = 0.93°C.' },
    { id:'gc35', topic:'Solutions', stem:'What is the boiling point elevation for a 1.0 m solution of NaCl in water? (Kb = 0.512 °C/m)', options:['1.024°C','0.512°C','0.256°C','2.048°C'], answer:0, explanation:'<strong>Step 1:</strong> NaCl dissociates into 2 ions (Na⁺ and Cl⁻), so its van\'t Hoff factor i = 2.<br><strong>Step 2:</strong> ΔTb = iKbm = 2 × 0.512 × 1.0 = 1.024°C.' },
    { id:'gc36', topic:'Acids & Bases', stem:'A weak acid HA has Ka = 1.0×10⁻⁵ and an initial concentration of 0.10 M. What is the approximate [H⁺] at equilibrium?', options:['1.0×10⁻⁵ M','1.0×10⁻⁶ M','1.0×10⁻⁴ M','1.0×10⁻³ M'], answer:3, explanation:'<strong>Step 1:</strong> For a weak acid, Ka ≈ x²/C₀ (small-x approximation).<br><strong>Step 2:</strong> x² = (1.0×10⁻⁵)(0.10) = 1.0×10⁻⁶.<br><strong>Step 3:</strong> x = [H⁺] = √(1.0×10⁻⁶) = 1.0×10⁻³ M.' },
    { id:'gc37', topic:'Acids & Bases', stem:'Using the previous scenario (Ka = 1.0×10⁻⁵, C₀ = 0.10 M, [H⁺] ≈ 1.0×10⁻³ M), what is the percent ionization of the acid?', options:['10%','1%','0.1%','5%'], answer:1, explanation:'<strong>Step 1:</strong> Percent ionization = [H⁺]/C₀ × 100%.<br><strong>Step 2:</strong> = (1.0×10⁻³ / 0.10) × 100% = 1%.' },
    { id:'gc38', topic:'Acids & Bases', stem:'At the equivalence point of a titration between a weak acid and a strong base, the pH of the resulting solution is:', options:['Equal to 7 (neutral)','Less than 7 (acidic)','Greater than 7 (basic)','Undefined'], answer:2, explanation:'<strong>Step 1:</strong> At the equivalence point, the weak acid has been fully converted to its conjugate base.<br><strong>Step 2:</strong> That conjugate base reacts with water (hydrolysis) to produce a small amount of OH⁻, making the solution basic — pH > 7.' },
    { id:'gc39', topic:'Equilibrium', stem:'What is the equilibrium expression for 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?', options:['[SO₃]²/([SO₂]²[O₂])','[SO₃]/([SO₂][O₂])','2[SO₃]/(2[SO₂]+[O₂])','[SO₂]²[O₂]/[SO₃]²'], answer:0, explanation:'<strong>Step 1:</strong> K_eq = [products]^(coefficients) / [reactants]^(coefficients).<br><strong>Step 2:</strong> With coefficients 2, 1, 2: K_eq = [SO₃]² / ([SO₂]²[O₂]).' },
    { id:'gc40', topic:'Equilibrium', stem:'For A ⇌ B, Keq = 4. Starting with [A] = 2.0 M and [B] = 0 M, what is [A] at equilibrium?', options:['1.6 M','0.5 M','2.0 M','0.4 M'], answer:3, explanation:'<strong>Step 1:</strong> Let x = amount converted. ICE: [A] = 2.0 − x, [B] = x.<br><strong>Step 2:</strong> Keq = [B]/[A] = x/(2.0−x) = 4 → x = 8 − 4x → 5x = 8 → x = 1.6.<br><strong>Step 3:</strong> [A] at equilibrium = 2.0 − 1.6 = 0.4 M.' },
    { id:'gc41', topic:'Equilibrium', stem:'A reaction has Keq = 10 at a given temperature. If the current reaction quotient Q = 2, which way will the reaction proceed?', options:['In reverse (toward reactants), since Q < K','Forward (toward products), since Q < K','No net change; Q = K already','Forward (toward products), since Q > K'], answer:1, explanation:'<strong>Step 1:</strong> Compare Q to K: Q (2) is less than K (10).<br><strong>Step 2:</strong> When Q < K, the reaction proceeds forward to make more products, increasing Q until it reaches K.' },
    { id:'gc42', topic:'Thermodynamics', stem:'Given C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ, and CO(g) + ½O₂(g) → CO₂(g), ΔH = −283.0 kJ, find ΔH for C(s) + ½O₂(g) → CO(g).', options:['−676.5 kJ','+110.5 kJ','−110.5 kJ','−283.0 kJ'], answer:2, explanation:'<strong>Step 1:</strong> Reverse the second reaction so CO ends up as a product: CO₂ → CO + ½O₂, ΔH = +283.0 kJ.<br><strong>Step 2:</strong> Add this to the first reaction; CO₂ cancels on both sides: C + O₂ + CO₂ → CO₂ + CO + ½O₂ simplifies to C + ½O₂ → CO.<br><strong>Step 3:</strong> ΔH = −393.5 + 283.0 = −110.5 kJ.' },
    { id:'gc43', topic:'Thermodynamics', stem:'Estimate ΔH for H₂(g) + Cl₂(g) → 2HCl(g) using bond enthalpies: H−H = 436 kJ/mol, Cl−Cl = 243 kJ/mol, H−Cl = 431 kJ/mol.', options:['−183 kJ','+183 kJ','−1110 kJ','−431 kJ'], answer:0, explanation:'<strong>Step 1:</strong> ΔH ≈ Σ(bonds broken) − Σ(bonds formed).<br><strong>Step 2:</strong> Bonds broken: 1 H−H + 1 Cl−Cl = 436 + 243 = 679 kJ. Bonds formed: 2 H−Cl = 2 × 431 = 862 kJ.<br><strong>Step 3:</strong> ΔH = 679 − 862 = −183 kJ.' },
    { id:'gc44', topic:'Thermodynamics', stem:'A reaction has ΔH = +50 kJ and ΔS = +100 J/K. At what temperature does the reaction become spontaneous?', options:['0.5 K','5 K','50,000 K','500 K'], answer:3, explanation:'<strong>Step 1:</strong> The crossover point is where ΔG = 0: ΔH = TΔS → T = ΔH/ΔS.<br><strong>Step 2:</strong> Convert units to match: ΔH = 50 kJ = 50,000 J.<br><strong>Step 3:</strong> T = 50,000 J ÷ 100 J/K = 500 K. Above this temperature, TΔS exceeds ΔH and ΔG becomes negative.' },
    { id:'gc45', topic:'Kinetics', stem:'In A + B → products, doubling [A] doubles the rate, and doubling [B] quadruples the rate. What is the overall reaction order?', options:['2nd order overall','3rd order (1st in A, 2nd in B)','1st order overall','4th order overall'], answer:1, explanation:'<strong>Step 1:</strong> Rate doubles when [A] doubles → 2¹ = 2, so the reaction is 1st order in A.<br><strong>Step 2:</strong> Rate quadruples when [B] doubles → 2ⁿ = 4 → n = 2, so it\'s 2nd order in B.<br><strong>Step 3:</strong> Overall order = 1 + 2 = 3rd order.' },
    { id:'gc46', topic:'Kinetics', stem:'A first-order reaction has a rate constant k = 0.0693 min⁻¹. What is its half-life?', options:['0.693 min','20 min','10 min','69.3 min'], answer:2, explanation:'<strong>Step 1:</strong> For a first-order reaction: t₁/₂ = 0.693/k.<br><strong>Step 2:</strong> t₁/₂ = 0.693/0.0693 = 10 min.' },
    { id:'gc47', topic:'Kinetics', stem:'According to the Arrhenius equation, increasing temperature increases reaction rate primarily because:', options:['A larger fraction of molecules have enough energy to exceed the activation energy','The activation energy of the reaction decreases','The equilibrium constant K increases','The reaction becomes exothermic'], answer:0, explanation:'<strong>Step 1:</strong> Temperature doesn\'t change the activation energy barrier itself — it changes the distribution of molecular kinetic energies.<br><strong>Step 2:</strong> At higher temperature, a larger fraction of collisions have enough energy to clear the activation energy barrier, so the reaction proceeds faster.' },
    { id:'gc48', topic:'Redox', stem:'A galvanic cell is built from Zn/Zn²⁺ (E° = −0.76 V) and Cu/Cu²⁺ (E° = +0.34 V). What is the standard cell potential?', options:['−1.10 V','+0.42 V','−0.42 V','+1.10 V'], answer:3, explanation:'<strong>Step 1:</strong> The half-reaction with the more positive potential (Cu²⁺/Cu) is the cathode; the other (Zn/Zn²⁺) is the anode.<br><strong>Step 2:</strong> E°cell = E°cathode − E°anode = 0.34 − (−0.76) = +1.10 V.' },
    { id:'gc49', topic:'Redox', stem:'Using ΔG° = −nFE°cell, find ΔG° for a reaction with n = 2 mol electrons and E°cell = 1.10 V (F = 96,485 C/mol).', options:['≈+212 kJ','≈−212 kJ','≈−106 kJ','≈−424 kJ'], answer:1, explanation:'<strong>Step 1:</strong> ΔG° = −nFE° = −(2)(96,485)(1.10).<br><strong>Step 2:</strong> = −212,267 J ≈ −212 kJ. The negative sign confirms the reaction is spontaneous, consistent with the positive E°cell.' },
    { id:'gc50', topic:'Redox', stem:'In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is the oxidizing agent?', options:['Zn','Zn²⁺','Cu²⁺','Cu'], answer:2, explanation:'<strong>Step 1:</strong> Zn loses electrons (Zn → Zn²⁺ + 2e⁻) — it is oxidized, making it the reducing agent.<br><strong>Step 2:</strong> Cu²⁺ gains those electrons (is reduced), so Cu²⁺ is the oxidizing agent — the species that causes something else to be oxidized.' },
    { id:'gc51', topic:'Nuclear Reactions', stem:'Uranium-238 (Z = 92) undergoes alpha decay. What is the resulting daughter nuclide?', options:['Thorium-234','Protactinium-234','Uranium-234','Thorium-238'], answer:0, explanation:'<strong>Step 1:</strong> Alpha decay emits a helium nucleus (mass 4, atomic number 2).<br><strong>Step 2:</strong> Mass number: 238 − 4 = 234. Atomic number: 92 − 2 = 90, which is thorium (Th).<br><strong>Answer:</strong> Thorium-234.' },
    { id:'gc52', topic:'Nuclear Reactions', stem:'Carbon-14 (Z = 6) undergoes beta-minus decay. What is the resulting nuclide?', options:['Boron-14','Carbon-14','Nitrogen-13','Nitrogen-14'], answer:3, explanation:'<strong>Step 1:</strong> In beta-minus decay, a neutron converts to a proton and an emitted electron; mass number is unchanged, atomic number increases by 1.<br><strong>Step 2:</strong> Mass stays 14. Atomic number: 6 + 1 = 7, which is nitrogen (N).<br><strong>Answer:</strong> Nitrogen-14 — this is the basis of radiocarbon dating.' },
    { id:'gc53', topic:'Nuclear Reactions', stem:'A radioactive isotope has a half-life of 8 days. Starting with 80 g, how much remains after 24 days?', options:['20 g','10 g','26.7 g','5 g'], answer:1, explanation:'<strong>Step 1:</strong> 24 days ÷ 8 days/half-life = 3 half-lives.<br><strong>Step 2:</strong> Remaining = 80 × (1/2)³ = 80 × 1/8 = 10 g.' }
  ]
};
