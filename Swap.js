var swap = function(array, firstIndex, secondIndex) {
    var save = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = save;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

swap(testArray, 1, 2);
println(testArray);
Program.assertEqual(testArray, [9, 4, 7]);

swap(testArray, 2, 0);
println(testArray);
Program.assertEqual(testArray, [7, 4, 9]);
