window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.quant = {
  id: 'quant',
  name: 'Quantitative Reasoning',
  short: 'Quant',
  icon: '📐',
  blurb: '40 questions in 45 minutes — about 68 seconds each. Algebra, probability and statistics, geometry, and word problems. An on-screen basic calculator is provided.',
  review: [
    {
      id: 'translate-linear',
      title: 'Translating Words, Linear Equations & Inequalities',
      html: `
        <h3>Translating words into algebra</h3>
        <ul>
          <li>"of" → multiply · "is/equals" → = · "per" → divide · "more than / increased by" → add · "less than / decreased by" → subtract (note: "5 less than x" is x − 5, <em>not</em> 5 − x).</li>
          <li>"consecutive integers" → x, x+1, x+2 … ; "consecutive even/odd integers" → x, x+2, x+4 …</li>
          <li>Define your variable explicitly before writing the equation — most errors on word problems are setup errors, not arithmetic.</li>
        </ul>
        <h3>Worked example</h3>
        <p><strong>Setup:</strong> The sum of three consecutive integers is 72. What is the largest one?</p>
        <p><strong>Step 1:</strong> Let the integers be x, x+1, x+2.</p>
        <p><strong>Step 2:</strong> x + (x+1) + (x+2) = 72 → 3x + 3 = 72 → 3x = 69 → x = 23.</p>
        <p><strong>Step 3:</strong> The largest is x + 2 = 25.</p>
        <h3>Solving linear equations</h3>
        <ul>
          <li>Clear fractions/parentheses first, then collect variable terms on one side and constants on the other.</li>
          <li>Multi-step example: 3(x − 4) + 10 = 2(x + 1) → 3x − 12 + 10 = 2x + 2 → 3x − 2 = 2x + 2 → x = 4.</li>
        </ul>
        <h3>Solving linear inequalities</h3>
        <div class="callout"><strong>The one rule that trips people up:</strong> multiplying or dividing both sides by a <em>negative</em> number flips the inequality sign.</div>
        <p><strong>Example:</strong> −3x + 6 &gt; 15 → −3x &gt; 9 → x &lt; −3 (sign flipped when dividing by −3).</p>
        <p><strong>Compound example:</strong> −2 ≤ 3x − 5 &lt; 10 → add 5 to all three parts: 3 ≤ 3x &lt; 15 → divide by 3: 1 ≤ x &lt; 5.</p>
        <h3>Absolute value equations & inequalities</h3>
        <ul>
          <li>|x| = a (a &gt; 0) → x = a or x = −a. Always split into two cases.</li>
          <li>|x| &lt; a → −a &lt; x &lt; a (a "between" statement — bounded, like a segment).</li>
          <li>|x| &gt; a → x &lt; −a or x &gt; a (two separate rays, unbounded).</li>
        </ul>
        <div class="callout"><strong>Watch for extraneous roots:</strong> when the expression inside the absolute value bars is set equal to something that could be negative (like an expression with x on both sides), you must plug each candidate solution back in — one case can produce a value that doesn't actually satisfy the original equation.</div>
      `
    },
    {
      id: 'exponents-poly',
      title: 'Exponents, Factoring, Sequences & Functions',
      html: `
        <h3>Exponent rules</h3>
        <ul>
          <li>xᵃ·xᵇ = xᵃ⁺ᵇ &nbsp;·&nbsp; xᵃ/xᵇ = xᵃ⁻ᵇ &nbsp;·&nbsp; (xᵃ)ᵇ = xᵃᵇ &nbsp;·&nbsp; x⁻ᵃ = 1/xᵃ &nbsp;·&nbsp; x⁰ = 1</li>
          <li>Fractional exponents are roots: x^(1/n) = ⁿ√x, so x^(m/n) = (ⁿ√x)ᵐ. Example: 8^(2/3) = (∛8)² = 2² = 4.</li>
          <li>Negative exponents flip to the other side of the fraction — they don't make anything negative.</li>
        </ul>
        <h3>Factoring & solving polynomials</h3>
        <ul>
          <li><strong>Common factor first, always:</strong> x³ − 4x = x(x² − 4) = x(x − 2)(x + 2).</li>
          <li><strong>Difference of squares:</strong> a² − b² = (a + b)(a − b).</li>
          <li><strong>Trinomials with a leading coefficient ≠ 1:</strong> 2x² + 5x − 3 factors as (2x − 1)(x + 3) — find two numbers that multiply to (2)(−3) = −6 and add to 5 (that's 6 and −1), then split the middle term.</li>
          <li><strong>Quadratic formula</strong> (when it won't factor nicely): x = (−b ± √(b² − 4ac)) / 2a.</li>
        </ul>
        <h3>Arithmetic sequences</h3>
        <div class="formula">aₙ = a₁ + (n−1)d&nbsp;&nbsp;|&nbsp;&nbsp;Sum of first n terms: Sₙ = (n/2)(a₁ + aₙ)</div>
        <p><strong>Example:</strong> a₁ = 5, d = 4 → the 20th term is 5 + 19(4) = 5 + 76 = 81.</p>
        <h3>Functions</h3>
        <ul>
          <li>f(x) means "plug x into the formula." f(−2) for f(x) = 2x² − 3x + 1 is 2(4) − 3(−2) + 1 = 8 + 6 + 1 = 15.</li>
          <li><strong>Composition</strong> f(g(x)): evaluate the inside function first. If g(x) = 2x − 1, then g(2) = 3, and f(g(2)) = f(3).</li>
        </ul>
      `
    },
    {
      id: 'percent-rates',
      title: 'Percentages, Ratios, Interest, Mixtures & Rates',
      html: `
        <h3>Percent change</h3>
        <div class="formula">% change = (new − old) ÷ old × 100%</div>
        <div class="callout"><strong>Sequential-percent trap:</strong> a quantity increased by 20% then decreased by 20% does <em>not</em> return to the original — the second change applies to a different base. 1.20 × 0.80 = 0.96, a net −4%, not 0%.</div>
        <h3>Ratios & proportions</h3>
        <ul>
          <li>Ratios scale together: if a : b = 2 : 3 and a = 10, then b = 15.</li>
          <li><strong>Direct proportion</strong> (more of one → more of the other, e.g. cost vs. quantity): set up equal fractions and cross-multiply.</li>
          <li><strong>Inverse proportion</strong> (more of one → less of the other, e.g. workers vs. time to finish a fixed job): the <em>product</em> stays constant, not the ratio. If 4 workers take 10 days, that's 40 "worker-days" of work — 5 workers would take 40/5 = 8 days, not 12.5.</li>
        </ul>
        <h3>Simple & compound interest</h3>
        <div class="formula">Simple: I = Prt&nbsp;&nbsp;|&nbsp;&nbsp;Compound: A = P(1 + r)ᵗ &nbsp;(annual compounding)</div>
        <p><strong>Example:</strong> $1000 at 10% compounded annually for 2 years: A = 1000(1.10)² = 1000(1.21) = $1210 — notice this is more than the $1200 simple-interest would give, because year 2's interest is earned on year 1's interest too.</p>
        <h3>Mixture & solution problems</h3>
        <p>Track the actual quantity of the "active ingredient" (acid, alcohol, salt), not just the volume: (concentration × volume) added together must equal (final concentration × final volume).</p>
        <p><strong>Example:</strong> How many liters of a 40% acid solution mixed with 10 L of a 10% solution gives 25% acid? 0.40x + 0.10(10) = 0.25(x + 10) → 0.4x + 1 = 0.25x + 2.5 → 0.15x = 1.5 → x = 10 L.</p>
        <h3>Work-rate problems</h3>
        <p>Add <em>rates</em> (jobs per hour), never times directly. If A takes 6 h and B takes 3 h for the same job: combined rate = 1/6 + 1/3 = 1/2 job/h → together they finish in 2 h.</p>
        <p><strong>Reverse example:</strong> A and B together finish in 4 h; A alone takes 6 h. Then 1/6 + 1/B = 1/4 → 1/B = 1/4 − 1/6 = 1/12 → B alone takes 12 h.</p>
      `
    },
    {
      id: 'stats',
      title: 'Descriptive Statistics, Z-Scores & Normal Distribution',
      html: `
        <h3>Central tendency & spread</h3>
        <ul>
          <li><strong>Mean</strong> = sum ÷ count. <strong>Median</strong> = middle value when ordered (average the two middle values if count is even). <strong>Mode</strong> = most frequent value. <strong>Range</strong> = max − min.</li>
          <li>The mean is sensitive to outliers; the median is not — a useful fact for "which measure changed" reasoning questions.</li>
          <li><strong>Missing-value trick:</strong> if you know the mean and count, you know the total (mean × count) — use that to solve for an unknown data point.</li>
        </ul>
        <h3>Standard deviation</h3>
        <p>Standard deviation measures the typical distance of data points from the mean. To compute it by hand: find each deviation from the mean, square them, average the squares (that's the variance), then take the square root.</p>
        <p><strong>Example:</strong> {2,4,6,8,10}, mean = 6. Squared deviations: 16, 4, 0, 4, 16 → sum = 40 → variance = 40/5 = 8 → SD = √8 ≈ 2.83.</p>
        <h3>Z-scores & the normal distribution</h3>
        <div class="formula">z = (x − μ) / σ</div>
        <ul>
          <li>A z-score tells you how many standard deviations a value sits from the mean — it's a universal way to compare values from different distributions.</li>
          <li>To go the other direction (z → raw score): x = μ + zσ.</li>
          <li><strong>Empirical rule (68–95–99.7):</strong> in a normal distribution, about 68% of data fall within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD.</li>
        </ul>
      `
    },
    {
      id: 'probability',
      title: 'Probability, Counting & Arrangements',
      html: `
        <h3>Basic probability rules</h3>
        <div class="formula">P(event) = favorable outcomes ÷ total outcomes</div>
        <ul>
          <li><strong>Independent AND:</strong> P(A and B) = P(A) × P(B) — e.g., two coin flips, or draws <em>with</em> replacement.</li>
          <li><strong>Dependent AND (without replacement):</strong> the second probability changes because the first outcome removed something from the pool. Multiply the probabilities in sequence, updating the denominator (and numerator, if relevant) each draw.</li>
          <li><strong>Mutually exclusive OR:</strong> P(A or B) = P(A) + P(B). <strong>Non-mutually exclusive OR</strong> (events can happen together): P(A or B) = P(A) + P(B) − P(A and B), to avoid double-counting the overlap.</li>
          <li>Complement: P(not A) = 1 − P(A) — often the fastest route on "at least one" problems.</li>
        </ul>
        <h3>Counting: permutations, combinations & arrangements</h3>
        <div class="formula">Permutations (order matters): P(n,r) = n!/(n−r)!&nbsp;&nbsp;|&nbsp;&nbsp;Combinations (order doesn't): C(n,r) = n!/(r!(n−r)!)</div>
        <ul>
          <li><strong>Arranging n distinct objects in a row:</strong> n! ways.</li>
          <li><strong>"Must sit together" restriction:</strong> glue the required people/objects into a single block first. Arrange the block plus everyone else, then multiply by the number of ways to arrange <em>within</em> the block.</li>
        </ul>
        <h3>Worked example (dependent probability)</h3>
        <p><strong>Setup:</strong> A bag has 5 red and 3 blue marbles. Two are drawn without replacement. Find P(both red).</p>
        <p><strong>Step 1:</strong> P(1st red) = 5/8.</p>
        <p><strong>Step 2:</strong> After removing one red marble, 4 red remain out of 7 total: P(2nd red | 1st red) = 4/7.</p>
        <p><strong>Step 3:</strong> Multiply: P(both) = 5/8 × 4/7 = 20/56 = 5/14.</p>
      `
    },
    {
      id: 'geometry',
      title: 'Geometry: Coordinate Plane, Shapes & Solids',
      html: `
        <h3>Coordinate geometry</h3>
        <div class="formula">Distance: d = √((x₂−x₁)² + (y₂−y₁)²)&nbsp;&nbsp;|&nbsp;&nbsp;Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)&nbsp;&nbsp;|&nbsp;&nbsp;Slope: m = (y₂−y₁)/(x₂−x₁)</div>
        <p>Line equation from a point and a slope: y − y₁ = m(x − x₁), then simplify to slope-intercept form y = mx + b.</p>
        <h3>Triangles, rectangles & squares</h3>
        <ul>
          <li>Rectangle: area = lw, perimeter = 2(l+w). Square is the special case l = w.</li>
          <li>Triangle: area = ½·base·height. Interior angles of any triangle sum to 180°; any polygon with n sides sums to (n−2)·180°.</li>
        </ul>
        <h3>Right triangles</h3>
        <ul>
          <li><strong>Pythagorean theorem:</strong> a² + b² = c² (c is always the hypotenuse, opposite the right angle).</li>
          <li>Common triples: 3-4-5, 5-12-13, 8-15-17 (and any multiple, like 6-8-10).</li>
          <li><strong>Special right triangles:</strong> 45-45-90 → sides in ratio 1 : 1 : √2. 30-60-90 → sides in ratio 1 : √3 : 2 (short leg : long leg : hypotenuse — the hypotenuse is always twice the side opposite the 30° angle).</li>
        </ul>
        <h3>Solids</h3>
        <ul>
          <li>Cylinder volume = πr²h &nbsp;·&nbsp; Sphere volume = (4/3)πr³ &nbsp;·&nbsp; Rectangular box volume = lwh.</li>
        </ul>
      `
    },
    {
      id: 'wordproblems',
      title: 'Word Problem Playbook: Age, Coin, Distance & Data',
      html: `
        <h3>Age problems</h3>
        <p>Set up two expressions — "now" and "then" (past or future) — using the same variable, since a fixed number of years shifts both people's ages equally.</p>
        <p><strong>Example:</strong> John is currently 3× his son's age. In 10 years he'll be 2× his son's age. Let the son be x now: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10, so John is 30.</p>
        <h3>Coin / value problems</h3>
        <p>Two equations: one for the <em>count</em> of items, one for their <em>total value</em>. Solve as a system.</p>
        <p><strong>Example:</strong> Dimes + quarters = 39 coins worth $6.75. d + q = 39 and 0.10d + 0.25q = 6.75. Substituting d = 39 − q gives 0.15q = 2.85 → q = 19 quarters.</p>
        <h3>Distance-speed problems</h3>
        <div class="formula">d = rt</div>
        <ul>
          <li><strong>Opposite directions:</strong> speeds add (they're closing the gap together).</li>
          <li><strong>Same direction (catch-up):</strong> use the difference in speeds against whatever head-start distance already exists.</li>
        </ul>
        <div class="callout"><strong>The #1 trap on the whole exam:</strong> average speed for a round trip is <em>never</em> the simple average of the two speeds — it's total distance ÷ total time. Going 20 mph one way and 30 mph back gives an average of 24 mph, not 25. Always compute it from d/t, using a variable distance if none is given (it cancels out).</div>
        <h3>Reading graphs & charts</h3>
        <ul>
          <li>Read the axis labels and units first — a fast way to catch a trap answer that's off by a factor of 10 or uses the wrong units.</li>
          <li>For "% of total" questions, sum every category first, then divide the piece you need by that total.</li>
          <li>For "how much more than average" questions, compute the mean first, then subtract.</li>
        </ul>
      `
    }
  ],
  questions: [
    { id:'qr1', topic:'Algebra', stem:'If 3x − 7 = 2x + 5, what is x?', options:['2','12','−2','6'], answer:1, explanation:'Subtract 2x from both sides: x − 7 = 5. Add 7: x = 12.' },
    { id:'qr2', topic:'Algebra', stem:'Solve for x: x² − 5x + 6 = 0.', options:['x = 2 or 3','x = −2 or −3','x = 1 or 6','x = 5 or 6'], answer:0, explanation:'Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3. (Check: 2 + 3 = 5 and 2 × 3 = 6.)' },
    { id:'qr3', topic:'Algebra', stem:'Simplify: (x³)(x⁴).', options:['x⁷','x¹²','x⁻¹','2x⁷'], answer:0, explanation:'When multiplying like bases, add exponents: x³·x⁴ = x³⁺⁴ = x⁷.' },
    { id:'qr4', topic:'Percentages', stem:'A shirt originally priced at $40 is discounted by 25%. What is the sale price?', options:['$10','$25','$30','$32'], answer:2, explanation:'25% of $40 is $10, so the sale price is $40 − $10 = $30.' },
    { id:'qr5', topic:'Rates', stem:'A car travels 150 miles in 3 hours. At the same rate, how far will it travel in 5 hours?', options:['200 miles','250 miles','300 miles','450 miles'], answer:1, explanation:'Rate = 150 ÷ 3 = 50 mph. In 5 hours: 50 × 5 = 250 miles.' },
    { id:'qr6', topic:'Rates', stem:'One pipe fills a tank in 4 hours and another in 12 hours. Working together, how long to fill the tank?', options:['3 hours','8 hours','6 hours','16 hours'], answer:0, explanation:'Add rates: 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3 tank per hour. Time = 1 ÷ (1/3) = 3 hours.' },
    { id:'qr7', topic:'Statistics', stem:'What is the median of the set {4, 8, 1, 6, 9}?', options:['4','6','8','5.6'], answer:1, explanation:'Order the set: 1, 4, 6, 8, 9. The middle (3rd of 5) value is 6.' },
    { id:'qr8', topic:'Statistics', stem:'The mean of five numbers is 20. If four of them sum to 70, what is the fifth number?', options:['10','20','30','50'], answer:2, explanation:'The total sum is mean × count = 20 × 5 = 100. The fifth number is 100 − 70 = 30.' },
    { id:'qr9', topic:'Probability', stem:'A fair six-sided die is rolled once. What is the probability of rolling a number greater than 4?', options:['1/6','1/3','1/2','2/3'], answer:1, explanation:'Numbers greater than 4 are 5 and 6, giving 2 favorable outcomes out of 6: 2/6 = 1/3.' },
    { id:'qr10', topic:'Probability', stem:'Two fair coins are flipped. What is the probability of getting two heads?', options:['1/2','1/4','1/3','3/4'], answer:1, explanation:'The flips are independent: P(H) × P(H) = 1/2 × 1/2 = 1/4.' },
    { id:'qr11', topic:'Probability', stem:'How many distinct ways can 3 people be selected from a group of 6 (order does not matter)?', options:['18','20','120','216'], answer:1, explanation:'This is a combination: C(6,3) = 6!/(3!·3!) = (6×5×4)/(3×2×1) = 120/6 = 20.' },
    { id:'qr12', topic:'Geometry', stem:'A circle has a radius of 5. What is its area?', options:['10π','25π','5π','50π'], answer:1, explanation:'Area = πr² = π(5²) = 25π.' },
    { id:'qr13', topic:'Geometry', stem:'A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?', options:['10','12','14','48'], answer:0, explanation:'By the Pythagorean theorem: c² = 6² + 8² = 36 + 64 = 100, so c = 10. (This is a 3-4-5 triple scaled by 2.)' },
    { id:'qr14', topic:'Geometry', stem:'What is the volume of a cylinder with radius 3 and height 10?', options:['30π','90π','60π','900π'], answer:1, explanation:'Volume = πr²h = π(3²)(10) = π(9)(10) = 90π.' },
    { id:'qr15', topic:'Geometry', stem:'In a 45-45-90 right triangle, if each leg has length 5, the hypotenuse is:', options:['5','5√2','10','5√3'], answer:1, explanation:'In a 45-45-90 triangle the sides are in ratio 1 : 1 : √2, so the hypotenuse is 5√2.' },
    { id:'qr16', topic:'Word Problems', stem:'A number increased by 30% equals 91. What is the original number?', options:['61','63','70','118.3'], answer:2, explanation:'Let the number be x. Then 1.3x = 91, so x = 91 ÷ 1.3 = 70.' },
    { id:'qr17', topic:'Translating Words to Expressions', stem:'Five less than twice a number is 17. What is the number?', options:['6','17','11','22'], answer:2, explanation:'<strong>Step 1:</strong> "Twice a number" is 2x; "five less than" that is 2x − 5 (not 5 − 2x).<br><strong>Step 2:</strong> 2x − 5 = 17 → 2x = 22 → x = 11.' },
    { id:'qr18', topic:'Translating Words to Expressions', stem:'The sum of three consecutive integers is 72. What is the largest one?', options:['25','23','24','26'], answer:0, explanation:'<strong>Step 1:</strong> Let the integers be x, x+1, x+2.<br><strong>Step 2:</strong> x + (x+1) + (x+2) = 72 → 3x + 3 = 72 → 3x = 69 → x = 23.<br><strong>Step 3:</strong> The largest is x + 2 = 25.' },
    { id:'qr19', topic:'Solving Linear Equations', stem:'Solve for x: (2/3)x + 5 = 13.', options:['8','5.33','18','12'], answer:3, explanation:'<strong>Step 1:</strong> Subtract 5: (2/3)x = 8.<br><strong>Step 2:</strong> Multiply both sides by 3/2: x = 8 × 3/2 = 12.' },
    { id:'qr20', topic:'Solving Linear Equations', stem:'Solve for x: 3(x − 4) + 10 = 2(x + 1).', options:['2','4','6','−4'], answer:1, explanation:'<strong>Step 1:</strong> Distribute: 3x − 12 + 10 = 2x + 2 → 3x − 2 = 2x + 2.<br><strong>Step 2:</strong> Subtract 2x from both sides: x − 2 = 2 → x = 4.' },
    { id:'qr21', topic:'Solving Linear Inequalities', stem:'Solve for x: −3x + 6 > 15.', options:['x > −3','x < 3','x < −3','x > 3'], answer:2, explanation:'<strong>Step 1:</strong> Subtract 6: −3x > 9.<br><strong>Step 2:</strong> Divide both sides by −3, and flip the inequality sign since you\'re dividing by a negative: x < −3.' },
    { id:'qr22', topic:'Solving Linear Inequalities', stem:'Solve for x: −2 ≤ 3x − 5 < 10.', options:['1 ≤ x < 5','−1 ≤ x < 5','1 ≤ x < 15','3 ≤ x < 15'], answer:0, explanation:'<strong>Step 1:</strong> Add 5 to all three parts: −2+5 ≤ 3x < 10+5 → 3 ≤ 3x < 15.<br><strong>Step 2:</strong> Divide everything by 3: 1 ≤ x < 5.' },
    { id:'qr23', topic:'Absolute Value', stem:'Solve: |2x − 3| = 7.', options:['x = 5 only','x = 2 or x = −5','x = −5 or x = 2','x = 5 or x = −2'], answer:3, explanation:'<strong>Step 1:</strong> Split into two cases. Case 1: 2x − 3 = 7 → 2x = 10 → x = 5.<br><strong>Step 2:</strong> Case 2: 2x − 3 = −7 → 2x = −4 → x = −2.<br><strong>Step 3:</strong> Both check out in the original equation, so the solutions are x = 5 or x = −2.' },
    { id:'qr24', topic:'Absolute Value', stem:'Solve: |x + 4| = 2x + 1.', options:['x = 3 or x = −5/3','x = 3 only (the other case is extraneous)','x = −5/3 only','No solution'], answer:1, explanation:'<strong>Step 1:</strong> Case 1: x + 4 = 2x + 1 → x = 3. Check: |3+4| = 7 and 2(3)+1 = 7. ✓ Valid.<br><strong>Step 2:</strong> Case 2: x + 4 = −(2x + 1) → x + 4 = −2x − 1 → 3x = −5 → x = −5/3.<br><strong>Step 3:</strong> Check case 2: LHS = |−5/3 + 4| = 7/3 (positive), but RHS = 2(−5/3) + 1 = −7/3 (negative). An absolute value can never equal a negative number, so this solution is extraneous and must be rejected.<br><strong>Answer:</strong> x = 3 only.' },
    { id:'qr25', topic:'Absolute Value Inequality', stem:'Solve: |x − 3| < 5.', options:['−8 < x < 2','2 < x < 8','−2 < x < 8','−5 < x < 5'], answer:2, explanation:'<strong>Step 1:</strong> A "less than" absolute value inequality becomes a compound "between" statement: −5 < x − 3 < 5.<br><strong>Step 2:</strong> Add 3 to all three parts: −2 < x < 8.' },
    { id:'qr26', topic:'Absolute Value Inequality', stem:'Solve: |2x + 1| ≥ 9.', options:['x ≤ −5 or x ≥ 4','−5 ≤ x ≤ 4','x ≤ 4 or x ≥ −5','x ≥ 4 only'], answer:0, explanation:'<strong>Step 1:</strong> A "greater than" absolute value inequality splits into two separate branches.<br><strong>Step 2:</strong> Branch 1: 2x + 1 ≥ 9 → x ≥ 4. Branch 2: 2x + 1 ≤ −9 → 2x ≤ −10 → x ≤ −5.<br><strong>Answer:</strong> x ≤ −5 or x ≥ 4.' },
    { id:'qr27', topic:'Exponents', stem:'Simplify: (x⁻²y³) / (x³y⁻¹).', options:['x⁵/y⁴','x⁵y⁴','1/(x⁵y⁴)','y⁴/x⁵'], answer:3, explanation:'<strong>Step 1:</strong> Subtract exponents for like bases: x-power = −2 − 3 = −5; y-power = 3 − (−1) = 4.<br><strong>Step 2:</strong> Result: x⁻⁵y⁴. Rewriting the negative exponent: y⁴/x⁵.' },
    { id:'qr28', topic:'Exponents', stem:'Evaluate: 8^(2/3).', options:['2','4','16','512'], answer:1, explanation:'<strong>Step 1:</strong> A fractional exponent m/n means: take the nth root, then raise to the mth power. 8^(1/3) = ∛8 = 2.<br><strong>Step 2:</strong> Then square it: 2² = 4.' },
    { id:'qr29', topic:'Factoring and Solving Polynomials', stem:'Factor completely: x³ − 4x.', options:['x(x − 4)(x + 4)','(x − 2)(x + 2)','x(x − 2)(x + 2)','x²(x − 4)'], answer:2, explanation:'<strong>Step 1:</strong> Pull out the common factor first: x³ − 4x = x(x² − 4).<br><strong>Step 2:</strong> x² − 4 is a difference of squares: x² − 4 = (x − 2)(x + 2).<br><strong>Answer:</strong> x(x − 2)(x + 2).' },
    { id:'qr30', topic:'Factoring and Solving Polynomials', stem:'Solve: 2x² + 5x − 3 = 0.', options:['x = 1/2 or x = −3','x = −1/2 or x = 3','x = 1 or x = −1.5','x = 3 or x = −1/2'], answer:0, explanation:'<strong>Step 1:</strong> With a leading coefficient of 2, find two numbers that multiply to (2)(−3) = −6 and add to 5: those are 6 and −1.<br><strong>Step 2:</strong> Split and factor by grouping, or directly: 2x² + 5x − 3 = (2x − 1)(x + 3).<br><strong>Step 3:</strong> Set each factor to zero: 2x − 1 = 0 → x = 1/2; x + 3 = 0 → x = −3.' },
    { id:'qr31', topic:'Arithmetic Sequences', stem:'An arithmetic sequence has a first term of 5 and a common difference of 4. What is the 20th term?', options:['80','76','85','81'], answer:3, explanation:'<strong>Step 1:</strong> aₙ = a₁ + (n−1)d.<br><strong>Step 2:</strong> a₂₀ = 5 + (19)(4) = 5 + 76 = 81.' },
    { id:'qr32', topic:'Arithmetic Sequences', stem:'Find the sum of the first 15 terms of an arithmetic sequence with a₁ = 3 and d = 2.', options:['225','255','270','240'], answer:1, explanation:'<strong>Step 1:</strong> First find the 15th term: a₁₅ = 3 + (14)(2) = 3 + 28 = 31.<br><strong>Step 2:</strong> Sum = (n/2)(a₁ + aₙ) = (15/2)(3 + 31) = 7.5 × 34 = 255.' },
    { id:'qr33', topic:'Functions', stem:'If f(x) = 2x² − 3x + 1, what is f(−2)?', options:['3','9','15','−15'], answer:2, explanation:'<strong>Step 1:</strong> Substitute x = −2: f(−2) = 2(−2)² − 3(−2) + 1.<br><strong>Step 2:</strong> = 2(4) + 6 + 1 = 8 + 6 + 1 = 15.' },
    { id:'qr34', topic:'Functions', stem:'If f(x) = x + 3 and g(x) = 2x − 1, what is f(g(2))?', options:['6','9','5','8'], answer:0, explanation:'<strong>Step 1:</strong> Evaluate the inside function first: g(2) = 2(2) − 1 = 3.<br><strong>Step 2:</strong> Then apply f: f(3) = 3 + 3 = 6.' },
    { id:'qr35', topic:'Percentages', stem:'A price is increased by 20%, then the new price is decreased by 20%. What is the net percent change from the original price?', options:['0%','−40%','+4%','−4%'], answer:3, explanation:'<strong>Step 1:</strong> The two percent changes apply to different bases, so they don\'t cancel. Multiply the multipliers: 1.20 × 0.80 = 0.96.<br><strong>Step 2:</strong> 0.96 means 96% of the original — a net decrease of 4%.' },
    { id:'qr36', topic:'Percentages', stem:'After a 15% sales tax, a meal costs $34.50. What was the pre-tax price?', options:['$29.33','$30','$31.35','$28.75'], answer:1, explanation:'<strong>Step 1:</strong> Let x be the pre-tax price: x(1.15) = 34.50.<br><strong>Step 2:</strong> x = 34.50 / 1.15 = $30.' },
    { id:'qr37', topic:'Ratios and Proportions', stem:'The ratio of boys to girls in a class is 3:4. If there are 35 students total, how many are girls?', options:['15','21','20','25'], answer:2, explanation:'<strong>Step 1:</strong> The ratio parts total 3 + 4 = 7 parts for 35 students, so each part = 35/7 = 5 students.<br><strong>Step 2:</strong> Girls = 4 parts × 5 = 20.' },
    { id:'qr38', topic:'Ratios and Proportions', stem:'If 4 workers can build a wall in 10 days, how many days would it take 5 workers at the same rate?', options:['8 days','12.5 days','9 days','6 days'], answer:0, explanation:'<strong>Step 1:</strong> This is an inverse proportion (more workers → less time), not a direct one — the total "worker-days" of effort stays constant: 4 × 10 = 40 worker-days.<br><strong>Step 2:</strong> With 5 workers: 40 ÷ 5 = 8 days. (12.5 days is the trap you get from treating it as a direct proportion.)' },
    { id:'qr39', topic:'Simple and Compound Interest', stem:'$2000 is invested at 5% simple annual interest for 3 years. How much interest is earned?', options:['$2300','$100','$330','$300'], answer:3, explanation:'<strong>Step 1:</strong> Simple interest: I = Prt.<br><strong>Step 2:</strong> I = 2000 × 0.05 × 3 = $300.' },
    { id:'qr40', topic:'Simple and Compound Interest', stem:'$1000 is invested at 10% annual interest, compounded annually, for 2 years. What is the final amount?', options:['$1200','$1210','$1100','$1220'], answer:1, explanation:'<strong>Step 1:</strong> A = P(1 + r)ᵗ = 1000(1.10)².<br><strong>Step 2:</strong> 1.10² = 1.21, so A = 1000 × 1.21 = $1210. This is $10 more than simple interest would give, because the second year earns interest on the first year\'s interest too.' },
    { id:'qr41', topic:'Mixtures-Solutions Problems', stem:'How many liters of a 40% acid solution must be mixed with 10 liters of a 10% acid solution to create a 25% acid solution?', options:['5 L','15 L','10 L','20 L'], answer:2, explanation:'<strong>Step 1:</strong> Track the actual acid, not just volume: 0.40x + 0.10(10) = 0.25(x + 10).<br><strong>Step 2:</strong> 0.4x + 1 = 0.25x + 2.5 → 0.15x = 1.5 → x = 10 L.' },
    { id:'qr42', topic:'Mixtures-Solutions Problems', stem:'A chemist has 5 L of a 60% alcohol solution. How much pure water must be added to dilute it to 40% alcohol?', options:['2.5 L','2 L','3 L','1.5 L'], answer:0, explanation:'<strong>Step 1:</strong> The actual amount of alcohol never changes when you add water: 0.60 × 5 = 3 L of pure alcohol.<br><strong>Step 2:</strong> Let w = liters of water added. Final concentration: 3/(5+w) = 0.40 → 5+w = 7.5 → w = 2.5 L.' },
    { id:'qr43', topic:'Work-Rate Problems', stem:'A can finish a job alone in 6 hours; B can finish it alone in 3 hours. They work together for 1 hour, then A finishes the rest alone. How much longer does A need?', options:['1.5 hours','2 hours','4 hours','3 hours'], answer:3, explanation:'<strong>Step 1:</strong> Combined rate: 1/6 + 1/3 = 1/6 + 2/6 = 1/2 job per hour. In 1 hour together, they complete 1/2 the job, leaving 1/2 remaining.<br><strong>Step 2:</strong> A\'s rate alone is 1/6 job/hour. Time to finish 1/2 job: (1/2) ÷ (1/6) = 3 hours.' },
    { id:'qr44', topic:'Work-Rate Problems', stem:'Working together, A and B finish a job in 4 hours. A alone would take 6 hours. How long would B alone take?', options:['10 hours','12 hours','8 hours','24 hours'], answer:1, explanation:'<strong>Step 1:</strong> 1/6 + 1/B = 1/4.<br><strong>Step 2:</strong> 1/B = 1/4 − 1/6 = 3/12 − 2/12 = 1/12 → B = 12 hours.' },
    { id:'qr45', topic:'Mean-Median-Mode-Range', stem:'Six test scores have a mean of 85. Five of them are 90, 78, 88, 95, and 70. What is the sixth score?', options:['85','79','89','99'], answer:2, explanation:'<strong>Step 1:</strong> Total of all 6 scores = mean × count = 85 × 6 = 510.<br><strong>Step 2:</strong> Sum of the known five: 90+78+88+95+70 = 421.<br><strong>Step 3:</strong> Sixth score = 510 − 421 = 89.' },
    { id:'qr46', topic:'Mean-Median-Mode-Range', stem:'What is the median of the data set {3, 7, 7, 9, 12, 14}?', options:['8','7','9','8.5'], answer:0, explanation:'<strong>Step 1:</strong> The set is already ordered and has 6 values (even count), so the median is the average of the 3rd and 4th values.<br><strong>Step 2:</strong> (7 + 9)/2 = 8.' },
    { id:'qr47', topic:'Standard Deviation and Normal Distributions', stem:'By the empirical rule, approximately what percent of a normal distribution\'s data fall within 2 standard deviations of the mean?', options:['68%','99.7%','50%','95%'], answer:3, explanation:'<strong>Step 1:</strong> The empirical (68–95–99.7) rule states: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.<br><strong>Step 2:</strong> Two standard deviations → 95%.' },
    { id:'qr48', topic:'Standard Deviation and Normal Distributions', stem:'Find the standard deviation of the data set {2, 4, 6, 8, 10}.', options:['8','≈2.83','2','4'], answer:1, explanation:'<strong>Step 1:</strong> Mean = (2+4+6+8+10)/5 = 6.<br><strong>Step 2:</strong> Squared deviations: (2−6)²=16, (4−6)²=4, (6−6)²=0, (8−6)²=4, (10−6)²=16. Sum = 40.<br><strong>Step 3:</strong> Variance = 40/5 = 8. SD = √8 ≈ 2.83.' },
    { id:'qr49', topic:'Z-Scores', stem:'A test has a mean of 75 and a standard deviation of 5. What is the z-score for a student who scored 85?', options:['10','0.5','2','1'], answer:2, explanation:'<strong>Step 1:</strong> z = (x − μ)/σ.<br><strong>Step 2:</strong> z = (85 − 75)/5 = 10/5 = 2.' },
    { id:'qr50', topic:'Z-Scores', stem:'A distribution has mean 100 and standard deviation 15. What raw score corresponds to a z-score of −1.5?', options:['77.5','85','122.5','92.5'], answer:0, explanation:'<strong>Step 1:</strong> Solve the z-score formula for x: x = μ + zσ.<br><strong>Step 2:</strong> x = 100 + (−1.5)(15) = 100 − 22.5 = 77.5.' },
    { id:'qr51', topic:'Mutually Exclusive and Non-Mutually Exclusive Events', stem:'A card is drawn from a standard 52-card deck. What is the probability it is a king OR a heart?', options:['17/52','1/4','4/52','4/13'], answer:3, explanation:'<strong>Step 1:</strong> These events overlap (the king of hearts is both), so use P(A or B) = P(A) + P(B) − P(A and B).<br><strong>Step 2:</strong> P(king) = 4/52, P(heart) = 13/52, P(king and heart) = 1/52.<br><strong>Step 3:</strong> 4/52 + 13/52 − 1/52 = 16/52 = 4/13.' },
    { id:'qr52', topic:'Mutually Exclusive and Non-Mutually Exclusive Events', stem:'A fair die is rolled once. What is the probability of rolling an even number OR a number less than 3?', options:['5/6','2/3','1/2','3/6'], answer:1, explanation:'<strong>Step 1:</strong> Even = {2,4,6}, less than 3 = {1,2}. These overlap at {2}, so they are NOT mutually exclusive.<br><strong>Step 2:</strong> P = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.' },
    { id:'qr53', topic:'Coins and Dice', stem:'Three fair coins are flipped. What is the probability of getting exactly two heads?', options:['1/2','1/8','3/8','3/4'], answer:2, explanation:'<strong>Step 1:</strong> There are 2³ = 8 equally likely outcomes total.<br><strong>Step 2:</strong> Outcomes with exactly two heads: HHT, HTH, THH — 3 outcomes.<br><strong>Step 3:</strong> P = 3/8.' },
    { id:'qr54', topic:'Coins and Dice', stem:'Two fair six-sided dice are rolled. What is the probability that the sum is 7?', options:['1/6','1/12','1/9','7/36'], answer:0, explanation:'<strong>Step 1:</strong> There are 6×6 = 36 equally likely outcomes.<br><strong>Step 2:</strong> Pairs summing to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 outcomes.<br><strong>Step 3:</strong> P = 6/36 = 1/6.' },
    { id:'qr55', topic:'Cards and Marbles', stem:'A bag contains 5 red marbles and 3 blue marbles. Two are drawn without replacement. What is the probability both are red?', options:['25/64','5/8','15/56','5/14'], answer:3, explanation:'<strong>Step 1:</strong> P(1st red) = 5/8.<br><strong>Step 2:</strong> After removing one red, 4 red remain out of 7 total: P(2nd red) = 4/7.<br><strong>Step 3:</strong> P(both) = 5/8 × 4/7 = 20/56 = 5/14. (25/64 is the trap you get from treating the draws as independent, i.e., with replacement.)' },
    { id:'qr56', topic:'Cards and Marbles', stem:'Two cards are drawn without replacement from a standard 52-card deck. What is the probability both are aces?', options:['1/169','1/221','1/13','1/26'], answer:1, explanation:'<strong>Step 1:</strong> P(1st ace) = 4/52.<br><strong>Step 2:</strong> After removing one ace, 3 remain out of 51: P(2nd ace) = 3/51.<br><strong>Step 3:</strong> P(both) = 4/52 × 3/51 = 12/2652 = 1/221.' },
    { id:'qr57', topic:'Linear Arrangements', stem:'In how many distinct ways can 5 different books be arranged on a shelf?', options:['20','60','120','25'], answer:2, explanation:'<strong>Step 1:</strong> Arranging n distinct objects in a row uses n!.<br><strong>Step 2:</strong> 5! = 5×4×3×2×1 = 120.' },
    { id:'qr58', topic:'Linear Arrangements', stem:'In how many ways can 4 people be arranged in a row if two specific people must sit next to each other?', options:['12','24','6','48'], answer:0, explanation:'<strong>Step 1:</strong> Glue the required pair into one block. Now you\'re arranging 3 units (the block + 2 other people): 3! = 6 ways.<br><strong>Step 2:</strong> Within the block, the pair can be ordered 2 ways (2!).<br><strong>Step 3:</strong> Total = 6 × 2 = 12.' },
    { id:'qr59', topic:'Coordinate Geometry', stem:'Find the distance between the points (1, 2) and (4, 6).', options:['7','√20','25','5'], answer:3, explanation:'<strong>Step 1:</strong> d = √((x₂−x₁)² + (y₂−y₁)²) = √((4−1)² + (6−2)²).<br><strong>Step 2:</strong> = √(9 + 16) = √25 = 5.' },
    { id:'qr60', topic:'Coordinate Geometry', stem:'Find the midpoint of the segment connecting (−2, 5) and (6, −1).', options:['(4, 4)','(2, 2)','(2, 4)','(1, 2)'], answer:1, explanation:'<strong>Step 1:</strong> Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).<br><strong>Step 2:</strong> = ((−2+6)/2, (5−1)/2) = (4/2, 4/2) = (2, 2).' },
    { id:'qr61', topic:'Coordinate Geometry', stem:'Find the equation, in slope-intercept form, of the line through (2, 3) with slope −2.', options:['y = −2x + 3','y = 2x + 7','y = −2x + 7','y = −2x − 7'], answer:2, explanation:'<strong>Step 1:</strong> Point-slope form: y − 3 = −2(x − 2).<br><strong>Step 2:</strong> y − 3 = −2x + 4 → y = −2x + 7.' },
    { id:'qr62', topic:'Triangles-Rectangles-Squares', stem:'A rectangle has a perimeter of 36 and a length twice its width. What is its area?', options:['72','36','144','60'], answer:0, explanation:'<strong>Step 1:</strong> Let width = w, length = 2w. Perimeter: 2(l + w) = 2(3w) = 6w = 36 → w = 6, so l = 12.<br><strong>Step 2:</strong> Area = l × w = 12 × 6 = 72.' },
    { id:'qr63', topic:'Triangles-Rectangles-Squares', stem:'A square has the same area as a rectangle with length 16 and width 4. What is the perimeter of the square?', options:['64','16','8','32'], answer:3, explanation:'<strong>Step 1:</strong> Rectangle area = 16 × 4 = 64. The square has the same area: side² = 64 → side = 8.<br><strong>Step 2:</strong> Perimeter = 4 × 8 = 32.' },
    { id:'qr64', topic:'Right Triangles: Sides', stem:'A right triangle has a hypotenuse of 13 and one leg of 5. What is the length of the other leg?', options:['8','12','18','144'], answer:1, explanation:'<strong>Step 1:</strong> a² + b² = c² → the missing leg = √(c² − a²) = √(13² − 5²).<br><strong>Step 2:</strong> = √(169 − 25) = √144 = 12. (This is the 5-12-13 triple.)' },
    { id:'qr65', topic:'Right Triangles: Sides', stem:'In a 30-60-90 triangle, the side opposite the 30° angle is 7. What is the length of the hypotenuse?', options:['7√3','7√2','14','21'], answer:2, explanation:'<strong>Step 1:</strong> In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2, where 1 corresponds to the side opposite 30°.<br><strong>Step 2:</strong> The hypotenuse is always twice that shortest side: 2 × 7 = 14.' },
    { id:'qr66', topic:'Distance-Speed Problems', stem:'Two cars start at the same point and travel in opposite directions, one at 50 mph and the other at 65 mph. After how many hours will they be 460 miles apart?', options:['4 hours','3.5 hours','7 hours','2 hours'], answer:0, explanation:'<strong>Step 1:</strong> Traveling in opposite directions, their speeds add: combined rate = 50 + 65 = 115 mph.<br><strong>Step 2:</strong> Time = distance/rate = 460/115 = 4 hours.' },
    { id:'qr67', topic:'Distance-Speed Problems', stem:'Car A leaves a station at 60 mph. Two hours later, Car B leaves the same station in the same direction at 80 mph. How long after Car B leaves does it catch up to Car A?', options:['4 hours','1.5 hours','3 hours','6 hours'], answer:3, explanation:'<strong>Step 1:</strong> By the time B leaves, A already has a 60 × 2 = 120-mile head start.<br><strong>Step 2:</strong> B closes that gap at the relative speed of 80 − 60 = 20 mph.<br><strong>Step 3:</strong> Time to catch up = 120/20 = 6 hours after B leaves.' },
    { id:'qr68', topic:'Distance-Speed Problems', stem:'A cyclist rides from town A to town B at 20 mph, then returns along the same route at 30 mph. What is the average speed for the entire round trip?', options:['25 mph','24 mph','26 mph','23 mph'], answer:1, explanation:'<strong>Step 1:</strong> Average speed is NEVER the simple average of two speeds for a round trip — it must be total distance ÷ total time. Let d = the one-way distance.<br><strong>Step 2:</strong> Total time = d/20 + d/30 = 3d/60 + 2d/60 = 5d/60 = d/12.<br><strong>Step 3:</strong> Average speed = total distance/total time = 2d ÷ (d/12) = 2d × 12/d = 24 mph — not 25 mph, which is the trap answer from naively averaging.' },
    { id:'qr69', topic:'Age Problems', stem:'John is currently 3 times as old as his son. In 10 years, he will be twice as old as his son. How old is John now?', options:['10','40','30','20'], answer:2, explanation:'<strong>Step 1:</strong> Let the son\'s current age be x, so John\'s is 3x.<br><strong>Step 2:</strong> In 10 years: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10.<br><strong>Step 3:</strong> John\'s current age = 3x = 30.' },
    { id:'qr70', topic:'Age Problems', stem:'Five years ago, Maria was twice as old as her brother. Now, the sum of their ages is 40. How old is Maria now?', options:['25','20','22','28'], answer:0, explanation:'<strong>Step 1:</strong> Let Maria\'s current age be M and her brother\'s be B. Now: M + B = 40.<br><strong>Step 2:</strong> Five years ago: M − 5 = 2(B − 5) → M = 2B − 5.<br><strong>Step 3:</strong> Substitute: (2B − 5) + B = 40 → 3B = 45 → B = 15, so M = 40 − 15 = 25.' },
    { id:'qr71', topic:'Coin Problems', stem:'A jar contains only dimes and quarters worth $6.75 total, with 39 coins in all. How many quarters are there?', options:['20','15','24','19'], answer:3, explanation:'<strong>Step 1:</strong> Let d = dimes, q = quarters: d + q = 39 and 0.10d + 0.25q = 6.75.<br><strong>Step 2:</strong> Substitute d = 39 − q: 0.10(39 − q) + 0.25q = 6.75 → 3.9 − 0.10q + 0.25q = 6.75 → 0.15q = 2.85.<br><strong>Step 3:</strong> q = 19.' },
    { id:'qr72', topic:'Coin Problems', stem:'A collection of nickels and dimes totals $3.00 and contains twice as many nickels as dimes. How many dimes are there?', options:['30','15','10','20'], answer:1, explanation:'<strong>Step 1:</strong> Let dimes = d, so nickels = 2d. Total value: 0.05(2d) + 0.10d = 3.00.<br><strong>Step 2:</strong> 0.10d + 0.10d = 0.20d = 3.00 → d = 15.' },
    { id:'qr73', topic:'Graphs and Charts', stem:'The bar chart shows a clinic\'s quarterly sales, in $1,000s. What percent of the year\'s total sales occurred in Q4?<div class="mech-diagram"><svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg"><line class="grid-line" x1="50" y1="30" x2="320" y2="30"/><line class="grid-line" x1="50" y1="95" x2="320" y2="95"/><line class="mech-bond" x1="50" y1="20" x2="50" y2="160"/><line class="mech-bond" x1="50" y1="160" x2="320" y2="160"/><text class="mech-lbl-sm" x="20" y="34">80</text><text class="mech-lbl-sm" x="20" y="99">40</text><text class="mech-lbl-sm" x="26" y="164">0</text><rect class="bar" x="65" y="95" width="45" height="65"/><text class="mech-lbl-sm" x="87" y="88" text-anchor="middle">40</text><text class="mech-lbl" x="87" y="178" text-anchor="middle">Q1</text><rect class="bar" x="135" y="71" width="45" height="89"/><text class="mech-lbl-sm" x="157" y="64" text-anchor="middle">55</text><text class="mech-lbl" x="157" y="178" text-anchor="middle">Q2</text><rect class="bar" x="205" y="103" width="45" height="57"/><text class="mech-lbl-sm" x="227" y="96" text-anchor="middle">35</text><text class="mech-lbl" x="227" y="178" text-anchor="middle">Q3</text><rect class="bar" x="275" y="46" width="45" height="114"/><text class="mech-lbl-sm" x="297" y="39" text-anchor="middle">70</text><text class="mech-lbl" x="297" y="178" text-anchor="middle">Q4</text></svg><div class="mech-cap">Quarterly sales, $1,000s</div></div>', options:['30%','70%','35%','17.5%'], answer:2, explanation:'<strong>Step 1:</strong> Total for the year = 40 + 55 + 35 + 70 = 200.<br><strong>Step 2:</strong> Q4 share = 70/200 = 0.35 = 35%.' },
    { id:'qr74', topic:'Graphs and Charts', stem:'The bar chart shows patients seen each day this week. How many more patients were seen on the busiest day than the daily average?<div class="mech-diagram"><svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg"><line class="grid-line" x1="50" y1="34" x2="320" y2="34"/><line class="grid-line" x1="50" y1="97" x2="320" y2="97"/><line class="mech-bond" x1="50" y1="20" x2="50" y2="160"/><line class="mech-bond" x1="50" y1="160" x2="320" y2="160"/><text class="mech-lbl-sm" x="20" y="38">20</text><text class="mech-lbl-sm" x="20" y="101">10</text><text class="mech-lbl-sm" x="26" y="164">0</text><rect class="bar" x="60" y="97" width="34" height="63"/><text class="mech-lbl-sm" x="77" y="90" text-anchor="middle">12</text><text class="mech-lbl" x="77" y="178" text-anchor="middle">Mon</text><rect class="bar" x="112" y="66" width="34" height="94"/><text class="mech-lbl-sm" x="129" y="59" text-anchor="middle">18</text><text class="mech-lbl" x="129" y="178" text-anchor="middle">Tue</text><rect class="bar" x="164" y="103" width="34" height="57"/><text class="mech-lbl-sm" x="181" y="96" text-anchor="middle">9</text><text class="mech-lbl" x="181" y="178" text-anchor="middle">Wed</text><rect class="bar" x="216" y="76" width="34" height="84"/><text class="mech-lbl-sm" x="233" y="69" text-anchor="middle">15</text><text class="mech-lbl" x="233" y="178" text-anchor="middle">Thu</text><rect class="bar" x="268" y="27" width="34" height="133"/><text class="mech-lbl-sm" x="285" y="20" text-anchor="middle">21</text><text class="mech-lbl" x="285" y="178" text-anchor="middle">Fri</text></svg><div class="mech-cap">Patients seen per day</div></div>', options:['6','21','15','9'], answer:0, explanation:'<strong>Step 1:</strong> Mean = (12+18+9+15+21)/5 = 75/5 = 15.<br><strong>Step 2:</strong> Busiest day is Friday with 21. Difference = 21 − 15 = 6.' },
    { id:'qr75', topic:'Graphs and Charts', stem:'The pie chart shows 200 optometry patients grouped by primary diagnosis. What percent of these patients have astigmatism?<div class="mech-diagram"><svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,10)"><path class="pie-1" d="M100,90 L100,10 A80,80 0 0,1 124.7,166.08 Z"/><path class="pie-2" d="M100,90 L124.7,166.08 A80,80 0 0,1 23.92,114.72 Z"/><path class="pie-3" d="M100,90 L23.92,114.72 A80,80 0 0,1 52.96,25.28 Z"/><path class="pie-4" d="M100,90 L52.96,25.28 A80,80 0 0,1 100,10 Z"/></g><rect class="pie-1" x="230" y="16" width="14" height="14"/><text class="mech-lbl-sm" x="252" y="27">Myopia — 90 patients (45%)</text><rect class="pie-2" x="230" y="40" width="14" height="14"/><text class="mech-lbl-sm" x="252" y="51">Hyperopia — 50 patients (25%)</text><rect class="pie-3" x="230" y="64" width="14" height="14"/><text class="mech-lbl-sm" x="252" y="75">Astigmatism — 40 patients (20%)</text><rect class="pie-4" x="230" y="88" width="14" height="14"/><text class="mech-lbl-sm" x="252" y="99">Other — 20 patients (10%)</text></svg><div class="mech-cap">Patients by primary diagnosis (n = 200)</div></div>', options:['20%','40%','25%','10%'], answer:0, explanation:'<strong>Step 1:</strong> Read the astigmatism slice directly from the legend: 40 out of 200 patients.<br><strong>Step 2:</strong> 40/200 = 0.20 = 20%. (This matches the slice\'s visual share of the circle — the second-smallest of the four.)' }
  ]
};
