// Function to generate gear trains with given input parameters
// Arguments:
// - Ratio: the desired gear ratio
// - Nmin: minimum number of teeth for the pinion gears
// - Nmax: maximum number of teeth for the pinion gears
// - eps1: tolerance for the gear ratio
// - reverted_train: flag to indicate whether reverted gear trains are allowed
// Returns:
// - Object with arrays of gear train parameters that satisfy the requirements
// - N2: number of teeth for the first pinion gear
// - N3: number of teeth for the first intermediate gear
// - N4: number of teeth for the second pinion gear
// - N5: number of teeth for the second intermediate gear
// - ratio1: gear ratio for the first stage
// - ratio2: gear ratio for the second stage
// - ratio: overall gear ratio
// - error: difference between desired and actual gear ratio

export function generateGearTrains(Ratio, Nmin, Nmax, eps1, reverted_train) {
  // Initialize variables
  let eps = eps1; // the current error tolerance
  let counter = 0; // counter for number of iterations
  let N2 = [],
    N3 = [],
    N4 = [],
    N5 = [],
    ratio1 = [],
    ratio2 = [],
    ratio = [],
    error = []; // empty arrays for storing gear parameters
  let S; // number of gear trains found

  // Begin loop for generating gear trains
  while (true) {
    S = 0; // reset number of gear trains

    // Determine upper and lower bounds of gear ratio
    let R_high = Ratio + eps;
    let R_low = Ratio - eps;

    // Determine the highest possible gear teeth numbers
    let Nh3 = Math.floor(Math.pow(Nmax, 2) / R_high);
    let Nh4 = Math.floor(Nmax / Math.sqrt(R_high));

    // Nested loops for iterating through possible gear combinations
    for (let pinion1 = Nmin; pinion1 <= Nh4; pinion1++) {
      let Nhh = Math.min(Nmax, Math.floor(Nh3 / pinion1));
      for (let pinion2 = pinion1; pinion2 <= Nhh; pinion2++) {
        // Calculate the required number of teeth for each gear in the train
        let Q = Math.floor(pinion1 * pinion2 * R_low) + 1;
        let P = Math.floor(pinion1 * pinion2 * R_high);
        if (P < Q) continue;

        // Determine the range of possible gear teeth numbers for the output gear
        let Nm = Math.max(Nmin, Math.ceil(Q / Nmax));
        let Np = Math.floor(Math.sqrt(P));

        // Nested loops for iterating through possible gear combinations
        for (let K = Q; K <= P; K++) {
          for (let gear1 = Nm; gear1 <= Np; gear1++) {
            if (K % gear1 !== 0) continue;
            let gear2 = K / gear1;
            let err = Ratio - K / (pinion1 * pinion2);
            if (err > eps) continue;

            // Calculate gear parameters for found gear train
            let n2 = Math.round(pinion1);
            let n3 = Math.round(gear1 * pinion1);
            let n4 = Math.round(pinion2);
            let n5 = Math.round(gear2 * pinion2);

            // If reverted train is required, check that the sum of teeth numbers match
            if (reverted_train && n2 + n3 !== n4 + n5) continue;

            // Store gear parameters for found gear train
            N2[S] = n2;
            N4[S] = n4;
            N3[S] = n3;
            N5[S] = n5;
            error[S] = Math.abs(err).toFixed(7);
            ratio1[S] = Math.round((gear1 / pinion1) * 10000) / 10000;
            ratio2[S] = Math.round((gear2 / pinion2) * 10000) / 10000;
            ratio[S] = ratio1[S] * ratio2[S];
            S++;
          }
        }
      }
    }

    if (S > 0) {
      for (let i = 0; i < S; i++) {
        N3[i] = Math.round(N2[i] * ratio1[i]);
        N5[i] = Math.round(N4[i] * ratio2[i]);
      }
      return { N2, N3, N4, N5, ratio1, ratio2, ratio, error };
    }

    eps *= 2;
    counter++;
    if (counter > 10) {
      return null;
    }
  }
}
