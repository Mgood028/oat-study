window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.physics = {
  id: 'physics',
  name: 'Physics',
  short: 'Physics',
  icon: '⚡',
  blurb: '40 questions, its own scored section. Mechanics, energy, waves and optics, electricity and magnetism, and thermodynamics. Optics is especially high-yield for optometry.',
  review: [
    {
      id: 'kinematics',
      title: 'Kinematics & Mechanics',
      html: `
        <h3>Kinematic equations (constant acceleration)</h3>
        <div class="formula">v = v₀ + at</div>
        <div class="formula">x = x₀ + v₀t + ½at²</div>
        <div class="formula">v² = v₀² + 2a(x − x₀)</div>
        <ul>
          <li>Near Earth's surface, free-fall acceleration g ≈ 9.8 m/s² downward (often approximated as 10).</li>
          <li>Projectile motion: horizontal and vertical components are independent. Horizontal velocity is constant; vertical motion is governed by g.</li>
        </ul>
        <h3>Newton's laws & forces</h3>
        <ul>
          <li><strong>1st (inertia):</strong> an object maintains its velocity unless a net force acts.</li>
          <li><strong>2nd:</strong> <span class="formula" style="margin:0">F = ma</span>.</li>
          <li><strong>3rd:</strong> forces come in equal and opposite pairs.</li>
          <li>Friction: f = μN, where N is the normal force. Static friction ≥ kinetic friction.</li>
        </ul>
      `
    },
    {
      id: 'energy',
      title: 'Work, Energy & Momentum',
      html: `
        <h3>Work and energy</h3>
        <div class="formula">W = Fd·cosθ&nbsp;&nbsp;|&nbsp;&nbsp;KE = ½mv²&nbsp;&nbsp;|&nbsp;&nbsp;PE = mgh</div>
        <ul>
          <li><strong>Work–energy theorem:</strong> net work equals the change in kinetic energy.</li>
          <li>Mechanical energy (KE + PE) is conserved when only conservative forces act (no friction).</li>
          <li>Power = work ÷ time = <span class="formula" style="margin:0">P = W/t = Fv</span>.</li>
        </ul>
        <h3>Momentum</h3>
        <div class="formula">p = mv&nbsp;&nbsp;|&nbsp;&nbsp;Impulse = FΔt = Δp</div>
        <ul>
          <li>Momentum is conserved in all collisions (elastic and inelastic).</li>
          <li>Kinetic energy is conserved only in <strong>elastic</strong> collisions. In a perfectly inelastic collision, objects stick together.</li>
        </ul>
      `
    },
    {
      id: 'waves',
      title: 'Waves & Sound',
      html: `
        <div class="formula">v = fλ</div>
        <ul>
          <li>Frequency (f) and wavelength (λ) are inversely related for a fixed wave speed.</li>
          <li><strong>Transverse</strong> waves oscillate perpendicular to travel (light); <strong>longitudinal</strong> waves oscillate parallel (sound).</li>
          <li><strong>Constructive interference:</strong> path difference = nλ. <strong>Destructive:</strong> (n + ½)λ.</li>
          <li>The <strong>Doppler effect</strong> raises perceived frequency as a source approaches and lowers it as it recedes.</li>
        </ul>
      `
    },
    {
      id: 'optics',
      title: 'Optics (high-yield for optometry)',
      html: `
        <h3>Reflection & refraction</h3>
        <div class="formula">Snell's law: n₁ sinθ₁ = n₂ sinθ₂</div>
        <ul>
          <li>Light slows in denser media (higher index n); speed in a medium = c/n.</li>
          <li><strong>Total internal reflection</strong> occurs when light travels to a less dense medium beyond the critical angle.</li>
        </ul>
        <h3>Lenses & mirrors</h3>
        <div class="formula">1/f = 1/dₒ + 1/dᵢ&nbsp;&nbsp;|&nbsp;&nbsp;m = −dᵢ/dₒ</div>
        <ul>
          <li><strong>Converging (convex) lens</strong> / concave mirror: positive f; can form real, inverted images.</li>
          <li><strong>Diverging (concave) lens</strong> / convex mirror: negative f; always forms virtual, upright, reduced images.</li>
          <li>Lens power in diopters = 1/f (in meters). A common test point for corrective lenses.</li>
        </ul>
        <div class="callout"><strong>Sign convention:</strong> real images have positive dᵢ (opposite side of a lens); virtual images have negative dᵢ (same side as the object).</div>
      `
    },
    {
      id: 'electricity',
      title: 'Electricity & Magnetism',
      html: `
        <h3>Circuits</h3>
        <div class="formula">Ohm's law: V = IR&nbsp;&nbsp;|&nbsp;&nbsp;P = IV = I²R = V²/R</div>
        <ul>
          <li><strong>Series:</strong> current is constant; resistances add (R = R₁ + R₂ + …); voltages add.</li>
          <li><strong>Parallel:</strong> voltage is constant; 1/R = 1/R₁ + 1/R₂ + …; the total resistance is less than the smallest branch.</li>
        </ul>
        <h3>Electrostatics</h3>
        <div class="formula">Coulomb's law: F = kq₁q₂/r²&nbsp;&nbsp;(k = 9×10⁹ N·m²/C²)</div>
        <ul>
          <li>Force falls off with the square of distance. Like charges repel; opposite charges attract.</li>
          <li>Electric field points away from positive charges and toward negative charges.</li>
        </ul>
      `
    },
    {
      id: 'thermo',
      title: 'Thermodynamics',
      html: `
        <ul>
          <li><strong>1st law:</strong> ΔU = Q − W. Energy is conserved; internal energy change equals heat added minus work done by the system.</li>
          <li><strong>2nd law:</strong> the entropy of an isolated system never decreases; heat flows spontaneously from hot to cold.</li>
          <li>Heat transfer: conduction (contact), convection (fluid motion), radiation (electromagnetic waves).</li>
          <li>Q = mcΔT relates heat to temperature change through specific heat c.</li>
        </ul>
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
    { id:'ph16', topic:'Thermodynamics', stem:'According to the first law of thermodynamics, if 100 J of heat is added to a gas and it does 40 J of work, the change in internal energy is:', options:['140 J','60 J','−60 J','40 J'], answer:1, explanation:'ΔU = Q − W = 100 − 40 = 60 J.' }
  ]
};
