window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.physics = {
  id: 'physics',
  name: 'Physics',
  short: 'Physics',
  icon: '⚡',
  blurb: '40 questions, its own scored section. Mechanics, energy, waves and optics, electricity and magnetism, fluids, and thermodynamics. Optics is especially high-yield for optometry — including corrective-lens math for the eye.',
  review: [
    {
      id: 'vectors',
      title: 'Units, Vectors & Dimensional Analysis',
      html: `
        <h3>Scalars vs. vectors</h3>
        <ul>
          <li>A <strong>scalar</strong> has magnitude only (mass, time, speed, energy, temperature). A <strong>vector</strong> has magnitude and direction (displacement, velocity, acceleration, force, momentum).</li>
          <li>Vectors are broken into perpendicular <strong>components</strong>: A<sub>x</sub> = A cosθ, A<sub>y</sub> = A sinθ, where θ is measured from the x-axis.</li>
          <li>To recombine components: magnitude = √(A<sub>x</sub>² + A<sub>y</sub>²); direction θ = tan⁻¹(A<sub>y</sub>/A<sub>x</sub>).</li>
          <li>To add two vectors that are <em>not</em> perpendicular, either resolve both into x/y components and add component-by-component, or use the law of cosines: R² = A² + B² + 2AB cosθ, where θ is the angle between them.</li>
        </ul>
        <h3>Dimensional analysis (unit conversion)</h3>
        <ul>
          <li>Multiply by conversion factors written as fractions equal to 1, arranged so the unwanted unit cancels: 90 km/h × (1000 m/1 km) × (1 h/3600 s) = 25 m/s.</li>
          <li>Always check that units on both sides of an equation match — a fast way to catch a wrong formula on test day.</li>
        </ul>
        <div class="callout"><strong>Common trap:</strong> km/h → m/s is <em>divide</em> by 3.6; m/s → km/h is <em>multiply</em> by 3.6. Mixing these up is one of the most common OAT physics errors.</div>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> Two forces act on an object: 10 N and 15 N, with a 60° angle between them. Find the magnitude of the resultant.</p>
        <p><strong>Step 1:</strong> Use R² = A² + B² + 2AB cosθ with θ = 60° (cos60° = 0.5).</p>
        <p><strong>Step 2:</strong> R² = 10² + 15² + 2(10)(15)(0.5) = 100 + 225 + 150 = 475.</p>
        <p><strong>Step 3:</strong> R = √475 ≈ 21.8 N.</p>
      `
    },
    {
      id: 'kinematics',
      title: 'Linear Kinematics & Projectile Motion',
      html: `
        <h3>Kinematic equations (constant acceleration)</h3>
        <div class="formula">v = v₀ + at</div>
        <div class="formula">x = x₀ + v₀t + ½at²</div>
        <div class="formula">v² = v₀² + 2a(x − x₀)</div>
        <div class="formula">x = x₀ + ½(v₀ + v)t &nbsp;(average-velocity shortcut)</div>
        <ul>
          <li>Near Earth's surface, free-fall acceleration g ≈ 9.8 m/s² downward (commonly approximated as 10 m/s² on practice problems).</li>
          <li>Pick whichever equation already contains the variable you don't know and skips the one you don't have — this avoids solving two equations at once.</li>
        </ul>
        <h3>Projectile motion</h3>
        <ul>
          <li>Horizontal and vertical motion are independent. Horizontal velocity v<sub>x</sub> = v₀cosθ is constant (no horizontal force, ignoring air resistance). Vertical velocity v<sub>y</sub> = v₀sinθ is governed by g.</li>
          <li><strong>Time to peak:</strong> t<sub>up</sub> = v<sub>y0</sub>/g. <strong>Total flight time</strong> (level ground) = 2v<sub>y0</sub>/g.</li>
          <li><strong>Max height:</strong> H = v<sub>y0</sub>²/(2g). <strong>Range</strong> (level ground): R = v<sub>x</sub> × t<sub>total</sub> = v₀²sin(2θ)/g.</li>
          <li>Range is maximized at a 45° launch angle; complementary angles (e.g., 30° and 60°) give the <em>same</em> range.</li>
        </ul>
        <div class="callout"><strong>Trap:</strong> when a projectile lands above or below its launch height, the flight is <em>not</em> symmetric — you must solve the quadratic y(t) = y₀ + v<sub>y0</sub>t − ½gt² directly rather than using 2v<sub>y0</sub>/g.</div>
        <h3>Worked example (asymmetric flight)</h3>
        <p><strong>Setup:</strong> A ball is thrown straight up at 15 m/s from the top of a 20 m building. How long until it hits the ground (g = 10 m/s²)?</p>
        <p><strong>Step 1:</strong> Take up as positive, ground as y = 0: 0 = 20 + 15t − 5t².</p>
        <p><strong>Step 2:</strong> Rearrange: 5t² − 15t − 20 = 0 → t² − 3t − 4 = 0.</p>
        <p><strong>Step 3:</strong> Factor: (t − 4)(t + 1) = 0 → t = 4 s or t = −1 s. Reject the negative root.</p>
        <p><strong>Answer:</strong> t = 4 s.</p>
      `
    },
    {
      id: 'dynamics',
      title: 'Dynamics: Newton\'s Laws, Friction & Inclines',
      html: `
        <h3>Newton's laws</h3>
        <ul>
          <li><strong>1st (inertia):</strong> an object maintains its velocity unless a net force acts on it.</li>
          <li><strong>2nd:</strong> <span class="formula" style="margin:0">F<sub>net</sub> = ma</span> — always draw a free-body diagram and sum forces along your chosen axes before applying this.</li>
          <li><strong>3rd:</strong> forces come in equal and opposite action–reaction pairs, acting on <em>different</em> objects (they never cancel each other out).</li>
          <li>Friction: f = μN, where N is the normal force. Static friction (μ<sub>s</sub>) is always ≥ kinetic friction (μ<sub>k</sub>) for the same surfaces.</li>
        </ul>
        <h3>Inclined planes</h3>
        <div class="formula">Along incline: mg sinθ &nbsp;|&nbsp; Into incline: mg cosθ &nbsp;|&nbsp; N = mg cosθ</div>
        <ul>
          <li>Frictionless incline: a = g sinθ (down the slope), independent of mass.</li>
          <li>With kinetic friction opposing motion down the slope: a = g(sinθ − μ<sub>k</sub>cosθ).</li>
          <li>A block stays put if mg sinθ ≤ μ<sub>s</sub>mg cosθ, i.e. tanθ ≤ μ<sub>s</sub>.</li>
        </ul>
        <h3>Connected systems (pulleys, strings)</h3>
        <ul>
          <li>For an Atwood machine (two masses over a pulley): a = (m₂ − m₁)g/(m₁ + m₂); tension T = m₁(g + a) = m₂(g − a).</li>
          <li>For blocks connected by a string on a table and pulled by an external force F: treat the whole system to find a = F/(m₁ + m₂), then isolate one block to find the connecting tension.</li>
        </ul>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> Blocks m₁ = 2 kg and m₂ = 3 kg sit connected by a string on a frictionless table. A 20 N force pulls m₁ forward, dragging m₂ behind it via the string. Find the tension in the connecting string.</p>
        <p><strong>Step 1:</strong> Treat both blocks as one system: a = F/(m₁ + m₂) = 20/5 = 4 m/s².</p>
        <p><strong>Step 2:</strong> Isolate m₂ alone — the <em>only</em> horizontal force on it is the string tension: T = m₂a.</p>
        <p><strong>Step 3:</strong> T = 3 × 4 = 12 N.</p>
      `
    },
    {
      id: 'statics',
      title: 'Statics: Equilibrium, Torque & Center of Mass',
      html: `
        <h3>Two conditions for static equilibrium</h3>
        <ul>
          <li><strong>Translational:</strong> ΣF = 0 (net force in every direction is zero).</li>
          <li><strong>Rotational:</strong> Στ = 0 (net torque about any pivot is zero) — pick the pivot that eliminates the most unknowns (usually where an unknown force acts).</li>
        </ul>
        <h3>Torque</h3>
        <div class="formula">τ = rF sinθ</div>
        <ul>
          <li>r is the distance from the pivot to where the force is applied; θ is the angle between the force and the lever arm. A force applied perpendicular to the lever arm (θ = 90°) produces the maximum torque for a given r and F.</li>
          <li>By convention, counterclockwise torques are positive and clockwise are negative (or vice versa) — just be consistent within one problem.</li>
        </ul>
        <h3>Center of mass</h3>
        <div class="formula">x<sub>cm</sub> = (m₁x₁ + m₂x₂ + …) / (m₁ + m₂ + …)</div>
        <p>For a symmetric, uniform object (a beam, a disk), the center of mass is at the geometric center — that's where its weight effectively "acts" for torque purposes.</p>
        <h3>Worked example (beam on two supports)</h3>
        <p><strong>Setup:</strong> A uniform 4 m beam weighing 200 N rests on two supports, one at each end. A 300 N box sits 1 m from the left support. Find the force each support exerts.</p>
        <p><strong>Step 1:</strong> The beam's own 200 N weight acts at its center, 2 m from either end.</p>
        <p><strong>Step 2:</strong> Sum torques about the <em>left</em> support (this makes F<sub>left</sub> drop out): F<sub>right</sub>(4) − 200(2) − 300(1) = 0.</p>
        <p><strong>Step 3:</strong> F<sub>right</sub>(4) = 400 + 300 = 700 → F<sub>right</sub> = 175 N.</p>
        <p><strong>Step 4:</strong> Sum vertical forces: F<sub>left</sub> + F<sub>right</sub> = 200 + 300 = 500 → F<sub>left</sub> = 500 − 175 = 325 N.</p>
      `
    },
    {
      id: 'energy',
      title: 'Work, Energy & Power',
      html: `
        <h3>Work and energy</h3>
        <div class="formula">W = Fd·cosθ&nbsp;&nbsp;|&nbsp;&nbsp;KE = ½mv²&nbsp;&nbsp;|&nbsp;&nbsp;PE<sub>grav</sub> = mgh&nbsp;&nbsp;|&nbsp;&nbsp;PE<sub>spring</sub> = ½kx²</div>
        <ul>
          <li><strong>Work–energy theorem:</strong> net work equals the change in kinetic energy: W<sub>net</sub> = ΔKE.</li>
          <li>Mechanical energy (KE + PE) is conserved when only conservative forces act (gravity, springs — no friction or air resistance).</li>
          <li>When friction or another non-conservative force acts, use: KE<sub>i</sub> + PE<sub>i</sub> = KE<sub>f</sub> + PE<sub>f</sub> + (energy lost to friction).</li>
          <li>Hooke's law: F<sub>spring</sub> = −kx (restoring force, opposite the displacement).</li>
          <li>Power = work ÷ time = <span class="formula" style="margin:0">P = W/t = Fv</span>. 1 horsepower = 746 W.</li>
        </ul>
        <h3>Worked example (energy method with friction)</h3>
        <p><strong>Setup:</strong> A 5 kg block starts from rest at the top of a 10 m frictionless incline, but crosses a rough patch near the bottom that removes 50 J of energy to friction. Find its speed at the bottom (g = 10 m/s²).</p>
        <p><strong>Step 1:</strong> Initial mechanical energy = mgh = 5(10)(10) = 500 J.</p>
        <p><strong>Step 2:</strong> Subtract the energy lost to friction: KE<sub>bottom</sub> = 500 − 50 = 450 J.</p>
        <p><strong>Step 3:</strong> Solve ½mv² = 450 for v: v² = 900/5 = 180 → v = √180 ≈ 13.4 m/s.</p>
        <div class="callout">Notice this shortcuts straight from energy to speed — no need to find acceleration or time first, which is exactly why energy methods are faster than kinematics for "find the speed" problems.</div>
      `
    },
    {
      id: 'momentum',
      title: 'Momentum & Collisions',
      html: `
        <h3>Momentum and impulse</h3>
        <div class="formula">p = mv&nbsp;&nbsp;|&nbsp;&nbsp;Impulse = FΔt = Δp</div>
        <ul>
          <li>Momentum is a <em>vector</em> — direction and sign matter. A ball that reverses direction has a large Δp even if its speed barely changes.</li>
          <li>Total momentum is conserved in every collision (elastic and inelastic) as long as no external force acts on the system.</li>
          <li>Kinetic energy is conserved <em>only</em> in elastic collisions. In a perfectly inelastic collision, the objects stick together and move with one common final velocity.</li>
        </ul>
        <h3>2-D collisions</h3>
        <p>Conserve momentum separately along the x-axis and the y-axis — it's two 1-D conservation problems solved at once.</p>
        <h3>Worked example (impulse with a bounce)</h3>
        <p><strong>Setup:</strong> A 0.5 kg ball hits a wall moving at 8 m/s and bounces straight back at 6 m/s. Contact time is 0.02 s. Find the average force the wall exerts.</p>
        <p><strong>Step 1:</strong> Assign a sign convention: toward the wall = positive. So v<sub>i</sub> = +8 m/s, v<sub>f</sub> = −6 m/s (it reversed direction).</p>
        <p><strong>Step 2:</strong> Δp = m(v<sub>f</sub> − v<sub>i</sub>) = 0.5(−6 − 8) = 0.5(−14) = −7 kg·m/s.</p>
        <p><strong>Step 3:</strong> F = Δp/Δt = −7/0.02 = −350 N. The magnitude of the average force is 350 N.</p>
        <div class="callout"><strong>Trap:</strong> forgetting the sign flip on the bounce is the single most common error here — a ball that bounces back experiences a much bigger impulse than one that just stops.</div>
      `
    },
    {
      id: 'shm',
      title: 'Simple Harmonic Motion',
      html: `
        <h3>Defining SHM</h3>
        <ul>
          <li>SHM occurs whenever the restoring force is proportional to displacement and points back toward equilibrium: F = −kx.</li>
          <li>Position, velocity, and acceleration all oscillate sinusoidally, but out of step with each other: speed is maximum at equilibrium (x = 0); acceleration and restoring force are maximum at the turning points (x = ±A, the amplitude).</li>
        </ul>
        <h3>Period and frequency</h3>
        <div class="formula">Spring: T = 2π√(m/k)&nbsp;&nbsp;|&nbsp;&nbsp;Pendulum: T = 2π√(L/g)</div>
        <div class="formula">f = 1/T&nbsp;&nbsp;|&nbsp;&nbsp;ω = 2π/T = 2πf = √(k/m)</div>
        <ul>
          <li>Spring period depends only on mass and stiffness — <em>not</em> on amplitude or gravity.</li>
          <li>Pendulum period (for small angles) depends only on length and local gravity — <em>not</em> on mass or amplitude.</li>
          <li>Because T ∝ √m for a spring, doubling the mass does <em>not</em> double the period — it multiplies it by √2.</li>
        </ul>
        <h3>Energy in SHM</h3>
        <div class="formula">E<sub>total</sub> = ½kA² = ½mv<sub>max</sub>²</div>
        <p>Total mechanical energy is constant and continuously trades between spring PE and KE as the object oscillates.</p>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> A 0.5 kg mass on a spring (k = 100 N/m) oscillates with amplitude 0.2 m. Find its maximum speed.</p>
        <p><strong>Step 1:</strong> Total energy: E = ½kA² = ½(100)(0.2²) = ½(100)(0.04) = 2 J.</p>
        <p><strong>Step 2:</strong> At equilibrium, all of that energy is kinetic: ½mv<sub>max</sub>² = 2 J.</p>
        <p><strong>Step 3:</strong> v<sub>max</sub>² = 2(2)/0.5 = 8 → v<sub>max</sub> = √8 ≈ 2.83 m/s.</p>
      `
    },
    {
      id: 'waves',
      title: 'Waves & Sound',
      html: `
        <h3>Basic wave relationships</h3>
        <div class="formula">v = fλ</div>
        <ul>
          <li>For a fixed wave speed, frequency and wavelength are inversely related.</li>
          <li><strong>Transverse</strong> waves oscillate perpendicular to travel (light, waves on a string); <strong>longitudinal</strong> waves oscillate parallel to travel (sound).</li>
        </ul>
        <h3>Interference</h3>
        <ul>
          <li><strong>Constructive:</strong> path difference = nλ (in phase, waves add). <strong>Destructive:</strong> path difference = (n + ½)λ (out of phase, waves cancel).</li>
          <li><strong>Beats:</strong> two close frequencies produce a periodic loudness pulsing at f<sub>beat</sub> = |f₁ − f₂|.</li>
        </ul>
        <h3>Standing waves on a string (fixed at both ends)</h3>
        <div class="formula">f<sub>n</sub> = nv/(2L),&nbsp; n = 1, 2, 3…</div>
        <p>The fundamental (n = 1) has a wavelength of 2L; each higher harmonic adds one more node between the fixed ends.</p>
        <h3>The Doppler effect</h3>
        <div class="formula">f' = f · v / (v ∓ v<sub>source</sub>)</div>
        <ul>
          <li>Perceived frequency rises as a source approaches (use the minus sign in the denominator) and falls as it recedes (plus sign).</li>
          <li>Qualitatively: approaching source or approaching observer → higher pitch; receding either way → lower pitch. The OAT usually tests the direction of the shift conceptually, but be ready to plug into the formula too.</li>
        </ul>
        <h3>Worked example (standing wave)</h3>
        <p><strong>Setup:</strong> A string of length 3 m carries waves at 60 m/s. Find the frequency of its 2nd harmonic.</p>
        <p><strong>Step 1:</strong> f<sub>n</sub> = nv/(2L), with n = 2, v = 60, L = 3.</p>
        <p><strong>Step 2:</strong> f₂ = 2(60)/(2×3) = 120/6 = 20 Hz.</p>
      `
    },
    {
      id: 'fluids',
      title: 'Fluid Statics & Dynamics',
      html: `
        <h3>Pressure</h3>
        <div class="formula">P = F/A&nbsp;&nbsp;|&nbsp;&nbsp;P = P₀ + ρgh &nbsp;(hydrostatic pressure at depth h)</div>
        <ul>
          <li>Pressure at depth depends only on fluid density and depth — not on the shape or width of the container.</li>
          <li><strong>Pascal's law:</strong> pressure applied anywhere to an enclosed fluid is transmitted equally throughout it. In a hydraulic lift, F₁/A₁ = F₂/A₂ — a small force on a small piston creates a large force on a large piston, at the cost of moving a larger distance on the small side.</li>
        </ul>
        <h3>Buoyancy (Archimedes' principle)</h3>
        <div class="formula">F<sub>buoyant</sub> = ρ<sub>fluid</sub> g V<sub>displaced</sub></div>
        <ul>
          <li>An object floats when its average density is less than the fluid's; at floating equilibrium, F<sub>buoyant</sub> = weight, which reduces to ρ<sub>object</sub>/ρ<sub>fluid</sub> = (fraction of volume submerged).</li>
          <li>An object fully submerged and weighed underwater has an <strong>apparent weight</strong> = true weight − buoyant force. This is a classic way to measure an unknown density.</li>
        </ul>
        <h3>Fluid flow</h3>
        <div class="formula">Continuity: A₁v₁ = A₂v₂&nbsp;&nbsp;|&nbsp;&nbsp;Bernoulli: P + ½ρv² + ρgh = constant</div>
        <p>Where a pipe narrows, fluid speeds up (continuity) and pressure drops (Bernoulli) — this pairing explains everything from IV drip lines to airflow over a wing.</p>
        <h3>Worked example (apparent weight)</h3>
        <p><strong>Setup:</strong> An object weighs 50 N in air but only 30 N when fully submerged in water (ρ = 1000 kg/m³, g = 10 m/s²). Find the object's density.</p>
        <p><strong>Step 1:</strong> Buoyant force = weight in air − apparent weight = 50 − 30 = 20 N.</p>
        <p><strong>Step 2:</strong> F<sub>buoyant</sub> = ρ<sub>water</sub>gV → V = 20/(1000×10) = 0.002 m³.</p>
        <p><strong>Step 3:</strong> Mass = weight/g = 50/10 = 5 kg. Density = mass/V = 5/0.002 = 2500 kg/m³.</p>
      `
    },
    {
      id: 'electrostatics',
      title: 'Electrostatics & Electric Fields',
      html: `
        <h3>Coulomb's law</h3>
        <div class="formula">F = kq₁q₂/r²&nbsp;&nbsp;(k = 9×10⁹ N·m²/C²)</div>
        <ul>
          <li>Force falls off with the square of distance — doubling r cuts the force to ¼; tripling r cuts it to 1/9.</li>
          <li>Like charges repel; opposite charges attract. When adding forces from multiple charges (superposition), treat each pairwise force as a vector and add them — forces don't just add as magnitudes unless they're along the same line.</li>
        </ul>
        <h3>Electric field and potential</h3>
        <div class="formula">E = F/q = kQ/r²&nbsp;&nbsp;|&nbsp;&nbsp;V = kQ/r&nbsp;&nbsp;|&nbsp;&nbsp;W = qΔV</div>
        <ul>
          <li>Electric field points away from positive charges and toward negative charges; it's what a small positive "test charge" would feel.</li>
          <li>Electric potential (voltage) is energy per unit charge. Work done moving a charge between two points depends only on the potential difference, not the path.</li>
          <li>The electric field inside a conductor in electrostatic equilibrium is zero.</li>
        </ul>
        <h3>Worked example (superposition)</h3>
        <p><strong>Setup:</strong> Charges q₁ = +3 μC (at x = 0) and q₂ = +3 μC (at x = 0.6 m) both act on q₃ = −2 μC located at x = 0.2 m. Find the net force on q₃.</p>
        <p><strong>Step 1:</strong> Force from q₁ (0.2 m away): F₁ = k(3×10⁻⁶)(2×10⁻⁶)/0.2² = 1.35 N. Since q₃ is negative and q₁ is positive, this is attractive — pulls q₃ toward q₁ (−x direction).</p>
        <p><strong>Step 2:</strong> Force from q₂ (0.4 m away): F₂ = k(3×10⁻⁶)(2×10⁻⁶)/0.4² = 0.3375 N, attractive toward q₂ (+x direction).</p>
        <p><strong>Step 3:</strong> These point in opposite directions, so subtract: F<sub>net</sub> = 1.35 − 0.3375 ≈ 1.01 N, directed toward q₁.</p>
      `
    },
    {
      id: 'circuits',
      title: 'DC Circuits',
      html: `
        <h3>Ohm's law and power</h3>
        <div class="formula">V = IR&nbsp;&nbsp;|&nbsp;&nbsp;P = IV = I²R = V²/R</div>
        <h3>Series and parallel resistors</h3>
        <ul>
          <li><strong>Series:</strong> current is the same through every element; resistances add directly: R<sub>eq</sub> = R₁ + R₂ + …</li>
          <li><strong>Parallel:</strong> voltage is the same across every branch; 1/R<sub>eq</sub> = 1/R₁ + 1/R₂ + …. The equivalent resistance is always <em>less</em> than the smallest individual resistor.</li>
          <li>For a combined network, reduce it in stages: collapse each parallel or series cluster into a single equivalent resistor, working from the "deepest" part of the circuit outward, until only one resistor remains.</li>
        </ul>
        <h3>Capacitors (the "opposite" rules from resistors)</h3>
        <div class="formula">C = Q/V&nbsp;&nbsp;|&nbsp;&nbsp;U = ½CV²</div>
        <ul>
          <li><strong>Parallel</strong> capacitors add directly: C<sub>eq</sub> = C₁ + C₂. <strong>Series</strong> capacitors combine like parallel resistors: 1/C<sub>eq</sub> = 1/C₁ + 1/C₂ — exactly backwards from resistors.</li>
        </ul>
        <h3>Worked example (reducing a combined circuit)</h3>
        <p><strong>Setup:</strong> A 12 V battery drives R₁ = 4 Ω in series with a parallel combination of R₂ = 6 Ω and R₃ = 3 Ω. Find the current through R₃.</p>
        <p><strong>Step 1:</strong> Collapse the parallel section: 1/R<sub>p</sub> = 1/6 + 1/3 = 1/2 → R<sub>p</sub> = 2 Ω.</p>
        <p><strong>Step 2:</strong> Total resistance: R<sub>total</sub> = 4 + 2 = 6 Ω. Total current from the battery: I = V/R = 12/6 = 2 A.</p>
        <p><strong>Step 3:</strong> Voltage across the parallel section: V<sub>p</sub> = I × R<sub>p</sub> = 2 × 2 = 4 V (same across both branches).</p>
        <p><strong>Step 4:</strong> Current through R₃: I₃ = V<sub>p</sub>/R₃ = 4/3 ≈ 1.33 A.</p>
      `
    },
    {
      id: 'optics',
      title: 'Optics: Mirrors, Lenses, Refraction & the Eye',
      html: `
        <h3>Reflection & refraction</h3>
        <div class="formula">Snell's law: n₁ sinθ₁ = n₂ sinθ₂</div>
        <ul>
          <li>Light slows in denser media (higher index n); speed in a medium = c/n. Light bends <em>toward</em> the normal entering a denser medium, and <em>away</em> from the normal entering a less dense one.</li>
          <li><strong>Total internal reflection</strong> occurs when light travels toward a less dense medium at an angle beyond the critical angle: θ<sub>c</sub> = sin⁻¹(n₂/n₁), valid only when n₁ > n₂.</li>
        </ul>
        <h3>Mirrors & lenses</h3>
        <div class="formula">1/f = 1/d₀ + 1/dᵢ&nbsp;&nbsp;|&nbsp;&nbsp;m = −dᵢ/d₀ = hᵢ/h₀</div>
        <ul>
          <li><strong>Converging (convex) lens</strong> / concave mirror: positive f. An object beyond f forms a real, inverted image; an object inside f forms a virtual, upright, magnified image.</li>
          <li><strong>Diverging (concave) lens</strong> / convex mirror: negative f; always forms a virtual, upright, reduced image, regardless of object position.</li>
          <li><strong>Sign convention:</strong> real images have positive dᵢ (opposite side from the object, where light actually converges); virtual images have negative dᵢ (same side as the object).</li>
        </ul>
        <h3>Lens power and combinations</h3>
        <div class="formula">P (diopters) = 1/f (meters)</div>
        <p>Thin lenses in contact add their powers directly: P<sub>total</sub> = P₁ + P₂. This is why prescriptions are written in diopters — powers combine by simple addition, unlike focal lengths.</p>
        <h3>The eye and corrective lenses (optometry-relevant)</h3>
        <ul>
          <li>The cornea and lens together act as a converging lens system that focuses images onto the retina.</li>
          <li><strong>Myopia (nearsighted):</strong> the eye focuses images <em>in front of</em> the retina; distant objects are blurry. Corrected with a <strong>diverging</strong> (negative-power) lens, which pushes the focus back so a distant object's image lands at the eye's actual far point.</li>
          <li><strong>Hyperopia (farsighted):</strong> the eye focuses images <em>behind</em> the retina; near objects are blurry. Corrected with a <strong>converging</strong> (positive-power) lens, which brings the image forward to the eye's actual (farther-than-normal) near point.</li>
          <li>To find the needed prescription: treat the desired viewing distance as d₀ and the patient's actual far/near point as the (virtual, so negative) dᵢ, then solve 1/f = 1/d₀ + 1/dᵢ.</li>
        </ul>
        <h3>Worked example (myopia correction)</h3>
        <p><strong>Setup:</strong> A patient's uncorrected far point is 2.0 m — they cannot focus on anything farther away without help. What lens power lets them see objects at infinity?</p>
        <p><strong>Step 1:</strong> The lens must take light from infinity (d₀ → ∞, so 1/d₀ ≈ 0) and form a virtual image at the patient's far point, 2.0 m in front of the eye: dᵢ = −2.0 m (negative because it's virtual, same side as the object).</p>
        <p><strong>Step 2:</strong> 1/f = 1/d₀ + 1/dᵢ = 0 + 1/(−2.0) = −0.5 m⁻¹.</p>
        <p><strong>Step 3:</strong> P = 1/f = −0.50 D — a diverging lens, as expected for myopia.</p>
      `
    },
    {
      id: 'thermo',
      title: 'Thermal Energy & Thermodynamics',
      html: `
        <h3>Heat, temperature & specific heat</h3>
        <div class="formula">Q = mcΔT&nbsp;&nbsp;(sensible heat)&nbsp;&nbsp;|&nbsp;&nbsp;Q = mL&nbsp;&nbsp;(latent heat, phase change)</div>
        <ul>
          <li>During a phase change (melting, boiling), temperature stays constant while heat is absorbed or released — all the energy goes into breaking or forming intermolecular bonds, not raising KE.</li>
          <li><strong>Calorimetry:</strong> when two substances reach a shared final temperature with no heat lost to the surroundings, heat lost by the hotter one equals heat gained by the cooler one.</li>
          <li>Heat transfer mechanisms: conduction (direct contact), convection (fluid motion), radiation (electromagnetic waves — the only one that works through a vacuum).</li>
        </ul>
        <h3>The laws of thermodynamics</h3>
        <ul>
          <li><strong>1st law:</strong> ΔU = Q − W. Internal energy change equals heat added to the system minus work done <em>by</em> the system.</li>
          <li><strong>2nd law:</strong> the entropy of an isolated system never decreases; heat flows spontaneously from hot to cold, never the reverse without external work.</li>
        </ul>
        <h3>Heat engines</h3>
        <div class="formula">e = W/Q<sub>h</sub> = 1 − Q<sub>c</sub>/Q<sub>h</sub>&nbsp;&nbsp;|&nbsp;&nbsp;Carnot (ideal) limit: e = 1 − T<sub>c</sub>/T<sub>h</sub> &nbsp;(T in kelvin)</div>
        <p>No real engine can beat the Carnot efficiency operating between the same two temperatures — it's a hard ceiling set purely by the reservoir temperatures.</p>
        <h3>Worked example (multi-stage heating curve)</h3>
        <p><strong>Setup:</strong> Find the heat needed to convert 100 g of ice at −10°C into steam at 100°C. (c<sub>ice</sub> = 2.1 J/g°C, L<sub>fusion</sub> = 334 J/g, c<sub>water</sub> = 4.18 J/g°C, L<sub>vaporization</sub> = 2260 J/g.)</p>
        <p><strong>Step 1 — warm the ice:</strong> Q₁ = mcΔT = 100(2.1)(10) = 2100 J.</p>
        <p><strong>Step 2 — melt the ice at 0°C:</strong> Q₂ = mL<sub>f</sub> = 100(334) = 33,400 J.</p>
        <p><strong>Step 3 — warm the water:</strong> Q₃ = mcΔT = 100(4.18)(100) = 41,800 J.</p>
        <p><strong>Step 4 — boil the water at 100°C:</strong> Q₄ = mL<sub>v</sub> = 100(2260) = 226,000 J.</p>
        <p><strong>Total:</strong> Q = 2100 + 33,400 + 41,800 + 226,000 = 303,300 J ≈ 303.3 kJ.</p>
        <div class="callout">This four-step pattern — heat, phase change, heat, phase change — is the single most tested "hard" thermo question shape. Skipping a step (usually the phase-change terms, since they're the biggest) is the most common wrong answer.</div>
      `
    }
  ],
  questions: [
    { id:'ph1', topic:'Mechanics', stem:'A 3 kg object experiences a net force of 12 N. What is its acceleration?', options:['2 m/s²','4 m/s²','9 m/s²','36 m/s²'], answer:1, explanation:'By Newton\'s second law, a = F/m = 12 N ÷ 3 kg = 4 m/s².' },
    { id:'ph2', topic:'Mechanics', stem:'An object is dropped from rest. Ignoring air resistance, how far does it fall in 2 seconds (g ≈ 10 m/s²)?', options:['10 m','20 m','40 m','5 m'], answer:1, explanation:'Using x = ½gt² = ½(10)(2²) = ½(10)(4) = 20 m.' },
    { id:'ph3', topic:'Mechanics', stem:'In projectile motion (no air resistance), the horizontal component of velocity:', options:['Increases steadily','Decreases steadily','Remains constant','Depends on the launch height'], answer:2, explanation:'With no horizontal force acting (ignoring air resistance), horizontal velocity stays constant. Only the vertical component changes due to gravity.' },
    { id:'ph4', topic:'Energy', stem:'A 2 kg ball moves at 3 m/s. What is its kinetic energy?', options:['3 J','6 J','9 J','18 J'], answer:2, explanation:'KE = ½mv² = ½(2)(3²) = ½(2)(9) = 9 J.' },
    { id:'ph5', topic:'Energy', stem:'A box is pushed with 50 N over 4 m in the direction of the force. How much work is done?', options:['12.5 J','54 J','200 J','46 J'], answer:2, explanation:'W = Fd·cosθ. With the force parallel to displacement (θ = 0, cosθ = 1): W = 50 × 4 = 200 J.' },
    { id:'ph6', topic:'Momentum', stem:'Kinetic energy is conserved in which type of collision?', options:['Perfectly inelastic','Elastic','All collisions','Only when objects stick together'], answer:1, explanation:'Momentum is conserved in all collisions, but kinetic energy is conserved only in elastic collisions. In inelastic collisions some KE converts to heat, sound, or deformation.' },
    { id:'ph7', topic:'Waves', stem:'A wave has a frequency of 500 Hz and travels at 340 m/s. What is its wavelength?', options:['0.68 m','1.47 m','170,000 m','0.5 m'], answer:0, explanation:'λ = v/f = 340 ÷ 500 = 0.68 m.' },
    { id:'ph8', topic:'Waves', stem:'Sound waves are best described as:', options:['Transverse waves','Longitudinal waves','Electromagnetic waves','Standing waves only'], answer:1, explanation:'Sound is a longitudinal (compression) wave: the medium oscillates parallel to the direction of wave travel. Light is a transverse electromagnetic wave.' },
    { id:'ph9', topic:'Optics', stem:'Light passes from water (n = 1.33) into air (n = 1.00). What happens to its speed?', options:['Decreases','Increases','Stays the same','Becomes zero'], answer:1, explanation:'Speed in a medium is c/n. Moving to a lower-index medium (air), the speed increases. The light also bends away from the normal.' },
    { id:'ph10', topic:'Optics', stem:'A diverging (concave) lens always forms an image that is:', options:['Real and inverted','Virtual, upright, and reduced','Real and magnified','Virtual and inverted'], answer:1, explanation:'A diverging lens has a negative focal length and always produces a virtual, upright, reduced image regardless of object position.' },
    { id:'ph11', topic:'Optics', stem:'A converging lens has a focal length of 0.25 m. What is its power in diopters?', options:['0.25 D','2 D','4 D','25 D'], answer:2, explanation:'Lens power (in diopters) = 1/f (in meters) = 1/0.25 = 4 D.' },
    { id:'ph12', topic:'Optics', stem:'An object placed beyond the focal point of a converging lens produces an image that is:', options:['Virtual and upright','Real and inverted','Always the same size','Located on the same side as the object'], answer:1, explanation:'For a converging lens, an object beyond the focal length forms a real, inverted image on the opposite side of the lens.' },
    { id:'ph13', topic:'Electricity', stem:'Three 6 Ω resistors are connected in parallel. What is the total resistance?', options:['18 Ω','6 Ω','3 Ω','2 Ω'], answer:3, explanation:'For identical resistors in parallel, R = R_single/n = 6/3 = 2 Ω. (1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2, so R = 2 Ω.)' },
    { id:'ph14', topic:'Electricity', stem:'A 12 V battery drives 3 A through a resistor. What is the power dissipated?', options:['4 W','15 W','36 W','9 W'], answer:2, explanation:'P = IV = 3 A × 12 V = 36 W.' },
    { id:'ph15', topic:'Electricity', stem:'According to Coulomb\'s law, if the distance between two charges is doubled, the electrostatic force becomes:', options:['Half as strong','Twice as strong','One-quarter as strong','Four times as strong'], answer:2, explanation:'Coulomb\'s law has an inverse-square dependence (F ∝ 1/r²). Doubling r reduces the force to 1/2² = 1/4 of its original value.' },
    { id:'ph16', topic:'Thermodynamics', stem:'According to the first law of thermodynamics, if 100 J of heat is added to a gas and it does 40 J of work, the change in internal energy is:', options:['140 J','60 J','−60 J','40 J'], answer:1, explanation:'ΔU = Q − W = 100 − 40 = 60 J.' },
    { id:'ph17', topic:'Vectors', stem:'A hiker walks 6 m east, then 8 m north. What is the magnitude and direction of the hiker\'s total displacement?', options:['14 m, 45° north of east','10 m, 37° north of east','10 m, 53° north of east','2 m, 53° north of east'], answer:2, explanation:'<strong>Step 1:</strong> These are perpendicular legs, so treat them as components: A_x = 6 m, A_y = 8 m.<br><strong>Step 2:</strong> Magnitude = √(6² + 8²) = √(36+64) = √100 = 10 m.<br><strong>Step 3:</strong> Direction = tan⁻¹(8/6) = tan⁻¹(1.33) ≈ 53° north of east.' },
    { id:'ph18', topic:'Vectors', stem:'A vector of magnitude 50 makes a 37° angle with the x-axis (cos37° ≈ 0.8, sin37° ≈ 0.6). What are its x- and y-components?', options:['A_x = 40, A_y = 30','A_x = 30, A_y = 40','A_x = 35, A_y = 35','A_x = 50, A_y = 37'], answer:0, explanation:'<strong>Step 1:</strong> A_x = A cosθ = 50(0.8) = 40.<br><strong>Step 2:</strong> A_y = A sinθ = 50(0.6) = 30. Since cos37° > sin37°, the x-component must come out larger than the y-component — a quick sanity check that eliminates the swapped-answer trap.' },
    { id:'ph19', topic:'Vectors', stem:'Convert 90 km/h to m/s.', options:['32.4 m/s','1.4 m/s','324 m/s','25 m/s'], answer:3, explanation:'<strong>Step 1:</strong> Multiply by conversion factors so units cancel: 90 km/h × (1000 m / 1 km) × (1 h / 3600 s).<br><strong>Step 2:</strong> = 90,000 / 3600 = 25 m/s.<br>Going the wrong direction (multiplying by 3.6 instead of dividing) is the trap behind the 324 m/s distractor.' },
    { id:'ph20', topic:'Vectors', stem:'Two forces, 10 N and 15 N, act on an object with a 60° angle between them. What is the magnitude of the resultant force?', options:['25 N','≈21.8 N','5 N','12.5 N'], answer:1, explanation:'<strong>Step 1:</strong> Since the vectors aren\'t perpendicular, use the law of cosines: R² = A² + B² + 2AB cosθ.<br><strong>Step 2:</strong> R² = 10² + 15² + 2(10)(15)(cos60°) = 100 + 225 + 300(0.5) = 475.<br><strong>Step 3:</strong> R = √475 ≈ 21.8 N. Simply adding the magnitudes (25 N) would only be correct if the vectors were parallel (θ = 0°).' },
    { id:'ph21', topic:'Kinematics', stem:'A ball is launched at 25 m/s at 53° above horizontal (sin53° ≈ 0.8, cos53° ≈ 0.6, g = 10 m/s²). What horizontal range does it travel before landing back at launch height?', options:['50 m','75 m','60 m','40 m'], answer:2, explanation:'<strong>Step 1:</strong> Decompose the launch velocity: v_x = 25(0.6) = 15 m/s; v_y0 = 25(0.8) = 20 m/s.<br><strong>Step 2:</strong> Total flight time (level ground) = 2v_y0/g = 2(20)/10 = 4 s.<br><strong>Step 3:</strong> Range = v_x × t = 15 × 4 = 60 m.' },
    { id:'ph22', topic:'Kinematics', stem:'A car traveling at 30 m/s brakes to a complete stop over 6 seconds, decelerating uniformly. How far does it travel while braking?', options:['90 m','180 m','45 m','15 m'], answer:0, explanation:'<strong>Step 1:</strong> With uniform deceleration, average velocity = (v₀ + v_f)/2 = (30 + 0)/2 = 15 m/s.<br><strong>Step 2:</strong> Distance = average velocity × time = 15 × 6 = 90 m. (Equivalently, a = −5 m/s² and v² = v₀² + 2aΔx gives the same 90 m.)' },
    { id:'ph23', topic:'Kinematics', stem:'A ball is thrown straight up at 15 m/s from the top of a 20 m building. How long until it hits the ground (g = 10 m/s²)?', options:['2 s','3 s','5 s','4 s'], answer:3, explanation:'<strong>Step 1:</strong> Taking up as positive with the ground at y = 0: 0 = 20 + 15t − 5t².<br><strong>Step 2:</strong> Rearrange to t² − 3t − 4 = 0, which factors as (t − 4)(t + 1) = 0.<br><strong>Step 3:</strong> t = 4 s (the t = −1 s root is unphysical and rejected). Because the ball lands below its launch point, the flight is not time-symmetric — you must solve the full quadratic rather than just doubling the time to the peak.' },
    { id:'ph24', topic:'Kinematics', stem:'A car starts from rest and accelerates at 2 m/s² for 5 s, then continues at that constant velocity for another 10 s. What total distance does it cover?', options:['100 m','125 m','150 m','110 m'], answer:1, explanation:'<strong>Step 1 (accelerating phase):</strong> v after 5 s = at = 2(5) = 10 m/s; distance d₁ = ½at² = ½(2)(25) = 25 m.<br><strong>Step 2 (constant-velocity phase):</strong> d₂ = vt = 10 × 10 = 100 m.<br><strong>Step 3:</strong> Total = 25 + 100 = 125 m.' },
    { id:'ph25', topic:'Dynamics', stem:'A block slides down a frictionless incline angled at 30° (g = 10 m/s²). What is its acceleration down the slope?', options:['10 m/s²','8.7 m/s²','5 m/s²','2.5 m/s²'], answer:2, explanation:'<strong>Step 1:</strong> On a frictionless incline, only the gravity component along the slope matters: a = g sinθ.<br><strong>Step 2:</strong> a = 10 × sin30° = 10 × 0.5 = 5 m/s². Notice mass cancels out entirely — it never appears in the answer.' },
    { id:'ph26', topic:'Dynamics', stem:'A block slides down a 37° incline (sin37° ≈ 0.6, cos37° ≈ 0.8) with kinetic friction coefficient μ_k = 0.2. What is its acceleration (g = 10 m/s²)?', options:['4.4 m/s²','6.0 m/s²','3.4 m/s²','8.0 m/s²'], answer:0, explanation:'<strong>Step 1:</strong> a = g(sinθ − μ_k cosθ).<br><strong>Step 2:</strong> a = 10(0.6 − 0.2×0.8) = 10(0.6 − 0.16) = 10(0.44) = 4.4 m/s². Friction subtracts from the frictionless value (5 m/s² from a similar 30°-type setup), as it always opposes the sliding motion.' },
    { id:'ph27', topic:'Dynamics', stem:'In an Atwood machine, a 3 kg mass and a 5 kg mass hang over a frictionless pulley connected by a string. What is the magnitude of their acceleration (g = 10 m/s²)?', options:['1.25 m/s²','5 m/s²','2.0 m/s²','2.5 m/s²'], answer:3, explanation:'<strong>Step 1:</strong> a = (m₂ − m₁)g/(m₁ + m₂), using the heavier mass as m₂.<br><strong>Step 2:</strong> a = (5 − 3)(10)/(5 + 3) = 20/8 = 2.5 m/s². (The tension, if asked, would be T = m₁(g + a) = 3(12.5) = 37.5 N.)' },
    { id:'ph28', topic:'Dynamics', stem:'Blocks m₁ = 2 kg and m₂ = 3 kg are connected by a string on a frictionless table. A 20 N force pulls m₁ forward, dragging m₂ behind via the string. What is the tension in the connecting string?', options:['20 N','12 N','8 N','4 N'], answer:1, explanation:'<strong>Step 1:</strong> Treat both blocks as one system to find the shared acceleration: a = F/(m₁+m₂) = 20/5 = 4 m/s².<br><strong>Step 2:</strong> Isolate m₂ alone — the string tension is the *only* horizontal force acting on it: T = m₂a = 3(4) = 12 N.' },
    { id:'ph29', topic:'Statics', stem:'A 40 kg child sits 1.5 m from the pivot of a balanced seesaw. Where must a 60 kg child sit on the other side to balance it?', options:['1.5 m','0.67 m','1.0 m','2.0 m'], answer:2, explanation:'<strong>Step 1:</strong> For rotational equilibrium, torques must balance: m₁gd₁ = m₂gd₂ (the g cancels).<br><strong>Step 2:</strong> 40(1.5) = 60(x) → x = 60/60 = 1.0 m.' },
    { id:'ph30', topic:'Statics', stem:'A uniform 4 m beam weighing 200 N rests on supports at each end. A 300 N box sits 1 m from the left support. What force does the left support exert?', options:['325 N','175 N','250 N','300 N'], answer:0, explanation:'<strong>Step 1:</strong> Sum torques about the right support so F_left is the only unknown: F_left(4) − 200(2) − 300(3) = 0. (The box is 1 m from the left support, so it\'s 3 m from the right one.)<br><strong>Step 2:</strong> F_left(4) = 400 + 900 = 1300 → F_left = 325 N.<br><strong>Step 3 (check):</strong> F_right = total weight − F_left = 500 − 325 = 175 N. Taken about the left support instead: F_right(4) = 200(2) + 300(1) = 700 → F_right = 175 N. Same answer either way.' },
    { id:'ph31', topic:'Statics', stem:'A 50 N force is applied to a 0.4 m wrench handle at a 30° angle to the handle. What torque does it produce?', options:['20 N·m','17.3 N·m','4 N·m','10 N·m'], answer:3, explanation:'<strong>Step 1:</strong> τ = rF sinθ.<br><strong>Step 2:</strong> τ = (0.4)(50)(sin30°) = (0.4)(50)(0.5) = 10 N·m. Only the component of force perpendicular to the handle contributes to torque — that\'s exactly what the sinθ factor captures.' },
    { id:'ph32', topic:'Statics', stem:'A 2 kg mass sits at x = 0 and a 6 kg mass sits at x = 8 m. Where is the system\'s center of mass?', options:['4 m','6 m','5.3 m','2 m'], answer:1, explanation:'<strong>Step 1:</strong> x_cm = (m₁x₁ + m₂x₂)/(m₁+m₂).<br><strong>Step 2:</strong> x_cm = (2×0 + 6×8)/(2+6) = 48/8 = 6 m. The center of mass sits closer to the heavier 6 kg mass, as expected.' },
    { id:'ph33', topic:'Energy', stem:'A spring with k = 400 N/m is compressed 0.1 m. How much potential energy is stored?', options:['4 J','0.2 J','2 J','40 J'], answer:2, explanation:'<strong>Step 1:</strong> PE_spring = ½kx².<br><strong>Step 2:</strong> PE = ½(400)(0.1²) = ½(400)(0.01) = 2 J.' },
    { id:'ph34', topic:'Energy', stem:'A 5 kg block starts from rest at the top of a 10 m frictionless incline, but a rough patch near the bottom removes 50 J to friction. What is its speed at the bottom (g = 10 m/s²)?', options:['13.4 m/s','14.1 m/s','10.0 m/s','9.0 m/s'], answer:0, explanation:'<strong>Step 1:</strong> Energy available without friction: mgh = 5(10)(10) = 500 J.<br><strong>Step 2:</strong> Subtract the friction loss: KE at bottom = 500 − 50 = 450 J.<br><strong>Step 3:</strong> ½mv² = 450 → v² = 2(450)/5 = 180 → v = √180 ≈ 13.4 m/s. (14.1 m/s is the distractor you\'d get by forgetting to subtract the friction loss.)' },
    { id:'ph35', topic:'Energy', stem:'A motor lifts a 200 kg mass 5 m straight up in 10 s at constant velocity. What power does it output, in horsepower (1 hp = 746 W)?', options:['≈1.0 hp','≈13.4 hp','≈0.75 hp','≈1.34 hp'], answer:3, explanation:'<strong>Step 1:</strong> Work done = mgh = 200(10)(5) = 10,000 J.<br><strong>Step 2:</strong> Power = W/t = 10,000/10 = 1000 W.<br><strong>Step 3:</strong> Convert: 1000 W ÷ 746 W/hp ≈ 1.34 hp.' },
    { id:'ph36', topic:'Energy', stem:'A roller coaster car starts from rest at a height of 30 m. Ignoring friction, what is its speed when it reaches a height of 10 m (g = 10 m/s²)?', options:['14.1 m/s','20 m/s','10 m/s','28.3 m/s'], answer:1, explanation:'<strong>Step 1:</strong> Only the height *drop* matters for energy conservation: Δh = 30 − 10 = 20 m.<br><strong>Step 2:</strong> mgΔh = ½mv² → v² = 2gΔh = 2(10)(20) = 400.<br><strong>Step 3:</strong> v = √400 = 20 m/s.' },
    { id:'ph37', topic:'Momentum', stem:'A 2 kg cart moving at 6 m/s collides with a stationary 4 kg cart, and they stick together. What is their combined velocity after the collision?', options:['3 m/s','1.5 m/s','2 m/s','4 m/s'], answer:2, explanation:'<strong>Step 1:</strong> Conserve momentum: m₁v₁ = (m₁+m₂)v_f.<br><strong>Step 2:</strong> (2)(6) = (2+4)v_f → 12 = 6v_f → v_f = 2 m/s.' },
    { id:'ph38', topic:'Momentum', stem:'A 60 kg person at rest on frictionless ice throws a 2 kg ball forward at 15 m/s. What is the person\'s recoil speed?', options:['0.5 m/s','1.0 m/s','0.25 m/s','2.0 m/s'], answer:0, explanation:'<strong>Step 1:</strong> Total momentum starts and stays at zero (system was at rest): 0 = m_ball v_ball + m_person v_person.<br><strong>Step 2:</strong> 0 = (2)(15) + (60)v → v = −30/60 = −0.5 m/s. The negative sign just means the person moves opposite the ball; the recoil speed is 0.5 m/s.' },
    { id:'ph39', topic:'Momentum', stem:'A 0.5 kg ball hits a wall at 8 m/s and bounces straight back at 6 m/s. If contact lasts 0.02 s, what average force did the wall exert?', options:['200 N','100 N','700 N','350 N'], answer:3, explanation:'<strong>Step 1:</strong> Assign toward the wall as positive: v_i = +8 m/s, v_f = −6 m/s (it reverses direction).<br><strong>Step 2:</strong> Δp = m(v_f − v_i) = 0.5(−6 − 8) = 0.5(−14) = −7 kg·m/s.<br><strong>Step 3:</strong> F = Δp/Δt = 7/0.02 = 350 N. Forgetting the direction reversal (treating it as just stopping, using only the 8 m/s) is what produces the 200 N distractor.' },
    { id:'ph40', topic:'Momentum', stem:'A 1 kg ball moving east at 4 m/s collides with a stationary 1 kg ball. After the collision, the first ball moves due north at 3 m/s. What is the velocity of the second ball?', options:['5 m/s, 53° south of east','5 m/s, 37° south of east','7 m/s, 37° south of east','3 m/s due south'], answer:1, explanation:'<strong>Step 1:</strong> Momentum is conserved separately along each axis. Initial: p_x = (1)(4) = 4 kg·m/s, p_y = 0.<br><strong>Step 2:</strong> After collision, ball 1 has p_x = 0, p_y = (1)(3) = 3 kg·m/s (all northward). So ball 2 must carry: p_x = 4 − 0 = 4, p_y = 0 − 3 = −3.<br><strong>Step 3:</strong> Ball 2\'s momentum magnitude = √(4²+3²) = 5 kg·m/s, so its speed = 5 m/s (mass 1 kg). Direction = tan⁻¹(3/4) ≈ 37° below east, i.e., 37° south of east.' },
    { id:'ph41', topic:'SHM', stem:'A 2 kg mass on a spring with k = 50 N/m oscillates in simple harmonic motion. What is its period?', options:['0.4 s','2.5 s','≈1.26 s','0.63 s'], answer:2, explanation:'<strong>Step 1:</strong> T = 2π√(m/k).<br><strong>Step 2:</strong> T = 2π√(2/50) = 2π√0.04 = 2π(0.2) ≈ 1.26 s.' },
    { id:'ph42', topic:'SHM', stem:'A pendulum of length 2.45 m swings with small amplitude (g = 9.8 m/s²). What is its period?', options:['≈3.14 s','1.57 s','6.28 s','2.45 s'], answer:0, explanation:'<strong>Step 1:</strong> T = 2π√(L/g).<br><strong>Step 2:</strong> L/g = 2.45/9.8 = 0.25, and √0.25 = 0.5.<br><strong>Step 3:</strong> T = 2π(0.5) = π ≈ 3.14 s.' },
    { id:'ph43', topic:'SHM', stem:'A 0.5 kg mass on a spring (k = 100 N/m) oscillates with amplitude 0.2 m. What is its maximum speed?', options:['4.0 m/s','2.0 m/s','8.0 m/s','≈2.83 m/s'], answer:3, explanation:'<strong>Step 1:</strong> Total mechanical energy: E = ½kA² = ½(100)(0.04) = 2 J.<br><strong>Step 2:</strong> At equilibrium all of that energy is kinetic: ½mv_max² = 2 J → v_max² = 2(2)/0.5 = 8.<br><strong>Step 3:</strong> v_max = √8 ≈ 2.83 m/s.' },
    { id:'ph44', topic:'SHM', stem:'If the mass attached to a spring is quadrupled while k stays the same, what happens to the period of oscillation?', options:['It quadruples','It doubles','It is halved','It stays the same'], answer:1, explanation:'<strong>Step 1:</strong> T = 2π√(m/k), so T ∝ √m.<br><strong>Step 2:</strong> Quadrupling m multiplies T by √4 = 2 — the period doubles, not quadruples. This square-root dependence (not a direct proportionality) is exactly what the OAT likes to test.' },
    { id:'ph45', topic:'Waves', stem:'A string of length 3 m carries transverse waves at 60 m/s. What is the frequency of its 2nd harmonic?', options:['40 Hz','10 Hz','20 Hz','60 Hz'], answer:2, explanation:'<strong>Step 1:</strong> For a string fixed at both ends, f_n = nv/(2L).<br><strong>Step 2:</strong> f₂ = 2(60)/(2×3) = 120/6 = 20 Hz.' },
    { id:'ph46', topic:'Waves', stem:'A source emits sound at 500 Hz while moving toward a stationary listener at 34 m/s (speed of sound = 340 m/s). What frequency does the listener hear?', options:['≈556 Hz','500 Hz','450 Hz','340 Hz'], answer:0, explanation:'<strong>Step 1:</strong> For an approaching source, f\' = f · v/(v − v_source).<br><strong>Step 2:</strong> f\' = 500 × 340/(340−34) = 500 × 340/306 ≈ 500 × 1.111 ≈ 556 Hz. An approaching source always raises the perceived pitch above the emitted frequency.' },
    { id:'ph47', topic:'Waves', stem:'Two tuning forks vibrate at 440 Hz and 445 Hz simultaneously. What beat frequency will a listener hear?', options:['445 Hz','440 Hz','10 Hz','5 Hz'], answer:3, explanation:'<strong>Step 1:</strong> Beat frequency = |f₁ − f₂|.<br><strong>Step 2:</strong> |445 − 440| = 5 Hz — the listener hears the combined tone pulse in loudness 5 times per second.' },
    { id:'ph48', topic:'Waves', stem:'Two speakers emit identical sound waves in phase with wavelength 2 m. What is the minimum path-length difference from the speakers at which a listener hears destructive interference?', options:['2 m','1 m','0.5 m','4 m'], answer:1, explanation:'<strong>Step 1:</strong> Destructive interference occurs when path difference = (n + ½)λ.<br><strong>Step 2:</strong> The smallest case is n = 0: Δ = ½λ = ½(2) = 1 m.' },
    { id:'ph49', topic:'Fluids', stem:'A hydraulic lift has a small piston of area 5 cm² and a large piston of area 200 cm². If 20 N is applied to the small piston, what force does the large piston exert?', options:['80 N','400 N','800 N','8000 N'], answer:2, explanation:'<strong>Step 1:</strong> Pascal\'s law: F₁/A₁ = F₂/A₂.<br><strong>Step 2:</strong> F₂ = F₁ × (A₂/A₁) = 20 × (200/5) = 20 × 40 = 800 N.' },
    { id:'ph50', topic:'Fluids', stem:'A block floats in water (ρ = 1000 kg/m³) with 70% of its volume submerged. What is the density of the block?', options:['700 kg/m³','300 kg/m³','1000 kg/m³','1300 kg/m³'], answer:0, explanation:'<strong>Step 1:</strong> At floating equilibrium, buoyant force = weight: ρ_water·g·V_submerged = ρ_block·g·V_total.<br><strong>Step 2:</strong> ρ_block = ρ_water × (V_submerged/V_total) = 1000 × 0.70 = 700 kg/m³.' },
    { id:'ph51', topic:'Fluids', stem:'An object weighs 50 N in air but only 30 N when fully submerged in water (ρ = 1000 kg/m³, g = 10 m/s²). What is the object\'s density?', options:['2000 kg/m³','3000 kg/m³','5000 kg/m³','2500 kg/m³'], answer:3, explanation:'<strong>Step 1:</strong> Buoyant force = weight in air − apparent weight = 50 − 30 = 20 N.<br><strong>Step 2:</strong> F_b = ρ_water·g·V → V = 20/(1000×10) = 0.002 m³.<br><strong>Step 3:</strong> Mass = weight/g = 50/10 = 5 kg. Density = mass/V = 5/0.002 = 2500 kg/m³.' },
    { id:'ph52', topic:'Fluids', stem:'What is the gauge pressure at a depth of 5 m in water (ρ = 1000 kg/m³, g = 10 m/s²)?', options:['5 kPa','50 kPa','500 kPa','10 kPa'], answer:1, explanation:'<strong>Step 1:</strong> Gauge (hydrostatic) pressure = ρgh.<br><strong>Step 2:</strong> P = 1000 × 10 × 5 = 50,000 Pa = 50 kPa.' },
    { id:'ph53', topic:'Electrostatics', stem:'What is the electric field 0.3 m from a point charge of 2 × 10⁻⁶ C (k = 9 × 10⁹ N·m²/C²)?', options:['2 × 10⁴ N/C','2 × 10⁶ N/C','2 × 10⁵ N/C','4 × 10⁵ N/C'], answer:2, explanation:'<strong>Step 1:</strong> E = kq/r².<br><strong>Step 2:</strong> E = (9×10⁹)(2×10⁻⁶)/(0.3²) = 18,000/0.09 = 200,000 N/C = 2×10⁵ N/C.' },
    { id:'ph54', topic:'Electrostatics', stem:'A 5 × 10⁻⁶ C charge moves from a point at 1000 V to a point at 400 V. How much work is done on the charge by the electric field?', options:['3 mJ','0.6 mJ','5 mJ','600 mJ'], answer:0, explanation:'<strong>Step 1:</strong> W = qΔV, where ΔV = V_i − V_f = 1000 − 400 = 600 V.<br><strong>Step 2:</strong> W = (5×10⁻⁶)(600) = 3×10⁻³ J = 3 mJ.' },
    { id:'ph55', topic:'Electrostatics', stem:'Two charges, +4 μC and −4 μC, are separated by 0.2 m (k = 9 × 10⁹ N·m²/C²). What is the magnitude of the force between them?', options:['0.36 N','7.2 N','14.4 N','3.6 N'], answer:3, explanation:'<strong>Step 1:</strong> F = kq₁q₂/r².<br><strong>Step 2:</strong> F = (9×10⁹)(4×10⁻⁶)(4×10⁻⁶)/(0.2²) = (9×10⁹)(1.6×10⁻¹¹)/0.04 = 0.144/0.04 = 3.6 N. (Opposite charges, so this force is attractive.)' },
    { id:'ph56', topic:'Electrostatics', stem:'Charges q₁ = +3 μC (at x = 0) and q₂ = +3 μC (at x = 0.6 m) both act on q₃ = −2 μC located at x = 0.2 m. What is the net force on q₃?', options:['≈1.69 N toward q1','≈1.01 N toward q1','≈1.35 N toward q1','≈0.34 N toward q2'], answer:1, explanation:'<strong>Step 1:</strong> Force from q₁ (0.2 m away): F₁ = k(3×10⁻⁶)(2×10⁻⁶)/0.2² = 1.35 N, attractive (pulls q₃ toward q₁).<br><strong>Step 2:</strong> Force from q₂ (0.4 m away): F₂ = k(3×10⁻⁶)(2×10⁻⁶)/0.4² = 0.3375 N, attractive (pulls q₃ toward q₂, opposite direction from F₁).<br><strong>Step 3:</strong> Since the two forces point opposite ways, subtract: F_net = 1.35 − 0.3375 ≈ 1.01 N, directed toward q₁.' },
    { id:'ph57', topic:'Circuits', stem:'A 12 V battery drives R₁ = 4 Ω in series with a parallel combination of R₂ = 6 Ω and R₃ = 3 Ω. What current flows through R₃?', options:['2 A','0.67 A','1.33 A','4 A'], answer:2, explanation:'<strong>Step 1:</strong> Combine the parallel section: 1/R_p = 1/6 + 1/3 = 1/2 → R_p = 2 Ω.<br><strong>Step 2:</strong> Total resistance = 4 + 2 = 6 Ω; total current = 12/6 = 2 A.<br><strong>Step 3:</strong> Voltage across the parallel section: V_p = 2 × 2 = 4 V (same across both branches).<br><strong>Step 4:</strong> Current through R₃ = V_p/R₃ = 4/3 ≈ 1.33 A.' },
    { id:'ph58', topic:'Circuits', stem:'Two capacitors, 4 μF and 12 μF, are connected in series. What is their equivalent capacitance?', options:['3 μF','16 μF','8 μF','1.33 μF'], answer:0, explanation:'<strong>Step 1:</strong> Capacitors in series combine like resistors in parallel: 1/C_eq = 1/C₁ + 1/C₂.<br><strong>Step 2:</strong> 1/C_eq = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3 → C_eq = 3 μF.' },
    { id:'ph59', topic:'Circuits', stem:'A 50 μF capacitor is charged to 100 V. How much energy is stored in it?', options:['0.025 J','2.5 J','5 J','0.25 J'], answer:3, explanation:'<strong>Step 1:</strong> U = ½CV².<br><strong>Step 2:</strong> U = ½(50×10⁻⁶)(100²) = ½(50×10⁻⁶)(10,000) = 0.25 J.' },
    { id:'ph60', topic:'Circuits', stem:'A 100 Ω resistor carries a steady current of 0.5 A. How much heat energy does it dissipate in 10 seconds?', options:['25 J','250 J','2500 J','50 J'], answer:1, explanation:'<strong>Step 1:</strong> Power: P = I²R = (0.5²)(100) = 0.25 × 100 = 25 W.<br><strong>Step 2:</strong> Energy = P × t = 25 × 10 = 250 J.' },
    { id:'ph61', topic:'Optics', stem:'A patient\'s uncorrected far point is 2.0 m (they cannot focus on anything farther without help). What lens power lets them see distant objects clearly?', options:['+0.50 D','−2.00 D','−0.50 D','−0.25 D'], answer:2, explanation:'<strong>Step 1:</strong> The lens must take parallel rays from infinity (d₀ → ∞, 1/d₀ ≈ 0) and form a virtual image at the far point, 2.0 m in front of the eye: d_i = −2.0 m.<br><strong>Step 2:</strong> 1/f = 1/d₀ + 1/d_i = 0 + 1/(−2.0) = −0.5 m⁻¹.<br><strong>Step 3:</strong> P = 1/f = −0.50 D. The negative sign confirms this is myopia, correctable with a diverging lens.' },
    { id:'ph62', topic:'Optics', stem:'A patient can\'t comfortably focus on objects closer than 100 cm (near point), but wants to read at the normal near point of 25 cm. What power reading lens is needed?', options:['+3.00 D','+4.00 D','+1.00 D','−3.00 D'], answer:0, explanation:'<strong>Step 1:</strong> The lens must take an object at the desired reading distance, d₀ = 0.25 m, and form a virtual image at the patient\'s actual near point, d_i = −1.0 m (negative, same side as the object).<br><strong>Step 2:</strong> 1/f = 1/d₀ + 1/d_i = 1/0.25 + 1/(−1.0) = 4 − 1 = 3 m⁻¹.<br><strong>Step 3:</strong> P = +3.00 D. Positive power (converging lens) matches the expected correction for hyperopia/presbyopia.' },
    { id:'ph63', topic:'Optics', stem:'Two thin lenses, +3.00 D and −1.25 D, are placed in contact. What is the focal length of the combination?', options:['80 cm','133 cm','175 cm','≈57.1 cm'], answer:3, explanation:'<strong>Step 1:</strong> Lens powers in contact simply add: P_total = 3.00 + (−1.25) = 1.75 D.<br><strong>Step 2:</strong> f = 1/P = 1/1.75 ≈ 0.571 m = 57.1 cm.' },
    { id:'ph64', topic:'Optics', stem:'An object is placed 10 cm from a concave mirror with focal length 15 cm (inside the focal point). What kind of image forms, and at what magnification?', options:['Real, inverted, magnified 3×','Virtual, upright, magnified 3×','Virtual, upright, reduced to 1/3×','Real, inverted, reduced'], answer:1, explanation:'<strong>Step 1:</strong> 1/d_i = 1/f − 1/d₀ = 1/15 − 1/10 = (2−3)/30 = −1/30 → d_i = −30 cm. The negative sign means the image is virtual, forming behind the mirror.<br><strong>Step 2:</strong> Magnification m = −d_i/d₀ = −(−30)/10 = +3. Positive means upright; magnitude 3 means magnified 3×.<br>This is exactly how a concave shaving/makeup mirror works: hold your face inside the focal length and you get a big, upright, virtual image.' },
    { id:'ph65', topic:'Optics', stem:'Light travels inside an optical fiber with core index n = 1.5, surrounded by cladding with n = 1.2. What is the critical angle for total internal reflection at the core–cladding boundary?', options:['36.9°','48.6°','53.1°','41.8°'], answer:2, explanation:'<strong>Step 1:</strong> θ_c = sin⁻¹(n₂/n₁), valid since light travels from the denser (n₁ = 1.5) toward the less dense (n₂ = 1.2) medium.<br><strong>Step 2:</strong> θ_c = sin⁻¹(1.2/1.5) = sin⁻¹(0.8) ≈ 53.1°. Any ray hitting the boundary at an angle greater than this is completely reflected back into the core — the principle behind fiber optics.' },
    { id:'ph66', topic:'Thermodynamics', stem:'200 g of water at 80°C is mixed with 300 g of water at 20°C in an insulated container. What is the final equilibrium temperature?', options:['44°C','50°C','40°C','60°C'], answer:0, explanation:'<strong>Step 1:</strong> Since both are the same substance (specific heat cancels), the final temperature is a mass-weighted average: T_f = (m₁T₁ + m₂T₂)/(m₁+m₂).<br><strong>Step 2:</strong> T_f = (200×80 + 300×20)/500 = (16,000 + 6,000)/500 = 22,000/500 = 44°C.' },
    { id:'ph67', topic:'Thermodynamics', stem:'How much energy is required to melt 500 g of ice at 0°C into water at 0°C? (L_fusion = 334 J/g)', options:['33.4 kJ','209 kJ','84 kJ','167 kJ'], answer:3, explanation:'<strong>Step 1:</strong> Melting is a phase change at constant temperature: Q = mL.<br><strong>Step 2:</strong> Q = 500 × 334 = 167,000 J = 167 kJ.' },
    { id:'ph68', topic:'Thermodynamics', stem:'A heat engine takes in 800 J of heat and expels 500 J as waste heat each cycle. What is its efficiency?', options:['62.5%','37.5%','40%','300 J'], answer:1, explanation:'<strong>Step 1:</strong> Work output = Q_h − Q_c = 800 − 500 = 300 J.<br><strong>Step 2:</strong> Efficiency e = W/Q_h = 300/800 = 0.375 = 37.5%. (62.5% is the trap you get by computing Q_c/Q_h instead of the fraction actually converted to work.)' },
    { id:'ph69', topic:'Thermodynamics', stem:'A heat engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. What is the maximum possible (Carnot) efficiency?', options:['60%','20%','40%','80%'], answer:2, explanation:'<strong>Step 1:</strong> Carnot efficiency depends only on the absolute (Kelvin) temperatures: e = 1 − T_c/T_h.<br><strong>Step 2:</strong> e = 1 − 300/500 = 1 − 0.6 = 0.4 = 40%. No real engine running between these two reservoirs can exceed this, no matter how it\'s built.' },
    { id:'ph70', topic:'Thermodynamics', stem:'How much heat is needed to convert 100 g of ice at −10°C completely into steam at 100°C? (c_ice = 2.1 J/g°C, L_fusion = 334 J/g, c_water = 4.18 J/g°C, L_vaporization = 2260 J/g)', options:['≈303 kJ','≈270 kJ','≈77 kJ','≈259 kJ'], answer:0, explanation:'<strong>Step 1 — warm the ice:</strong> Q₁ = mcΔT = 100(2.1)(10) = 2100 J.<br><strong>Step 2 — melt it:</strong> Q₂ = mL_f = 100(334) = 33,400 J.<br><strong>Step 3 — warm the water:</strong> Q₃ = 100(4.18)(100) = 41,800 J.<br><strong>Step 4 — boil it:</strong> Q₄ = mL_v = 100(2260) = 226,000 J.<br><strong>Total:</strong> 2100+33,400+41,800+226,000 = 303,300 J ≈ 303 kJ. Skipping the melting step (Step 2) is what produces the ≈270 kJ distractor — it\'s the single most common mistake on multi-phase heating problems.' }
  ]
};
