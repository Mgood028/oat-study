window.OAT_CONTENT = window.OAT_CONTENT || {};
window.OAT_CONTENT.quant = {
  id: 'quant',
  name: 'Quantitative Reasoning',
  short: 'Quant',
  icon: '📐',
  blurb: '40 questions in 45 minutes — about 68 seconds each. Algebra, probability and statistics, geometry, and word problems. An on-screen basic calculator is provided.',
  review: [
    {
      id: 'algebra',
      title: 'Algebra Essentials',
      html: `
        <ul>
          <li><strong>FOIL:</strong> (a + b)(c + d) = ac + ad + bc + bd.</li>
          <li><strong>Quadratic formula:</strong> for ax² + bx + c = 0, <span class="formula" style="margin:0">x = (−b ± √(b² − 4ac)) / 2a</span>. The discriminant b² − 4ac tells you the number of real roots: &gt;0 gives two, =0 gives one, &lt;0 gives none.</li>
          <li><strong>Difference of squares:</strong> a² − b² = (a + b)(a − b).</li>
          <li><strong>Exponent rules:</strong> xᵃ·xᵇ = xᵃ⁺ᵇ, (xᵃ)ᵇ = xᵃᵇ, x⁻ᵃ = 1/xᵃ, x⁰ = 1.</li>
          <li>Solve systems by substitution or elimination — pick whichever isolates a variable fastest.</li>
        </ul>
      `
    },
    {
      id: 'percent',
      title: 'Percentages, Ratios & Rates',
      html: `
        <ul>
          <li><strong>Percent change</strong> = (new − old) ÷ old × 100%.</li>
          <li>A quantity increased by x% then decreased by x% does <em>not</em> return to the original — the base changed.</li>
          <li><strong>Rate problems:</strong> distance = rate × time. For combined work, add rates (not times): if one worker does a job in 3 h and another in 6 h, together their rate is 1/3 + 1/6 = 1/2 job/h → 2 hours.</li>
          <li>Ratios scale: if a : b = 2 : 3 and a = 10, then b = 15.</li>
        </ul>
        <div class="callout"><strong>Speed with the on-screen calculator:</strong> it only does basic arithmetic, so set up the expression cleanly before punching numbers. Estimate to catch data-entry errors.</div>
      `
    },
    {
      id: 'stats',
      title: 'Statistics & Probability',
      html: `
        <h3>Central tendency & spread</h3>
        <ul>
          <li><strong>Mean</strong> = sum ÷ count. <strong>Median</strong> = middle value when ordered. <strong>Mode</strong> = most frequent value.</li>
          <li>The mean is sensitive to outliers; the median is not.</li>
          <li><strong>Standard deviation</strong> measures spread — a larger SD means data are more dispersed from the mean.</li>
        </ul>
        <h3>Probability</h3>
        <ul>
          <li>P(event) = favorable outcomes ÷ total outcomes.</li>
          <li><strong>Independent AND:</strong> P(A and B) = P(A) × P(B).</li>
          <li><strong>OR (mutually exclusive):</strong> P(A or B) = P(A) + P(B). If not mutually exclusive, subtract P(A and B).</li>
          <li>Complement: P(not A) = 1 − P(A).</li>
        </ul>
        <h3>Counting</h3>
        <div class="formula">Permutations (order matters): P(n,r) = n!/(n−r)!</div>
        <div class="formula">Combinations (order doesn't): C(n,r) = n!/(r!(n−r)!)</div>
      `
    },
    {
      id: 'geometry',
      title: 'Geometry',
      html: `
        <h3>Area & perimeter</h3>
        <ul>
          <li>Circle: area = πr², circumference = 2πr.</li>
          <li>Triangle: area = ½ · base · height.</li>
          <li>Rectangle: area = length · width.</li>
        </ul>
        <h3>Triangles</h3>
        <ul>
          <li><strong>Pythagorean theorem:</strong> a² + b² = c² for right triangles.</li>
          <li>Common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17 (and multiples).</li>
          <li>Special right triangles: 45-45-90 has sides 1 : 1 : √2; 30-60-90 has sides 1 : √3 : 2.</li>
          <li>Interior angles of any triangle sum to 180°; a polygon with n sides sums to (n − 2)·180°.</li>
        </ul>
        <h3>Solids</h3>
        <ul>
          <li>Volume of a cylinder = πr²h; sphere = (4/3)πr³; rectangular box = lwh.</li>
        </ul>
      `
    },
    {
      id: 'wordproblems',
      title: 'Word Problem Strategy',
      html: `
        <ul>
          <li>Translate words to equations: "of" → multiply, "is" → equals, "per" → divide, "more than" → add.</li>
          <li>Define your variable explicitly before writing the equation — most errors are setup errors, not arithmetic.</li>
          <li>For mixture and interest problems, track the <em>quantity of the thing</em> (salt, money) separately from the total.</li>
          <li><strong>Time management:</strong> with ~68 seconds per question, skip and flag anything that stalls you. There is no guessing penalty, so never leave a blank.</li>
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
    { id:'qr16', topic:'Word Problems', stem:'A number increased by 30% equals 91. What is the original number?', options:['61','63','70','118.3'], answer:2, explanation:'Let the number be x. Then 1.3x = 91, so x = 91 ÷ 1.3 = 70.' }
  ]
};
