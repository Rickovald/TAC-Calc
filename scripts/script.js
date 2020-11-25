let desired_gates = [0,0,0,0,0,0,0],
valid_gates = [0,0,0,0,0,0,0],
allGates = document.querySelectorAll('.gate_img'),
allGatesStars = document.querySelectorAll('.gate_stars'),
allGateDecrementButtons = document.querySelectorAll('.gate_decrement'),
starSetFlag = 1;


function gateArrayChange (gateName, gateArrayPozition){
	if (gateName == 'envy' && desired_gates[0] > 0){
			desired_gates[0]--;
		}

}

function parametersForGateStarSet (changeFrom, changeTo, gatesArrayNum) {
	if (starSetFlag && allGatesStars[gatesArrayNum].classList.contains(changeFrom)){
		allGatesStars[gatesArrayNum].classList.remove(changeFrom);
		allGatesStars[gatesArrayNum].classList.add(changeTo);
		starSetFlag = 0;
	}
}

function gateStarsSet (gatesArrayNum, isIncrement){
	if (isIncrement) {
		parametersForGateStarSet ('not_opened', 'zero_stars', gatesArrayNum);
		parametersForGateStarSet ('zero_stars', 'one_star', gatesArrayNum);
		parametersForGateStarSet ('one_star', 'two_stars', gatesArrayNum);
		parametersForGateStarSet ('two_stars', 'three_stars', gatesArrayNum);
		parametersForGateStarSet ('three_stars', 'four_stars', gatesArrayNum);
		parametersForGateStarSet ('four_stars', 'five_stars', gatesArrayNum);
		parametersForGateStarSet ('zero_stars', 'one_star', gatesArrayNum);
	} 
	else {
		parametersForGateStarSet ('five_stars', 'four_stars', gatesArrayNum);
		parametersForGateStarSet ('four_stars', 'three_stars', gatesArrayNum);
		parametersForGateStarSet ('three_stars', 'two_stars', gatesArrayNum);
		parametersForGateStarSet ('two_stars', 'one_star', gatesArrayNum);
		parametersForGateStarSet ('one_star', 'zero_stars', gatesArrayNum);
		parametersForGateStarSet ('zero_stars', 'not_opened', gatesArrayNum);
		parametersForGateStarSet ('zero_stars', 'one_star', gatesArrayNum);
	}
};
function gate_increment(gateName,isDesired,gatesArrayNum){
	if (allGates[gatesArrayNum].classList.contains ('inactive')) {
		allGates[gatesArrayNum].classList.remove ('inactive');
		allGates[gatesArrayNum].classList.add ('active');
		allGateDecrementButtons[gatesArrayNum].classList.remove ('disabled');
	};
	gateStarsSet(gatesArrayNum, 1);
	starSetFlag = 1;
	if (isDesired == 'true'){
		if (gateName == 'envy' && desired_gates[0] < 6){
			desired_gates[0]++;
		}
	}

}

function gate_decrement(gateName,isDesired,gatesArrayNum){
	if (allGates[gatesArrayNum].classList.contains ('active') && allGatesStars[gatesArrayNum].classList.contains('zero_stars')) {
		allGates[gatesArrayNum].classList.remove ('active');
		allGates[gatesArrayNum].classList.add ('inactive');
		allGateDecrementButtons[gatesArrayNum].classList.add ('disabled');
	};
	gateStarsSet(gatesArrayNum, 0);
	starSetFlag = 1;
	desired_gates
	if (isDesired == 'true'){
		if (gateName == 'envy' && desired_gates[0] > 0){
			desired_gates[0]--;
		}
	}
}

// 3