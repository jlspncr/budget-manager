import { TextRotationAngledown } from "@material-ui/icons";

export const controlPanel = [
	{
		resDisplay: {},
		option: ["Option #1", "Option #2", "Option #3"],
		optVal: "Option #1",
		text: "Hello There",
		checkbox: false,
		slideSet: 1,
	},
];

export const accounts = [
		{
		Name: "Account1",
		
		Categories: {
			Debts: 40,
			Dining: 470,
			Housing: 0,
			Recreation: 2,
			// get Balance(){return this.Debts + this.Dining + this.Housing},
		},
		get Balance(){
			var total = 0
			for (var x in this.Categories){
				total += this.Categories[x];
			}
			// return this.Categories.Debts + this.Categories.Dining + this.Categories.Housing
			return total;
		},
	},
	{
		Name: "Account2",

		Categories: {
			Debts: 10000,
			Dining: 0,
			Housing: 12,
		},
		get Balance(){
			var total = 0
			for (var x in this.Categories){
				total += this.Categories[x];
			}
			// return this.Categories.Debts + this.Categories.Dining + this.Categories.Housing
			return total;
		},
	},
];
