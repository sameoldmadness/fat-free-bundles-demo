export function square(x) {
	return x * x;
}

square.root = function (x) {
	return Math.sqrt(x);
}

export function cube(x) {
	return x * x * x;
}

cube.root = function(x) {
	var y = Math.pow(Math.abs(x), 1/3);
	return x < 0 ? -y : y;
};
